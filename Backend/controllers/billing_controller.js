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

/**
 * @param {idfacturas}
 * Obtiene una factura según idfacturas
 */
 async function getBill(idfacturas){
    let _connection = await new connection();
    let script = `SELECT * FROM public.facturas 
        WHERE idfacturas = '${idfacturas}';`
    let response = await _connection.execute(script);
    return response;
}

/**
 * @param {factura}
 * Crea una factura con parametros ingresados en body
 */
 async function createBill(factura){
    let _connection = await new connection();
    let script = `INSERT INTO public.facturas(
        idfacturas, fecha, valor, cantidad, productos_idproductos, )
        VALUES (
            '${factura.idfacturas}', 
            current_date, 
            '${factura.valor}', 
            '${factura.cantidad}', 
            '${factura.productos_idproductos}', 
            '${factura.clientes_idclientes}');`
    let response = await _connection.execute(script);
    return response;
};

  /**
 * @param {factura}
 * Crea un producto con parametros ingresados en body
 */
 async function updateBill(idfacturas, data){
    let _connection = await new connection();
    let script = `UPDATE public.facturas
        SET valor='${data.valor}', 
            cantidad='${data.cantidad}', 
            productos_idproductos='${data.productos_idproductos}', 
            clientes_idclientes='${data.clientes_idclientes}'
        WHERE idfacturas = '${idfacturas}';`
    let response = await _connection.execute(script);
    return response;
};

/**
 * 
 */
async function deleteBill(idfacturas){
    let _connection = await new connection();
    let script = `DELETE FROM public.facturas
    WHERE idfacturas = '${idfacturas}';`
    let response = await _connection.execute(script);
    return response;
};


module.exports = {
    getBills,
    getBill,
    createBill,
    updateBill,
    deleteBill,
};