import "./css/layout.css"
import "./css/menu.css"
import Pagina from "./components/layout/pagina.component";
import DadosCripotografados from "./components/dadosCriptografados";
import Link from "next/link";

export default function Home() {

  return (
    <Pagina>
      <div className="menuCentral">
        <Link href="/acidente" className="item" >
            <img src="../legislacoes.png" alt="Registro de Acidente" />
            <span>Legislações dos Agentes</span>            
        </Link>
        <Link href="/acidente" className="item">
            <img src="../legislacoes-transito.png" alt="Registro de Acidente" />
            <span>Legislações de Trânsito</span>            
        </Link>
        <Link href="/acidente" className="item">
            <img src="../colisao.png" alt="Registro de Acidente" />
            <span>Registro de Acidente</span>
        </Link>
      </div>
    </Pagina>
    // < DadosCripotografados />
  );
}