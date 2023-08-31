import { WithCartProductsContext } from "@/HOCs/withProductCartContext";
import { API_URL } from "@/constants/apiUrl";
import { CartProductsContext } from "@/contexts/CartProductContext";
import { ProductDTO } from "@/types/products.type";
import React, { Component } from "react";
import { headersInfo } from "@/utils/headerInfo";
class ProductListComponent extends Component<ProductDTO> {
  static contextType = CartProductsContext;
  context!: React.ContextType<typeof CartProductsContext>;
  constructor(props: ProductDTO) {
    super(props);
  }
  handleAddToCart = async () => {
    const { _id } = this.props;
    const { cart, create, setCart } = this.context;
    const product = this.context.products.find((product) => product._id == _id);
    if (cart.length === 0) {
      const cartItem = await create({ productId: product?._id!, quantity: 1 });
      cartItem.product = product;
      setCart((prevState) => [...prevState, cartItem]);
    }
  };
  render() {
    const { image, product_name, product_price, product_title, _id } =
      this.props;
    return (
      <div className="deal__product--item toptreding__product--item">
        <i className="fa-solid fa-spinner fa-spin fa-spin-1" />
        <div className="deal__product--item-img">
          <img src={image} className="img-1" alt="Image" />
          <img src={image} className="img-2" alt="Image" />
        </div>
        <div className="deal__product--item-list--icon">
          <i className="fa-regular fa-heart">
            <h4 className="sub-icon">Quick view</h4>
          </i>
          <i className="fa-regular fa-eye">
            <h4 className="sub-icon">Quick view</h4>
          </i>
          <i className="fa-solid fa-rotate-left">
            <h4 className="sub-icon">Quick view</h4>
          </i>
        </div>
        <div className="deal__product--meta">
          <div className="deal__product--item-des">
            <div>{product_name}</div>
          </div>
          <div className="deal__product--item-name">
            <div>{product_title}</div>
          </div>
          <div className="deal__product--item-start">
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
          </div>
          <div className="deal__product--item-price-2">
            <div>$ {product_price}</div>
            <i
              onClick={this.handleAddToCart}
              className="fa-solid fa-cart-shopping shopping-btn"
              data-id={1}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default WithCartProductsContext(ProductListComponent);
