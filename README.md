# DejandoHuella
## Información del proyecto:
### Datos:
   **- Autor@:** Sara Romero Peralta
   **- Curso:** 1º DAW
### Descripción del proyecto:
El proyecto consiste en una página web que represente la identidad profesional o comercial de un cliente. La elección del cliente está en nuestra mano (una empresa local, un profesional independiente, una ONG, una startup, etc), la única condición es que sea creíble y profesional.

#### ¿Por qué he elegido este proyecto?
Siempre he tenido un cariño especial a los animales, no hay nada que me guste más que pasar el tiempo con algún animal. Pensando en sobre que hacer la página, mi gato, adoptado de un refugio, pasó por delante mía, y pensé en la de refugios de animales que no tienen el presupuesto para pagar a algún programador que pueda hacerles una buena página web, y es algo que sé de primera mano por la mala experiencia con páginas de ciertos refugios. Pensé que tal vez podría ser útil para algún refugio, y podía hacer una página funcional de adopciones, para que en un futuro, cuando sea lo suficientemente buena, pueda ofrecerle mi proyecto de forma gratuita a algún refugio, y así poder ser de ayuda con una causa que me apasiona tanto.

### Documentación de la página
Voy a estructurar la documentación de la siguiente forma: una a una voy a ir hablando de cada una de las páginas, separando el contenido de la documentación en dos partes:
1. Estructura del sitio
2. Decisiones de diseño

Aunque, primero voy a enumerar los elementos comunes, como son el footer, el header:
#### Encabezado (`<header>`)

Contiene los elementos de **identidad y navegación global** del sitio:

- **Logo** con enlace a la propia página de inicio.
- **Título principal (`<h1>`)** con el nombre del refugio.
- **Menú de navegación (`<nav>`)** con una lista de enlaces a las demás secciones del sitio:
    - Inicio
    - Servicios
    - Sobre nosotros
    - Nuestros peludos
    - Hazte de la manada
    - Blog

El uso de `<h1>` se debe a darle la mayor importancia posible a el Título, y que a la hora de la accesibilidad, el lector de página lo detecte como texto importante. EL uso del `<nav>`se debe a la necesidad de crear un menú de navegación, que a su vez contiene elementos con la etiqueta `<ul>` que indica que la lista no es ordenada. Cada elemento de la lista tiene una etiqueta `<a>`para que funcione como enlace al resto de páginas.
> Este encabezado sirve como **barra de navegación fija y coherente** en todas las páginas del sitio.


---


#### Pie de página (`<footer>`)

Contiene la **información de contacto y atención al público** del refugio. Está dividido en dos secciones principales:

* **Primera sección:**
  Presenta los **datos de contacto** para comunicarse o localizar el refugio. Incluye:

    * Enlace telefónico mediante `tel:` para realizar llamadas desde dispositivos compatibles.
    * Dirección de correo electrónico con `mailto:` para enviar mensajes directamente.
    * Enlace a **Google Maps** con la ubicación física del refugio.

* **Segunda sección:**
  Muestra el **horario de atención**, especificando los días y las horas de apertura y cierre.
  Se utilizan etiquetas `<time>` para marcar correctamente los horarios, mejorando la semántica y accesibilidad del contenido.

El uso del `<footer>` se debe a que representa el bloque final del documento, reservado para información complementaria o de contacto. Dentro de él se emplean etiquetas `<section>` para dividir el contenido en bloques temáticos: uno para la información de contacto y otro para los horarios. Los títulos de cada bloque se marcan con `<h2>` para mantener la jerarquía semántica correcta. Los enlaces `<a>` se utilizan para permitir la interacción directa con el usuario: uno con `tel:` para realizar llamadas desde dispositivos móviles, otro con `mailto:` para enviar correos electrónicos, y otro con una URL hacia Google Maps para mostrar la ubicación del refugio. El texto descriptivo del horario se agrupa dentro de un párrafo `<p>`, mientras que las horas y los días se marcan con la etiqueta `<time>`, que añade valor semántico al indicar información temporal, facilitando su lectura por navegadores y herramientas de accesibilidad.

