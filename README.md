```markdown
# J&N Moda - Frontend

Este es el proyecto frontend para J&N Moda, una tienda en línea de moda. Esta aplicación ha sido desarrollada con React y Vite.

## Requisitos

- Node.js (>=14.x.x)
- npm (>=6.x.x) o yarn (>=1.x.x)

## Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/jhonvalladolid/TiendaEcomerce-Frontend-Lab14.git
   ```

2. **Navegar al directorio del proyecto**

   ```bash
   cd TiendaEcomerce-Frontend-Lab14
   ```

3. **Instalar dependencias**

   Con npm:

   ```bash
   npm install
   ```

   O con yarn:

   ```bash
   yarn install
   ```

## Ejecutar la aplicación en desarrollo

Para iniciar la aplicación en modo de desarrollo, usa el siguiente comando:

Con npm:

```bash
npm run dev
```

O con yarn:

```bash
yarn dev
```

Esto abrirá la aplicación en `http://localhost:5173/`.

## Compilar para producción

Para compilar la aplicación para producción, usa el siguiente comando:

Con npm:

```bash
npm run build
```

O con yarn:

```bash
yarn build
```

Los archivos compilados se almacenarán en el directorio `dist`.

## Estructura del Proyecto

- `src/` - Contiene el código fuente de la aplicación.
  - `components/` - Componentes reutilizables de React.
  - `assets/` - Imágenes y archivos estáticos.
  - `apis/` - Archivos relacionados con la comunicación con la API.
  - `App.jsx` - Componente principal de la aplicación.
  - `main.jsx` - Punto de entrada de la aplicación.

## Configuración del Backend

Este proyecto frontend está diseñado para funcionar con un backend específico. Asegúrate de configurar y ejecutar el backend correspondiente antes de utilizar este frontend.

## React + Vite

Este template proporciona una configuración mínima para que React funcione en Vite con HMR y algunas reglas de ESLint.

Actualmente, hay dos plugins oficiales disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) usa [Babel](https://babeljs.io/) para Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh.

## Contribuir

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. **Fork el repositorio**
2. **Crea una nueva rama (git checkout -b feature/nueva-funcionalidad)**
3. **Realiza los cambios necesarios y realiza commit de tus cambios (git commit -m 'Añadir nueva funcionalidad')**
4. **Empuja tus cambios a la rama (git push origin feature/nueva-funcionalidad)**
5. **Abre un Pull Request**
