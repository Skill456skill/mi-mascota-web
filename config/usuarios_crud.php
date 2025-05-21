<?php
// Incluir archivo de configuración de la base de datos
require_once 'db_config.php';

// Configurar cabeceras para respuestas JSON
header('Content-Type: application/json');

// Función para sanitizar entradas
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Manejar solicitudes GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Leer todos los usuarios
    if (isset($_GET['action']) && $_GET['action'] === 'read') {
        $sql = "SELECT * FROM usuarios ORDER BY id DESC";
        $result = mysqli_query($conn, $sql);
        
        if ($result) {
            $users = [];
            while ($row = mysqli_fetch_assoc($result)) {
                // No incluir la contraseña en la respuesta
                unset($row['password']);
                $users[] = $row;
            }
            
            echo json_encode([
                'success' => true,
                'users' => $users
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Error al obtener usuarios: ' . mysqli_error($conn)
            ]);
        }
    }
    
    // Obtener un usuario específico
    if (isset($_GET['action']) && $_GET['action'] === 'get' && isset($_GET['id'])) {
        $id = sanitize_input($_GET['id']);
        
        $sql = "SELECT * FROM usuarios WHERE id = ?";
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "i", $id);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        
        if ($result && $row = mysqli_fetch_assoc($result)) {
            // No incluir la contraseña en la respuesta
            unset($row['password']);
            
            echo json_encode([
                'success' => true,
                'user' => $row
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Usuario no encontrado'
            ]);
        }
    }
}

// Manejar solicitudes POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Crear un nuevo usuario
    if (isset($_POST['action']) && $_POST['action'] === 'create') {
        $nombre = sanitize_input($_POST['nombre']);
        $email = sanitize_input($_POST['email']);
        $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Encriptar contraseña
        $rol = sanitize_input($_POST['rol']);
        $cargo = isset($_POST['cargo']) ? sanitize_input($_POST['cargo']) : '';
        
        // Verificar si el email ya existe
        $check_sql = "SELECT id FROM usuarios WHERE email = ?";
        $check_stmt = mysqli_prepare($conn, $check_sql);
        mysqli_stmt_bind_param($check_stmt, "s", $email);
        mysqli_stmt_execute($check_stmt);
        mysqli_stmt_store_result($check_stmt);
        
        if (mysqli_stmt_num_rows($check_stmt) > 0) {
            echo json_encode([
                'success' => false,
                'message' => 'El email ya está registrado'
            ]);
            exit;
        }
        
        // Insertar nuevo usuario
        $sql = "INSERT INTO usuarios (nombre, email, password, rol, cargo) VALUES (?, ?, ?, ?, ?)";
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "sssss", $nombre, $email, $password, $rol, $cargo);
        
        if (mysqli_stmt_execute($stmt)) {
            echo json_encode([
                'success' => true,
                'message' => 'Usuario creado correctamente',
                'id' => mysqli_insert_id($conn)
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Error al crear usuario: ' . mysqli_error($conn)
            ]);
        }
    }
    
    // Actualizar un usuario existente
    if (isset($_POST['action']) && $_POST['action'] === 'update') {
        $id = sanitize_input($_POST['id']);
        $nombre = sanitize_input($_POST['nombre']);
        $email = sanitize_input($_POST['email']);
        $rol = sanitize_input($_POST['rol']);
        $cargo = isset($_POST['cargo']) ? sanitize_input($_POST['cargo']) : '';
        
        // Verificar si el email ya existe para otro usuario
        $check_sql = "SELECT id FROM usuarios WHERE email = ? AND id != ?";
        $check_stmt = mysqli_prepare($conn, $check_sql);
        mysqli_stmt_bind_param($check_stmt, "si", $email, $id);
        mysqli_stmt_execute($check_stmt);
        mysqli_stmt_store_result($check_stmt);
        
        if (mysqli_stmt_num_rows($check_stmt) > 0) {
            echo json_encode([
                'success' => false,
                'message' => 'El email ya está registrado por otro usuario'
            ]);
            exit;
        }
        
        // Si se proporciona una nueva contraseña, actualizarla
        if (!empty($_POST['password'])) {
            $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
            
            $sql = "UPDATE usuarios SET nombre = ?, email = ?, password = ?, rol = ?, cargo = ? WHERE id = ?";
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, "sssssi", $nombre, $email, $password, $rol, $cargo, $id);
        } else {
            // Si no se proporciona contraseña, no actualizarla
            $sql = "UPDATE usuarios SET nombre = ?, email = ?, rol = ?, cargo = ? WHERE id = ?";
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, "ssssi", $nombre, $email, $rol, $cargo, $id);
        }
        
        if (mysqli_stmt_execute($stmt)) {
            echo json_encode([
                'success' => true,
                'message' => 'Usuario actualizado correctamente'
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Error al actualizar usuario: ' . mysqli_error($conn)
            ]);
        }
    }
    
    // Eliminar un usuario
    if (isset($_POST['action']) && $_POST['action'] === 'delete') {
        $id = sanitize_input($_POST['id']);
        
        $sql = "DELETE FROM usuarios WHERE id = ?";
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "i", $id);
        
        if (mysqli_stmt_execute($stmt)) {
            echo json_encode([
                'success' => true,
                'message' => 'Usuario eliminado correctamente'
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Error al eliminar usuario: ' . mysqli_error($conn)
            ]);
        }
    }
}

// Cerrar la conexión a la base de datos
mysqli_close($conn);
?>