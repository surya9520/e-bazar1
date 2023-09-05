import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import HeroBanner from "../../../Assests/animations/Hero.jpg";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage: `url(${HeroBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <Link to="/products" className="inline-block">
          <div
            className={`bg-black rounded-sm absolute right-8 bottom-[10rem] px-5 py-2 mt-5`}
          >
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
