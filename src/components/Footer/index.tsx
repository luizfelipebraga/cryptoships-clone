import { Link } from "react-router-dom";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <ul>
        <Link to="/home#gameplay">gameplay</Link>
        <Link to="/home#ships">ships</Link>
        <Link to="/home#roadmap">roadmap</Link>
        <Link to="/home#whitepaper">whitepaper</Link>
      </ul>
    </Container>
  )
}