> Este pie de página ofrece al usuario una **forma directa de contacto y referencia horaria**, funcionando como elemento de cierre informativo en la página.

---

#### 1. Index.html (`<main>`)

Esta parte contiene **el cuerpo central de la página de inicio**, donde se presenta la misión del refugio, sus áreas de acción, necesidades, blog y servicios. Está dividido en cinco secciones principales:

* **Primera sección:**
  Introduce el **refugio y su propósito**. Incluye los títulos principales `<h2>` y `<h3>` que resumen la identidad y el lema de la organización. Se presentan dos párrafos que explican los objetivos del refugio y una llamada a la acción. Además, se muestran dos imágenes del propio refugio (una zona de perros y otra de gatos), y se incluyen enlaces a páginas internas: “Adopta una huella” y “Sobre nosotros”.

* **Segunda sección:**
  Expone el **plan de actuación del refugio**, dividido en las cuatro fases principales: Rescate, Rehabilitación, Cuidados y Búsqueda de nuevo hogar. Cada una está acompañada de su correspondiente icono ilustrativo mediante la etiqueta `<img>`.

* **Tercera sección:**
  Describe **las necesidades del refugio**, destacando la importancia de la colaboración ciudadana y la ayuda económica o de voluntariado. Acompaña esta información una imagen de una voluntaria trabajando en el refugio.

* **Cuarta sección:**
  Presenta el **blog del refugio**, un espacio donde se publican actividades, eventos y rescates recientes. Se incluyen imágenes representativas (juegos de perros y evento de adopción de gatos) y un enlace directo a la página del blog.

* **Quinta sección:**
  Cierra el contenido principal ofreciendo información sobre los **servicios** del refugio, dirigidos a quienes buscan adoptar, participar como voluntarios o realizar visitas escolares. Contiene un párrafo explicativo y un enlace a la página de servicios.

El uso del `<main>` se debe a que representa el contenido principal de la página, aquel que es único y central respecto al resto del sitio. Dentro de él, las etiquetas `<section>` dividen la información en bloques temáticos claramente definidos, mejorando la lectura y la organización del contenido. Los títulos `<h2>` y `<h3>` se utilizan para jerarquizar la información, permitiendo a los lectores y herramientas de accesibilidad identificar rápidamente los apartados y subapartados. Las etiquetas `<p>` sirven para incluir el texto descriptivo de cada tema, garantizando una presentación limpia y comprensible. Las imágenes `<img>` refuerzan visualmente los mensajes, mostrando tanto instalaciones como iconos representativos de las actividades del refugio; el atributo `alt` asegura la accesibilidad para personas con lectores de pantalla. Por último, los enlaces `<a>` se emplean como llamadas a la acción, conectando al usuario con las diferentes secciones internas del sitio web, como “Adopta una huella”, “Sobre nosotros”, “Blog” y “Servicios”, facilitando una navegación intuitiva y coherente.

> Este bloque `<main>` constituye el núcleo informativo de la página de inicio, donde se muestra de forma clara la misión, actividades y oportunidades de participación que ofrece el refugio.
---
#### 2. Servicios.html

Esta página presenta los **servicios que ofrece el refugio Dejando Huella**, con el objetivo de informar a los visitantes sobre las distintas formas de colaborar, participar o beneficiarse de las actividades del refugio. Se organiza en varias secciones temáticas que explican de manera clara cada servicio disponible:

* **Primera sección:**
  Introduce el apartado con el título principal *Nuestros Servicios* y un párrafo descriptivo que resume la misión del refugio y la intención de ayudar tanto a animales como a personas.

