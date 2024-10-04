import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light py-5">
      <div className="container">
        {/* Línea divisoria */}
        <span className="slogan">How doers get more done™</span>
    <span className="contact">Need Help? Please call us at: <a href="tel:1-800-HOME-DEPOT">1-800-HOME-DEPOT</a> (1-800-466-3337)</span>
        <hr className="footer-divider" />
        


        {/* Parte superior con texto e información */}
        <div className="row">
          <div className="col-md-4">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="#">Check Order Status</a></li>
              <li><a href="#">Pay Your Credit Card</a></li>
              <li><a href="#">Order Cancellation</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Shipping & Delivery</a></li>
              <li><a href="#">Product Recalls</a></li>
              <li><a href="#">Help & FAQs</a></li>
              <li><a href="#">My Preference Center</a></li>
              <li><a href="#">Privacy & Security Center</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#">Specials & Offers</a></li>
              <li><a href="#">Military Discount Benefit</a></li>
              <li><a href="#">DIY Projects & Ideas</a></li>
              <li><a href="#">Truck & Tool Rental</a></li>
              <li><a href="#">Installation & Services</a></li>
              <li><a href="#">Moving Supplies & Rentals</a></li>
              <li><a href="#">Protection Plans</a></li>
              <li><a href="#">Rebate Center</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Catalog</a></li>
              <li><a href="#">Subscriptions</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li><a href="#">Careers</a></li>
              <li><a href="#">Corporate Information</a></li>
              <li><a href="#">Digital Newsroom</a></li>
              <li><a href="#">Home Depot Foundation</a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Government Customers</a></li>
              <li><a href="#">Suppliers & Providers</a></li>
              <li><a href="#">Affiliate Program</a></li>
              <li><a href="#">Eco Actions</a></li>
              <li><a href="#">Corporate Responsibility</a></li>
              <li><a href="#">Home Depot Licensing Information</a></li>
            </ul>
          </div>
        </div>

        {/* Sección con íconos de redes sociales e input de email */}
        <div className="row mt-4">
          <div className="col-md-6">
            <h6>Get $5 off when you sign up for emails with savings and tips.</h6>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Enter Email Address" aria-label="Email" />
              <div className="input-group-append">
                <button className="btn btn-warning" type="button">GO</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-md-right">
            <h6>Follow Us</h6>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-square fa-2x mx-2"></i></a>
              <a href="#"><i className="fab fa-twitter-square fa-2x mx-2"></i></a>
              <a href="#"><i className="fab fa-pinterest-square fa-2x mx-2"></i></a>
              <a href="#"><i className="fab fa-youtube-square fa-2x mx-2"></i></a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr />

        {/* Sección inferior con logotipos de marcas */}
        <div className="text-center">
          <h5>Shop Our Brands</h5>
          <div className="brand-logos-container">
             <img src="/images/TheCompanyStore_logo.png" alt="The Company Store" className="brand-logo" />
             <img src="/images/vissani_logo.png" alt="Vissani" className="brand-logo" />
             <img src="/images/Hdx-footer-logo.png" alt="HDX" className="brand-logo" />
            <img src="/images/StyleWell-logo.png" alt="StyleWell" className="brand-logo" />
          </div>

        </div>

        {/* Derechos reservados y enlaces legales */}
        <div className="text-center mt-4">
          <p>&copy; 2024 The Home Depot. All Rights Reserved.</p>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#">Privacy & Security Statement</a></li>
            <li className="list-inline-item"><a href="#">Terms</a></li>
            <li className="list-inline-item"><a href="#">California Privacy Rights</a></li>
            <li className="list-inline-item"><a href="#">Do Not Sell My Personal Information</a></li>
          </ul>
          <p>Use of this site is subject to certain <a href="#">Terms Of Use</a>. Local store prices may vary from those displayed. Products shown as available are normally stocked but inventory levels cannot be guaranteed. For screen reader problems with this website, please call 1-800-430-3376 or text 38698 (standard carrier rates apply to texts).</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
