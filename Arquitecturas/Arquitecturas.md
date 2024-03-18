## N-Tier/ Capas

La arquitectura N-Tier, también conocida como arquitectura de capas, es un estilo de arquitectura de software que se compone de múltiples capas o niveles, cada uno de los cuales se encarga de una funcionalidad específica.

### Características

-   **Separación de responsabilidades**: Cada capa tiene una responsabilidad específica y no se mezcla con las demás capas.
-   **Reutilización de código**: Las capas pueden ser reutilizadas en diferentes aplicaciones.
-   **Facilidad de mantenimiento**: Las capas son independientes y pueden ser modificadas sin afectar a las demás capas.
-   **Escalabilidad**: Las capas pueden ser escaladas de forma independiente.
-   **Seguridad**: Las capas pueden ser protegidas de forma independiente.
-   **Facilidad de desarrollo**: Las capas pueden ser desarrolladas de forma independiente.
-   **Facilidad de pruebas**: Las capas pueden ser probadas de forma independiente.

### Capas Comunes

1.  **Capa de Presentación**: También conocida como capa de interfaz de usuario, esta capa se encarga de presentar la información al usuario y de capturar las interacciones del usuario. Puede ser una interfaz de usuario web, una interfaz de usuario móvil, una interfaz de usuario de escritorio, etc.
2.  **Capa de Lógica de Negocio**: También conocida como capa de aplicación, esta capa se encarga de implementar la lógica de negocio de la aplicación. Puede incluir reglas de negocio, cálculos, validaciones, etc.
3.  **Capa de Acceso a Datos**: También conocida como capa de persistencia, esta capa se encarga de interactuar con la base de datos o cualquier otro mecanismo de almacenamiento de datos. Puede incluir operaciones de lectura, escritura, actualización y eliminación de datos.
4.  **Capa de Infraestructura**: También conocida como capa de servicios, esta capa se encarga de proporcionar servicios comunes a las demás capas, como servicios de autenticación, servicios de autorización, servicios de registro, servicios de configuración, etc.
5.  **Capa de Seguridad**: Esta capa se encarga de proteger la aplicación contra amenazas de seguridad, como ataques de denegación de servicio, ataques de inyección de código, ataques de secuencias de comandos entre sitios, etc.
6.  **Capa de Integración**: Esta capa se encarga de integrar la aplicación con otros sistemas, como sistemas de terceros, sistemas heredados, sistemas de socios, etc.
7.  **Capa de Presentación de Datos**: Esta capa se encarga de presentar los datos al usuario de forma visualmente atractiva, como gráficos, tablas, diagramas, etc.
8.  **Capa de Gestión de Sesiones**: Esta capa se encarga de gestionar las sesiones de usuario, como la autenticación, la autorización, el inicio de sesión, el cierre de sesión, etc.
9.  **Capa de Gestión de Transacciones**: Esta capa se encarga
10. **Capa de Gestión de Errores**: Esta capa se encarga de gestionar los errores que se producen en la aplicación, como errores de validación, errores de lógica de negocio, errores de acceso a datos, etc.

### Ejemplos

-   **Aplicación Web**: Una aplicación web puede tener una capa de presentación (interfaz de usuario web), una capa de lógica de negocio (lógica de aplicación), una capa de acceso a datos (base de datos), una capa de infraestructura (servicios comunes), una capa de seguridad (protección contra amenazas), una capa de integración (sistemas de terceros), una capa de presentación de datos (gráficos, tablas, diagramas), una capa de gestión de sesiones (autenticación, autorización, inicio de sesión, cierre de sesión), una

-   **Aplicación Móvil**: Una aplicación móvil puede tener una capa de presentación (interfaz de usuario móvil), una capa de lógica de negocio (lógica de aplicación), una capa de acceso a datos (base de datos), una capa de infraestructura (servicios comunes), una capa de seguridad (protección contra amenazas), una capa de integración (sistemas de terceros), una capa de presentación de datos (gráficos, tablas, diagramas), una capa de gestión de sesiones (autenticación, autorización, inicio de sesión, cierre de sesión), una
-   **Aplicación de Escritorio**: Una aplicación de escritorio puede tener una capa de presentación (interfaz de usuario de escritorio), una capa de lógica de negocio (lógica de aplicación), una capa de acceso a datos (base de datos), una capa de infraestructura (servicios comunes), una capa de seguridad (protección contra amenazas), una capa de integración (sistemas de terceros), una capa de presentación de datos (gráficos, tablas, diagramas), una capa de gestión de sesiones (autenticación, autorización, inicio de sesión, cierre de sesión), una

### Implementación usando Node.js y Express

Estructura de directorios y archivos:

```
app/
├── controllers/
│   ├── userController.js
│   ├── productController.js
│   └── ...
├── models/
│   ├── userModel.js
│   ├── productModel.js
│   └── ...
├── services/
│   ├── userService.js
│   ├── productService.js
│   └── ...
├── repositories/
│   ├── userRepository.js
│   ├── productRepository.js
│   └── ...
├── routes/
│   ├── userRoutes.js
│   ├── productRoutes.js
│   └── ...
└── app.js
```

Ejemplo de implementación de un controlador de usuario:

```javascript
// userController.js
const userService = require("../services/userService");
```