* **Segunda sección:**
  Dedicada a **Adopciones y Acogidas**, uno de los servicios más importantes del refugio.
  Incluye una imagen ilustrativa y un párrafo inicial con un enlace hacia la página “Sobre nosotros”, donde se explica la política de adopción.
  Dentro de esta sección se dividen tres **artículos**:

    * **Adopciones online:** explica el proceso de adopción a distancia, pensado para quienes no pueden desplazarse hasta el refugio. Incluye detalles sobre el formulario, requisitos y envío del animal de forma segura.
    * **Adopciones presenciales:** describe el proceso de adopción directa en el refugio, destacando la importancia de conocer previamente al animal. Ofrece el número de teléfono del refugio para concertar una cita.
    * **Acogidas:** aborda la posibilidad de ofrecer hogar temporal a un animal. Explica el concepto y ventajas de esta opción e incluye una **tabla comparativa** entre adoptar y acoger, detallando aspectos como duración, compromiso, edad, requisitos y beneficios.
      Esta sección concluye con un párrafo invitando a visitar el refugio para obtener más información.

* **Tercera sección:**
  Expone el servicio de **visitas y excursiones educativas al refugio**. Se enfoca en la concienciación sobre el bienestar animal y el aprendizaje de los niños y adultos. Incluye el correo electrónico de contacto y una imagen de niños visitando las instalaciones.

* **Cuarta sección:**
  Muestra el servicio de **rescates**, donde se explica la labor del equipo de voluntarios que acuden a ayudar a animales abandonados o maltratados. Se incluye un enlace al formulario para unirse al equipo de rescate y una imagen representativa de gatos abandonados.

* **Quinta sección:**
  Informa sobre las **prácticas formativas** que ofrece el refugio a estudiantes de veterinaria, educación ambiental y otras áreas relacionadas. Se anima a los centros educativos a ponerse en contacto con el refugio. Incluye una imagen ilustrativa de una voluntaria. 

El uso del `<main>` se debe a que contiene el contenido principal y único de la página, centrado en los servicios ofrecidos. Dentro de él, las etiquetas `<section>` dividen la información en bloques temáticos (servicios, adopciones, visitas, rescates y prácticas), lo que mejora la estructura semántica y facilita la navegación. Los títulos `<h2>` sirven para identificar las secciones principales, mientras que los `<h3>` dentro de los artículos establecen subniveles jerárquicos para cada tipo de servicio. Las etiquetas `<p>` agrupan los textos descriptivos que explican cada actividad, manteniendo un formato legible y coherente. Las imágenes `<img>` apoyan visualmente cada tema y, mediante el atributo `alt`, garantizan la accesibilidad para usuarios con lectores de pantalla. Los enlaces `<a>` permiten al usuario acceder a información adicional, contactar por correo o teléfono, y navegar entre páginas relacionadas. La etiqueta `<article>` se emplea para dividir contenidos independientes dentro de una misma sección, como los distintos tipos de adopciones. Por último, la tabla `<table>` se utiliza para comparar de forma clara las diferencias entre adoptar y acoger, usando elementos como `<caption>`, `<thead>`, `<tbody>`, `<tr>`, `<th>` y `<td>` que estructuran correctamente la información en filas y columnas, aportando una lectura más ordenada y profesional.

> Este `<main>` organiza todos los servicios del refugio de manera clara y accesible, destacando las diferentes formas en que la comunidad puede involucrarse con la causa animal.
---

#### 3. About.html
Esta parte contiene el **núcleo informativo de la página de inicio**, donde se presenta la identidad, misión, actividades y servicios principales del refugio Dejando Huella. Está organizada en cinco secciones, cada una con un propósito específico:

* **Primera sección:**
  Introduce el **refugio y su propósito principal**. Incluye los títulos `<h2>` y `<h3>` que presentan el nombre y el lema del refugio, seguidos de dos párrafos que explican su objetivo: rescatar, cuidar y buscar hogar a los animales abandonados o maltratados. Se muestran dos imágenes de las instalaciones (una zona de perros y otra de gatos) y dos enlaces a páginas internas: “Adopta una huella” y “Sobre nosotros”.

