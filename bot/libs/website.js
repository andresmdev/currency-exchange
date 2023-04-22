const fetch = require("node-fetch");
const cheerio = require("cheerio");

const URL = "https://www.bcv.org.ve/";

exports.getHttpStatus = async () => {
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
  
  try {
    const response = await fetch(URL);
    return response.status;
  }
  catch (error) {
    console.log("ERROR ==> ", error);
    return error;
  }
}

exports.getWebsiteData = async () => {
  try {
    const response = await fetch(URL);
    const rawData = await response.text();
    const parsedData = cheerio.load(rawData);

    return parsedData;
  }
  catch (error) {
    console.log("ERROR ===>", error);
    return error;
  }
}


