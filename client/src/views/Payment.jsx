

import { useState } from "react";
import "./Payment.css";
const Payment = ({pquantity,product,removeProduct}) => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [products, setProducts] = useState([product]);

  const handlePayment = async () => {
    try {
      // Perform payment processing logic here if needed
      setPaymentStatus("success");
    } catch (error) {
      console.error("Payment failed:", error);
      setPaymentStatus("failure");
    }
  };

  const adjustQuantity = (productId, newQuantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, quantity: newQuantity } : product
      )
    );
    calculateTotalPrice();
  };

//   const removeProductTow = (productId) => {
//     setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
//     calculateTotalPrice();
//   };

  const toggleLike = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, liked: !product.liked } : product
      )
    );
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice += pquantity * product.price;
    });
    return totalPrice.toFixed(2);
  };

  return (
    <div>
      {/* <h2>Payment Page</h2> */}
      {products.map((product) => (
        <div key={product.id} className="product">
          {/* <span className="product-quantity">
            <input
              type="number"
              value={product.quantity}
              onChange={(e) => adjustQuantity(product.id, parseInt(e.target.value))}
            />
          </span> */}
          {/* <span className="product-price">${product.price.toFixed(2)}</span> */}
          <button className="remove-button" onClick={() => removeProduct(product.id)}>
            Remove
          </button>
          <button
            className={`like-btn ${product.liked ? 'active' : ''}`}
            onClick={() => toggleLike(product.id)}
          >
            ❤
          </button>
        </div>
      ))}
      <div id="total-price">{calculateTotalPrice()}DT</div>
      <button onClick={handlePayment}>Proceed with Payment</button>
      {paymentStatus && (
        <div>
          {paymentStatus === "success" ? (
            <p>Payment successful! Thank you for your purchase.</p>
          ) : (
            <p>Payment failed. Please try again.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Payment;





/*
import { useState } from "react";

const Payment = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = async () => {
    try {
      setPaymentStatus("success");
    } catch (error) {
      console.error("Payment failed:", error);
      setPaymentStatus("failure");
    }
  };

  return (
    <div>
      <h2>Payment Page</h2>
      
      <button onClick={handlePayment}>Proceed with Payment</button>
      {paymentStatus && (
        <div>
          {paymentStatus === "success" ? (
            <p>Payment successful! Thank you for your purchase.</p>
          ) : (
            <p>Payment failed. Please try again.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Payment;
 */