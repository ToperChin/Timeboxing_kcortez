# 🕐 Daily Timeboxing Planner

Una aplicación web completa para planificar tu día usando la técnica de Timeboxing. Registra tareas en bloques de 30 minutos y realiza un seguimiento de tu productividad.

## 📋 Características

- ✅ Autenticación segura (Login/Register)
- 📅 Planificador diario por horas
- ✏️ Agregar, editar y eliminar tareas
- ✓ Marcar tareas como completadas
- 🔐 Protección de rutas autenticadas
- 💾 Persistencia de datos en base de datos SQLite

## 🚀 Instalación y Ejecución

### Backend (NestJS)

```bash
cd backend
npm install
npm run start:dev
```

El servidor backend estará disponible en: `http://localhost:3000`

### Frontend (React + Vite)

```bash
cd Toperxing
npm install
npm run dev
```

El frontend estará disponible en: `http://localhost:5173`

## 🔑 Credenciales de Prueba

Usa estas credenciales para acceder a la aplicación:

**Email:** `test@example.com`
**Contraseña:** `password123`

O crea tu propia cuenta registrándote en la página de registro.

## 📱 Uso de la Aplicación

1. **Inicio de Sesión**: Ingresa con tus credenciales
2. **Dashboard**: Verás un calendario con horas de 5 AM a 11 PM
3. **Agregar Tarea**: 
   - Escribe la descripción
   - Selecciona la hora
   - Click en "Agregar"
4. **Validar Tareas**: Marca las tareas completadas con el checkbox
5. **Eliminar Tareas**: Usa el botón ✕ para eliminar

## 🗂️ Estructura del Proyecto

```
TIMEBOXING/
├── backend/                 # NestJS API
│   ├── src/
│   │   ├── auth/           # Módulo de autenticación
│   │   ├── users/          # Módulo de usuarios
│   │   ├── timeboxing/     # Módulo de timeboxing
│   │   ├── entities/       # Modelos de datos
│   │   ├── guards/         # Guards de autenticación
│   │   └── main.ts
│   └── package.json
│
└── Toperxing/               # React + Vite Frontend
    ├── src/
    │   ├── pages/          # Páginas (Login, Register, Dashboard)
    │   ├── components/     # Componentes reutilizables
    │   ├── services/       # Servicios de API
    │   ├── styles/         # Archivos CSS
    │   └── App.jsx
    └── package.json
```

## 🛠️ Tecnologías Utilizadas

### Backend
- NestJS
- TypeORM
- SQLite
- JWT (JSON Web Tokens)
- Passport.js
- bcrypt

### Frontend
- React
- Vite
- React Router
- Axios
- CSS3

## 🔒 Seguridad

- Contraseñas hasheadas con bcrypt
- Tokens JWT para autenticación
- Guards de ruta protegidas
- Validación de entrada con class-validator
- CORS habilitado para desarrollo

## 📝 Tabla de Timeboxing

| Hora | :00 | :30 |
|------|-----|-----|
| 05   | [ ] | [ ] |
| 06   | [ ] | [ ] |
| ...  | ... | ... |
| 23   | [ ] | [ ] |

## 🐛 Solución de Problemas

### El frontend no se conecta al backend
- Asegúrate de que el backend esté corriendo en `http://localhost:3000`
- Verifica que CORS esté habilitado en el backend

### Base de datos no se crea automáticamente
- NestJS con TypeORM creará automáticamente la tabla `timeboxing.db`
- Verifica los permisos de escritura en la carpeta del backend

## 🎯 Próximas Mejoras

- [ ] Editar tareas existentes
- [ ] Importar/Exportar tareas
- [ ] Estadísticas de productividad
- [ ] Notificaciones
- [ ] Temas oscuros/claros
- [ ] Aplicación móvil

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

Creado con ❤️ para mejorar tu productividad diaria.
