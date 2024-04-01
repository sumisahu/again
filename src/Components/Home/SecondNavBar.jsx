import React, { useState, useEffect, useCallback } from "react";
import {
  CssBaseline,
  useMediaQuery,
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Accordion,
  AccordionSummary,
  List,
  ListItem,
} from "@mui/material";
import { Menu, LockPerson, ExpandMore, ArrowLeft } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import broker from "../../assets/img/broker.png";
import smallScreen from "../../assets/video/smallScreen.mp4";
import smallScreen2 from "../../assets/video/smallScreen2.mp4";
import NavBarItems from "./NavBarItems";
import { useTheme } from "@mui/material/styles";

const SecondNavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [menuClosedDueToNavigation, setMenuClosedDueToNavigation] =
    useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matches2 = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleNavigation = useCallback(
    (route) => {
      setOpenDrawer(false);
      navigate(route);
      setMenuClosedDueToNavigation(true);
    },
    [navigate]
  );

  useEffect(() => {
    if (menuClosedDueToNavigation) {
      setMenuClosedDueToNavigation(false);
      setOpenDrawer(false);
    }
  }, [menuClosedDueToNavigation]);

  const AllLinksForOurFirm = [
    { head: "Meet The Team", link: "meet_the_team" },
    { head: "Our Philosophy", link: "our_philosophy" },
    { head: "Our Fiduciary Promise", link: "our_fiduciary_promise" },
  ];

  const AllLinksForServices = [
    { head: "Planning Process", link: "planning_process" },
    { head: "What We Offer", link: "what_we_offer" },
    { head: "Who We Serve", link: "who_we_serve" },
  ];

  return (
    <>
      <CssBaseline />
      {matches ? (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="relative"
            color="inherit"
            component="nav"
            sx={{ background: "#efeae4" }}
          >
            <Toolbar variant="dense">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
              >
                <Menu sx={{ color: "#BB9C60" }} />
              </IconButton>
              <Box sx={{ flexGrow: 1 }} />
              <Box
                sx={{
                  MaxWidth: "50%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Link to="https://adviserinfo.sec.gov/individual/summary/6568597">
                  <img
                    src={broker}
                    width="90vw"
                    height="30px"
                    alt="Broker_Check"
                    loading="lazy"
                  />
                </Link>
                <Box
                  sx={{
                    ml: "10px",
                    background: "#009EDC",
                    fontSize: "10px",
                    padding: "6px",
                    borderRadius: "16px",
                    fontFamily: "lato,sans-serif",
                    color: "white",
                    textDecoration: "none",
                  }}
                  component="a"
                  href="https://client.schwab.com/Areas/Access/Login"
                >
                  Schwab Login
                </Box>
                <IconButton
                  aria-label="account of current user"
                  aria-haspopup="true"
                  href="https://app.advizr.com/ConsumerCampaignRegistration/?i=aaa2ffcd-d2f3-42ba-932f-86823165702e&h=eyJhbGciOiJSUzI1NiJ9.eyJpZCI6ImFhYTJmZmNkLWQyZjMtNDJiYS05MzJmLTg2ODIzMTY1NzAyZSIsInR5cGUiOjN9.xE9TQCJmxBxN5foJQSvy8bgG_P12Hf0a5BIwScytFqI"
                >
                  <LockPerson sx={{ color: "#BB9C60" }} />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          <Drawer
            anchor="left"
            open={openDrawer}
            onClose={handleDrawerClose}
            PaperProps={{ sx: { width: 250, background: "rgba(0,0,0,0.5)" } }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <ArrowLeft
                sx={{ color: "white", cursor: "pointer" }}
                onClick={handleDrawerClose}
              />
            </Box>
            <Accordion
              elevation={0}
              sx={{
                background: "transparent",
                margin: "10px",
                color: "white",
                textTransform: "capitalize",
                cursor: "pointer",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: "white" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ borderBottom: "1px solid white" }}
              >
                our firm
              </AccordionSummary>
              <List>
                {AllLinksForOurFirm.map((link) => (
                  <ListItem
                    key={link.link}
                    onClick={() => handleNavigation(`/${link.link}`)}
                  >
                    {link.head}
                  </ListItem>
                ))}
              </List>
            </Accordion>
            <Accordion
              elevation={0}
              sx={{
                background: "transparent",
                margin: "10px",
                color: "white",
                textTransform: "capitalize",
                cursor: "pointer",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: "white" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ borderBottom: "1px solid white" }}
              >
                services
              </AccordionSummary>
              <List>
                {AllLinksForServices.map((link) => (
                  <ListItem
                    key={link.link}
                    onClick={() => handleNavigation(`/${link.link}`)}
                  >
                    {link.head}
                  </ListItem>
                ))}
              </List>
            </Accordion>
            <Accordion
              elevation={0}
              sx={{
                background: "transparent",
                margin: "10px",
                color: "white",
                textTransform: "capitalize",
                cursor: "pointer",
              }}
            >
              <List>
                <ListItem onClick={() => handleNavigation("/contact")}>
                  Contact us
                </ListItem>
              </List>
            </Accordion>
            <Accordion
              elevation={0}
              sx={{
                background: "transparent",
                margin: "10px",
                color: "white",
                textTransform: "capitalize",
                cursor: "pointer",
              }}
            >
              <List>
                <ListItem onClick={() => handleNavigation("/apw_blog")}>
                  APW Blog
                </ListItem>
              </List>
            </Accordion>
          </Drawer>
          <AppBar position="sticky" color="inherit">
            {matches2 ? (
              <></>
            ) : (
              <Toolbar>
                <video
                  preload="none"
                  src={smallScreen2}
                  title="ALTA PRIVATE WEALTH"
                  muted
                  loop
                  autoPlay
                  width="100%"
                  style={{ clipPath: "inset(1px)" }}
                  onClick={() => navigate("/")}
                />
              </Toolbar>
            )}
          </AppBar>
        </Box>
      ) : (
        <AppBar
          position="sticky"
          color="inherit"
          sx={{ background: "#efeae4" }}
        >
          <Toolbar
            sx={{
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <video
              src={smallScreen}
              title="ALTA PRIVATE WEALTH"
              width="30%"
              muted
              loop
              autoPlay
              style={{ clipPath: "inset(1px)", cursor: "pointer" }}
              onClick={() => navigate("/")}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "auto",
                gap: "20px",
                justifyContent: "center",
                padding: "10px",
                color: "#1A466F",
              }}
            >
              <NavBarItems head="ourfirm" options={AllLinksForOurFirm} />
              <NavBarItems head="services" options={AllLinksForServices} />
              <HoverLink to="/contact">Contact Us</HoverLink>
              <HoverLink to="/apw_blog" isBlogLink>
                APW Blog
              </HoverLink>
              <Box
                sx={{
                  ml: "10px",
                  background: "#009EDC",
                  fontSize: "15px",
                  padding: "8px",
                  borderRadius: "20px",
                  fontFamily: "lato,sans-serif",
                  color: "white",
                  textDecoration: "none",
                }}
                component="a"
                href="https://client.schwab.com/Areas/Access/Login"
              >
                Schwab Login
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

// Component for creating hover effect with delay
const HoverLink = ({ children, to, isBlogLink }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Typography
      component={Link}
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        fontSize: "15px",
        fontFamily: "lato,sans-serif",
        position: "relative",
        textDecoration: "none",
        cursor: "pointer",
        color: "#1A466F",
        "&::before": {
          content: "''",
          position: "absolute",
          width: "100%",
          height: "2px",
          bottom: 0,
          left: 0,
          backgroundColor: "#BB9C60",
          transform: `scaleX(${hovered ? 1 : 0})`,
          transformOrigin: "bottom right",
          transition: "transform 0.3s ease-in-out",
        },
        "&:hover": {
          color: isBlogLink ? "#BB9C60" : "#BB9C60",
          "&::before": {
            transform: isBlogLink ? "scaleX(1.0)" : "scaleX(1)",
          },
          transform: isBlogLink ? "translateY(-5px)" : "translateY(0)", // Add translation effect on hover for APW Blog
        },
      }}
    >
      {children}
    </Typography>
  );
};

export default SecondNavBar;
