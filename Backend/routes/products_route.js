const express = require("express");
const router = express.Router();

const product_controller = require("../controllers/products_controller");

router.get("/productos", (req, res) => {
    product_controller.getProducts().then((response) =>{
        let data = response.rows;
         res.send({
        ok: true,
        info: data,
        message: "Productos consultados con éxito"
        });
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    })
});

module.exports = router;