## :rocket: Mercado Libre Challenge: Aplicación con React.js, Redux Toolkit Query, Sass, Vite

- [React.js](https://reactjs.org/): Librería para construir interfaces de usuario.
- [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview): Biblioteca para manejar el estado y las solicitudes de API en React.js.
- [Saas](https://sass-lang.com/): preprocesador de CSS con funciones avanzadas.

### :bulb: Prerrequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes elementos:

- Node.js: Asegúrate de tener instalada la última versión estable de [Node.js](https://nodejs.org/).

### :gear: Configuración inicial del proyecto

Sigue estos pasos para configurar y ejecutar el proyecto:

1. Clona este repositorio en tu máquina local.
2. Abre una terminal en el directorio raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:
   ```shell
   npm install
   ```
4. Una vez que todas las dependencias estén instaladas, puedes iniciar la aplicación con el siguiente comando:
   ```shell
    npm run dev
   ```
   Esto iniciará la aplicación en el entorno de desarrollo y podrás acceder a ella en http://localhost:5173.

### :file_folder: Estructura de directorios

El proyecto sigue la siguiente estructura de directorios:

```shell
├── public       # Archivos estáticos y de configuración
└── src
 ├── app         # services, configuración y funciones de la API utilizando Redux Toolkit Query
 ├── assets      # icons imgs
 ├── common      # types globals o constantes
 ├── components  # Componentes reutilizables de React.js
 ├── context     # Contextos globales
 ├── pages       # Páginas principales de la aplicación
 ├── routes      # Sistema de routas
 ├── styles      # Configuracion de stilos gloables
 └── utils       # Utilidades y funciones auxiliares
```

### :hammer_and_wrench: Comandos útiles

Aquí tienes algunos comandos útiles para el desarrollo diario en este proyecto:

`npm start`: Inicia la aplicación en modo de desarrollo.
`npm build`: Genera una versión optimizada de la aplicación para producción.
