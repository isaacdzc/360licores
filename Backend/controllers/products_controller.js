const connection = require("../services/database");

/**
 * @param
 * Obtiene todos los productos
 */
async function getProducts(){
    let _connection = await new connection();
    let script = `SELECT * FROM public.productos;`; 
    let response = await _connection.execute(script);
    return response;
}

/**
 * @param {idproductos}
 * Obtiene un producto según idproductos
 */
 async function getProduct(idproductos){
    let _connection = await new connection();
    let script = `SELECT * FROM public.productos 
        WHERE idproductos = '${idproductos}';`; 
    let response = await _connection.execute(script);
    return response;
}

/**
 * @param {producto}
 * Crea un producto con parametros ingresados en body
 */
 async function createProduct(producto){
    let _connection = await new connection();
    let script = `INSERT INTO public.productos(
        idproductos, nombre, precio, tamaño, existencias, categoria)
        VALUES (
            '${producto.idproductos}', 
            '${producto.nombre}', 
            '${producto.precio}', 
            '${producto.tamaño}', 
            '${producto.existencias}',
            '${producto.categoria}');`
    let response = await _connection.execute(script);
    return response;
  };

/**
 * @param {producto}
 * Crea un producto con parametros ingresados en body
 */
 async function updateProduct(idproductos, data){
    let _connection = await new connection();
    let script = `UPDATE public.productos
        SET idproductos='${data.idproductos}', 
            nombre='${data.nombre}', 
            precio='${data.precio}', 
            tamaño='${data.tamaño}', 
            existencias='${data.existencias}', 
            categoria='${data.categoria}'
            WHERE idproductos = '${idproductos}';`
    let response = await _connection.execute(script);
    return response;
  };
  
/**
 * @param {idproductos}
 * Elimina un producto según su idproductos
 */
async function deleteProduct(idproductos){
    let _connection = await new connection();
    let script = `DELETE FROM public.productos
    WHERE idproductos = '${idproductos}';`
    let response = await _connection.execute(script);
    return response;
};

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};