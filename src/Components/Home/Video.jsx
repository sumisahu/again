import { Box } from "@mui/material";
  const Video = ({data}) => {
    return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div>
          <video
            src={data.home_video}
            width="100%"
            muted
            autoPlay
            loop
            style={{ clipPath: "inset(1px)" }}
            title="Life insurance planning"
          />
        </div>

        <Box
          sx={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              border: "2px solid",
              padding: "6px",
              textAlign: "center",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: { xs: "8px", sm: "13px" },
              fontFamily: "lato,sans-serif",
              fontWeight: "bold",
              letterSpacing: 1,
              color: "white",
              width: "fit-content",
              maxWidth: "100%",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Initial shadow
              "&:hover": {
                background: "#A99767",
                transform: "translateY(-4px)", // Move the button slightly up
              },
            }}
            component="a"
            href="https://forms.zohopublic.com/axxcesschat/form/AltaPrivateWealthClientInformationFormV2/formperma/zYvitOmG3EQjfv2suSBVbUWf6GQr14jZJv3AAI7BpFc"
          >
            New Prospect
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Video;
