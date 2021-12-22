import { Container, Card, ImgCard, BoxDescription,  BuyButton } from "./styles";

type BoxProps = {
  img: HTMLImageElement;
  title: string;
  description: string;
}

export function BoxCard({...props}: BoxProps) {
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
        <ImgCard />
        <BoxDescription></BoxDescription>
      </Card>

      <BuyButton></BuyButton>

    </Container>
  )
}
