<?php
// Incluir archivo de configuración
require_once "db_config.php";

// Procesar datos del formulario cuando se envía
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Obtener y sanitizar los datos del formulario
    $username = trim(mysqli_real_escape_string($conn, $_POST['username']));
    $password = trim($_POST['password']);
    
    // Validar que los campos no estén vacíos
    if (empty($username) || empty($password)) {
        echo json_encode(["success" => false, "message" => "Por favor complete todos los campos."]);
        exit;
    }
    
    // Verificar si el usuario existe
    $sql = "SELECT id, nombre, email, password, rol, cargo FROM usuarios WHERE nombre = ? OR email = ?";
    
    if ($stmt = mysqli_prepare($conn, $sql)) {
        // Vincular parámetros
        mysqli_stmt_bind_param($stmt, "ss", $username, $username);
        
        // Ejecutar la consulta
        if (mysqli_stmt_execute($stmt)) {
            // Almacenar resultado
            mysqli_stmt_store_result($stmt);
            
            // Verificar si el usuario existe
            if (mysqli_stmt_num_rows($stmt) == 1) {
                // Vincular variables de resultado
                mysqli_stmt_bind_result($stmt, $id, $nombre, $email, $hashed_password, $rol, $cargo);
                
                if (mysqli_stmt_fetch($stmt)) {
                    // Verificar la contraseña
                    // Primero intentamos con password_verify (para contraseñas hasheadas con password_hash)
                    if (password_verify($password, $hashed_password)) {
                        // Contraseña correcta
                        verificacionExitosa($id, $nombre, $email, $rol, $cargo);
                    } 
                    // Si no funciona, verificamos si la contraseña está almacenada en texto plano
                    else if ($password === $hashed_password) {
                        // Contraseña correcta (almacenada en texto plano)
                        verificacionExitosa($id, $nombre, $email, $rol, $cargo);
                    }
                    // Si no funciona, verificamos si la contraseña está hasheada con MD5
                    else if (md5($password) === $hashed_password) {
                        // Contraseña correcta (hasheada con MD5)
                        verificacionExitosa($id, $nombre, $email, $rol, $cargo);
                    }
                    else {
                        // Contraseña incorrecta
                        echo json_encode(["success" => false, "message" => "La contraseña ingresada no es válida."]);
                    }
                }
            } else {
                // El usuario no existe
                echo json_encode([
                    "success" => false, 
                    "message" => "No se encontró ninguna cuenta con ese nombre de usuario o correo electrónico.",
                    "userExists" => false
                ]);
            }
        } else {
            echo json_encode(["success" => false, "message" => "Ocurrió un error. Por favor, inténtelo de nuevo más tarde."]);
        }
        
        // Cerrar declaración
        mysqli_stmt_close($stmt);
    }
    
    // Cerrar conexión
    mysqli_close($conn);
}

// Función para manejar la verificación exitosa
function verificacionExitosa($id, $nombre, $email, $rol, $cargo) {
    // Iniciar sesión
    session_start();
    
    // Almacenar datos en variables de sesión
    $_SESSION["loggedin"] = true;
    $_SESSION["id"] = $id;
    $_SESSION["nombre"] = $nombre;
    $_SESSION["email"] = $email;
    $_SESSION["rol"] = $rol;
    $_SESSION["cargo"] = $cargo;
    
    // Respuesta exitosa
    echo json_encode([
        "success" => true, 
        "message" => "Inicio de sesión exitoso. ¡Bienvenido, $nombre!",
        "userData" => [
            "id" => $id,
            "nombre" => $nombre,
            "email" => $email,
            "rol" => $rol,
            "cargo" => $cargo
        ]
    ]);
}
?>