* **Segunda sección:**
  Expone el **plan de actuación del refugio**, dividido en las cuatro fases que resumen su labor: Rescate, Rehabilitación, Cuidados y Búsqueda de nuevo hogar. Cada fase se refuerza visualmente con un icono representativo mediante la etiqueta `<img>`.

* **Tercera sección:**
  Presenta **las necesidades del refugio**, destacando la importancia del apoyo económico y del voluntariado. Contiene un párrafo explicativo y una imagen ilustrativa de una voluntaria del refugio, para reforzar el mensaje de colaboración.

* **Cuarta sección:**
  Introduce el **blog del refugio**, donde los visitantes pueden informarse sobre actividades, rescates y eventos recientes. Se muestran dos imágenes que ejemplifican estas actividades y un enlace directo al blog para ampliar información.

* **Quinta sección:**
  Cierra el contenido principal con una invitación a los usuarios a conocer los **servicios adicionales** que ofrece el refugio, como adopciones, voluntariado o visitas escolares. Contiene un párrafo explicativo y un enlace a la página “Servicios”.

El uso del `<main>` se debe a que contiene el contenido principal y único de la página, diferenciándolo del encabezado o el pie. Las etiquetas `<section>` estructuran la información en bloques temáticos independientes, lo que facilita la lectura y la comprensión del contenido tanto para los usuarios como para los motores de búsqueda. Los títulos `<h2>` se utilizan para marcar las secciones principales y los `<h3>` para establecer subtítulos o lemas relacionados, siguiendo una jerarquía semántica adecuada. Las etiquetas `<p>` permiten presentar el texto descriptivo de manera ordenada, mientras que las imágenes `<img>` refuerzan visualmente la información, aportando contexto y atractivo visual; además, el atributo `alt` mejora la accesibilidad para personas con discapacidad visual. Por último, las etiquetas `<a>` se usan para enlazar con otras páginas del sitio, fomentando la navegación interna y facilitando al usuario el acceso a contenidos relacionados como la adopción, información institucional o servicios ofrecidos.

> Este bloque `<main>` organiza de forma clara y visual toda la información esencial del refugio, ayudando al visitante a conocer su labor, cómo participar y cómo acceder al resto de secciones del sitio.
---

#### 4. Extra.html

Esta parte contiene el **bloque central de la página dedicada a las adopciones**, donde se presentan algunos de los animales disponibles para encontrar un nuevo hogar. Está dividida en tres secciones principales:

* **Primera sección:**
  Funciona como una **introducción general** que anima al visitante a participar en la adopción. Incluye el título principal “¡Estos pequeños necesitan tu ayuda!” y una imagen ilustrativa que representa la causa, con un dibujo de varios animales acompañada del texto “adopta un amigo”.

* **Segunda sección:**
  Muestra la **sección de perros en adopción**.
  Cada animal se presenta dentro de un elemento `<article>`, que contiene:

    * Una imagen con enlace (en el caso de Leo, lleva a una página interna con más información sobre él).
    * El nombre del animal en un encabezado `<h4>`.
    * Dos párrafos que detallan el sexo y la edad del perro.
      En esta sección se incluyen dos artículos: **Leo**, un perro macho de 7 años al que le falta una pata, y **Luna**, una cachorra de 5 meses.

* **Tercera sección:**
  Presenta la **sección de gatos disponibles para adopción**, estructurada igual que la anterior.
  Cada gato cuenta con su propio `<article>` con imagen, nombre y datos básicos.
  Se muestran **Kiyo**, un gato macho de 1 año, y **Nala**, una gata blanca de 2 años.
  En el caso de Kiyo, la imagen enlaza a una página interna con más información sobre él.

