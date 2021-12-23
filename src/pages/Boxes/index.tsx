import { CardComponent } from "../../components/Card";
import { Background, Container, Header, Nav, Logo, MetaMaskSignIn, Content, Main, TypeBox, ContentBox, Title, ContainerCards, BoxCards } from "./styles";

//images
import CommonBoxImg from '../../documents/images/common_box.png';
import RareBoxImg from '../../documents/images/rare_box.png';
import LegendaryBoxImg from '../../documents/images/legendary_box.png';

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

                <span style={{ color: '#959595' }}>0 Common Blind Box(es)</span>
                <span style={{ color: '#eb996a' }}>0 Rare Blind Box(es)</span>
                <span style={{ color: '#eb4846' }}>0 Legendary Blind Box(es)</span>
              </ContentBox>
            </TypeBox>


            <ContainerCards>
              <BoxCards>
                <CardComponent color="#959595" img={CommonBoxImg} title="Common Blind Box" description="0 box(es) left" buy="buy for 75 busd" />
                <CardComponent color="#eb996a" img={RareBoxImg} title="Rare Blind Box" description="0 box(es) left" buy="buy for 150 busd" />
                <CardComponent color="#eb4846" img={LegendaryBoxImg} title="Legendary Blind Box" description="0 box(es) left" buy="buy for 250 busd" />
              </BoxCards>
            </ContainerCards>

          </Main>
        </Content>
      </Container>
    </Background>
  )
}
