const connection = require("../services/database");

/**
 * @param
 */
 async function getBills(){
    let _connection = await new connection();
    let script = `SELECT * FROM public.facturas;`; 
    let response = await _connection.execute(script);
    return response;
}


module.exports = {
    getBills,
};