const { response } = require("express");
const express = require("express");
const router = express.Router();

const product_controller = require("../controllers/products_controller");
/**
 * 
 */
 router.get("/productos", (req, res) => {
    product_controller.getProducts().then((response) =>{
        let data = response.rows;
        res.send({
            ok: true,
            info: data,
            message: "Productos consultados con éxito"
        });
        console.log("Productos consultados con éxito")
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    })
});

/**
 * 
 */
 router.get("/producto/:idproductos", (req, res) =>{
    let idproductos = req.params.idproductos;
    product_controller.getProduct(idproductos).then((response) =>{
        let data = response.rows;
        res.send({
            ok: true,
            info: data,
            message: "Productos consultados con éxito"
        });
        console.log("Productos consultados con éxito")
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    });
});

/**
 * 
 */
 router.post("/producto", (req, res) => {
    let data = req.body;
    product_controller.createProduct(data).then((response) =>{
        res.send({
            ok: true,
            info: data,
            message: "Producto creado con éxito"
        });
        console.log("Producto creado con éxito")
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    })
});

/**
 * 
 */
 router.put("/producto/:idproductos", (req, res) =>{
    let idproductos = req.params.idproductos;
    let data = req.body;
    product_controller.updateProduct(idproductos, data).then((response) =>{
        res.send({
            ok: true,
            info: data,
            message: "Producto modificado con éxito"
        });
        console.log("Producto modificado con éxito")
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    })
 })

 /**
  * 
  */
  router.delete("/producto/:idproductos", (req, res) =>{
    let idproductos = req.params.idproductos;
    product_controller.deleteProduct(idproductos).then((response) =>{
        let data = response.rows;
        res.send({
            ok: true,
            info: data,
            message: "Productos eliminado con éxito"
        });
        console.log("Productos eliminado con éxito")
    }).catch((error) =>{
        res.send(error);
        console.log(error)
    
    });
})
 
module.exports = router;