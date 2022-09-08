import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import preloader from "../animation-json/INITIALIZE_1_HQ.json";
import Block from "../block/Block";

const Preloader = (props) => {
    const [visible, setVisible] = useState(true);
    const anime = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
        container: anime.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: preloader,
    });
    lottie.setSpeed(0.9)
    setTimeout(() => {
        setVisible(false);
      }, props.delay);      
  }, [props.delay]);
  return  visible ? <div style={{ height: 140, width: 140 }} ref={anime}></div> : <Block />;
};

export default Preloader;