El uso del `<main>` se debe a que contiene el contenido principal y más relevante de la página, en este caso, los animales que buscan adopción. Las etiquetas `<section>` organizan el contenido en bloques temáticos diferenciados: una introducción general, una sección para perros y otra para gatos. Los encabezados `<h2>`, `<h3>` y `<h4>` establecen una jerarquía clara: el título principal, los títulos de categoría (perros y gatos) y los nombres individuales de cada animal. Los elementos `<article>` agrupan la información de cada animal como unidades independientes dentro de su categoría, lo que mejora la estructura semántica y facilita la lectura por parte de buscadores o herramientas de accesibilidad. Las etiquetas `<p>` se utilizan para presentar los datos específicos de cada animal (sexo y edad), de forma sencilla y legible. Las imágenes `<img>` aportan información visual fundamental, mostrando el aspecto de cada animal, y los atributos `alt` describen las fotografías, mejorando la accesibilidad. Finalmente, los enlaces `<a>` permiten acceder a páginas individuales con más información sobre cada animal, favoreciendo la navegación y la interacción del usuario con el contenido.

> Este bloque `<main>` cumple la función de mostrar de manera visual, organizada y accesible los animales en adopción, facilitando al visitante conocerlos y acceder a más detalles sobre cada uno.
---

#### 5. Perro.html y Gato.html

Esta página está dedicada a mostrar la **información individual de un animal en adopción** (aunque la estructura es la misma para cada ficha). El contenido se divide en tres secciones principales:

* **Primera sección:**
  Presenta el **nombre y la imagen principal** del animal. Se utiliza un encabezado `<h2>` con el nombre y una imagen representativa acompañada del atributo `alt`, que describe brevemente la fotografía.

* **Segunda sección:**
  Proporciona la **descripción y la información básica** del animal.
  Contiene dos párrafos que relatan su historia y carácter, seguidos de un nuevo título “Información de interés”, bajo el cual se encuentra una lista con datos específicos como nombre, sexo, vacunación y esterilización. Esta información está estructurada mediante una lista desordenada `<ul>` con varios elementos `<li>`, cada uno con su respectivo párrafo `<p>`.

* **Tercera sección:**
  Invita al visitante a **iniciar el proceso de adopción** mediante un título motivador y un enlace que dirige al formulario de contacto para adoptar, lo que facilita la interacción directa con la web.

El uso del `<main>` se debe a que contiene el contenido principal y único de la página, centrado exclusivamente en un animal concreto. Las etiquetas `<section>` se emplean para dividir el contenido en partes temáticas: presentación, descripción e información de contacto. Los encabezados `<h2>` establecen una jerarquía visual coherente, marcando los títulos principales de cada bloque. Las etiquetas `<p>` permiten desarrollar la narrativa descriptiva del animal y ofrecer información complementaria de forma clara. La lista `<ul>` organiza los datos más importantes (nombre, sexo, estado sanitario) de manera estructurada y fácil de leer, mientras que cada `<li>` individualiza cada punto. Las imágenes `<img>` aportan contexto visual, reforzando la conexión emocional con el visitante, y el atributo `alt` asegura la accesibilidad para todos los usuarios. Finalmente, la etiqueta `<a>` funciona como un llamado a la acción, enlazando al formulario de adopción y promoviendo la participación del usuario de manera sencilla e intuitiva.

> Este bloque `<main>` tiene como finalidad presentar de forma clara y accesible toda la información relevante sobre un animal específico, incentivando la adopción responsable y brindando datos de utilidad al usuario.
---
#### 6. Formularios.html

Esta página tiene como objetivo **invitar a los usuarios a participar activamente** en la causa del refugio “Dejando Huella”, ya sea adoptando, trabajando como voluntarios o realizando donaciones.
El contenido principal se estructura dentro de `<main>` y se organiza en **dos secciones principales**:

