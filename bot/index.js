const website = require("./libs/website");
const bot = require("./models/bot");
require('dotenv').config();

module.exports = async function (context, _) {
  context.log("Bot function executed !");

  const httpStatus = await website.getHttpStatus();

  if (httpStatus === 200) {
    const parsedData = await website.getWebsiteData();

    const euroValue = parsedData("#euro").text();
    const yuanValue = parsedData("#yuan").text();
    const liraValue = parsedData("#lira").text();
    const rubloValue = parsedData("#rublo").text();
    const dolarValue = parsedData("#dolar").text();

    const dolar = Number(String(dolarValue).replace("USD", "").trim().replace(",","."));
    const euro = Number(String(euroValue).replace("EUR", "").trim().replace(",","."));
    const yuan = Number(String(yuanValue).replace("CNY", "").trim().replace(",","."));
    const lira = Number(String(liraValue).replace("TRY", "").trim().replace(",","."));
    const rublo = Number(String(rubloValue).replace("RUB", "").trim().replace(",","."));

    const currencies = {
      "dolar": dolar,
      "euro": euro,
      "yuan": yuan,
      "lira": lira,
      "rublo": rublo
    };

    context.log(currencies);

    const data = await bot.insertCurrency(currencies);
    
    if(data) {
      return context.res = {
        body: {
          status: 200,
          message: "Divisas almacenadas"
        }
      }
    }
    else {
      return context.res = {
        body: {
          status: 500,
          message: "Se ha presentado un error al almacenar las "
        }
      }
    }
  }
  else {
    return context.res = {
      body: {
        status: 200,
        message: "La pagina web no se encuentra disponible"
      }
    };
  }
}