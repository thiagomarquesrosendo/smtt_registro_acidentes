'use client'
import Subtitulo from "@/app/components/design/subtitulo.component";
import Logradouro from "./logradouro.component";
import TipoDeAcidente from "./tipo-de-acidente.component";
import { EnviarFormularioAcidente } from "../hooks/enviar-formulario-acidente.hook";
import { OcultarObjetosFormulario } from "../hooks/ocultar-objetos-formulario.hook";
import GravidadeDoAcidente from "./gravidade-do-acidente.component";
import Veiculo from "./veiculo.component";
import VitimaPedestre from "./vitima-pedestre.component";
import MaisDetalhesDoAcidente from "./mais-detalhes-do-acidente.component";
import Clima from "./clima.component";
import Sinalizacao from "./sinalizacao.component";
import Iluminacao from "./iluminacao.component";
import Pavimento from "./pavimento.component";

export default function FormularioAcidente() {

    const {images, handleChange, handleImages, removeImage, sendToWhatsApp} = EnviarFormularioAcidente();

    return (
        <div className="fundoFormulario">
            <Subtitulo text="DADOS DO LOCAL DO ACIDENTE" />
            <Logradouro onChangeHandler={handleChange} />

            <Subtitulo text="AGENTES QUE ATENDERAM A OCORRÊNCIA" />
            <div>
                <input type="text" name="agentesOcorrencia" placeholder="Nomes dos Agentes" onChange={handleChange} />
            </div>

            <Subtitulo text="ENVOLVIDOS NO ACIDENTE" />
            <div>
                <input type="text" name="acidenteQtdVeiculos" placeholder="Quantidade veiculos" onChange={handleChange} />
                <input type="text" name="acidenteQtdPedestres" placeholder="Quantidade pedestres" onChange={handleChange} />
            </div>

            <Subtitulo text="TIPO DE ACIDENTE" />
            <div style={{marginBottom:'10px'}}>
                <input type="text" name="tipoAcidenteQtdTipos" placeholder="Quantidade de tipos de acidentes" onChange={handleChange} />
            </div>
            <TipoDeAcidente onChangeHandler={handleChange} />

            <Subtitulo text="GRAVIDADE DO ACIDENTE" />
            <GravidadeDoAcidente onChangeHandler={handleChange} />

            <Subtitulo text="DADOS DOS VEÍCULOS" />
            <Veiculo onChangeHandler={handleChange} />

            <Subtitulo text="DADOS DOS PEDESTRES" />
            <VitimaPedestre onChangeHandler={handleChange} />

            <Subtitulo text="MAIS DETALHES DO ACIDENTE" />
            <MaisDetalhesDoAcidente onChangeHandler={handleChange} />

            <Subtitulo text="CLIMA" />
            <Clima onChangeHandler={handleChange} />
            
            <Subtitulo text="SINALIZAÇÃO" />
            <Sinalizacao onChangeHandler={handleChange} />

            <Subtitulo text="ILUMINAÇÃO" />
            <Iluminacao onChangeHandler={handleChange} />
            
            <Subtitulo text="PAVIMENTO" />
            <Pavimento onChangeHandler={handleChange} />

            <button onClick={sendToWhatsApp}>
            Enviar para WhatsApp
            </button>
        </div>
    );
}