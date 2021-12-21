import { Background, Container, Header, Nav, Logo, MetaMaskSignIn, Content, Main, TypeBox, ContentBox, Title } from "./styles";

export function BoxesPage() {
  return (
    <Background>
      <Container>
        <Header>
          <Nav>
            <Logo>CryptoShips</Logo>
            <MetaMaskSignIn>Login with Metamask</MetaMaskSignIn>
          </Nav>
        </Header>

        <Content>
          <Main>
            <Title>Blind boxes sale</Title>

            <TypeBox>
              <ContentBox>
                <span>Commmon Blind Box: 
                  <p style={{ color: '#959595' }}>40% Common</p> 
                  <p style={{ color: '#5b6889' }}>40% Uncommon</p> 
                  <p style={{ color: "#0b5079" }}>20% Rare</p></span>
                
                <span>Rare Bind Box:
                  <p style={{ color: '#5b6889' }}>30% Uncommon</p>
                  <p style={{ color: '#0b5079' }}>60% Rare</p>
                  <p style={{ color: "#eb996a" }}>8% Epic</p>
                  <p style={{ color: "#eb4846" }}>2% Legendary</p>
                </span>

                <span>Legendary Blind Box:
                  <p style={{ color: '#0b5079' }}>60% Rare</p>
                  <p style={{ color: '#eb996a' }}>32% Epic</p>
                  <p style={{ color: "#eb4846" }}>8% Legendary</p>
                </span>

                <span>You Currently Have</span>

                <span style={{ color: '#959595' }}>0 Cummon Blind Box(es)</span>
                <span style={{ color: '#eb996a' }}>0 Rare Blind Box(es)</span>
                <span style={{ color: '#eb4846' }}>0 Legendary Blind Box(es)</span>
              </ContentBox>
            </TypeBox>

          </Main>
        </Content>
      </Container>
    </Background>
  )
}
