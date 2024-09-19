import { Container, Profile } from "./styles";
import { Link } from 'react-router-dom';


import { Input } from "../Input"

export function Header() {
  return (
    <Container>
      <Profile>
        <div className="container">
        <h1>RocketMovies</h1>
        <Input placeholder="Pesquisar pelo título"/>
        <div className="log">
          <Link to="/profile">Jhoni Mattos</Link>
          <button>sair</button>
        </div>

        <img src="https://github.com/jhonimattos.png"
        alt="foto do usuário" />
        </div>
      </Profile>
    </Container>
  )
}