# React Template

Esta es una plantilla actualizada para desarrollo con React y Redux. Esta configurada para trabajar con less como preprocesador de textos, jest para creacion de pruebas unitarias; la base estilos es pure.css por lo que todas sus clases son aplicables a los componentes que se contruyan.

## Aplicacion de ejemplo

La plantilla cuenta con un aplicacion de ejemplo, no cuenta con React-router, esta enfocada en el uso de componentes para presentar diferentes secciones de la aplicacion.

## Estructura de archivos

Esta plantilla esta pensada para usarse asi:

### Folders


- components:    En este folder se deberan agregar todos los modulos con los que cuenta la aplicacion, en este ejemplo solo tenemos el todoModule, cada folder module a su vez debe tener al menos los siguientes archivos:

  - Container:   Es el componente principal del modulo, controla todos los subcomponentes que integran la aplicacion en el ejemplo solo exite TodoItem, el container es el unico que debera conectarse con Redux los demas componentes del folder seran dependendientes del Container, todos los componentes del modulo que no sean Container pueden o no tener estado, pero no se deben conectar a Redux, se sugiere en medida de lo posible que todos los componentes que dependan del Container sean stateless components.

  - Module:    Este archivo debera contener todas los tipos de acciones del modulo, los tipos no deben exportarse fuera del modulo, el reducer del modulo debe ser exportado por default y todas las acciones del modulo deberan exportarse y deben ser funciones puras, si se require lanzar una accion de otro modulo, hay que importar la funcion de la accion. No lanzar directamente el tipo, por ello se integra thunk-middleware ademas para llamadas asynchronas, esto se ve en el sig. ejemplo:

  ```javascript
  const newAction = actionArgument => dispatch => {
    dispatch(modulo1Action(actionArgument));
    dispatch(modulo2Action(actionArgument + "none"));
  }
  ```
- store:    Este folder contiene la configuracion de los reducers y el store, ademas del objeto contenedor del estado inicial, este estado inicial debe actualizarse cada vez que se agregan funcionalidades en el reducer.

- less:   Contiene los estilos definidos para cada modulo, este folder y las pruebas unitarias deberan mantener la misma estructura por modulos que la carpeta componentes.

- test:   Contiene las pruebas unitarias de cada modulo.

- dist:    Contiene el html donde se montara la aplicacion en modo desarrollo, aqui se encontaran los bundles de css y js al terminar el desarrollo.

- coverage:  Contiene los archivos generados al ejecutar la cobertua de pruebas.

### Archivos

- AppContainer.js:   Es el contendor principal de la aplicacion, controla que modulos deben presentarse dependiendo el estado de la app, similar a la configuracion de rutas si usas react-router, pero totalmente basada en estado.

- appModule.js:    Este es el reducer principal de la aplciacion, esta asociado al AppContainer.

- app.js:    Este es el punto de entrada de la aplicacion.

## Como usar la plantilla

Solo se requiere clonar este repositorio, se creara la carpeta react-template, ejecuta los siguientes comandos en la terminal

```bash
cd react-template
npm install
```

## Comandos en la carpeta

```bash
npm run dev-server
```

Para iniciar el servidor de desarrollo, por defecto la ruta es http://localhost:8080/index.html. Deberas tener instalado Redux extensions en tu navegador de lo contrario solo veras la pantalla en blanco.

```bash
npm run test
```

Para ejecutar las pruebas unitarias

```bash
npm run coverage
```

Para ejecutar la cobertura de pruebas.

```bash
npm run eslint
```

Para analyzar el codigo en busca de posibles errores de sintaxis.

```bash
npm run compile
```

Genera los bundles finales de la aplicacion, para que los distribuyas del modo que mas te guste.


## Comentarios

Si encuentras algun error o tienes alguna sugerencia lo puedes registrar aqui en los [issues](https://github.com/betotto/react-template/issues).