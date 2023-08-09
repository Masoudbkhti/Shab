import { Box, Container, Grid, Paper, Typography } from "@mui/material";
// import CityCards from "@/app/components/PopularCity/CityCards";
import PopularSlider from "./PopularSlider";

const PopularCity = ({ data }) => {
  return (
    <>
      <Box
        backgroundColor="info.light"
        sx={{ with: "100%", padding: "15px 0" }}
      >
        <Container sx={{ marginY: 1 }}>
          <>
            <Paper variant="outlined" sx={{ borderRadius: "8px" }}>
              <Box marginY={4} paddingX={2}>
                <Typography
                  variant="h6"
                  component="h1"
                  fontWeight="bold"
                  marginY={1}
                >
                  اجاره ویلا در شهر های پر بازدید
                </Typography>
                <PopularSlider data={data} />
              </Box>
            </Paper>
          </>
        </Container>
      </Box>
    </>
  );
};
export default PopularCity;
