# Parte 2: Ruby on Rails
## Pregunta 1 (1 punto)
¿Por qué la abstracción de un objeto de formulario pertenece a la capa de presentación y no a la capa
de servicios (o inferior)?
## Respuesta:
Los formularios son una parte integral de la interfaz de usuario y están directamente relacionados con la presentación de datos al usuario. La capa de presentación se encarga de manejar la interacción con el usuario y de mostrar la información de una manera comprensible. Y además los formularios suelen contener lógica de validación y formateo de datos, lo cual es la responsabilidad de la capa de presentación. La capa de servicios o inferior se centra más en la lógica empresarial y en la manipulación de los datos en las bases de datos, por lo que la abstracción de un objeto de formulario no estaria relacionada en esta capa.
## Pregunta 2 (1 punto)
¿Cuál es la diferencia entre autenticación y autorización?
## Respuesta:
La ``autenticación`` y la ``autorización`` son dos conceptos diferentes pero relacionados en el concepto de la seguridad informática:

La ``autenticación`` se refiere al proceso de verificar la identidad de un usuario. Se utiliza para confirmar que un usuario es quien dice ser. Esto generalmente se logra mediante la presentación de credenciales, como un nombre de usuario y una contraseña.

La ``autorización`` se refiere a los permisos y privilegios que se le otorgan a un usuario una vez que ya esta autenticado. La autorización determina qué es lo que puede y no acceder un usuario específico. Por ejemplo, un usuario autenticado puede tener permisos para leer, escribir o eliminar ciertos datos o para acceder a ciertas áreas de una aplicación.
## Pregunta 3 (2 puntos)
Un middleware es un componente que envuelve la ejecución de una unidad central (función) y puede
inspeccionar y modificar datos de entrada y salida sin cambiar su interfaz. El middleware suele estar
encadenado, por lo que cada uno invoca al siguiente y sólo el último de la cadena ejecuta la lógica
central. El encadenamiento tiene como objetivo mantener el middleware pequeño y de un solo
propósito.
### Pregunta 
¿Qué pasa si omite el middleware de Rack y se pasa la solicitud al enrutador directamente (Rails.application.routes.call(request))? 
### Respuesta:
Si se omite el middleware de Rack y se pasa la solicitud directamente al enrutador ``(Rails.application.routes.call(request))``, se estaría evitando el procesamiento de los middlewares en la cadena. Esto haria que los middlewares que se encargan de tareas como la autenticación o el registro no se ejecutarían.
### Pregunta 
¿Qué pasa si se omitie el enrutador y llamar a una acción del controlador de inmediato (por ejemplo, ``PostsController.action(:index).call(request))?``
### Respuesta: 
Si se omite el enrutador y se llama directamente a una acción del controlador ``(por ejemplo, PostsController.action(:index).call(request))``, se estaría evitando la ejecución de todo el enrutamiento de la solicitud. Esto significa que la solicitud no pasaría por el enrutador para determinar qué acción del controlador debe ejecutarse en función de la ``URL`` y los parámetros de la ``HTTP request``.

