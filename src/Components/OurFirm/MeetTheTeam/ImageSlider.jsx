const ImageSlider = ({ image }) => {
  return (
    <div
      data-aos="zoom-out-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <img
        src={image.image}
        alt={image.title}
        style={{
          width: "100%",
          height: { xs: "auto", md: "100%" },
          objectFit: "cover",
        }}
        loading="lazy" // Lazy load the image
      />
    </div>
  );
};

export default ImageSlider;
