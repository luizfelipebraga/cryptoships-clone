import { Container, Card, ImgCard, BoxDescription,  BuyButton } from "./styles";

type BoxProps = {
  img: string;
  title: string;
  description: string;
  buy: string;
  color: string;
}

export function CardComponent({...props}: BoxProps) {
  // const boxes = [
  //   {
  //     id: '1',
  //     name: "Common Blind Box",
      
  //     price: "Buy for 75 busd"
  //   },

  //   {
  //     id: '2',
  //     name: "Rare Blind Box",
  //     description: "Buy for 150 busd"
  //   },

  //   {
  //     id: '3',
  //     name: "Legendary Blind Box",
  //     description: "Buy for 250 busd"
  //   },
  // ]

  // function Buttons() {
  //   boxes.map((box) => (
  //     <BuyButton>{box.description}</BuyButton>
  //   ))
  // };


  return (
    <Container>

      <Card>
        <ImgCard src={props.img} />

        <BoxDescription>
          <span style={{color: props.color}}>{props.title}</span>
          <span style={{color: props.color}}>{props.description}</span>
        </BoxDescription>
      </Card>

      <BuyButton>{props.buy}</BuyButton>

    </Container>
  )
}
