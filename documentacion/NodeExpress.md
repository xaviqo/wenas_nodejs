# NODE Y EXPRESS

- [NODE Y EXPRESS](#node-y-express)
  - [**NODE**](#node)
    - [**Que Es Node**](#que-es-node)
    - [**Como Funciona**](#como-funciona)
    - [**NPM**](#npm)
    - [**Instalación**](#instalación)
      - [Windows](#windows)
      - [MacOS](#macos)
      - [Linux](#linux)
  - [**EXPRESS**](#express)
    - [**Que Es Express**](#que-es-express)
    - [**Que Nos Proporciona**](#que-nos-proporciona)
    - [**Instalación**](#instalación-1)

## **NODE**

### **Que Es Node**

Node.js es un entorno multiplataforma que trabaja en tiempo de ejecución de un solo hilo basado en el motor V8 de JavaScript de Google Chrome.

Es un software de código abierto, escrito en javascript simple, que podemos usar para construir aplicaciones de red escalables y en tiempo real.

### **Como Funciona**

Node.js como un único proceso, lo que significa que no crea un nuevo hilo para cada petición. Un hilo es un conjunto de instrucciones que debe realizar el servidor.

Emplea operaciones de E/S no bloqueantes: cuando un cliente envía una solicitud al servidor web, el bucle de eventos de un solo hilo la recoge y la envía a un worker thread (hilo trabajador) para su procesamiento.

En lugar de bloquear el hilo y desperdiciar recursos de la CPU esperando una respuesta, Node.js continuará trabajando en la siguiente tarea de forma asincrona. De esta manera, puede manejar una cantidad masiva de peticiones simultáneas.

### **NPM**

Node Package Manager o npm es un gestor de paquetes que permite a las comunidades de JavaScript y Node.js publicar y compartir sus módulos de Node con otras personas. Esto hace que el proceso de desarrollo de aplicaciones sea más rápido y eficiente.

NPM alberga millones de paquetes descargables que están organizados en múltiples categorías. Está considerado como el mayor registro de software del mundo. Toda la biblioteca de módulos empaquetados se puede encontrar en el sitio web oficial.

Por defecto, npm viene con cada instalación de Node.js. Para utilizarlo, es necesario descargar los paquetes en el sitio web oficial.

### **Instalación**

#### Windows

Sigue estas instrucciones para instalar Node.js en un equipo con Windows:

1. Descarga el [instalador de Node.js](https://nodejs.dev/en/download/) directamente desde la web oficial.
2. Haz doble clic en el archivo descargado, se abrirá la ventana de instalación de Node.js. Pulsa Next.
3. Revisa el Acuerdo de Licencia de Usuario Final y marca I accept the terms in the License Agreement. Pulsa Next.
4. Elige la carpeta de destino y pulsa Next.
5. Selecciona las características que se van a instalar. Si no estás seguro, deja los valores por defecto y pulsa Next.
6. En la página siguiente, marca Automatically install the necessary tools. Haz clic en Next y luego en Install. Es posible que te pregunte si deseas permitir que el programa de instalación realice cambios, elige Yes.
7. Para verificar la versión de Node.js, abre el símbolo del sistema y ejecuta el siguiente comando:  
`node -v`  
`npm -v`

#### MacOS

A continuación, se explica cómo instalar Node.js en un equipo macOS:

1. Descarga la última versión del [instalador de Node.js](https://nodejs.dev/en/download/) desde la web oficial.
2. Haz doble clic en el archivo descargado y se abrirá la ventana de instalación de Node.js. Haz clic en Continue.
3. Revisa el Acuerdo de Licencia de Software y selecciona Continue.
4. Selecciona la carpeta de destino y pulsa Continue.
5. Revisa el tipo de instalación y pulsa Install.
6. Comenzará el proceso de instalación.
7. Tanto Node.js como NPM estarán disponibles después de la instalación. Pulsa Close para finalizar la instalación.
8. A continuación, pulsa el icono de Launchpad en el dock y abre Terminal.
9. Verifica la instalación de Node.js y NPM escribiendo los siguientes comandos:  
`node -v`  
`npm -v`

#### Linux

Sigue los siguientes pasos para instalar Node.js en Linux. En este tutorial usaremos Ubuntu.

1. Haz clic en el botón Mostrar aplicaciones y abre Terminal.
2. Ejecuta el siguiente comando para instalar Node.js:  
`sudo apt install nodejs`  
3. Una vez que tu dispositivo Linux haya completado la instalación, tendrás que instalar NPM.  
`sudo apt install npm`
4. A continuación, verifica la versión de Node.js ejecutando estos comandos:  
`nodejs -v`  
`npm -v`

## **EXPRESS**

### **Que Es Express**

Express es el framework web más popular de Node, y es la librería subyacente para un gran número de otros frameworks web de Node populares.

Express es un marco de aplicación web de Node.js minimalista y flexible, muy popular debido a su flexibilidad y facilidad de uso, que se utiliza para crear aplicaciones web y API.

### **Que Nos Proporciona**

- Escritura de manejadores de peticiones con diferentes verbos HTTP como GET, POST, PUT y DELETE en diferentes caminos URL (rutas).  
- Integración con motores de renderización de "vistas" para generar respuestas mediante la introducción de datos en plantillas.  
- Establecer ajustes de aplicaciones web como qué puerto usar para conectar, y la localización de las plantillas que se utilizan para renderizar la respuesta.  
- Añadir procesamiento de peticiones "middleware" adicional en cualquier punto dentro de la tubería de manejo de la petición.  
***middleware:*** *El middleware es una función que se ejecuta en el proceso de solicitud y respuesta de una aplicación y puede ser utilizado para realizar tareas como la autenticación, la validación de datos, la compresión de respuestas y más*

### **Instalación**

1. Dentro de nuesto directorio de trabajo Utilice el mandato npm init para crear un archivo package.json para la aplicación.  
`npm init`
2. Se nos solicitará varios elementos como, por ejemplo, el nombre y la versión de la aplicación. Podemos pulsar INTRO para aceptar los valores predeterminados o poner los valores que prefiramos.
3. A continuación, instale Express en el directorio myapp y guárdelo en la lista de dependencias. Por ejemplo:  
`$ npm install express --save`

*Nota: Para instalar express temporalmente omitir la opcion `--save`*
