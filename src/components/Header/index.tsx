import logoimg from "../../assets/logo.svg"
import { Container } from "./styles"

export function Header(){
  return(
    <Container>
      <img src={logoimg} alt="dt money" />
      <button className="button">
        Nova transação
      </button>
    </Container>
  )
}