# 📚 Documentación de API - Daily Timeboxing

## 🔐 Autenticación

Todos los endpoints excepto `/auth/register` y `/auth/login` requieren un token JWT en el header:

```
Authorization: Bearer <token>
```

---

## 📝 Endpoints de Autenticación

### POST `/auth/register`

Registra un nuevo usuario.

**Request:**
```json
{
  "email": "usuario@example.com",
  "password": "password123",
  "name": "Nombre del Usuario"
}
```

**Response (201):**
```json
{
  "id": "uuid",
  "email": "usuario@example.com",
  "name": "Nombre del Usuario",
  "createdAt": "2026-02-27T12:00:00Z"
}
```

**Errores:**
- `400 Bad Request`: Validación fallida
- `409 Conflict`: Email ya registrado

---

### POST `/auth/login`

Autentica un usuario y devuelve un token JWT.

**Request:**
```json
{
  "email": "test@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "uuid",
    "email": "test@example.com",
    "name": "Usuario de Prueba"
  }
}
```

**Errores:**
- `401 Unauthorized`: Credenciales inválidas
- `400 Bad Request`: Validación fallida

---

## 🕐 Endpoints de Timeboxing

### POST `/timeboxing`

Crea un nuevo timebox.

**Headers:**
```
Authorization: Bearer <token>
```

**Request:**
```json
{
  "date": "2026-02-27",
  "hour": 9,
  "minute": 0,
  "task": "Revisar emails"
}
```

**Response (201):**
```json
{
  "id": "uuid",
  "userId": "uuid",
  "date": "2026-02-27T00:00:00Z",
  "hour": 9,
  "minute": 0,
  "task": "Revisar emails",
  "completed": false,
  "createdAt": "2026-02-27T12:00:00Z",
  "updatedAt": "2026-02-27T12:00:00Z"
}
```

---

### GET `/timeboxing/date/:date`

Obtiene todos los timeboxes de una fecha específica.

**Parameters:**
- `date` (string): Formato YYYY-MM-DD

**Response (200):**
```json
[
  {
    "id": "uuid",
    "userId": "uuid",
    "date": "2026-02-27T00:00:00Z",
    "hour": 9,
    "minute": 0,
    "task": "Revisar emails",
    "completed": false,
    "createdAt": "2026-02-27T12:00:00Z",
    "updatedAt": "2026-02-27T12:00:00Z"
  }
]
```

---

### GET `/timeboxing`

Obtiene todos los timeboxes del usuario autenticado.

**Response (200):**
```json
[
  {
    "id": "uuid",
    "userId": "uuid",
    "date": "2026-02-27T00:00:00Z",
    "hour": 9,
    "minute": 0,
    "task": "Revisar emails",
    "completed": false,
    "createdAt": "2026-02-27T12:00:00Z",
    "updatedAt": "2026-02-27T12:00:00Z"
  }
]
```

---

### PUT `/timeboxing/:id`

Actualiza un timebox existente.

**Parameters:**
- `id` (string): UUID del timebox

**Request:**
```json
{
  "task": "Revisar emails actualizados",
  "completed": true,
  "hour": 10,
  "minute": 30
}
```

**Response (200):**
```json
{
  "id": "uuid",
  "userId": "uuid",
  "date": "2026-02-27T00:00:00Z",
  "hour": 10,
  "minute": 30,
  "task": "Revisar emails actualizados",
  "completed": true,
  "createdAt": "2026-02-27T12:00:00Z",
  "updatedAt": "2026-02-27T12:05:00Z"
}
```

---

### DELETE `/timeboxing/:id`

Elimina un timebox.

**Parameters:**
- `id` (string): UUID del timebox

**Response (200):**
```json
{
  "success": true
}
```

---

### PUT `/timeboxing/:id/toggle`

Alterna el estado de completado de un timebox.

**Parameters:**
- `id` (string): UUID del timebox

**Response (200):**
```json
{
  "id": "uuid",
  "userId": "uuid",
  "date": "2026-02-27T00:00:00Z",
  "hour": 9,
  "minute": 0,
  "task": "Revisar emails",
  "completed": true,
  "createdAt": "2026-02-27T12:00:00Z",
  "updatedAt": "2026-02-27T12:10:00Z"
}
```

---

## 🔒 Códigos de Error

| Código | Descripción |
|--------|------------|
| `200` | OK - Solicitud exitosa |
| `201` | Created - Recurso creado |
| `400` | Bad Request - Validación fallida |
| `401` | Unauthorized - Token inválido o no autenticado |
| `404` | Not Found - Recurso no encontrado |
| `409` | Conflict - Recurso duplicado (email existe) |
| `500` | Internal Server Error - Error del servidor |

---

## 🧪 Ejemplos cURL

### Registrarse
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "nuevo@example.com",
    "password": "password123",
    "name": "Nuevo Usuario"
  }'
```

### Iniciar Sesión
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Crear Timebox
```bash
curl -X POST http://localhost:3000/timeboxing \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "date": "2026-02-27",
    "hour": 9,
    "minute": 0,
    "task": "Trabajar en proyecto"
  }'
```

### Obtener Timeboxes del Día
```bash
curl -X GET "http://localhost:3000/timeboxing/date/2026-02-27" \
  -H "Authorization: Bearer <token>"
```

### Completar un Timebox
```bash
curl -X PUT "http://localhost:3000/timeboxing/<id>/toggle" \
  -H "Authorization: Bearer <token>"
```

### Eliminar Timebox
```bash
curl -X DELETE "http://localhost:3000/timeboxing/<id>" \
  -H "Authorization: Bearer <token>"
```

---

## 📊 Validaciones

### RegisterDto
- `email`: Debe ser un email válido
- `password`: Mínimo 6 caracteres
- `name`: Mínimo 2 caracteres

### LoginDto
- `email`: Debe ser un email válido
- `password`: Mínimo 6 caracteres

### CreateTimeboxDto
- `date`: Formato YYYY-MM-DD
- `hour`: 0-23
- `minute`: 0 o 30
- `task`: Opcional

### UpdateTimeboxDto
- Todos los campos son opcionales
- `task`: String
- `completed`: Boolean
- `hour`: 0-23
- `minute`: 0 o 30

---

## 🔄 Flujo de Autenticación

1. **Registro**: POST `/auth/register` con email, password, name
2. **Login**: POST `/auth/login` con email y password
3. **Obtener Token**: El servidor devuelve `access_token`
4. **Usar Token**: Incluir en header `Authorization: Bearer <token>`
5. **Validación**: El servidor valida el token en cada solicitud

---

## ⏱️ Información del Token JWT

El token JWT contiene:
- `sub`: ID del usuario
- `email`: Email del usuario
- `name`: Nombre del usuario
- `iat`: Tiempo de emisión
- `exp`: Tiempo de expiración (24 horas)

---

## 📝 Notas Importantes

1. **Seguridad**: En producción, cambiar `secret` en `auth.module.ts` por una clave segura
2. **CORS**: Configurado para `http://localhost:5173`
3. **Base de Datos**: SQLite - archivo `timeboxing.db` en la carpeta backend
4. **Timezone**: Las fechas se almacenan en UTC

---

Para más información, consulta el README.md en la raíz del proyecto.
