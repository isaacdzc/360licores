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

/**
 * @param {idproductos}
 * Obtiene un producto según idproductos
 */
 async function getProduct(idproductos){
    let _connection = await new connection();
    let script = `SELECT public.productos.nombre, public.productos.existencias FROM public.productos 
        WHERE idproductos = '${idproductos}';`; 
    let response = await _connection.execute(script);
    return response;
}

module.exports = {
    getStock,
    getProduct,
};