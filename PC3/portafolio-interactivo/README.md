# Umbral Studio — Portafolio Interactivo

Landing page responsive para un estudio ficticio de diseño y desarrollo digital. Proyecto académico de la PC3 de **Hojas de Estilo en Cascada Avanzado**.

## Tecnologías

- HTML5 semántico.
- CSS3: diseño responsive, transiciones, transformaciones 2D y 3D, y animaciones `@keyframes`.
- Bootstrap 5.3.3 y Bootstrap Icons mediante CDN.
- JavaScript nativo para el loader, el menú móvil, el año actual y el formulario de demostración.

No se instalan dependencias ni se necesita servidor. Abre `index.html` directamente en un navegador. Hace falta conexión a internet para cargar Bootstrap, los iconos y las fuentes alojadas en CDN.

## Archivos

```text
portafolio-interactivo/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Interacciones y efectos CSS

- Las tarjetas de proyectos muestran tres transformaciones 2D diferentes al pasar el cursor: rotación, escala y traslación. Las transformaciones usan transiciones suaves.
- La tarjeta interactiva 3D utiliza `perspective` en su contenedor, `transform-style: preserve-3d`, `rotateX()` y `rotateY()` en la tarjeta, y `translateZ()` para separar sus capas.
- La animación `rise-in` introduce el contenido del hero una vez; el loader CSS utiliza `loader-spin` de forma infinita hasta que termina la carga de la página.
- `prefers-reduced-motion` respeta la preferencia del sistema para reducir el movimiento.

## Diseño responsive

Bootstrap Grid (`container`, `row` y columnas responsivas) organiza los proyectos y habilidades. Media queries adaptan la navegación, tarjetas, hero, formulario y pie de página a móviles y pantallas mayores. El menú hamburguesa usa el componente Collapse de Bootstrap.

## Formulario

Valida nombre, email y mensaje en el navegador. **Limpiar** restablece los campos y el estado de validación. Al enviar datos válidos muestra un aviso: el formulario es una demostración y no envía correos ni transmite datos a un servidor.
