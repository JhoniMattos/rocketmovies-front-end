import { Container, Form } from "./styles";

import { useState } from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NewItem } from "../../components/NewItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button"

import { api } from '../../services/api';

export function CreateMovie() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");   
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewMovie() {
    await api.post("/movies", {
      title,
      rating,
      description,
      tags
    });

    alert("Filme criado com sucesso!");
    navigate("/")
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <div className="back">
            
            <Link to="/"><FiArrowLeft />Voltar</Link>
            </div>
            <h1>Novo filme</h1>
          </header>
          
          <div className="input">
          <Input 
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />
          <Input 
            placeholder="Sua nota (de 0 a 5)"
            onChange={e => setRating(e.target.value)}
          />
          </div>
          <Textarea 
            placeholder="Obervações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Marcadores" >
            <div className="tag">
            {
              tags.map((tag, index) => (
                <NewItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
                  ))
            }  
            <NewItem  
              isNew
              placeholder="Novo marcador"
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
            </div>
          </Section>

          <div className="footer">
          <Button title="Excluir filme" />
          <Button 
            title="Salvar alterações" 
            onClick={handleNewMovie} 
          />
          </div>
        </Form>
      </main>
    </Container>
  )
}