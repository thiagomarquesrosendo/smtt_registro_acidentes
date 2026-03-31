'use client'
import Subtitulo from "@/app/components/design/subtitulo.component";
import Logradouro from "./logradouro.component";
import TipoDeAcidente from "./tipo-de-acidente.component";
import { FormularioAcidenteHook } from "../hooks/formulario-acidente.hook";
import GravidadeDoAcidente from "./gravidade-do-acidente.component";
import VitimaPedestre from "./vitima-pedestre.component";
import MaisDetalhesDoAcidente from "./mais-detalhes-do-acidente.component";
import Clima from "./clima.component";
import Sinalizacao from "./sinalizacao.component";
import Iluminacao from "./iluminacao.component";
import Pavimento from "./pavimento.component";
import Veiculo from "./veiculo.component";
import Agentes from "./agentes.component";
import "../../../css/layout.css";
import "../../../css/menu.css"
import "../../../css/geral.css";
import "../../../css/formulario.css";
import { PersistenciaDeDadosHook } from "../hooks/persistenciaDeDados.hook";

export default function FormularioAcidente() {

    const { form, setForm, images, handleImages, removeImage, sendToWhatsApp, registroDeAcidente } = FormularioAcidenteHook();
    const { salvarDados, receberDados, limparDados } = PersistenciaDeDadosHook(form, setForm);

    return (
        <form onSubmit={sendToWhatsApp} className="fundoFormulario">
            <Subtitulo text="DADOS DO LOCAL DO ACIDENTE" />
            <Logradouro form={form} setForm={setForm} />

            <Subtitulo text="AGENTES QUE ATENDERAM A OCORRÊNCIA" />
            <Agentes form={form} setForm={setForm} />

            <Subtitulo text="TIPO DE ACIDENTE" />
            <TipoDeAcidente form={form} setForm={setForm} />

            <Subtitulo text="GRAVIDADE DO ACIDENTE" />
            <GravidadeDoAcidente form={form} setForm={setForm} />

            <Subtitulo text="DADOS DOS VEÍCULOS" />
            <Veiculo form={form} setForm={setForm} />

            <Subtitulo text="DADOS DOS PEDESTRES" />
            <VitimaPedestre form={form} setForm={setForm} />

            <Subtitulo text="MAIS DETALHES DO ACIDENTE" />
            <MaisDetalhesDoAcidente form={form} setForm={setForm} />

            <Subtitulo text="CLIMA" />
            <Clima form={form} setForm={setForm} />
            
            <Subtitulo text="SINALIZAÇÃO" />
            <Sinalizacao form={form} setForm={setForm} />

            <Subtitulo text="ILUMINAÇÃO" />
            <Iluminacao form={form} setForm={setForm}  />
            
            <Subtitulo text="PAVIMENTO" />
            <Pavimento form={form} setForm={setForm} />
            
            {/* <div className="absolute right-0 flex p-3 bg-amber-400" hidden={false}>
                <pre>
                    {registroDeAcidente()}
                </pre>
            </div> */}

            <button type="submit" value="Enviar" className="add" >Enviar Informações</button>

            <div>
                <button type="button" className="clear" onClick={() => salvarDados()}>Salvar</button>
                <button type="button" className="exibir" onClick={() => receberDados()}>Receber</button>
                <button type="button" className="popup" onClick={() => limparDados()}>Limpar</button>
            </div>
        </form>
    );
}