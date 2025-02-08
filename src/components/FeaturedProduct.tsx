import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const brands = [
  { logo: "/brands/1.png" },
  { logo: "/brands/2.png" },
  { logo: "/brands/3.png" },
  { logo: "/brands/4.png" },
  { logo: "/brands/5.png" },
  { logo: "/brands/6.jpg" },
  { logo: "/brands/7.jpg" },
  { logo: "/brands/8.png" },
  { logo: "/brands/9.png" },
  { logo: "/brands/10.jpg" },
  { logo: "/brands/11.png" },
  { logo: "/brands/12.png" },
  { logo: "/brands/13.jpg" },
  { logo: "/brands/14.png" },
  
];

const InfiniteCarousel = () => {
  const controls = useAnimation();

  return (
    <div className="overflow-hidden w-full py-4 bg-gray-100 relative">
      <motion.div
        className="flex gap-8"
        initial={{ x: 0 }}
        animate={controls}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        onHoverStart={() => controls.stop()}
        onHoverEnd={() => controls.start({ x: "-100%" })}
        style={{ display: "flex", minWidth: "200%" }}
      >
        {[...brands, ...brands].map((brand, index) => (
          <motion.img
            key={index}
            src={brand.logo}
            alt="Brand Logo"
            className="w-24 h-24 object-contain mx-4"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
