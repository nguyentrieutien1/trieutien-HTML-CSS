const cartRouter = require("./cart.route");
const productRouter = require("./product.route");
const userRouter = require("./user.route");
const cartProductRouter = require("./cart-product.route");
const { Router } = require("express");
const router = Router();
router.use("/cart", cartRouter);
router.use("/products", productRouter);
router.use("/", userRouter);
router.use("/cart-products", cartProductRouter);
module.exports = router;