En vez de eso, se estaría llamando directamente a la acción del controlador especificada. Sin embargo, esto significa que se omitirían las funcionalidades proporcionadas por el enrutador, como la generación de rutas, el manejo de parámetros y el enrutamiento basado en condiciones.
### Pregunta 
La gema trace_location (https://github.com/yhirano55/trace_location) es el pequeño ayudante de un
desarrollador curioso. Su objetivo principal es aprender qué sucede detrás de escena de las API simples
proporcionadas por librerías y frameworks. Te sorprenderá lo complejos que pueden ser los aspectos
internos de las cosas que das por sentado (por ejemplo, user.save en Active Record).
Diseñar API simples que resuelvan problemas complejos es un verdadero dominio del desarrollo de
software. En el fondo, esta joya utiliza la API TracePoint de Ruby (https://rubyapi.org/3.2/o/tracepoint),
una poderosa herramienta de introspección en tiempo de ejecución.
Utiliza trace_location para realizar algunos experimentos y analizar los resultados.
### Respuesta:
Podemos realizar un seguimiento del proceso de validación del registro:

```ruby
book = Book.new(title: "My Book Title")
TraceLocation.trace(match: /activerecord/) { book.validate }
```
Y podemos observar en el ``.log`` el proceso de validacion del regtro:
![Alt text](image.png)

## Pregunta 4 (2 punto)
Prepara un one-liner (https://linuxcommandlibrary.com/basic/oneliners) de Unix para mostrar los N
primeros archivos complejos de Ruby usando Flog. 
## Respuesta

```bash
find . -name "*.rb" -exec flog {} + | sort -n | tail -n 4
```
```bash
OUTPUT:
```
![Alt text](image-1.png)

## Parte 3: JavaScript
### Pregunta1 (2 puntos)
Crea varias funciones que te permitirán interactuar con las cookies de la página, incluida la lectura de un
valor de cookie por nombre, la creación de una nueva cookie usando un nombre y su configuración para
una cantidad determinada de días, y la eliminación de una cookie.
Configura tu página web y, en el código JavaScript, genera el valor de documento.cookie que debería
estar en blanco. Intenta eliminar un cookie por su nombre.
### Respuesta
Vamos a usar un ejemplo muy simple con el siguiente codigo:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Prueba de Cookies</title>
  <script>
    function getCookie(name) {
    const cookieName = `${name}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
  
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
  
    return '';
  }
  
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  }
  
  function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  }
  

    function configurePage() {

      setCookie('miCookie', 'valor de ejemplo', 7); // Nombre de la cookie: 'miCookie', Valor: 'valor de ejemplo', Duración: 7 días

      const cookieValue = getCookie('miCookie');
      console.log('Valor de la cookie:', cookieValue);

      deleteCookie('miCookie');
      console.log('Cookie eliminada');
    }
    console.log(document.cookie);
    configurePage();
  </script>
</head>
<body>
  <h1>Prueba de Cookies</h1>
</body>
</html>
```
y podemos comprobar nuestra creacion de coockies y nuestro ``docuemnt.cookie``:
![Alt text](image-3.png)
## Pregunta 2 (1 punto)
Este ejercicio es un ejemplo de una estructura de formulario típica en la que se verifican los valores
ingresados en el formulario y se validan antes de enviar el contenido. Se devuelve una respuesta al
usuario si los valores no cumplen con los criterios de validación en el código. Utiliza el siguiente HTML y
CSS como plantilla inicial:
```html
<!doctype html>
<html>

<head>
    <title>Curso CC-3S2</title>
    <style>
        .hide {
            display: none;
        }

        .error {
            color: red;
            font-size: 0.8em;
            font-family: sans-serif;
            font-style: italic;
        }

        input {
            border-color: #ddd;
            width: 400px;
            display: block;
            font-size: 1.5em;
        }
    </style>
</head>

<body>
    <form name="myform">
        Email:
        <input type="text" name="email"> <span class="error"></span>
        <br> Password:
        <input type="password" name="password"> <span class="error"></span>
        <br> User Nombre:
        <input type="text" name="userName"> <span class="error"></span>
        <br>
        <input type="submit" value="Sign Up">
    </form>
    <script>
    </script>
</body>
</html>
```
Seleccionar todos los elementos de la página y configurarlos como objetos JavaScript:
```javascript
        const form = document.querySelector('form[name="myform"]');
        const emailInput = document.querySelector('input[name="email"]');
        const passwordInput = document.querySelector('input[name="password"]');
        const userNameInput = document.querySelector('input[name="userName"]');
        const errorElements = document.querySelectorAll('.error');
```
Agregar un detector de eventos para enviar y capturar el clic
```javascript
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Evitar la acción predeterminada del formulario

            // Recorrer todos los elementos de la página con la clase "error" y agregar la clase "ocultar"
            errorElements.forEach(function (element) {
                element.classList.add('ocultar');
            });

            // Utilizar una expresión regular para validar el formato del correo electrónico
            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            const emailValue = emailInput.value;

            // Validar el campo de correo electrónico
            if (!emailRegex.test(emailValue)) {
                handleError(emailInput, 'El correo electrónico no es válido');
            }

            // Validar el campo de contraseña
            const passwordValue = passwordInput.value;
            const passwordRegex = /^[a-zA-Z0-9]+$/;

            if (!passwordRegex.test(passwordValue) || passwordValue.length < 3 || passwordValue.length > 8) {
                handleError(passwordInput, 'La contraseña debe contener solo letras y números y tener entre 3 y 8 caracteres');
            }

            // Verificar si hay errores antes de enviar el formulario
            if (!document.querySelector('.error:not(.ocultar)')) {
                const formData = {};

                // Agregar valores al objeto formData recorriendo todas las entradas
                formData.email = emailValue;
                formData.password = passwordValue;
                formData.userName = userNameInput.value;

                // Enviar el objeto formData
                console.log('Datos del formulario:', formData);
            }
        });
```
### Ejemplo de error:

![Alt text](image-4.png)
### Ejemplo correcto:
![Alt text](image-5.png)