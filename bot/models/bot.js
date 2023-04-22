const sql = require("mssql");

exports.insertCurrency = async (currencies) => {
  const { euro, yuan, lira, rublo, dolar } = currencies;

  let pool;

  try {
    pool = await sql.connect(process.env.CONNECTION_STRING)
    let result = await pool.request()
      .input('dolar', sql.Float, dolar)
      .input('euro', sql.Float, euro)
      .input('yuan', sql.Float, yuan)
      .input('lira', sql.Float, lira)
      .input('rublo', sql.Float, rublo)
      .query(`INSERT INTO currency (Dolar, Euro, Yuan, Lira, Rublo)
        VALUES(@dolar, @euro, @yuan, @lira, @rublo)`);

    return result.rowsAffected[0];
  }
  catch (error) {
    console.log("ERROR ===>", error);
    return error;
  }
}