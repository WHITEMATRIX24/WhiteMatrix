// Banner.jsx
import React from 'react';
import StyledBanner from './styles/styled_banner';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick'; // Import React Slick library
import 'slick-carousel/slick/slick.css'; // Import React Slick styles
import 'slick-carousel/slick/slick-theme.css'; // Import React Slick theme styles

const Banner = ({ settings }) => {
  const navigate = useNavigate();
  return (
    <StyledBanner id='home'>
      {/* React Slick slider */}
      <div className="banner-heading">
        <h2>Transforming Businesses</h2>
      </div>
      <Slider {...settings}>
        <div>
          <img src="/assets/ai.png" alt="Slide 1" />
          <div className="image-overlay">
            <button className="image-overlay-button" onClick={() => navigate("/ai")}>AI</button>
          </div>
        </div>
        <div>
          <img src="/assets/customer1.jpg" alt="Slide 2" />
          <div className="image-overlay">
            <button className="image-overlay-button" onClick={() => navigate("/voip")}>VOIP</button>
          </div>
        </div>
        <div>
          <img src="/assets/app2.jpg" alt="Slide 3" />
          <div className="image-overlay">
            <button className="image-overlay-button" onClick={() => navigate("/mobile")}>Mobile App Development</button>
          </div>
        </div>
        <div>
          <img src="/assets/software1.jpg" alt="Slide 4" />
          <div className="image-overlay">
            <button className="image-overlay-button" onClick={() => navigate("/software")}>Software Development</button>
          </div>
        </div>
      </Slider>
    </StyledBanner>
  );
};

export default Banner;
