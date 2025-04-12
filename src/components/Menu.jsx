import React from 'react';
import './Menu.css'; // for custom hover effects
import { useNavigate } from 'react-router-dom';
const coffeeData = [
    {
      name: 'Espresso',
      description: 'Strong & bold shot of pure coffee.',
      image: 'https://i.pinimg.com/736x/39/8f/55/398f55006801e517b81bb77b936faa8a.jpg',
      price: '$2.99'
    },
    {
      name: 'Cappuccino',
      description: 'Espresso with steamed milk & foam.',
      image: 'https://i.pinimg.com/736x/33/44/2e/33442e58a74503c7cef4fc437a4ebc8e.jpg',
      price: '$3.50'
    },
    {
      name: 'Latte',
      description: 'Smooth coffee with creamy milk.',
      image: 'https://i.pinimg.com/736x/55/f8/7b/55f87b082c2e6f655957e29725e8a0d8.jpg',
      price: '$3.75'
    },
    {
      name: 'Mocha',
      description: 'Coffee meets chocolate. Sweet & strong.',
      image: 'https://i.pinimg.com/736x/22/8b/72/228b72a03cb98c19063193cf0188a6a3.jpg',
      price: '$4.00'
    },
    {
      name: 'Americano',
      description: 'Espresso shot with added hot water.',
      image: 'https://i.pinimg.com/736x/29/7d/1a/297d1a7fa9df898e1a1c449e1e191284.jpg',
      price: '$2.99'
    },
    {
      name: 'Macchiato',
      description: 'Espresso with a splash of milk foam.',
      image:'https://i.pinimg.com/736x/d2/0c/e6/d20ce6b882f53f35c58738dab963434b.jpg',
      price: '$3.25'
    },
    {
      name: 'Cold Brew',
      description: 'Smooth cold coffee brewed for hours.',
      image: 'https://i.pinimg.com/736x/18/da/2f/18da2fad7461d22ec47f3a8d7da6e7b3.jpg',
      price: '$4.25'
    },
    {
      name: 'Iced Coffee',
      description: 'Chilled coffee over ice.',
      image: 'https://i.pinimg.com/736x/cc/cb/00/cccb00473890ed242fff3e0c66d3ff33.jpg',
      price: '$3.50'
    },
    {
      name: 'Flat White',
      description: 'Velvety steamed milk with rich espresso.',
      image: 'https://i.pinimg.com/736x/e8/58/52/e85852a14705cdb54d8c9c1a73893ea6.jpg',
      price: '$3.99'
    },
    {
      name: 'Affogato',
      description: 'Espresso poured over vanilla ice cream.',
      image: 'https://i.pinimg.com/736x/ee/7e/6c/ee7e6cbd42188b782eb05813d6d02e8e.jpg',
      price: '$4.75'
    },
    {
      name: 'Irish Coffee',
      description: 'Coffee with Irish whiskey & cream.',
      image: 'https://i.pinimg.com/736x/55/14/f2/5514f20bc6ed838f28016a1efa69956b.jpg',
      price: '$5.50'
    },
    {
      name: 'Nitro Coffee',
      description: 'Infused with nitrogen for a creamy finish.',
      image: 'https://i.pinimg.com/736x/4e/c1/c9/4ec1c947bce327b7f7cf80c5d095698a.jpg',
      price: '$4.99'
    },
    {
      name: 'Cortado',
      description: 'Espresso with a touch of warm milk.',
      image: 'https://i.pinimg.com/736x/a3/4b/ac/a34bac113dfc0bb51f65e8fb85af67c2.jpg',
      price: '$3.10'
    },
    {
      name: 'Turkish Coffee',
      description: 'Traditional thick brew with cardamom.',
      image: 'https://i.pinimg.com/736x/eb/eb/2f/ebeb2f7e25be4d77ce703e687270d9fd.jpg',
      price: '$3.50'
    },
    {
      name: 'Vietnamese Coffee',
      description: 'Sweetened condensed milk with strong brew.',
      image: 'https://i.pinimg.com/736x/c6/e9/f0/c6e9f0b383a983013f1f333e7c6b190e.jpg',
      price: '$4.00'
    }
  ];
  ;

  const Menu = () => {
    const navigate = useNavigate();
  
    const handleOrderNow = (coffee) => {
      // Navigate to the OrderPage with selected coffee
      navigate('/order', { state: { coffee } });
    };
  
    return (
      <section className="container py-5">
        <h2 className="text-center text-warning mb-5">☕ Our Coffee Menu</h2>
        <div className="row">
          {coffeeData.map((coffee, index) => (
            <div key={index} className="col-md-4 mb-4 d-flex">
              <div className="card coffee-card shadow-lg w-100">
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  className="card-img-top"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body bg-dark text-white text-center">
                  <h5 className="card-title">{coffee.name}</h5>
                  <p className="card-text">{coffee.description}</p>
                  <p className="fw-bold text-warning">{coffee.price}</p>
                  <button
                    className="btn btn-outline-light btn-sm"
                    onClick={() => handleOrderNow(coffee)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Menu;