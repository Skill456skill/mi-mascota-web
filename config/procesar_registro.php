<?php
// Incluir archivo de configuración
require_once "db_config.php";

// Procesar datos del formulario cuando se envía
if($_SERVER["REQUEST_METHOD"] == "POST"){
    
    // Validar y sanitizar los datos del usuario
    $nombre = trim(mysqli_real_escape_string($conn, $_POST['nombre']));
    $email = trim(mysqli_real_escape_string($conn, $_POST['email']));
    $password = trim($_POST['password']);
    
    // Validar y sanitizar los datos de la mascota
    $tipoMascota = trim(mysqli_real_escape_string($conn, $_POST['tipoMascota']));
    $nombreMascota = trim(mysqli_real_escape_string($conn, $_POST['nombreMascota']));
    $razaMascota = trim(mysqli_real_escape_string($conn, $_POST['razaMascota']));
    $edadMascota = !empty($_POST['edadMascota']) ? intval($_POST['edadMascota']) : NULL;
    $pesoMascota = !empty($_POST['pesoMascota']) ? floatval($_POST['pesoMascota']) : NULL;
    $generoMascota = trim(mysqli_real_escape_string($conn, $_POST['generoMascota']));
    
    // Validar que los campos obligatorios no estén vacíos
    if(empty($nombre) || empty($email) || empty($password) || 
       empty($tipoMascota) || empty($nombreMascota) || empty($razaMascota) || empty($generoMascota)){
        echo json_encode(["success" => false, "message" => "Por favor complete todos los campos obligatorios."]);
        exit;
    }
    
    // Validar formato de email
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        echo json_encode(["success" => false, "message" => "Formato de email inválido."]);
        exit;
    }
    
    // Validar que el género sea 'macho' o 'hembra'
    if($generoMascota !== 'macho' && $generoMascota !== 'hembra'){
        echo json_encode(["success" => false, "message" => "El género de la mascota debe ser 'macho' o 'hembra'."]);
        exit;
    }
    
    // Verificar si el email ya existe
    $sql = "SELECT id FROM usuarios WHERE email = ?";
    if($stmt = mysqli_prepare($conn, $sql)){
        mysqli_stmt_bind_param($stmt, "s", $email);
        
        if(mysqli_stmt_execute($stmt)){
            mysqli_stmt_store_result($stmt);
            
            if(mysqli_stmt_num_rows($stmt) > 0){
                echo json_encode(["success" => false, "message" => "Este email ya está registrado."]);
                exit;
            }
        } else {
            echo json_encode(["success" => false, "message" => "Ocurrió un error. Por favor, inténtelo de nuevo más tarde."]);
            exit;
        }
        
        mysqli_stmt_close($stmt);
    }
    
    // Iniciar transacción
    mysqli_begin_transaction($conn);
    
    try {
        // Preparar la consulta para insertar usuario con rol 'regular'
        $sql = "INSERT INTO usuarios (nombre, email, password, rol) VALUES (?, ?, ?, 'regular')";
        
        if($stmt = mysqli_prepare($conn, $sql)){
            // Hashear la contraseña
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);
            
            // Vincular parámetros
            mysqli_stmt_bind_param($stmt, "sss", $nombre, $email, $hashed_password);
            
            // Ejecutar la consulta
            if(mysqli_stmt_execute($stmt)){
                $id_usuario = mysqli_insert_id($conn);
                
                // Preparar la consulta para insertar mascota
                $sql = "INSERT INTO mascotas (id_usuario, nombre, tipo, raza, edad, peso, genero) VALUES (?, ?, ?, ?, ?, ?, ?)";
                
                if($stmt_mascota = mysqli_prepare($conn, $sql)){
                    // Vincular parámetros
                    mysqli_stmt_bind_param($stmt_mascota, "isssiss", $id_usuario, $nombreMascota, $tipoMascota, $razaMascota, $edadMascota, $pesoMascota, $generoMascota);
                    
                    // Ejecutar la consulta
                    if(mysqli_stmt_execute($stmt_mascota)){
                        // Confirmar transacción
                        mysqli_commit($conn);
                        echo json_encode(["success" => true, "message" => "Registro exitoso. ¡Bienvenido a Mi Mascota y Yo!"]);
                    } else {
                        // Revertir transacción
                        mysqli_rollback($conn);
                        error_log("Error SQL: " . mysqli_stmt_error($stmt_mascota));
                        echo json_encode(["success" => false, "message" => "Error al registrar la mascota: " . mysqli_error($conn) . " - " . mysqli_stmt_error($stmt_mascota)]);
                    }
                    
                    mysqli_stmt_close($stmt_mascota);
                }
            } else {
                // Revertir transacción
                mysqli_rollback($conn);
                echo json_encode(["success" => false, "message" => "Error al registrar el usuario: " . mysqli_error($conn)]);
            }
            
            mysqli_stmt_close($stmt);
        }
    } catch (Exception $e) {
        // Revertir transacción en caso de error
        mysqli_rollback($conn);
        echo json_encode(["success" => false, "message" => "Error en el servidor: " . $e->getMessage()]);
    }
    
    // Cerrar conexión
    mysqli_close($conn);
}
?>