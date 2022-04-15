import React from "react";
import "./ChooseUs.css";
// images are here
import serviceImgOne from "../../../asstes/images/choose-us-section/cooking.png";
import serviceImgTwo from "../../../asstes/images/choose-us-section/chef.png";
import serviceImgThree from "../../../asstes/images/choose-us-section/delivery.png";
import {
  HomeIcon,
  TruckIcon,
  BellIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/solid";

const ChooseUs = () => {
  return (
    <section className="choose-container">
      <div>
        <h2 className="choose-title">Why You Choose Us</h2>
        <p className="choose-info">
          Barton waited twenty always repair in within we do. An delighted
          offending curiosity may is dashwood at. Boy prosperous increasing
          surrounded.
        </p>
      </div>
      <div className="services">
        <div>
          <img src={serviceImgOne} alt="" />
          <div className="service-details">
            <TruckIcon className="service-icon" />
            <div>
              <h4 className="service-title">Fast Delevery</h4>
              <p className="service-info">
                Keep your systems in sync with automated web hook based
                notification each time link is paid and how we dream about our
                future.
              </p>
              <p className="see-more">
                See more <ArrowNarrowRightIcon className="arrow-right" />
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={serviceImgTwo} alt="" />
          <div className="service-details">
            <BellIcon className="service-icon" />
            <div>
              <h4 className="service-title">Fast Delevery</h4>
              <p className="service-info">
                Keep your systems in sync with automated web hook based
                notification each time link is paid and how we dream about our
                future.
              </p>
              <p className="see-more">
                See more <ArrowNarrowRightIcon className="arrow-right" />
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={serviceImgThree} alt="" />
          <div className="service-details">
            <HomeIcon className="service-icon" />
            <div>
              <h4 className="service-title">Fast Delevery</h4>
              <p className="service-info">
                Keep your systems in sync with automated web hook based
                notification each time link is paid and how we dream about our
                future.
              </p>
              <p className="see-more">
                See more <ArrowNarrowRightIcon className="arrow-right" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
