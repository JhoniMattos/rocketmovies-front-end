import { Container, Form } from "./styles";

import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NewItem } from "../../components/NewItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button"

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <div className="back">
            <FiArrowLeft />
            <Link to="/">Voltar</Link>
            </div>
            <h1>Novo filme</h1>
          </header>
          
          <div className="input">
          <Input placeholder="Título"/>
          <Input placeholder="Sua nota (de 0 a 5)"/>
          </div>
          <Textarea placeholder="Obervações"/>

          <Section title="Marcadores" >
            <div className="tag">
            <NewItem value="React"/>
            <NewItem placeholder="Novo marcador" isNew/>
            </div>
          </Section>

          <div className="footer">
          <Button title="Excluir filme" />
          <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  )
}