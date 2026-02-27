# 🚀 Guía de Inicio Rápido - Daily Timeboxing Planner

## ✅ Estado de la Instalación

La aplicación ha sido completamente configurada y lista para usar. El usuario de prueba ha sido creado exitosamente.

## 🎯 Credentials de Prueba

```
Email: test@example.com
Contraseña: password123
```

## 📍 Pasos para Iniciar la Aplicación

### 1️⃣ Terminal 1 - Iniciar Backend (NestJS)

```bash
cd backend
npm run start:dev
```

**Esperado:** Verás un mensaje como:
```
[Nest] XXXX - ... LOG [NestFactory] Starting Nest application...
Application running on http://localhost:3000
```

### 2️⃣ Terminal 2 - Iniciar Frontend (React + Vite)

```bash
cd Toperxing
npm run dev
```

**Esperado:** Verás un mensaje como:
```
  ➜  Local:   http://localhost:5173/
```

### 3️⃣ Acceder a la Aplicación

Abre tu navegador en: **http://localhost:5173**

## 🔑 Iniciando Sesión

1. Se abrirá automaticamente la página de **Login**
2. Ingresa las credenciales de prueba:
   - **Email:** `test@example.com`
   - **Contraseña:** `password123`
3. Click en **"Iniciar Sesión"**

## 📋 Usando la Aplicación

### Dashboard Principal

1. **Seleccionar Fecha:** Elige una fecha del calendario
2. **Agregar Tareas:**
   - Escribe la descripción de la tarea
   - Selecciona la hora (ej: 09:00)
   - Click en **"Agregar"**

3. **Marcar Completadas:**
   - Click en el checkbox para marcar una tarea como completada
   - El color cambiará a verde

4. **Eliminar Tareas:**
   - Click en el botón **✕** para eliminar una tarea

### Crear Nueva Cuenta

Si quieres crear tu propia cuenta:
1. Click en **"Registrate aquí"** en la página de login
2. Completa el formulario con:
   - Nombre
   - Email
   - Contraseña (mínimo 6 caracteres)
3. Click en **"Registrarse"**
4. Serás redirigido automáticamente al dashboard

## 🎨 Características Principales

✅ **Autenticación Segura:** Login y registro con contraseñas encriptadas
✅ **Planificador Horario:** De 5 AM a 11 PM en bloques de 30 minutos
✅ **Gestión de Tareas:** Agregar, editar, eliminar y completar tareas
✅ **Persistencia de Datos:** Todos los datos se guardan en SQLite
✅ **Interfaz Moderna:** Diseño responsivo y atractivo
✅ **Protección de Rutas:** Solo usuarios autenticados pueden acceder

## 📱 URLs Importantes

| Elemento | URL |
|----------|-----|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:3000 |
| Base de Datos | `backend/timeboxing.db` (SQLite) |

## 🛠️ Comandos Útiles

### Backend

```bash
# Desarrollo
npm run start:dev

# Producción
npm run build
npm run start:prod

# Crear usuario de prueba (si es necesario)
npm run seed

# Tests
npm run test
```

### Frontend

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview de build
npm run preview

# Linting
npm run lint
```

## 🐛 Solución de Problemas

### "No puedo conectarme al backend"
- ✅ Asegúrate de que el backend esté corriendo en terminal 1
- ✅ Verifica que el puerto 3000 esté disponible
- ✅ Revisa en la consola del navegador si hay errores de CORS

### "Base de datos no se crea"
- ✅ TypeORM la crea automáticamente cuando inicia
- ✅ Verifica permisos de escritura en la carpeta `backend/`

### "Error al iniciar sesión"
- ✅ Verifica que escribas exactamente: `test@example.com`
- ✅ Contraseña: `password123`
- ✅ El backend debe estar corriendo

## 📊 Estructura de Datos

### Usuarios
```
{
  id: UUID,
  email: string,
  password: string (hasheada),
  name: string,
  createdAt: date
}
```

### Timeboxes
```
{
  id: UUID,
  userId: UUID,
  date: date,
  hour: number (0-23),
  minute: number (0, 30),
  task: string,
  completed: boolean,
  createdAt: date,
  updatedAt: date
}
```

## 🎓 Próximos Pasos

- [ ] Crear más usuarios de prueba
- [ ] Agregar tareas a diferentes fechas
- [ ] Marcar tareas como completadas
- [ ] Explorar la interfaz

## 📞 Soporte

Si tienes problemas:
1. Revisa que ambas terminales (frontend y backend) estén corriendo
2. Verifica que los puertos 3000 y 5173 estén disponibles
3. Limpia el caché del navegador (Ctrl + Shift + Delete)
4. Reinicia ambos servidores

---

¡Listo para usar tu Daily Timeboxing Planner! 🎉

Créditos: Desarrollado con React, NestJS y TypeORM para maximizar tu productividad.
