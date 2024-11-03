import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Card } from '../../components/Card';
import { api } from '../../services/api';


import { FiPlus } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import { Container, NewMovie, Content } from './styles'

export function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/moviepreview/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movies?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [search]);

return (
  <Container>
    <Header search={search} setSearch={setSearch} />

    <Content>
      <header>
      <Section title="Meus filmes"/>
        <NewMovie to="/createmovie" >
          <FiPlus />
          Adicionar filme
        </NewMovie>
      </header> 

      {
        notes.map(note => (
        <Card
        key={String(note.id)}
        data={note}
        onClick={() => handleDetails(note.id)}
      />
      ))
      }

    </Content>        
  </Container>
)
}