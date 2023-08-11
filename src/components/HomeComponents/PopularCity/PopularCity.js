import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import PopularSlider from "./PopularSlider";

const PopularCity = ({ data }) => {
  return (
    <>
      <Box
        backgroundColor="info.light"
        sx={{ with: "100%", padding: { sm: "24px 5%" } }}
      >
        <Box sx={{ marginY: 1 }}>
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
        </Box>
      </Box>
    </>
  );
};
export default PopularCity;
