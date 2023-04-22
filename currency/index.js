const currency = require("./models/currency");
require('dotenv').config();

module.exports = async function (context, _) {
  context.log("Currency function executed !");

  const data = await currency.getCurrencyData();

  if(data === undefined) {
    return context.res = { 
      status: 500, 
      body: "Ha ocurrido un error con la Base de Datos" 
    }  
  }
  else {
    return context.res = { 
      status: 200, 
      body: data
    }
  }
}