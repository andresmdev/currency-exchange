const sql = require("mssql");

exports.getCurrencyData = async () => {
  let pool;

  try {
    pool = await sql.connect(process.env.CONNECTION_STRING)
    let result = await pool.request()
    .query(`SELECT Dolar, Euro, Yuan, Lira, Rublo 
      FROM currency
      ORDER BY CurrencyID DESC`);

    return result.recordset;
  }
  catch (error) {
    console.log("ERROR ===>", error);
    return undefined;
  }
}