* **Primera sección:**
  Funciona como una **introducción motivacional**.
  Contiene un título principal `<h2>` (“¡Únete a la causa!”) y un párrafo `<p>` que explica brevemente cómo el visitante puede involucrarse. Se trata de un texto persuasivo que busca inspirar la acción y generar compromiso emocional con la misión del refugio.

* **Segunda sección:**
  Presenta los **diferentes formularios disponibles** para contactar con el refugio.
  Comienza con un encabezado `<h2>` (“Formularios:”) y contiene **tres artículos `<article>`**, cada uno dedicado a una forma distinta de colaborar:

    1. **Formulario de Adopción:**
       Describe el proceso de adopción, incluye un enlace `<a>` hacia `contacto_adoptar.html` y una imagen ilustrativa con el lema *“No compres, adopta”*.

    2. **Formulario de Voluntariado:**
       Invita a unirse al equipo del refugio, con un enlace al formulario de voluntariado y una imagen que refuerza visualmente la acción de ayudar.

    3. **Formulario de Donaciones:**
       Motiva a contribuir económicamente con el refugio, mediante un texto inclusivo que resalta la importancia de cualquier aportación. Incluye un enlace a `contacto_donar.html` y una imagen simbólica de unión entre humanos y animales.

Cada `<article>` utiliza encabezados `<h3>` para jerarquizar los subtítulos, párrafos `<p>` para describir el propósito de cada formulario, enlaces `<a>` para dirigir al visitante a la página correspondiente y una imagen `<img>` que apoya visualmente la acción promovida.
El uso de `<main>` concentra el **contenido esencial** de la página, mientras que las etiquetas `<section>` dividen la información en bloques temáticos (motivación y formularios).
Los encabezados `<h2>` y `<h3>` jerarquizan visualmente el contenido, facilitando su lectura.
Las etiquetas `<article>` agrupan de forma independiente cada oportunidad de colaboración, permitiendo que cada una tenga su propio contexto y elementos asociados.
Las imágenes `<img>` refuerzan el mensaje emocional y visual de cada tipo de ayuda, mientras que los enlaces `<a>` sirven como **llamados a la acción**, guiando al usuario hacia los formularios correspondientes para completar su participación.

> En conjunto, esta estructura promueve la interacción activa del visitante con el refugio, combinando claridad informativa, accesibilidad y un diseño orientado al compromiso solidario.

---

#### 7. Contacto_adoptar.html, contacto_voluntario.html y contacto_donar.html

Estas páginas contienen los **formularios principales** para que los usuarios puedan colaborar con el refugio “Dejando Huella”. Aunque cada formulario tiene un propósito distinto adopción, donación o acogida, todos comparten una **estructura similar y organizada** mediante `<form>` y `<fieldset>` para agrupar la información.

* **Formulario de Adopción:**
  Permite a los usuarios registrar sus datos personales y ofrecer un hogar a un animal.
  Contiene un primer `<fieldset>` con **datos personales** (nombre, apellidos, correo, teléfono, localidad, dirección y código postal) y un segundo `<fieldset>` con información específica sobre la adopción (experiencia previa con mascotas, otros animales en casa, protección de ventanas, compromiso de castración, tipo de vivienda, animal elegido y nombre del animal). Incluye checkboxes para aceptar las condiciones de adopción y un botón de envío `<button>`.

* **Formulario de Donación:**
  Recoge los **datos personales del donante** y los **detalles de la donación** (importe, tipo de tarjeta, número de tarjeta, fecha de expiración y código CVV). Se estructura también en dos `<fieldset>` y finaliza con un botón de envío para procesar la donación.

* **Formulario de Acogida:**
  Similar al formulario de adopción, pero enfocado en **ofrecer hogar temporal** a animales. Incluye `<fieldset>` con datos personales y otro con información sobre la acogida (experiencia con mascotas, tipo de vivienda, número de animales, duración de la acogida y preferencia de animal). También incorpora un checkbox para aceptar las condiciones y un botón de envío `<button>`.
  
