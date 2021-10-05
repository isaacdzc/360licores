const connection = require("../services/database");

/**
 * @param
 */

async function getProducts(){
    let _connection = await new connection();
    let script = `SELECT * FROM public.productos;`; 
    let response = await _connection.execute(script);
    return response;
}

module.exports = {
    getProducts,
};