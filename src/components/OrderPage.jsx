import React, { useState } from "react";
import "./OrderPage.css"; // Custom CSS file for styling

const OrderPage = () => {
  const [selectedCoffee, setSelectedCoffee] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [totalBill, setTotalBill] = useState(0);
  const [deliveryMessage, setDeliveryMessage] = useState("");

  const coffeeOptions = [
    { name: "Espresso", price: 3 },
    { name: "Cappuccino", price: 4 },
    { name: "Latte", price: 4 },
    { name: "Mocha", price: 5 },
    { name: "Americano", price: 3 },
    { name: "Macchiato", price: 4.5 },
    { name: "Cold Brew", price: 4.5 },
    { name: "Iced Coffee", price: 3.5 },
    { name: "Flat White", price: 4 },
    { name: "Affogato", price: 5.5 },
    { name: "Irish Coffee", price: 6 },
    { name: "Nitro Coffee", price: 5 },
    { name: "Cortado", price: 3.5 },
    { name: "Turkish Coffee", price: 4 },
    { name: "Vietnamese Coffee", price: 4.5 },
  ];

  const handleCoffeeChange = (e) => {
    const coffeeName = e.target.value;
    setSelectedCoffee(coffeeName);
    const selected = coffeeOptions.find((coffee) => coffee.name === coffeeName);
    if (selected) {
      setTotalBill(selected.price * quantity);
    }
  };

  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;
    setQuantity(newQuantity);
    const selected = coffeeOptions.find((coffee) => coffee.name === selectedCoffee);
    if (selected) {
      setTotalBill(selected.price * newQuantity);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setDeliveryMessage(
      `✅ Order placed successfully! Your ${selectedCoffee} (${quantity}) will be delivered to "${address}" in 15-30 minutes.`
    );

    // Reset form
    setName('');
    setEmail('');
    setMobile('');
    setAddress('');
    setQuantity(1);
    setSelectedCoffee('');
    setTotalBill(0);
  };

  return (
    <>
      <div className="quote-section">
        <p>"Brew a cup of happiness."</p>
      </div>

      <section className="order-container">
        <div className="order-content">
          <div className="order-form-container">
            <form onSubmit={handleSubmit}>
              <h2 className="form-title">Place Your Order</h2>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your delivery address"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="coffee">Select Coffee</label>
                <select
                  id="coffee"
                  value={selectedCoffee}
                  onChange={handleCoffeeChange}
                  required
                >
                  <option value="">Choose Coffee</option>
                  {coffeeOptions.map((coffee, index) => (
                    <option key={index} value={coffee.name}>
                      {coffee.name} - ${coffee.price}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  required
                />
              </div>

              <div className="form-group">
                <label>Total Bill: ${totalBill.toFixed(2)}</label>
              </div>

              <button type="submit" className="submit-btn">Place Order</button>
            </form>

            {deliveryMessage && (
              <div className="delivery-message">
                <p>{deliveryMessage}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderPage;