El uso de `<main>` concentra todo el **contenido interactivo esencial** de la página, ya que los formularios representan la principal vía de colaboración con el refugio. Cada formulario `<form>` se organiza de manera lógica y clara: los `<fieldset>` agrupan secciones de información relacionadas, los `<legend>` indican el tema de cada grupo, y las etiquetas `<label>` describen cada campo de entrada para mejorar la usabilidad y accesibilidad. Los campos `<input>` y `<select>` permiten la entrada de texto, selección de opciones, números, fechas y aceptación de condiciones. Los botones `<button>` proporcionan un punto final de envío, garantizando que los datos se transmitan correctamente. En conjunto, esta estructura permite a los usuarios **adoptar, acoger o donar** de forma segura, ordenada y comprensible, optimizando la interacción con la web y promoviendo la participación activa en la causa del refugio.

> Todos los formularios `<form>` utilizan el atributo `method="POST"` para enviar los datos de manera segura y `action=""` para definir la ruta de procesamiento. Los `<fieldset>` y `<legend>` organizan el contenido de manera semántica, mientras que las etiquetas `<label>` se asocian a cada `<input>` o `<select>` para mejorar la accesibilidad. Los checkboxes `<input type="checkbox">` permiten marcar opciones de aceptación o compromisos, y los campos obligatorios se definen con `required` para asegurar que la información esencial se complete antes del envío.
---

#### 8. Blog.html

Esta página contiene el **blog del refugio**, donde se publican noticias, rescates y eventos relacionados con la protección animal. El contenido está organizado en cuatro secciones principales:

* **Primera sección:**
  Introduce el blog con un título `<h2>` “Nuestro Blog” y un párrafo `<p>` que explica que se actualizará semanalmente con eventos y charlas de concienciación, invitando a los usuarios a mantenerse atentos.

* **Segunda sección:**
  Presenta los **eventos y actividades** del refugio. Cada evento se encuentra dentro de un `<article>`, que incluye una imagen `<img>` representativa, un título `<h4>` con el nombre del evento, un `<time>` indicando la fecha y un párrafo `<p>` con la descripción del mismo. Se incluyen ejemplos como un evento de concienciación infantil y una feria de adopción.

* **Tercera sección:**
  Contiene **rescates y noticias** recientes. Cada rescate o noticia se organiza en un `<article>` con imagen, título, fecha y párrafo descriptivo. Por ejemplo, se presentan los cachorros Coco, Canela y Lulu y una camada de gatitos recién rescatados, explicando su situación y la necesidad de encontrarles un hogar.

* **Cuarta sección:**
  Muestra los **peludos en apuros**, destacando casos urgentes que requieren ayuda inmediata. Cada `<article>` incluye imagen, título, fecha y descripción de la situación, como Molly, una cachorrita herida, y consejos sobre cuidado de gatos en Halloween.

El uso del `<main>` concentra el **contenido principal del blog**, mientras que las secciones `<section>` agrupan temáticamente los diferentes tipos de publicaciones: eventos, rescates y casos urgentes. Los `<article>` estructuran cada noticia o evento como una unidad independiente con su propio contenido, facilitando la lectura y la indexación por buscadores. Los encabezados `<h2>`, `<h3>` y `<h4>` jerarquizan la información, marcando títulos de sección, subsecciones y nombres de eventos o rescates. Las imágenes `<img>` aportan contexto visual y los atributos `alt` garantizan accesibilidad. La etiqueta `<time>` indica la fecha de publicación o del evento, permitiendo a los usuarios y sistemas interpretar correctamente la temporalidad. Por último, los párrafos `<p>` presentan de manera clara la descripción de cada actividad, rescate o caso urgente, logrando que la información sea comprensible y directa para los visitantes.

> Este `<main>` organiza el contenido del blog de forma clara, semántica y accesible, permitiendo a los usuarios identificar rápidamente eventos, rescates y situaciones urgentes que necesitan atención.