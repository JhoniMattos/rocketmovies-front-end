import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Card } from '../../components/Card';


import { FiPlus } from 'react-icons/fi'


import { Container, NewMovie, Content } from './styles'

export function Home() {
return (
  <Container>
    <Header />

    <Content>
      <header>
      <Section title="Meus filmes"/>
        <NewMovie to="/createmovie" >
          <FiPlus />
          Adicionar filme
        </NewMovie>
      </header> 

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