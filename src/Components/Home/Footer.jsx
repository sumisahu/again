import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Link, Box, Divider } from "@mui/material";
import { LinkedIn, Instagram, Facebook, Place } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/footer_logo.png";
 
const Footer = () => {
    const navigate = useNavigate();

  return (
    <div style={{  width: "100%",
    color: "white",
    background: "#efeae4",
    marginTop: "50px",
    textAlign: "center",}}>
      <div  style={{  display: "flex",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center", }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={logo}
            width="70vw"
            height="90vh"
            style={{ marginTop: "50px" }}
            alt="ALTA PRIVATE WEALTH"
            loading="lazy"
            onClick={() => navigate("/")}
          />
          <Typography
            variant="h4"
            style={{
              color: "#0D3D5F",
              width: "50%",
              marginTop: "20px",
              fontWeight: "bold",
            }}
            onClick={() => navigate("/")}
          >
            ALTA PRIVATE WEALTH
          </Typography>
        </div>
        <div  style={{    display: "flex",
    flexDirection: "column",
    padding: "5%",
    paddingTop: "1%",
    textAlign: "center",
    color:'#0D3D5F'}}>
          <Typography variant="h6">CONTACT</Typography>
          <Link
            href="/donate"
            sx={{
              color: "#0D3D5F",
              textDecoration: "none",
              "&:hover": { color: "#BB9C60" },
            }}
          >
            Phone: (619) 535-0072
          </Link>
          <Link
            href="mailto:Info@AltaPrivateWealth.com"
            sx={{
              color: "#0D3D5F",
              textDecoration: "none",
              "&:hover": { color: "#BB9C60" },
            }}
          >
            Email: Info@AltaPrivateWealth.com
          </Link>
          <Box>
            <Link
              href="https://www.facebook.com/alan.grismore"
              component="a"
              sx={{ color: "inherit", "&:hover": { color: "#BB9C60" } }}
            >
              <Facebook fontSize="large" />
            </Link>
            <Link
              href="https://www.instagram.com/adgrismore/"
              component="a"
              sx={{ color: "inherit", "&:hover": { color: "#BB9C60" } }}
            >
              <Instagram fontSize="large" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/alandgrismore/"
              component="a"
              sx={{ color: "inherit", "&:hover": { color: "#BB9C60" } }}
            >
              <LinkedIn
                fontSize="large"
                sx={{ "&:hover": { color: "#BB9C60" } }}
              />
            </Link>
          </Box>
        </div>
        <div  style={{    display: "flex",
    flexDirection: "column",
    padding: "5%",
    paddingTop: "1%",
    textAlign: "center",
    color:'#0D3D5F'}}>
          <Typography variant="h6">LOCATION</Typography>
          <Link
            href="/terms_and_condition"
            sx={{ color: "#0D3D5F", textDecoration: "none" }}
          >
            1901 First Avenue,
            <br />
            Suite 213
            <br />
            San Diego, CA 92101
          </Link>
          <Box>
            <Place sx={{ "&:hover": { color: "#BB9C60" } }} />
          </Box>
        </div>
        <div style={{    display: "flex",
    flexDirection: "column",
    padding: "5%",
    paddingTop: "1%",
    textAlign: "center",
    color:'#0D3D5F'}} >
          <Typography variant="h6">APW Documents</Typography>
          {[
            { doc: "Form CRS", link: "/form_crs" },
            { doc: "Form ADV Part 2A", link: "/" },
            { doc: "Form ADV Part 2B", link: "/" },
            { doc: "AWM Privacy Notice", link: "/" },
            { doc: "Disclosures", link: "/" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.link}
              sx={{
                color: "#0D3D5F",
                textDecoration: "none",
                "&:hover": { color: "#BB9C60" },
              }}
            >
              {item.doc}
            </Link>
          ))}
        </div>
      </div>
      <Divider variant="middle" sx={{ background: "#0D3D5F" }} />
      <Typography
        paragraph
        gutterBottom
        sx={{ fontSize: "10px", padding: "10px", color: "#0D3D5F" }}
      >
        Alta Private Wealth Management, LLC (“Alta Private Wealth”) dba Axxcess
        Wealth Management, LLC ("Axxcess") is a registered investment advisor
        ("RIA"). Axxcess is located in the State of California. Alta Private
        Wealth provides investment advisory and related services for clients
        nationally. Alta Private Wealth will maintain all applicable
        registration and licenses as required by the various states in which
        Alta Private Wealth conducts business, as applicable. Alta Private
        Wealth renders individualized responses to persons in a particular state
        only after complying with all regulatory requirements or pursuant to an
        applicable state exemption or exclusion.
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          padding: 15,
          color: "#0D3D5F",
          fontSize: "10px",
        }}
      >
        © {new Date().getFullYear()} Alta Private Wealth. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
