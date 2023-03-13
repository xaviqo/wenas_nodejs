[REST](#rest)

[HTTP VERBOS](#http-verbos)

[CRUD](#crud)


# REST

REST son las siglas de *REPRESENTATIONAL STATE TRANSFER*. Es un tipo de arquitectura de software utilizado en sistemas distribuidos y aplicaciones web.

REST se compone por un conjunto de principios y restricciones:

- **CLIENTE-SERVIDOR**: El cliente no necesita conocer la implementación interna del servidor y el servidor no necesita saber como se están utilizando los datos.
- **SIN ESTADO**: En cada petición recibida, se debe incluir toda la información necesaria para entender la solicitud, ya que el servidor no almanac el estado de la sesión del cliente.
- **CACHEABLE**: En los *headers* (cabeceras) de las respuestas por parte del servicio REST se debe indicar si estas son _cacheables_ o _no cacheables_, reduciendo el numero de solicitudes realizadas.
- **INTERFAZ UNIFORME**: Estandarización de la interfaz de uso. Los recursos deben tener una identificación única (como una URL) y los mensajes de la comunicación deben ser manipulados a través de representaciones (XML, JSON...) comprensibles por ambos extremos.
- **SISTEMA DE CAPAS**: Una arquitectura REST puede incluir capas intermedias, como balanceadores de carga, sistemas de caché y sistemas de seguridad.

# HTTP VERBOS

Los verbos HTTP son acciones o instrucciones que se utilizan en las llamadas por parte de un cliente a un recurso web.

Los más comunes son:

- **GET**: Se utiliza para **obtener** información de un recurso web. El ejemplo más sencillo es cuando se hace una solicitud a un servidor web para mostrarla en el navegador. Esta solicitud **no** modifica el estado del servidor.
- **POST**: Este verbo se utiliza para **enviar** informacíon a el servicio web. Por ejemplo, un formulario. Los datos enviados pueden ser procesados y persistidos en el servidor.
- **PUT**: El verbo PUT se usa para **actualizar** un recurso ya existente, como puede ser un cambio de contraseña.
- **DELETE**: Una solicitud DELETE se utiliza para **eliminar** recursos del servidor, como registros de la base de datos o archivos almacenados.

Existen otra gran cantidad de verbos HTTP, pero son mucho menos comúnes:

*HEAD, OPTIONS, TRACE, LINK, PATCH...*
# CRUD

Es el acrónimo de "Crear, Leer, Actualizar y Borrar", en inglés *"Create, Read, Update and Delete"*, que representan las operaciones básicas de un software que interactua con una base de datos.

- **CREATE**: Insertar nuevos registros en la base de datos. Asociado a el verbo POST.
- **READ**: Obtener los registros existentes en la base de datos. Asociado a el verbo GET.
- **UPDATE**: Actualizar o modificar registros en la base de datos. Asociado el verbo PUT.
- **DELETE**: Eliminar registros de la base de datos. Asociado a el verbo DELETE.



