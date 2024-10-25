// pages/index.js
import Greeting from '../components/Greeting';

export default function Home() {
  return (
    <div>
      <Greeting name="Estudante" />
      <Greeting /> {/* Saudação com o nome padrão */}
    </div>
  );
}
