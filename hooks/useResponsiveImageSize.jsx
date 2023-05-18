import { useState, useEffect } from "react";

const imageSizeMap = {
  small: 300,
  medium: 780,
  large: 1280,
};

function useResponsiveImageSize() {
  const [deviceImageSize, setDeviceImageSize] = useState("original");

  const getDeviceImageSize = (windowWidth) => {
    if (windowWidth <= 300) {
      return "w300";
    } else if (windowWidth <= 780) {
      return "w780";
    } else if (windowWidth <= 1280) {
      return "w1280";
    } else {
      return "original";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const imageSize = getDeviceImageSize(windowWidth);
      setDeviceImageSize(imageSize);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceImageSize;
}

export default useResponsiveImageSize;
