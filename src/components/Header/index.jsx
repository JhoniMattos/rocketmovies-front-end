import { Container, Profile } from "./styles";
import { Link } from 'react-router-dom';

import {useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Input } from "../Input";

export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <Profile>
        <div className="container">
        <h1>RocketMovies</h1>
        <Input placeholder="Pesquisar pelo título"/>
        <div className="log">
          <Link to="/profile">Jhoni Mattos</Link>
          <button onClick={signOut}>
            sair
          </button>
        </div>

        <img src={avatarUrl}
        alt="foto do usuário" />
        </div>
      </Profile>
    </Container>
  )
}