# Índice

-[Web estática y web dinámica](#Web-estática-y-web-dinámica)

-[Fetch](#fetch)

 - [Uso del fetch](#Uso-del-fetch)
 - [Promesas](#Promesas)
 - [Async/Await](#Async/Await)

# Web estática y web dinámica

Las páginas **web estáticas** son aquellas que se presentan tal y como fueron diseñadas y codificadas originalmente, y no cambian su contenido en función de la interacción del usuario. Estas páginas web son muy útiles cuando se desea presentar información que no cambia con frecuencia y que no requiere una actualización constante. Además, son muy rápidas en la carga, ya que no necesitan generar contenido nuevo cada vez que un usuario accede a ellas. También son más seguras, ya que no permiten la ejecución de scripts o la modificación de la base de datos.

Por otro lado, las páginas **web dinámicas** sí permiten la interacción del usuario y pueden cambiar su contenido en función de las acciones que realice. Estas páginas suelen ser utilizadas para aplicaciones web, como redes sociales o tiendas online, ya que necesitan una interacción constante con el usuario y un acceso a una base de datos para mostrar información actualizada. 
A diferencia de las páginas web estáticas, las dinámicas requieren más tiempo de carga, porque necesitan conectarse con una base de datos para generar contenido nuevo cada vez que un usuario accede a ellas. Sin embargo, son más fáciles de actualizar y permiten una mayor escalabilidad, lo que significa que pueden manejar un mayor volumen de usuarios y contenido sin perder su funcionalidad.
	 
# Fetch

Fetch es una herramienta de JavaScript que se utiliza para obtener y enviar datos desde y hacia un servidor. Es una forma moderna y más fácil de hacerlo que la técnica antigua XMLHttpRequest. Se utiliza para actualizar partes de una página sin recargarla por completo. También se utiliza para enviar datos al servidor.

La sintaxis básica de Fetch es la siguiente: 

> fetch(url) .then(response => response.json()) .then(data => 
> console.log(data)) .catch(error =>  console.error(error));

Se le pasa una URL para realizar la solicitud y devuelve una promesa que se puede procesar con diferentes métodos de respuesta. Se pueden agregar headers a la solicitud para incluir información adicional, y se pueden enviar diferentes tipos de datos en el cuerpo de la solicitud. Además, existen diferentes verbos que indican el tipo de acción que se va a realizar en el servidor.

Ejemplo recuperando un archivo .json:

>
>const message = document.getElementById('message'); message.textContent = 'Cargando...';
>
> fetch('https://tuJson.com/todos/1') .then(response
> => response.json()) .then(data =>  console.log(data)) .catch(error =>  console.error(error)) .finally(() => { message.textContent = ''; });

En este caso, utilizaremos el **metodo finally** para que el mensaje de carga desaparezca tanto si la solicitud es exitosa como si falla. Hay que tener en cuenta que finally se ejecutará siempre, aunque capture un error.

## Uso del fetch

Sabiendo la sintaxis básica del fetch, hay unos conceptos importantes que son necesarios saber:
-   **Headers**: Los headers son objetos que contienen información adicional sobre la solicitud o respuesta. Puedes agregar headers a una solicitud fetch para incluir información como el tipo de contenido que esperas recibir, la autorización, el tipo de codificación, entre otros.
- **Body**: en una solicitud fetch es el contenido que se envía con la solicitud. Puede ser cualquier tipo de datos, como una cadena de texto, un objeto JSON, un archivo binario,
-   **Verbos/Method**: Se utilizan para indicar el tipo de acción que se va a realizar en el servidor. Los métodos más comunes son **GET** (obtener datos), **POST** (enviar datos), **PUT** (actualizar datos), **DELETE** (eliminar datos).
    
> let data = { name: 'Juan', email: 'juan@ejemplo.com' };
> 
> fetch('https://tuApi.com/user', {
>  **method**: 'POST', 
>  **headers**: {
> 'Content-Type': 'application/json' }, 
> **body**: JSON.stringify(data) })
> .then(response => response.json()) .then(data =>  console.log(data))
> .catch(error =>  console.error(error)); 

En este ejemplo, estamos enviando un objeto JSON que contiene un nombre y una dirección de correo electrónico al servidor en el cuerpo de una solicitud POST. También incluimos un header 'Content-Type' para indicar que el cuerpo de la solicitud es un objeto JSON.

### Promesas:


Las promesas son una forma de hacer que el trabajo asíncrono sea más fácil de manejar en JavaScript. En lugar de bloquear el código, las promesas permiten que el código continúe ejecutándose y procesando los resultados a medida que estén disponibles, lo que lo hace más escalable y fácil de leer.

> const promise = new  Promise((resolve, reject) => { setTimeout(() => {
> resolve('¡Promesa resuelta!'); }, 2000); }); promise.then((result) =>
> { console.log(result); // ¡Promesa resuelta! }).catch((error) => {
> console.error(error); });

 - En este ejemplo, creamos una promesa que se resuelve después de 2 segundos utilizando el método setTimeout. Dentro del constructor de la promesa, pasamos dos funciones: resolve y reject, que se utilizan para resolver o rechazar la promesa, respectivamente.
 - Luego, llamamos al método then de la promesa para manejar el resultado cuando la promesa se resuelve exitosamente. En este caso, simplemente imprimimos el resultado en la consola.
 - Finalmente, utilizamos el método catch para manejar cualquier error que pueda ocurrir durante la ejecución de la promesa.

### Async/Await
Async/await es una forma más moderna de manejar las promesas en JavaScript y hacer el código asíncrono más legible y fácil de entender. Aquí hay un ejemplo de cómo usar async/await para hacer una solicitud a una API usando el método fetch:

> async  function  fetchData() { try { const response = await 
> fetch('https://tuApi.com/users'); const data =
> await response.json(); console.log(data); } catch (error) {
> console.log(error); } }

En este ejemplo, creamos una función con la etiqueta async. Dentro de la función, usamos await para esperar la respuesta de la solicitud fetch y luego convertir los datos en un objeto usando el método json(). Finalmente, imprimimos los datos en la consola.
