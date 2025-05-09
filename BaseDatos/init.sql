-- Crear tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    edad INTEGER
);

-- Insertar registros de ejemplo
INSERT INTO usuarios (nombre, email, edad) VALUES 
('Ana Gómez', 'ana@gmail.com', 25),
('Luis Pérez', 'luisperez@gmail.com', 30),
('Carla Ruiz', 'carla@correo.com', 22),
('Marco Díaz', 'marco@gmail.com', 28),
('Laura Torres', 'laura@gmail.com', 26);
