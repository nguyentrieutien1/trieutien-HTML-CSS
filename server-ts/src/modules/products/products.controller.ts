import { Request, Response } from "express";
import { Ok } from "../../core/success.response";
import { ProductService } from "./products.service";
import { ProductDTO } from "../../types/products.type";
class ProductController {
  static findAll = async (
    req: Request,
    res: Response
  ): Promise<Response<Ok>> => {
    const products: ProductDTO[] = await ProductService.findAll();
    return new Ok({
      data: products,
      message: "Get all product successful !",
    }).send(res);
  };
}
export { ProductController };
