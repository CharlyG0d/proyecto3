import React from "react";
import { CartSection, CartInfo, CartItem, RemoveBtn } from "./styled";

const ItemCart = ({ item, removeItem }) => {
  return (
    <CartItem>
      <CartInfo>
        <CartSection>
          <img src={item.image} alt={item.title} className="itemImg" />
          <p className="itemNumber">#{item.id}</p>
          <h3>{item.title}</h3>
          <p>
            <input type="text" className="qty" value={item.qty} readOnly /> x ${item.price.toFixed(2)}
          </p>
          <p className={`stockStatus ${!item.inStock ? "out" : ""}`}>
            {item.inStock ? "In Stock" : "Out of Stock"}
          </p>
        </CartSection>

        <CartSection className="prodTotal">
          <p>${(item.price * item.qty).toFixed(2)}</p>
        </CartSection>

        <CartSection className="removeWrap">
          <RemoveBtn onClick={() => removeItem(item.id)}>x</RemoveBtn>
        </CartSection>
      </CartInfo>
    </CartItem>
  );
};

export default ItemCart;
