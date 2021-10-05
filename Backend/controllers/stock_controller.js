const connection = require("../services/database");

/**
 * @param
 */
 async function getStock(){
    let _connection = await new connection();
    let script = `SELECT public.productos.nombre, public.productos.existencias FROM public.productos;`; 
    let response = await _connection.execute(script);
    return response;
}

module.exports = {
    getStock,
};