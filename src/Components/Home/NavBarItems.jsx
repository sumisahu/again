import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Button, Menu, MenuItem } from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    background: "rgba(0,0,0,0.5)",
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow: `${
      theme.palette.mode === "light"
        ? "rgb(255, 255, 255) 0px 0px 0px 0px,"
        : ""
    } rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px`,
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function NavBarItems({ head, options }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuClosedDueToNavigation, setMenuClosedDueToNavigation] =
    React.useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (route) => {
    setAnchorEl(null);
    setTimeout(() => {
      navigate(`/${route}`);
      setMenuClosedDueToNavigation(true);
    }, 100);
  };

  React.useEffect(() => {
    if (menuClosedDueToNavigation) {
      setMenuClosedDueToNavigation(false);
      setAnchorEl(null);
    }
  }, [menuClosedDueToNavigation]);

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        endIcon={anchorEl ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
        sx={{
          color: "#1A466F",
          textTransform: "capitalize",
          "&:hover": { color: "#BB9C60" },
        }}
        onClick={handleClick}
      >
        {head}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => {
          setAnchorEl(null);
          setMenuClosedDueToNavigation(true);
        }}
      >
        {options.map((item, i) => (
          <MenuItem
            key={i}
            sx={{ textTransform: "capitalize", color: "#ffff" }}
            onClick={() => handleClose(item.link)}
          >
            {item.head}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
