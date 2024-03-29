import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  footerContainer: {
    width: "100%",
    color: "white",
    background: "#efeae4",
    marginTop: "50px",
    textAlign: "center", // Center the content by default
  },

  linkContainer: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center", // Center the content horizontally
  },

  links: {
    display: "flex",
    flexDirection: "column",
    padding: "5%",
    paddingTop: "1%",
    textAlign: "center",
    color:'#0D3D5F'
   },

  links2: {
    display: "flex",
    justifyContent: "center", // Center the content horizontally
  },

 

  iconStyles: {
    color: "white",
    textDecoration: "none",
  },
  socialIcon: {
    margin: 2,
  },

  "@media (min-width: 768px)": {
    // Media query for screens wider than 768px (typically tablets and above)
    links: {
      flexDirection: "column",
    },
    links2: {
      justifyContent: "flex-start",
    },
  },
});
