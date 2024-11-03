import { Container, Content } from "./styles";

import { FiArrowLeft, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


import { api } from '../../services/api';
import { Header } from "../../components/Header";

import { Stars } from "../../components/Stars";
import { Tag } from "../../components/Tag";
import { Section } from "../../components/Section";


export function MoviePreview() {
  const [data, setData] = useState(null);

  const params = useParams();

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data)
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      { 
        data && 
      <Section title="">
       <Content> 
        <div className="back">
        <FiArrowLeft />
        <Link to="/">Voltar</Link>
        </div>

        <div className="title">
          <h1>{data.title}</h1>
          <Stars ratings={data.ratings || 4} />
        </div>

        <div>
          <strong>
            <img src="https://github.com/jhonimattos.png" 
            alt="imagem do usário" />
           <span>Por {data.name || "Jhoni Mattos"}</span>
          </strong>
          <strong>
            <FiClock className="clock" />
            <span>{data.updated_at || "15/09/2024 17:47"}</span>
          </strong>
        </div>

       { 
          data.tags &&
        <div className="tag">
          {
            data.tags.map(tag => (
          <Tag
            key={String(tag.id)}
            title={tag.name} />
          ))
          }
        </div>
        }

        <p>
         {data.description}
        </p>

        
       </Content>
      </Section>
      }
    </Container>
  )
}