 import { useState } from "react";
import { EnviarFotos } from "./enviar-fotos.hook";
import { AcidenteDTO } from "../dto/Acidente.dto";
import { VitimaDTO } from "../dto/Vitima.dto";
import { VeiculoDTO } from "../dto/Veiculo.dto";
import { PedestreDTO } from "../dto/Pedestre.dto";

export function FormularioAcidenteHook() {

  const [form, setForm] = useState<AcidenteDTO>({
    logradouro: "",
    pontoReferencia: "",
    bairro: "",
    horario: "",
    agentesOcorrencia: "",
    tipoAcidente: "",
    tipoAcidenteSubTipo: "",
    tipoAcidenteObs: "",
    gravidade: "",
    veiculos: [],
    pedestres: [],
    detalhesFazerBO: false,
    detalhesCPTRAN: false,
    detalhesIML: false,
    detalhesAcordo: false,
    detalhesAcordoNumero: "",
    climaTipo: "",
    sinalizacao: "",
    sinalizacaoObs: "",
    iluminacao: "",
    iluminacaoNoite: "",
    pavimento: "",
  });


  function registroDeAcidente(): string {

    const message = `📋 *REGISTRO DE ACIDENTES DE TRÂNSITO* ✅

-------------------------------------------------------
🧭 *DADOS DO LOCAL DO ACIDENTE*

  *Logradouro:* ${form.logradouro}
  *Ponto de Referência:* ${form.pontoReferencia}
  *Bairro:* ${form.bairro}
  *Horário:* ${form.horario}

-------------------------------------------------------
👨‍✈️ *AGENTES QUE ATENDERAM A OCORRÊNCIA*

  *Nomes:* ${form.agentesOcorrencia}

-------------------------------------------------------
📵 *TIPO DE ACIDENTE*

  *Tipo de Acidente:* ${form.tipoAcidente} ${form.tipoAcidenteSubTipo}
  *Gravidade:* ${form.gravidade}
  *Outras informações:* ${form.tipoAcidenteObs}

${form.veiculos!.length > 0 ? (
`-------------------------------------------------------
🚔 *DADOS DOS VEÍCULOS*
${form.veiculos!.map((veiculo: VeiculoDTO, indexVeiculo: number) => (
`  ${indexVeiculo + 1}) VEÍCULO 🚗🚴‍♀️🚛🏍️

  Tipo de Veículo: ${veiculo.tipoVeiculo}
  Placa: ${veiculo.placa}
  Nome do Condutor: ${veiculo.nomeCondutor}
  Número de Ocupantes: ${veiculo.numeroOcupantes} pessoa(s)
  ${veiculo.removido ? (
`  Removido para o pátio:
    - Tipificação do AIT: ${veiculo.removidoTipo}
    - Número do AIT: ${veiculo.removidoAuto}`) : (``)}
    ${veiculo.responsavel ? (
`  Responsável pelo veículo:
    - Nome: ${veiculo.responsavelNome}
    - CPF: ${veiculo.responsavelCPF}`) : (``)}

    VÍTIMAS
  
    - Número de vítimas: ${veiculo.vitimas?.length} vítima(s)
    ${veiculo.vitimas!.map((vitima: VitimaDTO, indexVitima: number) => (
`    ${indexVitima + 1}) VÍTIMA

    Nome da Vitima: ${vitima.nomeVitima}
    CPF: ${vitima.cpfVitima}
    Tipo de vítima: ${vitima.tipoVitima}
    ${vitima.medicoVitima ? (`
    Atendimento Médico:
      - Tipo de Atendimento: ${vitima.medicoTipoVitima}
      - Conduzido para o Hospital: ${vitima.hospitalVitima}
      - Nome do Hospital: ${vitima.hospitalNomeVitima}`) : (``)}
    `))}

`))}`) : (``)}

${form.pedestres!.length > 0 ? (
`-------------------------------------------------------
🚶‍♂️ *DADOS DOS PEDESTRES*
${form.pedestres!.map((pedestre: PedestreDTO, indexPedestre: number) => (`
  ${indexPedestre + 1}) VÍTIMA

  Nome da Vitima: ${pedestre.nomePedestre}
  CPF: ${pedestre.cpfPedestre}
  Tipo de vítima: ${pedestre.tipoPedestre}

${pedestre.medicoPedestre ? (`
  Atendimento Médico:
    - Tipo de Atendimento: ${pedestre.medicoTipoPedestre}
    - Conduzido para o Hospital: ${pedestre.hospitalPedestre}
    - Nome do Hospital: ${pedestre.hospitalNomePedestre}
`) : (``)}
`))}
`) : (``)}

-------------------------------------------------------
📝 *MAIS DETALHES DO ACIDENTE*

${form.detalhesFazerBO ? (`  *Orientados a fazer Boletim de Ocorrência.*
`) : ""}${form.detalhesCPTRAN ? (`  *CPTRAN esteve no local.*
`) : ""}${form.detalhesIML ? (`  *IML esteve presente no local.*
`) : ""}${form.detalhesAcordo ? (`  *Acordo formal pré-processual:*
     - Nº Acordo: ` + form.detalhesAcordoNumero) : ""}

  *Clima:* ${form.climaTipo}
  *Sinalização:* ${form.sinalizacao}
    - Observações: ${form.sinalizacaoObs}
  *Iluminação:* ${form.iluminacao} ${form.iluminacaoNoite}
  *Pavimento:* ${form.pavimento}`;

    return message;
  }

  const { images, imageNames, handleImages, removeImage } = EnviarFotos();

  function sendToWhatsApp(e: any) {
    e.preventDefault();
    console.log('Dados enviados:', form);

    const phone = "5579988914200"; // coloque seu número aqui
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(registroDeAcidente())}`;

    window.open(url, "_blank");
  }

  return { form, setForm, images, handleImages, removeImage, sendToWhatsApp, registroDeAcidente }
}