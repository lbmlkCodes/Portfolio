import React from "react";

// reactstrap components


function Footer() {
  return (
    <footer className="footer bg-gray-300 text-center" data-background-color="black">
        <div className="copyright" id="copyright">
          copyright © {new Date().getFullYear()},      
          by Lebamlak Amare
        </div>
    </footer>
  );
}

export default Footer;