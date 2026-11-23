# 💻 Diego | Portafolio de Desarrollo de Software

¡Hola! Soy **Diego Quispe**, estudiante de Diseño y Desarrollo de Software en **TECSUP**.

Este repositorio contiene el código fuente de mi portafolio personal, un espacio donde presento mis proyectos académicos y personales, las tecnologías que utilizo y mi evolución como desarrollador de software.

Mi objetivo es seguir aprendiendo, desarrollar soluciones útiles y mejorar continuamente mis habilidades en programación, diseño de interfaces y gestión de bases de datos.

---

## 🌐 Mi portafolio

**Sitio web:** [Agregar aquí el enlace de tu portafolio publicado]

**GitHub:** [Diego-Q1745](https://github.com/Diego-Q1745)

**LinkedIn:** [Mi perfil profesional](https://www.linkedin.com/in/diego-quispe-5551983ba/)

**Correo:** diego.quispe.cc@tecsup.edu.pe

---

## 🚀 Sobre el proyecto

Mi portafolio fue desarrollado para presentar de manera organizada mis conocimientos, habilidades y trabajos realizados durante mi formación académica.

Cuenta con una interfaz moderna, temática oscura y diseño adaptable a diferentes dispositivos.

### Características principales

- Diseño moderno y adaptable a computadoras, tablets y celulares.
- Sección de presentación personal.
- Información sobre mis habilidades y servicios.
- Galería de proyectos con descripciones y ventanas de detalles.
- Sección de testimonios con fotografías.
- Enlaces a mis repositorios y proyectos publicados.
- Formulario de contacto conectado a una base de datos MySQL.
- Animaciones y efectos visuales para mejorar la experiencia de navegación.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Aplicación |
|---|---|
| HTML5 | Estructura y contenido de la página. |
| CSS3 | Diseño visual, estilos y adaptación responsive. |
| JavaScript | Interacciones, animaciones y funcionalidades dinámicas. |
| PHP | Procesamiento del formulario de contacto. |
| MySQL | Almacenamiento de mensajes recibidos. |
| Git y GitHub | Control de versiones y almacenamiento del código. |
| InfinityFree | Alojamiento del sitio web. |

---

## 📂 Mis proyectos

Estos son algunos de los proyectos que forman parte de mi portafolio.

### 1. Sitio web de turismo
Página web orientada a presentar información sobre destinos turísticos, facilitando la exploración y organización de contenidos.

🔗 [Visitar proyecto](https://webviajesgo.free.je)

### 2. Academia
Página web desarrollada por encargo para una academia, con el propósito de presentar información de manera organizada y accesible.

🔗 [Visitar proyecto](https://webacademia2.gt.tc)

### 3. StudyBot AI
Bot inteligente para Discord desarrollado con Python e integrado con Gemini AI.

Entre sus funcionalidades se encuentran:
- Responder consultas mediante inteligencia artificial.
- Registrar tareas pendientes.
- Consultar el historial de interacciones.
- Registrar eventos y errores mediante logs.

🔗 [Ver repositorio en GitHub](https://github.com/diego18qcc-ui/StudyBot-AI)

### 4. FINCONTROL
Aplicación web para la gestión de finanzas personales.

Permite:
- Registrar ingresos y gastos.
- Organizar presupuestos.
- Establecer metas de ahorro.
- Visualizar información financiera.
- Trabajar con soles peruanos (S/).

Utiliza LocalStorage para conservar los datos en el navegador.

🔗 [Visitar FINCONTROL](https://webfincontrol.site.je)

### 5. ECOMARKET
Sistema de gestión para una tienda de productos ecológicos, desarrollado con Java y MySQL.

Implementa conceptos de Programación Orientada a Objetos y arquitectura por capas.

Incluye:
- Gestión de clientes y productos.
- Consulta de categorías.
- Registro de ventas.
- Control y actualización de inventario.
- Reportes de inventario y ventas.

**Tecnologías:** Java 17, MySQL y JDBC.

🔗 [Ver repositorio en GitHub](https://github.com/Diego-Q1745/Ecomarket-Java)

### 6. CLINISYS
Sistema web de gestión clínica desarrollado con PHP, MySQL, HTML, CSS y JavaScript.

Incluye módulos para:
- Administración de pacientes.
- Consulta de médicos y especialidades.
- Programación de citas médicas.
- Registro de consultas y diagnósticos.
- Gestión de pagos parciales.
- Control de saldos pendientes.
- Consultas y reportes de información.

La base de datos incorpora relaciones, vistas, triggers y consultas SQL.

**Estado:** En desarrollo y preparación de su repositorio público.

---

## 📩 Formulario de contacto

El portafolio cuenta con un formulario funcional que permite a los visitantes enviarme consultas directamente desde la página.

Su funcionamiento utiliza:

1. HTML para recopilar los datos.
2. JavaScript para enviar el formulario mediante Fetch API.
3. PHP para validar y procesar la información.
4. MySQL para almacenar los mensajes recibidos.

Los datos se guardan en una tabla llamada `mensajes`, utilizando consultas preparadas mediante MySQLi.

También se incorpora una validación de campos y un campo oculto como medida básica contra envíos automatizados.

---

## 📁 Estructura del proyecto

```text
portafolio-diego/
│
├── index.html
│
├── css/
│   ├── style.css
│   └── effects.css
│
├── js/
│   ├── main.js
│   └── effects.js
│
├── php/
│   ├── envio.php
│   ├── config.example.php
│   └── config.php
│
├── database/
│   └── portafolio.sql
│
├── img/
│   ├── marca.png
│   ├── perfil.jpg
│   ├── iconos.png
│   ├── fuentes/
│   └── testimonios/
│
├── .gitignore
└── README.md
```

**Nota:** `config.php` es un archivo de configuración local y no debe publicarse en GitHub.

---

## ⚙️ Instalación y ejecución local

Para ejecutar el proyecto en tu computadora necesitas:

- PHP 8 o superior.
- MySQL o MariaDB.
- Extensión MySQLi habilitada.
- Servidor local como XAMPP.

### 1. Descargar el proyecto

Clona el repositorio:

```bash
git clone URL_DE_TU_REPOSITORIO
```

También puedes descargarlo directamente como ZIP desde GitHub.

### 2. Configurar la base de datos

- Inicia Apache y MySQL desde XAMPP.
- Abre phpMyAdmin.
- Crea una base de datos para el portafolio.
- Importa el archivo `database/portafolio.sql`.

### 3. Configurar PHP

Copia el archivo:

```text
php/config.example.php
```

Y crea una copia llamada:

```text
php/config.php
```

Completa los datos de conexión de tu servidor MySQL:

```php
<?php

define('DB_HOST', 'localhost');
define('DB_USER', 'tu_usuario');
define('DB_PASS', 'tu_contrasena');
define('DB_NAME', 'tu_base_de_datos');
```

### 4. Ejecutar el proyecto

Desde la carpeta principal del proyecto puedes iniciar el servidor integrado de PHP:

```bash
php -S localhost:8000
```

Después abre en tu navegador:

```text
http://localhost:8000
```

El formulario de contacto requiere que PHP y MySQL estén correctamente configurados.

---

## ☁️ Publicación en InfinityFree

El portafolio se encuentra preparado para ejecutarse en un alojamiento compatible con PHP y MySQL.

Para publicarlo:

1. Crear una cuenta de hosting.
2. Crear una base de datos MySQL.
3. Importar `database/portafolio.sql` mediante phpMyAdmin.
4. Configurar `php/config.php` con las credenciales proporcionadas por el hosting.
5. Subir los archivos del proyecto al directorio `htdocs`.
6. Verificar que el formulario pueda registrar mensajes correctamente.

---

## 🔒 Seguridad

Para proteger la información de conexión:

- No publicar contraseñas ni credenciales de MySQL.
- Mantener `php/config.php` excluido mediante `.gitignore`.
- Utilizar consultas preparadas para insertar información.
- Validar los datos recibidos desde el formulario.
- Utilizar HTTPS en el sitio publicado.

---

## 🎯 Objetivo personal

Este portafolio representa parte de mi aprendizaje y crecimiento en el mundo del desarrollo de software.

Cada proyecto es una oportunidad para poner en práctica nuevos conocimientos, experimentar con diferentes tecnologías y desarrollar soluciones que puedan aportar valor.

**¡Este es solo el comienzo de mi camino como desarrollador de software!**

---

⭐ Gracias por visitar mi repositorio y conocer un poco más sobre mi trabajo.
