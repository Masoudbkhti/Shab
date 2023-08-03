import { Container, Box, Typography, Divider, Paper, iconStyle } from "@mui/material";

export default function Comments({name}) {
  return (
    <Container>
      <Box sx={{marginTop:"15px"}}>
          <Typography>نظرات مهمانان</Typography>
        </Box>
    </Container>
  );
}