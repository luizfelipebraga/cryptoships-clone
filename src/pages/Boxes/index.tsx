import { Container, Header, Nav, Logo, MetaMaskSignIn } from "./styles";

export function BoxesPage() {
  return (
    <Container>
      <Header>
        <Nav>
        <Logo>CryptoShips</Logo>
        <MetaMaskSignIn>Login with Metamask</MetaMaskSignIn>
        </Nav>
      </Header>
    </Container>
  )
}
