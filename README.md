# Parte 2: Ruby on Rails
## Pregunta 1 (1 punto)
¿Por qué la abstracción de un objeto de formulario pertenece a la capa de presentación y no a la capa
de servicios (o inferior)?
## Respuesta:
Los formularios son una parte integral de la interfaz de usuario y están directamente relacionados con la presentación de datos al usuario. La capa de presentación se encarga de manejar la interacción con el usuario y de mostrar la información de una manera comprensible. Y además los formularios suelen contener lógica de validación y formateo de datos, lo cual es la responsabilidad de la capa de presentación. La capa de servicios o inferior se centra más en la lógica empresarial y en la manipulación de los datos en las bases de datos, por lo que la abstracción de un objeto de formulario no estaria relacionada en esta capa.
## Pregunta 2 (1 punto)
¿Cuál es la diferencia entre autenticación y autorización?
## Respuesta:
La autenticación y la autorización son dos conceptos diferentes pero relacionados en el concepto de la seguridad informática:

La autenticación se refiere al proceso de verificar la identidad de un usuario. Se utiliza para confirmar que un usuario es quien dice ser. Esto generalmente se logra mediante la presentación de credenciales, como un nombre de usuario y una contraseña.

La autorización, por otro lado, se refiere a los permisos y privilegios que se le otorgan a un usuario una vez que se ha autenticado. La autorización determina qué acciones o recursos puede acceder un usuario específico. Por ejemplo, un usuario autenticado puede tener permisos para leer, escribir o eliminar ciertos datos o para acceder a ciertas áreas de una aplicación. La autorización se utiliza para controlar y limitar el acceso a recursos protegidos y garantizar la seguridad y la privacidad de la información.
## Pregunta 3 (2 puntos)
Un middleware es un componente que envuelve la ejecución de una unidad central (función) y puede
inspeccionar y modificar datos de entrada y salida sin cambiar su interfaz. El middleware suele estar
encadenado, por lo que cada uno invoca al siguiente y sólo el último de la cadena ejecuta la lógica
central. El encadenamiento tiene como objetivo mantener el middleware pequeño y de un solo
propósito.
Un caso de uso típico del middleware es agregar registro, instrumentación o autenticación. El patrón es
popular en la comunidad Ruby y, aparte de Rack, lo utilizan Sidekiq, Faraday, AnyCable, etc. En el mundo
que no es Ruby, el ejemplo más popular sería Express.js.
Rails incluye más de 20 middlewares por defecto. Puedes ver la pila de middleware ejecutando el
comando bin/rails middleware:
Aprendimos que manejar una solicitud web implica miles de llamadas a métodos y objetos Ruby
asignados. 
### ¿Qué pasa si omite el middleware de Rack y se pasa la solicitud al enrutador directamente
(Rails.application.routes.call(request))? 
### ¿Qué pasa si se omitie el enrutador y llamar a una acción del controlador de inmediato (por ejemplo, PostsController.action(:index).call(request))?
La gema trace_location (https://github.com/yhirano55/trace_location) es el pequeño ayudante de un
desarrollador curioso. Su objetivo principal es aprender qué sucede detrás de escena de las API simples
proporcionadas por librerías y frameworks. Te sorprenderá lo complejos que pueden ser los aspectos
internos de las cosas que das por sentado (por ejemplo, user.save en Active Record).
Diseñar API simples que resuelvan problemas complejos es un verdadero dominio del desarrollo de
software. En el fondo, esta joya utiliza la API TracePoint de Ruby (https://rubyapi.org/3.2/o/tracepoint),
una poderosa herramienta de introspección en tiempo de ejecución.
Utiliza trace_location para realizar algunos experimentos y analizar los resultados.