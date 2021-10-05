const express = require("express");
const router = express.Router();

const stock_controller = require("../controllers/stock_controller");

/**
 * 
 */
 router.get("/stock", (req, res) => {
    stock_controller.getStock().then((response) =>{
        let data = response.rows;
        res.send({
            ok: true,
            info: data,
            message: "Stock consultado con éxito"
        });
        console.log("Stock consultado con éxito")
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    })
});

/**
 * 
 */
 router.get("/stock/:idproductos", (req, res) =>{
    let idproductos = req.params.idproductos;
    stock_controller.getProduct(idproductos).then((response) =>{
        let data = response.rows;
        res.send({
            ok: true,
            info: data,
            message: "Productos consultado con éxito"
        });
        console.log("Productos consultados con éxito")
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    });
});

module.exports = router;