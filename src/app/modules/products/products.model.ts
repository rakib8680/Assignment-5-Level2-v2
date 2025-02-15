import { Schema, model } from "mongoose";
import { TDimensions, TFeature, TProduct } from "./products.interface";

const dimensionsSchema = new Schema<TDimensions>({
  width: { type: Number },
  height: { type: Number },
  depth: { type: Number },
});
const featuresSchema = new Schema<TFeature>(
  {
    cameraResolution: { type: String },
    storageCapacity: { type: String },
    screenSize: { type: String },
    // Additional features can be added dynamically
  },
  { strict: false }
);

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  imageURL: { type: String, required: true },
  quantity: { type: Number, required: true },
  releaseDate: { type: Date, required: true },
  brand: { type: String, required: true },
  modelNo: { type: String, required: true },
  category: { type: String, required: true },
  operatingSystem: { type: String },
  connectivity: { type: [String] },
  powerSource: { type: String },
  features: { type: featuresSchema },
  weight: { type: Number },
  dimensions: { type: dimensionsSchema },
  compatibility: { type: [String] },
});

export const ProductModel = model<TProduct>("product", productSchema);
