import React from "react";

const Button = ({ styles }) => {
  const handleButtonClick = () => {
    // Scroll to the contact section with an ID of "contact" when the button is clicked
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      onClick={handleButtonClick}
    >
      Buy Now
    </button>
  );
};

export default Button;
