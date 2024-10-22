import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Card } from '../../components/Card';
import { api } from '../../services/api';


import { FiPlus } from 'react-icons/fi';
import { useState, useEffect } from 'react';


import { Container, NewMovie, Content } from './styles'

export function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

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
      />
      ))
      }
      
      <Card
      data={{
        name: "Jhoni",
        id: 1,
        title: "Interestellar",
        rating: 4,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam repellat doloribus cumque ipsa iure eaque quod veritatis, maxime harum recusandae animi alias molestias odit. Illum veniam sequi saepe dolorum debitis.",
        tags: [
          { id: "1", name: "Ficção Cientifica" },
          { id: "2", name: "Drama" },
          { id: "3", name: "Família" },
        ],
      }}
      />
    </Content>        
  </Container>
)
}