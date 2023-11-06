import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer bg-gray-300 text-center" data-background-color="black">
      <Container>
        <div className="copyright" id="copyright">
          copyright © {new Date().getFullYear()},      
          by Lebamlak Amare
        </div>
      </Container>
    </footer>
  );
}

export default Footer;