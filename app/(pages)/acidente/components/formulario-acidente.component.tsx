'use client'
import Subtitulo from "@/app/components/design/subtitulo.component";
import Logradouro from "./logradouro.component";
import TipoDeAcidente from "./tipo-de-acidente.component";
import { EnviarFormularioAcidente } from "../hooks/enviar-formulario-acidente.hook";
import GravidadeDoAcidente from "./gravidade-do-acidente.component";
import VitimaPedestre from "./vitima-pedestre.component";
import MaisDetalhesDoAcidente from "./mais-detalhes-do-acidente.component";
import Clima from "./clima.component";
import Sinalizacao from "./sinalizacao.component";
import Iluminacao from "./iluminacao.component";
import Pavimento from "./pavimento.component";
import Veiculo from "./veiculo.component";
import { VeiculoDTO } from "../dto/Veiculo.dto";
import { PedestreDTO } from "../dto/Pedestre.dto";

export default function FormularioAcidente() {

    const { form, setForm, images, handleChange, handleImages, removeImage, sendToWhatsApp, registroDeAcidente, addVeiculo, delVeiculo, addPedestre, delPedestre, addVeiculoVitima, delVeiculoVitima } = EnviarFormularioAcidente();

    return (
        <form onSubmit={sendToWhatsApp} className="fundoFormulario">
            <Subtitulo text="DADOS DO LOCAL DO ACIDENTE" />
            <Logradouro 
                onChangeHandler={(e) => handleChange(-1, -1, -1, e)} />

            <Subtitulo text="AGENTES QUE ATENDERAM A OCORRÊNCIA" />
            <div>
                <input type="text" name="agentesOcorrencia" placeholder="Nomes dos Agentes" 
                    onChange={(e) => handleChange(-1, -1, -1, e)} />
            </div>

            <Subtitulo text="TIPO DE ACIDENTE" />
            <TipoDeAcidente 
                onChangeHandler={(e) => handleChange(-1, -1, -1, e)} />

            <Subtitulo text="GRAVIDADE DO ACIDENTE" />
            <GravidadeDoAcidente 
                onChangeHandler={(e) => handleChange(-1, -1, -1, e)} />

            <Subtitulo text="DADOS DOS VEÍCULOS" />
            {form.veiculos!.map((veiculo: VeiculoDTO, indexVeiculo: number) => (
                <Veiculo key={indexVeiculo}                
                    onChangeHandler={handleChange} indexVeiculo={indexVeiculo} veiculo={veiculo} 
                    delVeiculo={() => delVeiculo(indexVeiculo)} 
                    addVeiculoVitima={() => addVeiculoVitima(indexVeiculo)} 
                    delVeiculoVitima={() => delVeiculoVitima(indexVeiculo, -1)} />
            ))}
            <button type="button" className="add" 
                onClick={() => addVeiculo()}>+ Veiculo</button>

            <Subtitulo text="DADOS DOS PEDESTRES" />
            {form.pedestres!.map((pedestre: PedestreDTO, indexPedestre: number) => (
                <VitimaPedestre key={indexPedestre} 
                    onChangeHandler={handleChange} indexPedestre={indexPedestre} pedestre={pedestre} 
                    delPedestre={() => delPedestre(indexPedestre)}  />
            ))}
            <button type="button" className="add" 
                onClick={() => addPedestre()}>+ Pedestre</button>

            <Subtitulo text="MAIS DETALHES DO ACIDENTE" />
            <MaisDetalhesDoAcidente 
                onChangeHandler={(e) => handleChange(-1, -1, -1, e)} />

            <Subtitulo text="CLIMA" />
            <Clima 
                onChangeHandler={(e) => handleChange(-1, -1, -1, e)} />
            
            <Subtitulo text="SINALIZAÇÃO" />
            <Sinalizacao 
                onChangeHandler={(e) => handleChange(-1, -1, -1, e)} />

            <Subtitulo text="ILUMINAÇÃO" />
            <Iluminacao 
                onChangeHandler={(e) => handleChange(-1, -1, -1, e)} />
            
            <Subtitulo text="PAVIMENTO" />
            <Pavimento 
                onChangeHandler={(e) => handleChange(-1, -1, -1, e)} />

            
            <div className="absolute right-0 flex p-3 bg-amber-400" hidden={false}>
                <pre>
                    {registroDeAcidente()}
                </pre>
            </div>

            <button type="button" className="add" 
                onClick={sendToWhatsApp}>
            Enviar para WhatsApp
            </button>

            <input type="submit" value="Enviar" className="add"  />


        </form>
    );
}