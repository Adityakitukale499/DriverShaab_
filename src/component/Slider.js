import React from "react";
import Slider from "react-slick";
import { Grid, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import b2b1 from "../Assets/images/b2b1.png";
import b2b2 from "../Assets/images/b2b2.png";
import b2b3 from "../Assets/images/b2b3.png";
import '../Animation.css'
const styles = {
  container: {
    padding: "0 20px",
    margin:'10px'
  },
  itemContainer: {
    display: "flex",
    flexDirection: "column",
  },
  descriptionContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "20px",
    padding: "10px 30px 20px 15px",
  },
  image: {
    width: "100%",
    height: "100%",
    minWidth:'300px'
  },
  background1: {
    background: "#f9e1d9",
  },
  background2: {
    background: "#F4F8FF",
  },
};

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slideContents = [
    {
      image: b2b1,
      heading: "Pickup & Drop Service",
      description:
        "Drivershaab operates in all the major cities of India and works with 50,000+ well-trained professional drivers. Driveshaab is committed to help our driver partners become micro-entrepreneurs and increase their income. also strives to improve quality of life for its driver partners through training in etiquette, hygiene, service quality etc.",
      backgroundStyle: styles.background1,
    },
    {
      image: b2b2,
      heading: "Pickup & Drop Service",
      description:
        "Drivershaab operates in all the major cities of India and works with 50,000+ well-trained professional drivers. Driveshaab is committed to help our driver partners become micro-entrepreneurs and increase their income. also strives to improve quality of life for its driver partners through training in etiquette, hygiene, service quality etc.",
      backgroundStyle: styles.background2,
    },
    {
      image: b2b3,
      heading: "Pickup & Drop Service",
      description:
        "Drivershaab operates in all the major cities of India and works with 50,000+ well-trained professional drivers. Driveshaab is committed to help our driver partners become micro-entrepreneurs and increase their income. also strives to improve quality of life for its driver partners through training in etiquette, hygiene, service quality etc.",
      backgroundStyle: styles.background1,
    },
  ];

  return (
    <div className="slider-container" style={styles.container}>
      <Slider {...settings}>
        {slideContents.map((slide, index) => (
          <div key={index}>
            <Grid container sx={styles.itemContainer}>
              <Grid item xs={6}>
                <img src={slide.image} alt="img" style={styles.image} />
              </Grid>
              <Grid item sx={{ ...styles.descriptionContainer, ...slide.backgroundStyle }}>
                <Typography sx={styles.heading}>{slide.heading}</Typography>
                <Typography sx={styles.description}>{slide.description}</Typography>
              </Grid>
            </Grid>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
