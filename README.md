# Currency Exchange

Este es un proyecto ejemplo utilizando Azure Function fue creadp para el manejo de las divisa oficiales en Venezuela via API.

Esta API esta conformada por dos (2) endpoints.

1. Bot: Ingresara a la ruta indica, para extraer los datos de las divisas. Se puede utilizar una Logic App con un Recurrence de 24 horas o utilizar un crojob que llame a este endpoint.

2. Currency: Este endpoint permitira obtener los datos ya previamente almacenado.

Para inicializar el proyecto debes ejecutar los siguientes comandos:

### `npm install`
Para instalar las dependencias

### `npm run start`
Para iniciar el proyecto

El proyecto iniciara en [http://localhost:7071](http://localhost:7071) 
