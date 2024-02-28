import { Box, Button, Typography } from "@mui/material";

function HomePage() {
  return (
    <Box>
      <Typography variant="h2">HomePage</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        hic id possimus mollitia temporibus tenetur sed iusto cupiditate optio
        corporis laudantium nam culpa, maxime, distinctio magnam, labore
        aspernatur! Obcaecati, ipsum!
      </Typography>
      <Button variant="contained" color="primary">
        Klicka på mig!
      </Button>
    </Box>
  );
}

export default HomePage;
