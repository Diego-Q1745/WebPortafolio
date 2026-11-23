# Portafolio personal de Diego

Proyecto académico de segundo ciclo de Diseño y Desarrollo de Software en TECSUP. La página usa HTML, CSS y JavaScript. El formulario usa PHP y MySQL.

**Sitio publicado** · [Agrega aquí la URL de InfinityFree]  
**Repositorio** · [Agrega aquí la URL de GitHub]

## Abrir el portafolio

Descomprime el ZIP y abre `index.html` con doble clic para recorrer la página y abrir los detalles de los proyectos. Para enviar el formulario, abre el sitio desde un servidor PHP con una base MySQL o MariaDB.

## Estructura

| Archivo o carpeta | Para qué sirve |
| --- | --- |
| `index.html` | Contenido, menú, portafolio y formulario. |
| `css/style.css` y `css/effects.css` | Estilos, tamaños de pantalla y efectos. |
| `js/main.js` y `js/effects.js` | Menú, diálogo, formulario y aparición al desplazarse. |
| `php/envio.php` | Valida el envío e inserta una fila con una consulta preparada. |
| `php/config.example.php` | Plantilla para la configuración local del servidor. |
| `database/portafolio.sql` | Crea la tabla `mensajes` en una base de datos existente. |
| `img/` | Marca, íconos y fuentes de Google Fonts con sus licencias. |

El navegador envía los cuatro campos a `php/envio.php` con `fetch` y `FormData`. PHP valida los datos, conecta con MySQL mediante `mysqli` y devuelve un JSON con `ok` y `msg`. JavaScript muestra el resultado sin recargar. El teléfono se guarda como `NULL` cuando queda vacío. El formulario incluye un campo oculto (`web_extra`) contra spam: si un robot lo llena, `envio.php` no guarda nada.

## Publicar en InfinityFree

1. Crea un sitio y una base de datos MySQL desde el panel de InfinityFree.
2. Abre phpMyAdmin desde el panel, selecciona la base recién creada e importa `database/portafolio.sql`.
3. Copia `php/config.example.php` como `php/config.php`. Edita sus cuatro valores con los datos del panel. Usa el servidor MySQL que indique InfinityFree para `DB_HOST` y los nombres completos, con su prefijo, para el usuario y la base.
4. Sube `index.html` y las carpetas `css/`, `js/`, `img/` y `php/` al directorio `htdocs` del dominio. Comprueba que el archivo quede como `htdocs/index.html` y que el servidor ejecute PHP con `mysqli`.
5. Abre la URL del sitio. Envía una consulta de prueba con datos ficticios y comprueba en phpMyAdmin que existe una fila nueva en `mensajes`. Actualiza arriba la URL de InfinityFree.

## Guardar el código en GitHub

Crea un repositorio y súbelo desde la carpeta `portafolio-diego`. Conserva `.gitignore`, que excluye `php/config.php`. Antes del primer commit, comprueba esa exclusión con `git check-ignore php/config.php`. En GitHub guarda el código y la plantilla de configuración. Usa InfinityFree para ejecutar el formulario PHP. Actualiza arriba la URL del repositorio.

## Probar el formulario en local

1. Usa PHP 8 con `mysqli` y un servidor local de MySQL o MariaDB. Crea una base, importa el SQL y configura `php/config.php` con los datos de esa instalación.
2. Ejecuta `php -S localhost:8000` desde la carpeta del proyecto y abre `http://localhost:8000/`.
3. Envía una consulta sintética con nombre, correo y consulta. Comprueba el mensaje de éxito y verifica la fila con `SELECT id, nombre, correo, telefono, consulta, fecha FROM mensajes ORDER BY id DESC LIMIT 1;`.
4. Prueba con un campo obligatorio vacío y con un correo sin formato válido. Comprueba que aparece el error y que no se añade una fila.

Puedes revisar la sintaxis con `node --check js/main.js`, `node --check js/effects.js`, `php -l php/envio.php` y `php -l php/config.example.php`. Node se usa solo para comprobar sintaxis.

## Datos que completa Diego

- **Retrato.** Guarda tu foto como `img/perfil.jpg` (la ruta ya está en `index.html`). Hasta entonces se muestra la inicial D.
- **Correo, GitHub y LinkedIn.** Ya están colocados. Después de publicar, comprueba que cada enlace abre bien.
- **Seis proyectos.** El portafolio presenta el sitio web de turismo, Academia, StudyBot AI, FINCONTROL, ECOMARKET y CLINISYS. FINCONTROL enlaza a `https://webfincontrol.site.je`; ECOMARKET enlaza al repositorio `https://github.com/Diego-Q1745/Ecomarket-Java`. CLINISYS ya tiene su descripción y detalles, pero su enlace de GitHub se añadirá cuando publiques el repositorio. Para usar una captura propia, guárdala en `img/` y añade un elemento `img` dentro de su portada. Si la captura aporta información, quita `aria-hidden="true"` de la portada y escribe un texto alternativo.
- **Tres testimonios.** Hay dos comentarios de ejemplo redactados con tono de compañeros de clase y una tarjeta para el profesor de Base de Datos. Cambia los nombres y cursos entre corchetes y confirma los comentarios con las personas antes de publicarlos.
- **Fotos de testimonios.** Coloca las imágenes autorizadas en `img/testimonios/` con los nombres `companero.jpg`, `companera.jpg` y `profesor-base-datos.jpg`. Si aún no agregas una foto, se muestra una inicial como marcador. Consulta `img/testimonios/INSTRUCCIONES.txt`.
- **Publicación.** Completa las URL de InfinityFree y GitHub al publicar.
