import { Container, Grid, Card, Box, Typography } from "@mui/material";
import { useState, useMemo } from "react";

const data = [
  {
    id: 1,
    icon: <i className="fas fa-home" style={{ fontSize: "35px" }}></i>,
    frontText: "Estate and Trust Planning",
    backText: `Succession Planning Estate Tax Assessment Donor-Advised Funds Philanthropy`,
  },
  {
    id: 2,
    icon: (
      <i className="fas fa-hand-holding-usd" style={{ fontSize: "35px" }}></i>
    ),
    frontText: "Retirement Planning",
    backText: `401(k) Profit Sharing Defined Benefit SIMPLE IRA SEP IRA`,
  },
  {
    id: 3,
    icon: <i className="fas fa-piggy-bank" style={{ fontSize: "35px" }}></i>,
    frontText: "Risk Management",
    backText: `Insurance Solutions Annuities Business Buy/Sell Agreements Long-Term Care Insurance`,
  },
  {
    id: 4,
    icon: (
      <i className="fas fa-money-check-alt" style={{ fontSize: "35px" }}></i>
    ),
    frontText: "Task Planning",
    backText: `Roth Conversion Tax Diversification Advice Income Distribution Strategies Tax Loss Harvesting`,
  },
  {
    id: 5,
    icon: <i className="fas fa-chart-bar" style={{ fontSize: "35px" }}></i>,
    frontText: "Wealth Management",
    backText: `Hedge Funds Private Equity/Credit Asset Allocation Planning Custodial Accounts`,
  },
  {
    id: 6,
    icon: <i className="fas fa-users" style={{ fontSize: "35px" }}></i>,
    frontText: "Family Office Resources",
    backText: `College / Education Savings Planning Lifestyle Advisory Personal Enrichment Cash Flow Analysis`,
  },
  {
    id: 7,
    icon: <i className="fas fa-chart-pie" style={{ fontSize: "35px" }}></i>,
    frontText: `budgeting`,
    backText: `Each portfolio is designed to meet a particular investment goal and is customized based on your individual investment objectives as well as your personal risk tolerance.`,
  },
];
const cardStyles = {
  width: "400px",
  height: "300px",
  background: "rgba(0,0,0,0.4)",
  transformStyle: "preserve-3d",
  transition: "transform 0.8s",
  position: "relative",
};

const ServicesTypes = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const memoizedCards = useMemo(() => {
    return data.map((item, index) => (
      <Grid
        item
        key={index}
        xs={12}
        sm={6}
        md={4}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          sx={{
            ...cardStyles,
            border: "4px solid #BB9C60",
            "&:hover": { transform: "rotateX(180deg)" },
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Box
            sx={{
              ...cardStyles,
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#fff",
              padding: "20px",
              transform: `rotateX(${hoveredIndex === index ? 180 : 0}deg)`,
            }}
          >
            <>
              {hoveredIndex === index ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#fff",
                      textAlign: "center",
                      fontSize: "20px",
                    }}
                  >
                    {item.backText}
                  </Typography>
                </Box>
              ) : (
                <Box
                  sx={{
                    color: "white",
                    margin: "20px auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {item.icon}
                  <Typography
                    color="#fff"
                    variant="h5"
                    fontFamily="lato"
                    fontWeight="bold"
                  >
                    {item.frontText}
                  </Typography>
                </Box>
              )}
            </>
          </Box>
        </Card>
      </Grid>
    ));
  }, [hoveredIndex]);

  return (
    <Container maxWidth="lg" sx={{ paddingBottom: "20px" }}>
      <Grid container spacing={4}>
        {memoizedCards}
      </Grid>
    </Container>
  );
};

export default ServicesTypes;
