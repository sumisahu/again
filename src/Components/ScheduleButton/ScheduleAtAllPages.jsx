import { Box, Typography } from "@mui/material";
const ScheduleAtAllPages = () => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.showPopupWidget(
        "https://calendly.com/altaprivatewealth/60min?hide_gdpr_banner=1&background_color=efeae4&text_color=032845&primary_color=a99767"
      );
    }
  };

  return (
    <Box
      onClick={openCalendly}
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        width: "60%",
        background: "#0D3D5F",
        padding: "10px",
        textAlign: "center",
        borderRadius: "10px",
        maxWidth: "200px",
        cursor: "pointer",
      }}
    >
      <Typography color="#fff">Schedule A Meeting</Typography>
    </Box>
  );
};

export default ScheduleAtAllPages;
