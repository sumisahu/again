import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import image1 from "../../assets/img/client.jpg";
import image2 from "../../assets/img/portfolio.jpg";
import image3 from "../../assets/img/work_for_you.jpg";
import { Container, Grid } from "@mui/material";
import "./ThreeCards.css"; // Import your custom CSS file

const itemData = [
  {
    img: image1,
    title: "1.Client-Centric",
    subtitle:
      "We embrace the legal fiduciary obligation to place Clients’ interests first",
 
  },
  {
    img: image2,
    title: "2.Portfolio Management",
    subtitle: "We deliver comprehensive financial planning",
  },
  {
    img: image3,
    title: "3.Work For You",
    subtitle: "We deliver comprehensive financial planning",
  },
];

export default function ThreeCards() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "20px" }}>
      <Grid container spacing={4}>
        {itemData.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <div className="image-list-item-container">
              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <ImageListItem
                  key={item.img}
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    borderBottom: "10px solid #BB9C60",
                  }}
                >
                  <img
                    srcSet={`${item.img}`}
                    src={`${item.img}`}
                    alt={item.title}
                    loading="lazy"
                    width="100%"
                    style={{
                      cursor: "pointer",
                      transition: "transform 0.3s ease",
                    }} // Add pointer cursor on hover
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.1)")
                    } // Scale up on hover
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")} // Scale back to normal size on mouse out
                  />
                  <div className="image-list-item-bar">
                    <h2 className="title">{item.title}</h2>
                    <p className="subtitle">{item.subtitle}</p>
                  </div>
                </ImageListItem>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
