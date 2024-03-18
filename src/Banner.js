import React from 'react';

function Banner() {
  // Function to handle link clicks
  const handleClick = (link) => {
    alert(`You clicked on ${link}`);
  };

  return (
    <div className="banner">   
      <a href="#" onClick={() => handleClick("Home")}>Home</a>
      <span className="spacer"></span>
   <a href="#" onClick={() => handleClick("About")}>About</a>
      <span className="spacer"></span>
      <a href="#" onClick={() => handleClick("Contact Us")}>Contact Us</a>
        <span className="spacer"></span>
        < a href="#" onClick={() => handleClick("Photos")}>Photos</a>
    </div>
  );
}

export default Banner;
