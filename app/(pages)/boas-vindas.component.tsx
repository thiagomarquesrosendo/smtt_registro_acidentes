import Titulo from "../components/design/titulo.component";
import "../css/formulario.css"

export default function BoasVindas() {
    return (
        <div className="login">
            <div className="fundo">
                <div className="titulo">
                    <Titulo text="ÁREA DE ACESSO AO SISTEMA" />
                </div>
                <div className="conteudo">
                    <img src="./agtaju.png" alt="Agentes de Trânsito de Aracaju" />
                    <div>Bem-vido ao Site dos Agentes de Trânsito de Aracaju</div>
                </div>
                
                <button type="submit" value="Enviar" className="entrar">Acessar o Sistema</button>
            </div>
        </div>
    );
}