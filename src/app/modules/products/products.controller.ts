import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./products.service";

// insert Product to DB
const addProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.addProduct(req.body);

  sendResponse(res, {
    success: true,
    statusCode: status.CREATED,
    message: "Product added successfully",
    data: result,
  });
});

// get all products
const getAllProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProducts();

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "All products fetched successfully",
    data: result,
  });
});

// get single product by ID
const getSingleProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.getSingleProduct(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Product fetched successfully",
    data: result,
  });
});

// delete products from DB
const deleteProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.deleteProduct(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Product deleted successfully",
    data: result,
  });
});

// sell product
const sellProduct = catchAsync(async (req, res) => {
  const productId = req.params.id;
  const payload = req.body;
  const result = await ProductServices.sellProduct(productId, payload);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Product sold successfully",
    data: result,
  });
});

export const ProductController = {
  addProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  sellProduct,
};
