import React, { useEffect, useState } from "react";
import "./HeroSection.css";

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder",
      image: "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
      name: "Jane Smith",
      role: "Barista",
      image: "https://randomuser.me/api/portraits/women/10.jpg"
    },
    {
      name: "Sam Wilson",
      role: "Coffee Expert",
      image: "https://randomuser.me/api/portraits/men/15.jpg"
    },
    {
      name: "Emily Davis",
      role: "Creative Director",
      image: "https://randomuser.me/api/portraits/women/15.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Brewed to Perfection</h1>
          <p>Where every cup tells a story ☕</p>
          <a href="#order" className="hero-btn">Order Now</a>
        </div>
      </section>

      <section className="about-section">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
          At ❤️for COFFEE, we take immense pride in serving not just coffee, but a truly unique experience. Our passion begins with the careful sourcing of the finest coffee beans from around the world, selected for their rich flavors, textures, and aromas. Each batch is meticulously roasted to perfection by our expert baristas who understand that every cup tells a story.

From the first sip to the last drop, we aim to elevate your coffee experience. Our beans are brewed with precision and artistry, ensuring that every cup is a masterpiece of flavor, balance, and warmth. Whether you prefer a classic espresso, a creamy latte, or a seasonal special, we promise to bring the magic of coffee right to your table.

Our commitment doesn’t stop at the brewing process. We believe in building lasting relationships with our customers, offering a warm and welcoming atmosphere for you to relax, work, or socialize. Each visit to Coffee Craft is more than just about enjoying a cup of coffee; it’s about embracing a lifestyle—one that values quality, sustainability, and community.

Join us on a journey of discovery, as we continue to explore new brewing techniques, experiment with seasonal blends, and offer you the best of what coffee has to offer. With every cup, we invite you to taste the difference that comes from a blend of passion, expertise, and dedication to excellence. At Coffee Craft, it's not just coffee—it’s an experience you’ll cherish.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://i.pinimg.com/736x/5e/e1/3a/5ee13a199f67df1b68b8fd1b60ffdd79.jpg"
            alt="Coffee"
          />
        </div>
      </section>

      <section className="team-section">
        <h2>Meet The Team</h2>
        <div className="team-slider">
          {teamMembers.map((member, index) => (
            <div className={`team-card ${index === currentIndex ? 'active' : ''}`} key={index}>
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HeroSection;
