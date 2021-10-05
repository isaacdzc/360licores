const express = require("express");
const router = express.Router();

const product_controller = require("../controllers/billing_controller");

/**
 * 
 */
 router.get("/facturas", (req, res) => {
    product_controller.getBills().then((response) =>{
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

module.exports = router;