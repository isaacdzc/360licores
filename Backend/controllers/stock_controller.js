const connection = require("../services/database");

/**
 * @param
 * Obtiene el stock de todos los productos
 */
 async function getStock(){
    let _connection = await new connection();
    let script = `SELECT public.productos.nombre, public.productos.existencias FROM public.productos;`; 
    let response = await _connection.execute(script);
    return response;
}

/**
 * @param {idproductos}
 * Obtiene el stock de un producto según su idproductos
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