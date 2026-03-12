import BoasVindas from "./(pages)/boas-vindas.component";
import Pagina from "./components/layout/pagina.component";
import "./css/layout.css"

export default function Home() {
  return (
    <Pagina>
      <BoasVindas />
    </Pagina>
  );
}