const express = require("express");
const router = express.Router();

const billing_controller = require("../controllers/billing_controller");

/**
 * 
 */
 router.get("/facturas", (req, res) => {
    billing_controller.getBills().then((response) =>{
        let data = response.rows;
        res.send({
            ok: true,
            info: data,
            message: "Facturas consultadas con éxito"
        });
        console.log("Facturas consultadas con éxito")
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    })
});

/**
 * 
 */
 router.get("/factura/:idfacturas", (req, res) =>{
    let idfacturas = req.params.idfacturas;
    billing_controller.getBill(idfacturas).then((response) =>{
        let data = response.rows;
        res.send({
            ok: true,
            info: data,
            message: "Facturas consultadas con éxito"
        });
        console.log("Facturas consultadas con éxito")
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    });
});

/**
 * 
 */
 router.post("/factura", (req, res) => {
    let data = req.body;
    billing_controller.getBills(data).then((response) =>{
        res.send({
            ok: true,
            info: data,
            message: "Factura creado con éxito"
        });
        console.log("Factura creado con éxito")
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    })
});

/**
 * 
 */
 router.put("/factura/:idfacturas", (req, res) =>{
    let idfacturas = req.params.idfacturas;
    let data = req.body;
    billing_controller.updateBill(idfacturas, data).then((response) =>{
        res.send({
            ok: true,
            info: data,
            message: "Factura modificada con éxito"
        });
        console.log("Factura modificada con éxito")
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    })
 })

 /**
 * 
 */
  router.delete("/factura/:idfacturas", (req, res) =>{
    let idfacturas = req.params.idfacturas;
    billing_controller.deleteBill(idfacturas).then((response) =>{
        let data = response.rows;
        res.send({
            ok: true,
            info: data,
            message: "Factura eliminada con éxito"
        });
        console.log("Factura eliminada con éxito")
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    
    });
})

module.exports = router;