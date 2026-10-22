# Teacher María · Rescate Académico

Sitio estático desarrollado desde el frame `5:14` del archivo Figma `kijyPgBRtRdPJ1VErR6OQn`. HTML, CSS y JavaScript sin instalación ni compilación.

## Archivos

- `index.html`: estructura, textos y enlaces.
- `styles.css`: diseño adaptable y animaciones.
- `script.js`: carrusel, controles de movimiento y aviso temporal de la actividad.
- `assets/images/`: fotografía, demo y vectores originales de Figma.
- `assets/fonts/`: Bricolage Grotesque e Inter locales, con sus licencias.
- `.nojekyll`: publicación estática en GitHub Pages.

Abrí `index.html` en el navegador para revisar. Subí todo el contenido de esta carpeta a la raíz del repositorio para publicarlo como página principal con GitHub Pages. Conservá la estructura de `assets/` y los nombres de archivo. El sitio no depende de servicios externos para cargar imágenes, fuentes o código.

## Cambiar el enlace de la actividad

En `index.html`, buscá el comentario **ACTIVIDAD_URL** y reemplazá:

```html
href="#actividad-pendiente"
```

por la URL definitiva de la actividad. No hace falta editar JavaScript. El placeholder no muestra avisos ni navega; al cambiar su href, el botón funciona como un enlace normal.

Los otros dos CTA llevan a `https://wa.me/50663032871`.

## Animaciones

- Asterisco del hero: una vuelta cada 22 segundos.
- Forma amarilla escalonada original: desplazamiento diagonal de 11 px en un ciclo de 4 segundos.
- Testimonios: cinco comentarios originales, movimiento continuo a 24 px/s, movimiento constante sin botón de pausa ni pausas por hover, foco o toque.
- Iconos vectoriales: conversación, cuaderno y libro con movimientos suaves distintos.
- La preferencia del sistema para reducir movimiento detiene animaciones y permite recorrer los comentarios manualmente.

En `styles.css` se ajustan las duraciones y amplitudes. La velocidad del carrusel se ajusta en `script.js`, en la división `distance / 24`.

## Contenido confirmado

- Precio vigente ₡55.000 y ₡70.000 tachado «a partir del 2027», como indicó el usuario.
- Primer testimonio actualizado desde Figma, con cierre «¡Muchas felicidades por su excelente labor!».
- Testimonios finales actualizados desde Figma: Mattew · Padre, Katherine • Madre, Estudiante, Glenda • Madre y Estudiante. Cada comentario es un único párrafo continuo sin saltos manuales.
- Se unificaron márgenes y se ajustó el contenido al ancho de página, sin incluir el espacio exterior del lienzo Figma.
- La forma amarilla es la pieza escalonada del diseño original.

## Verificación

Pruebas en Chrome: carga y geometría de los diez recursos visuales, anchos de 320, 375, 390, 768, 1024, 1440 y 1920 px sin desbordamiento horizontal; continuidad geométrica del ciclo del carrusel, movimiento, preferencia de movimiento reducido, enlaces a WhatsApp y placeholder del CTA pendiente sin avisos. Sin errores JavaScript detectados. Revisión visual de escritorio y móvil.

No publicado desde esta entrega. La actividad permanece pendiente hasta reemplazar su URL.