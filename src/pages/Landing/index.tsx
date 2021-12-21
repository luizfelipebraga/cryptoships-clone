import { Container, Box, Button } from "./styes";

export function LandingPage() {
  return (
    <Container>
      <Box>
        <Button to="/home" target="_blank" rel="noreferrer">Home Page</Button>
        <Button to="/boxes" target="_blank" rel="noreferrer">Blind Boxes SALE <p>done - Click to check your purchased boxes</p></Button>
      </Box>
    </Container>
  )
}
