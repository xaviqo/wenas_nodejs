# DOCUMENTACIÓN REST

[REST](#rest)

[HTTP](#http)

[RUTAS](#rutas)

[CRUD](#crud)

[CREACION API REST](#creación-de-api-rest)



##  **REST**

REST son las siglas de REPRESENTATIONAL STATE TRANSFER. Es un tipo de arquitectura de software utilizado en sistemas distribuidos y aplicaciones web.

Es un estilo de arquitectura de software que define un conjunto de restricciones para crear aplicaciones web. Estas restricciones se basan en el uso de protocolos HTTP y su modelo de comunicación cliente-servidor, los datos devueltos pueden estar en json o xml dependiendo de las necesidades del proyecto.

### **Ventajas de REST**

- Nos permite separar la parte de backend de la de frontend (Ej: C# y React).
- Es totalmente independiente de la plataforma por lo que no importa el sistema (Windows, Linux, Mac etc...) ni el lenguaje usado.
- Podemos añadir restricciones, podemos hacer nuestra API pública entera o parcialmente, o privada. Hacer uso de keys etc...

---

## **HTTP**
### **HTTP VERBOS**

Los verbos HTTP son acciones o instrucciones que se utilizan en las llamadas por parte de un cliente a un recurso web.

Los más comunes son:

- `GET`: Se utiliza para obtener información de un recurso web. El ejemplo más sencillo es cuando se hace una solicitud a un servidor web para mostrarla en el navegador. Esta solicitud no modifica el estado del servidor.
- `POST`: Este verbo se utiliza para enviar informacíon a el servicio web. Por ejemplo, un formulario. Los datos enviados pueden ser procesados y persistidos en el servidor.
- `PUT`: El verbo PUT se usa para actualizar un recurso ya existente, como puede ser un cambio de contraseña.
- `DELETE`: Una solicitud DELETE se utiliza para eliminar recursos del servidor, como registros de la base de datos o archivos almacenados.

Existen otra gran cantidad de verbos HTTP, pero son mucho menos comúnes:

HEAD, OPTIONS, TRACE, LINK, PATCH...

### **Códigos de estado HTTP**

La API devuelve los siguientes códigos de estado HTTP:

- `200 OK`: Solicitud exitosa.
- `201 Created`: Recurso creado exitosamente.
- `400 Bad Request`: Solicitud incorrecta.
- `404 Not Found`: Recurso no encontrado.

---

## **RUTAS**

### **¿Qué son?**

Las rutas o el direccionamiento de una página es una serie de rutas en la url que el programa utilizara para realizar según que acciones. Las acciones que se realizarán se basan en los verbos que están preestablecidos para cualquier sistema REST como hemos explicado anteriormente.

Al hacer la petición en el código podremos especificarleel verbo a utilizar los parámetros, cabeceras etc...

Ejemplos de enrutamiento básico para una BBDD con la tabla Alumnos:
### **GET**

Se utiliza para obtener los datos

Este seria un ejemplo de ruta para obtener toda una lista de usuarios

- **PETICION**

        GET https://api.misitio.com/usuarios

* **RESPUESTA**

```json
{
    "info":{
        "status":"succes",
        "code": 200
    },
    "data" :{
    "alumnos": [
      {
        "id": 1,
        "nombre": "Ana Pie",
        "nota": 7
      },
      {
        "id": 2,
        "nombre": "Eva Buja",
        "nota": 8
      },
      {
        "id": 3,
        "nombre": "Juan Ra",
        "nota": 4
      },
      {
        "id": 4,
        "nombre": "Rosa",
        "nota": 4
      }
    ]
    }
}
```

Este seria un ejemplo de ruta para obtener un usuario en concreto

- **PETICION**

        GET https://api.misitio.com/usuarios/1

- **RESPUESTA**

```json
{
    "info":{
        "status":"succes",
        "code": 200
    },
    "data" :{
    "alumnos": [
      {
        "id": 1,
        "nombre": "Ana Pie",
        "nota": 7
      }
    ]
    }
}
```

Este seria un ejemplo de ruta para obtener el nombre de un usuario en concreto

- **PETICION**

        GET: https://midominio.com/alumnos/1/nombre

* **RESPUESTA**

```json
{
    "info":{
        "status":"succes",
        "code": 200
    },
    "data" : { "nombre": "Ana Pie"}
}
```
---

### **POST**
Se utiliza para añadir/subir datos

Este seria un ejemplo de ruta para crear un usuario

- **PETICION**

        POST: https://midominio.com/alumnos

* **RESPUESTA**

```json
{
  "info": {
    "status": "succes",
    "code": 200
  },
  "data": { "id": 5 }
}
```

junto con los datos del usuario que se desean crear, que los pasarias por el body del fetch o la peticion.

---
### **PUT**

Se utiliza para actualizar los datos

Este seria un ejemplo de ruta para actualizar un usuario

- **PETICION**

        PUT: https://midominio.com/alumnos/3

* **RESPUESTA**

```json
{
  "info": {
    "status": "succes",
    "code": 200
  },
  "data": {
    "alumnos": [
      {
        "id": 3,
        "nombre": "Juan Ra Modificado ",
        "nota": 7
      }
    ]
  }
}
```

el id seria el identificador del usuario que quieres actulizar junto con sus nuevos datos.

---
### **DELETE**
 Sirve para eliminar informacion

  Este seria un ejemplo de ruta para eliminar un usuario

- **PETICION**

        DELETE: https://midominio.com/alumnos/3

* **RESPUESTA**

```json
{
  "info": {
    "status": "succes",
    "code": 200
  },
  "data": { "id": 3 }
}
```

el id seria el identificador del usuario que quieres eliminar.

---

## **CRUD**

### **¿Qué es?**

El CRUD es un acrónimo que significa Create, Read, Update y Delete. Es un conjunto de operaciones básicas que se pueden realizar sobre una base de datos. Estas operaciones son las que se utilizan en las aplicaciones web para crear, leer, actualizar y eliminar datos.

* **CREATE**: Para crear un nuevo usuario, utilice la ruta POST https://api.misitio.com/usuarios, junto con los datos del usuario que se desean crear.

* **READ**: Para obtener información de un usuario existente, utilice la ruta GET https://api.misitio.com/usuarios/{id}, donde {id} es el identificador único del usuario que se desea obtener.

* **UPDATE**: Para actualizar la información de un usuario existente, utilice la ruta PUT https://api.misitio.com/usuarios/{id}, donde {id} es el identificador único del usuario que se desea actualizar, junto con los nuevos datos que se desean guardar.

* **DELETE**: Para eliminar un usuario existente, utilice la ruta DELETE https://api.misitio.com/usuarios/{id}, donde {id} es el identificador único del usuario que se desea eliminar.

---

## **CREACIÓN DE API REST**

Crear una API REST implica diferentes pasos.

1. **Definir los recursos**: En primer lugar, se tienen que definir los recursos que estarán disponibles a través de la API. Los recursos pueden ser cosas como usuarios, productos, pedidos, etc.

2. **Definir las rutas**: Una vez que se hayan definido los recursos, se tiene que definir las rutas a través de las cuales se accederá a ellos. Cada recurso debe tener una ruta única que lo identifique.

3. **Configurar el servidor web**: A continuación, se tiene que configurar el servidor web que alojará la API REST. Se puede utilizar una variedad de frameworks web como Express, Koa, Hapi, etc.

4. **Implementar las operaciones CRUD**: Para cada recurso, se implementarán las operaciones CRUD (crear, leer, actualizar y eliminar). Estas operaciones son las formas en que los clientes interactúan con los recursos.

5. **Implementar la autenticación y autorización**: Es importante asegurarse de que solo los usuarios autorizados tengan acceso a los recursos de la API. Para lograrlo, tiene que haber un sistema de autenticación y autorización.

6. **Agregar la lógica de negocio**: Si la API REST tiene alguna lógica de negocio específica, se tiene que agregar. Esto podría incluir cosas como el cálculo de impuestos o la validación de la entrada del usuario.

7. **Agregar pruebas unitarias**: Para asegurarse de que la API REST funcione correctamente, se agregarán pruebas unitarias. Las pruebas unitarias permiten probar la funcionalidad de la API de manera aislada.

8. **Documentar la API**: Finalmente, se tiene que documentar la API para que los usuarios puedan entender cómo utilizarla. Esto podría incluir una lista de los recursos disponibles, las rutas disponibles, las operaciones CRUD disponibles y cualquier otro detalle relevante.