# Índice

- [Índice](#índice)
- [Web estática y web dinámica](#web-estática-y-web-dinámica)
- [Función Fetch](#función-fetch)
  - [Sintaxis](#sintaxis)
  - [Request()](#request)
  - [Headers()](#headers)
- [Métodos HTTP](#métodos-http)
- [Promesas en JavaScript](#promesas-en-javascript)
- [Async/await](#asyncawait)
  - [Funciones asíncronas](#funciones-asíncronas)
  - [Await](#await)
- [Cargar datos dinámicamente en una web estática](#cargar-datos-dinámicamente-en-una-web-estática)
  - [Uso de Fetch para cargar datos dinámicamente](#uso-de-fetch-para-cargar-datos-dinámicamente)
- [Colaboradores](#colaboradores)
 

# Web estática y web dinámica

Las páginas **web estáticas** son aquellas que se presentan tal y como fueron diseñadas y codificadas originalmente, y no cambian su contenido en función de la interacción del usuario. Estas páginas web son muy útiles cuando se quiere presentar información que no cambia con frecuencia y que no requiere una actualización constante. Además, son muy rápidas en la carga, ya que no necesitan generar contenido nuevo cada vez que un usuario accede a ellas. También son más seguras, ya que no permiten la ejecución de scripts o la modificación de la base de datos.

Por otro lado, las páginas **web dinámicas** sí permiten la interacción del usuario y pueden cambiar su contenido en función de las acciones que realice. Estas páginas suelen ser utilizadas para aplicaciones web, como redes sociales o tiendas online, ya que necesitan una interacción constante con el usuario y un acceso a una base de datos para mostrar información actualizada. 
A diferencia de las páginas web estáticas, las dinámicas requieren más tiempo de carga, porque necesitan conectarse con una base de datos para generar contenido nuevo cada vez que un usuario accede a ellas. Sin embargo, son más fáciles de actualizar y permiten una mayor escalabilidad, lo que significa que pueden manejar un mayor volumen de usuarios y contenido sin perder su funcionalidad.
	 
# Función Fetch

La función Fetch es una API moderna de JavaScript que permite realizar solicitudes de red y obtener recursos desde un servidor web. La función Fetch se utiliza comúnmente para obtener y actualizar datos de una API web. La función Fetch es compatible con promesas, lo que la hace fácil de usar y manejar.

## Sintaxis

```javascript
fetch(url, [options])
  .then((response) => {
    // Procesar la respuesta
  })
  .catch((error) => {
    // Gestionar el error
  });
```

- url: La URL de la solicitud.
- options: Un objeto opcional que define las opciones de la solicitud. Las opciones incluyen:
  - [method](#métodos-http): El método HTTP de la solicitud (GET, POST, PUT, DELETE, etc.).
  - [headers](#headers): Un objeto que contiene los encabezados de la solicitud.
  - body: El cuerpo de la solicitud. Esto se utiliza principalmente en solicitudes POST o PUT.
  - mode: El modo de la solicitud (cors, no-cors, same-origin).
  - cache: El tipo de caché a utilizar (default, no-cache, reload, force-cache, only-if-cached).
  - redirect: El modo de redireccionamiento (follow, error, manual).
  - referrer: La URL de referencia de la solicitud.
  - referrerPolicy: El modo de política de referencia de la solicitud.
  - integrity: La integridad del contenido de la solicitud.

El método Fetch recibe una URL como parámetro y devuelve una promesa que se resuelve en una respuesta. La respuesta se procesa utilizando el método .then(), que a su vez devuelve otra promesa.

En Fetch, una promesa es un objeto que representa un valor que puede no estar disponible todavía. Cuando realizas una petición Fetch, la función devuelve una promesa que se resolverá una vez que se reciba la respuesta del servidor.

La promesa que se devuelve de Fetch puede ser resuelta o rechazada, dependiendo de si la solicitud se completa con éxito o no. Si se completa con éxito, la respuesta incluirá información como el estado de la respuesta (200, 404, etc.), el tipo de contenido (JSON, texto, binario, etc.), los encabezados de la respuesta y los datos de la respuesta.

Si la solicitud falla, la promesa se rechazará y se puede gestionar el error utilizando el método .catch(). Por ejemplo, se puede mostrar un mensaje de error al usuario o intentar la solicitud nuevamente. Para saber más, se explica con más detalle en el siguiente apartado sobre las [promesas](#promesas-en-javascript).

##  Request()
Esta función se utiliza para crear un objeto Request que se puede utilizar en una solicitud fetch.
```javascript
const myRequest = new Request('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Mi nuevo post',
    body: 'Este es el contenido de mi nuevo post',
    userId: 1
  }),
  headers: new Headers({
    'Content-Type': 'application/json'
  })
});

fetch(myRequest)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
```

## Headers()
Esta función se utiliza para manejar los encabezados HTTP de una solicitud fetch.

```javascript
const myHeaders = new Headers();  Creamos un nuevo header
myHeaders.append('Tipo-Contenido, 'aplicacion/json');  append() para agregar un encabezado con clave Content-Type y valor 'application/json

fetch('https://jsonplaceholder.typicode.com/posts', { --Esto es el link de donde esta nuestra API 
  method: 'POST',
  headers: myHeaders,
  body: JSON.stringify({
    title: 'Mi nuevo post',
    body: 'Este es el contenido de mi nuevo post',
    userId: 1
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
```

A continuación, se muestra un ejemplo de cómo se puede utilizar Fetch para enviar datos de formulario a una API utilizando el método POST:

```javascript
const data = { nombre: "Juan", edad: 25 };

fetch("https://ejemplo.com/api/usuarios", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("La respuesta del servidor no fue satisfactoria");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Ocurrió un error:", error);
  });
```

En este ejemplo, se especifica el método POST y se definen los encabezados de la solicitud como "application/json" para indicar que se está enviando un objeto JSON en el cuerpo de la solicitud.

La función "fetch()" devuelve una promesa que se resuelve con la respuesta del servidor. Luego, se llama a la función "then()" con la respuesta como argumento. Si la respuesta del servidor no es satisfactoria, se lanza un Error utilizando la instrucción "throw". De lo contrario, se convierte la respuesta en formato JSON utilizando la función "json()", y se llama a otra función "then()" con los datos como argumento.

# Métodos HTTP
- GET: Este método se utiliza para recuperar recursos de un servidor. La solicitud GET no tiene cuerpo de solicitud y se utiliza para obtener información del servidor.

```javascript
fetch('https://jsonplaceholder.typicode.com/posts') .then(response =>  	response.json()) .then(data =>  console.log(data));
```
- POST: Este método se utiliza para enviar datos al servidor para que se procesen. La solicitud POST tiene un cuerpo de solicitud que contiene los datos que se envían al servidor.
```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Mi nuevo post',
    body: 'Este es el contenido de mi nuevo post',
    userId: 1
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(response => response.json())
.then(data => console.log(data));
```
- PUT: Este método se utiliza para actualizar recursos existentes en el servidor. La solicitud PUT tiene un cuerpo de solicitud que contiene los datos actualizados.
```javascript
 fetch('https://jsonplaceholder.typicode.com/posts/1', {
    	  method: 'PUT',
    	  body: JSON.stringify({
    	    id: 1,
    	    title: 'Mi post actualizado',
    	    body: 'Este es el contenido actualizado de mi post',
    	    userId: 1
    	  }),
    	  headers: {
    	    'Content-type': 'application/json; charset=UTF-8',
    	  },
    	})
    	.then(response => response.json())
    	.then(data => console.log(data));
```
- DELETE: Este método se utiliza para eliminar recursos existentes en el servidor. La solicitud DELETE no tiene un cuerpo de solicitud y se utiliza para eliminar recursos del servidor.
```javascript
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
.then(response => console.log(response.status));
```
- PATCH: Este método se utiliza para actualizar parcialmente recursos existentes en el servidor. La solicitud PATCH tiene un cuerpo de solicitud que contiene los datos actualizados.
```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'Mi post actualizado',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(response => response.json())
.then(data => console.log(data));
```

# Promesas en JavaScript

Una promesa es un objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca. Las promesas son una forma de trabajar con operaciones asíncronas en JavaScript de manera más sencilla y legible.

Una promesa tiene tres estados posibles:

- Pendiente: el resultado aún no está disponible.
- Resuelto: el resultado está disponible y la promesa se cumple (se resuelve) con un valor.
- Rechazado: la operación falló y la promesa se rechaza (se rechaza) con una razón.

Para crear una promesa, utilizamos la clase **Promise** y le pasamos una función que contiene la lógica de la operación asíncrona. Esta función toma dos argumentos: **resolve** y **reject**, resolve se utiliza para indicar que la operación asíncrona se ha completado correctamente y reject se utiliza para indicar que ha fallado.

A continuación, un ejemplo de cómo crear una promesa que se resuelve después de un cierto tiempo:

```javascript
const miPromesa = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Operación completada');
	}, 2000);
});
```
Podemos utilizar **then** para ejecutar una acción cuando la promesa se resuelve:

```javascript
miPromesa.then(resultado => {
	console.log(resultado);
});
```
También podemos utilizar catch para manejar un posible error:
```javascript
miPromesa.catch(error => {
	console.error(error);
});
```
Si queremos ejecutar una acción independientemente de si la promesa se resuelve o falla, podemos utilizar finally:

```javascript
miPromesa.finally(() => {
	console.log('Operación finalizada');
});
```

# Async/await

async/await es una característica de JavaScript que facilita el trabajo con código asíncrono y lo hace más fácil de leer y escribir.

Antes de la introducción de async/await, la forma más común de trabajar con código asíncrono en JavaScript era utilizando callbacks o promesas. Sin embargo, esto a menudo llevaba a un código confuso y difícil de leer.

async/await es una forma más intuitiva de trabajar con código asíncrono. Permite que el código asíncrono parezca síncrono, lo que hace que sea más fácil de entender.

## Funciones asíncronas

Una función asíncrona se define utilizando la palabra clave async antes de la definición de la función. Esto indica que la función es asíncrona y que puede contener operaciones asíncronas.

```javascript
async function miFuncionAsincrona() {
  // código aquí
}
```
Una función async devuelve una promesa, lo que significa que puedes usar los métodos then, catch y finally para manejar el resultado o el error de la promesa. La sintaxis básica de una función async es la siguiente:

```javascript
async function obtenerDatos() {
  const respuesta = await fetch('https://ejemplo.com/datos');
  if (!respuesta.ok) {
    throw new Error('Error al obtener los datos');
  }
  const datos = await respuesta.json();
  return datos;
}

obtenerDatos()
  .then(datos => {
    // Manejar los datos
    console.log(datos);
  })
  .catch(error => {
    // Manejar el error
    console.error(error);
  })
  .finally(() => {
    // Realizar acciones finales
    console.log('Obtención de datos finalizada');
  });

```
## Await

await es una palabra clave que sólo puede ser utilizada dentro de una función asíncrona. Se utiliza para esperar el resultado de una operación asíncrona, como una llamada a una API o una operación de lectura/escritura en una base de datos.

Cuando se utiliza await, la función asíncrona se pausa temporalmente hasta que se complete la operación asíncrona y se devuelva un resultado.

Hay varias formas de gestionar los await:

```javascript
//Ejemplo 1:
async function miFuncionAsincrona() {
  try {
    const resultado = await FuncionConFetch();
  } catch (error) {
    //error
  }
  // código aquí
}

//Ejemplo 2:
async function miFuncionAsincrona() {
  try {
    const resultado = await fetch("https://ejemplo.com/datos");
    const datos = await resultado.json();
  } catch (error) {
    //error
  }
}
```

Por un lado, en los dos ejemplos se gestionan los errores de la mimsa manera. Al igual que con las promesas, las funciones asíncronas pueden lanzar errores en caso de fallos. Para manejar estos errores, se puede utilizar un bloque try...catch.

Por otro lado, la diferencia entre el primer ejemplo y el segundo es que en el primer ejemplo se utiliza await para esperar el resultado de una operación asíncrona, mientras que en el segundo ejemplo se utiliza await para esperar la respuesta de una llamada a una API utilizando la función fetch.

En el primer ejemplo, FuncionConFetch() es cualquier función que devuelva una promesa, por ejemplo, una operación de lectura/escritura en una base de datos o una llamada a una API. En nuestro caso, será una llamada a la API a través de un fetch. El await indica que la función asíncrona FuncionConFetch() debe esperar a que se complete la operación asíncrona antes de continuar con la ejecución del código. Si hay algún error, se gestiona en el bloque catch.

En el segundo ejemplo, se utiliza fetch() para realizar directamente una llamada a una API y se utiliza await para esperar la respuesta de la llamada. Una vez que se recibe la respuesta, se utiliza await para esperar a que la respuesta sea convertida en formato JSON. Como en el primer ejemplo, se maneja en el bloque catch si ocurre algún error en cualquiera de las dos operaciones asíncronas.

# Cargar datos dinámicamente en una web estática

La carga de datos dinámica implica la obtención de información en tiempo real desde una fuente externa, como una API, base de datos o un archivo JSON. En una aplicación web, la carga de datos dinámica permite actualizar la interfaz de usuario sin recargar la página completa.

## Uso de Fetch para cargar datos dinámicamente

La función Fetch se puede utilizar para cargar datos dinámicamente en una aplicación web. Para cargar datos dinámicamente, se utiliza la función Fetch para obtener los datos de una fuente externa, y luego se manipulan los datos y se actualiza la interfaz de usuario utilizando el método DOM.

 Ejemplo:

En este ejemplo, metemos los datos dinamicamente directamente desde el Fetch.

HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Uso de Fetch para cargar datos dinámicamente</title>
  </head>
  <body>
    <h1>Lista Dinámica</h1>
    <div id="mi-lista">
      <ul id="lista"></ul>
    </div>
  </body>
</html>
```

Javascript:

```javascript
function obtenerDatos() {
  return fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => {
      const lista = document.querySelector("#lista");
      data.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.nombre;
        lista.appendChild(li);
      });
    })
    .catch((error) => console.error(error));
}

document.querySelector("#boton-cargar").addEventListener("click", obtenerDatos);
```


# Colaboradores

Júlia Arias, Yago Claros, Dana Diplas, Mariama Tamba, Ainhoa Ortega y Raul Muñoz