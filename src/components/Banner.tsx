import React from 'react';
import '@/styles/banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <h2 className="bannerTitle">Welcome Back!</h2>
      <div className="bannerContent">
        <div className="recentlyViewed">
          <h3>Recently Viewed</h3>
          <div className="recentlyViewedContent">
            <p>No Items Recently Viewed</p>
            <p>Get back to shopping—check out our weekly ad for the latest sales</p>
            <button className="browseAdButton">Browse Weekly Ad</button>
          </div>
        </div>
        <div className="specialOffer">
          <h3>Up to 35% off Select Patio Furniture, Grills & Fire Pits</h3>
          <p>Today Only! Free Delivery</p>
          <p className="offerEnds">Ends in 15 hrs 18 mins 34 secs</p>
          <div className="offerItems">
            <div className="offerItem">
              <img src="https://images.thdstatic.com/productImages/3415f29a-c14a-407e-bc11-4e41e540182d/svn/ovios-patio-conversation-sets-grs302-64_400.jpg" alt="Patio Furniture" />
              <p>Patio Furniture (26)</p>
            </div>
            <div className="offerItem">
              <img src="https://images.thdstatic.com/productImages/0f1e8efe-0510-4dd5-b0df-c78aa6a06826/svn/kamado-joe-built-in-grills-kj23rhc-64_400.jpg" alt="Grills" />
              <p>Grills (27)</p>
            </div>
            <div className="offerItem">
              <img src="https://images.thdstatic.com/productImages/92161e83-b975-40a2-a715-f148e65309a2/svn/heatmaxx-chimineas-srch06d-64_400.jpg" alt="Fire Pits & Patio Heaters" />
              <p>Fire Pits & Patio Heaters (25)</p>
            </div>
          </div>
          <button className="shopSpecialsButton">Shop Today's Specials</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;