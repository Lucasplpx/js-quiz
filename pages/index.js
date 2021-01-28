import { useState } from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const [name, setName] = useState('');

  const router = useRouter();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={handleSubmit}>
              <Input
                name="nomeDoUsuario"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Faça uma pergunta!"
                type="text"
              />

              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>The legend of zelda</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. sint ex.
              Eligendi, distinctio.
            </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Lucasplpx" />
    </QuizBackground>
  );
}
