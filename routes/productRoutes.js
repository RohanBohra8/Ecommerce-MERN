import express from "express";
import { createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductController } from "../controllers/productController.js";
import { isAdmin, requiredSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
//CREATE PRODUCT || POST
router.post(
  "/create-product",
  requiredSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//UPDATE PRODUCT || PUT
router.put(
  "/update-product/:pid",
  requiredSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//GET ALL PRODUCTS || GET 
router.get("/get-product", getProductController);

//GET SINGLE PRODUCT || GET
router.get("/get-product/:slug", getSingleProductController);

//GET PHOTO || GET
router.get("/product-photo/:pid", productPhotoController);

//DELETE PRODUCT || DELETE
router.delete("/product/:pid", deleteProductController);

export default router;