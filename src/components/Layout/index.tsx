import { ReactNode } from "react"
import { Footer } from "../Footer"
import { NavBar } from "../Nav"
import { SocialMedias } from "../SocialMedia"
import { Container, Content } from "./styles"

type LayoutProps = {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Container>

      <NavBar/>
      <SocialMedias/>

      <Content>{children}</Content>

      <Footer/>

    </Container>
  )
}
