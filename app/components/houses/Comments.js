import { Container, Box, Typography, Divider, Paper, iconStyle } from "@mui/material";

export default function Comments({name}) {
  return (
    <Container>
      <Divider>
        <Box>
          <Typography>نظرات مهمانان</Typography>
        </Box>
        
      </Divider>
    </Container>
  );
}