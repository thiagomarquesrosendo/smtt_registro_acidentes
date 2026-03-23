 import { ChangeEvent, useState } from "react";
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
    detalhesFazerBO: "",
    detalhesCPTRAN: "",
    detalhesIML: "",
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

    const message = `📋 REGISTRO DE ACIDENTES DE TRÂNSITO ✅

----------------------------------------
DADOS DO LOCAL DO ACIDENTE

  *Logradouro:* ${form.logradouro}
  *Ponto de Referência:* ${form.pontoReferencia}
  *Bairro:* ${form.bairro}
  *Horário:* ${form.horario}

----------------------------------------
AGENTES QUE ATENDERAM A OCORRÊNCIA

  *Nomes:* ${form.agentesOcorrencia}

----------------------------------------
TIPO DE ACIDENTE

  *Tipo de Acidente:* ${form.tipoAcidente} ${form.tipoAcidenteSubTipo}
  *Outras informações:* ${form.tipoAcidenteObs}

----------------------------------------
GRAVIDADE DO ACIDENTE

  ${form.gravidade}

${form.veiculos!.length > 0 ? (
`----------------------------------------
DADOS DOS VEÍCULOS
${form.veiculos!.map((veiculo: VeiculoDTO, indexVeiculo: number) => (`
  ${indexVeiculo}) VEÍCULO

  Tipo de Veículo: ${veiculo.tipoVeiculo}
  Placa: ${veiculo.placa}
  Nome do Condutor: ${veiculo.nomeCondutor}
  Número de Ocupantes: ${veiculo.numeroOcupantes}
  
  VÍTIMAS

  ${veiculo.vitimas!.map((vitima: VitimaDTO, indexVitima: number) => (`
    ${indexVitima}) VÍTIMA

    Nome da Vitima: ${vitima.nomeVitima}
    CPF: ${vitima.cpfVitima}
    Tipo de vítima: ${vitima.tipoVitima}
    Atendimento Médico: ${vitima.medicoVitima}
    Tipo de Atendimento: ${vitima.medicoTipoVitima}
    Conduzido para o Hospital: ${vitima.hospitalVitima}
    Nome do Hospital: ${vitima.hospitalNomeVitima}
  `))}

  Removido para o pátio: ${veiculo.removido}
  Tipificação de Auto de Infração: ${veiculo.removidoTipo}
  Número do Auto de Infração: ${veiculo.removidoAuto}
  Apresentação de responsável pelo veículo: ${veiculo.responsavel}
  Nome: ${veiculo.responsavelNome}
  CPF: ${veiculo.responsavelCPF}

`))}
`) : (
    `*NENHUM VEÍCULO CADASTRADO*`
)}

${form.pedestres!.length > 0 ? (
`----------------------------------------
DADOS DOS PEDESTRES
${form.pedestres!.map((pedestre: PedestreDTO, indexPedestre: number) => (`
  ${indexPedestre}) VÍTIMA

  Nome da Vitima: ${pedestre.nomePedestre}
  CPF: ${pedestre.cpfPedestre}
  Tipo de vítima: ${pedestre.tipoPedestre}
  Atendimento Médico: ${pedestre.medicoPedestre}
  Tipo de Atendimento: ${pedestre.medicoTipoPedestre}
  Conduzido para o Hospital: ${pedestre.hospitalPedestre}
  Nome do Hospital: ${pedestre.hospitalNomePedestre}

`))}
`) : (
    `*NENHUM PEDESTRE CADASTRADO*`
)}

----------------------------------------
MAIS DETALHES DO ACIDENTE

${form.detalhesFazerBO ? (`  ` + form.detalhesFazerBO + `
`) : ""}${form.detalhesCPTRAN ? (`  ` + form.detalhesCPTRAN + `
`) : ""}${form.detalhesIML ? (`  ` + form.detalhesIML + `
`) : ""}${form.detalhesAcordo ? (`  ` + form.detalhesAcordo + `
       - ` + form.detalhesAcordoNumero) : ""}
----------------------------------------
CLIMA

  ${form.climaTipo}
  
----------------------------------------
SINALIZAÇÃO

  ${form.sinalizacao}
  ${form.sinalizacaoObs}
  
----------------------------------------
ILUMINAÇÃO

  ${form.iluminacao}
  *Noite:* ${form.iluminacaoNoite}
  
----------------------------------------
PAVIMENTO

  ${form.pavimento}


  =======================================
      Registrado por: Alguém
  =======================================`;

    return message;
  }

  const { images, imageNames, handleImages, removeImage } = EnviarFotos();

  function sendToWhatsApp(e: any) {
    e.preventDefault();
    console.log('Dados enviados:', form);

    const phone = "5579988778915"; // coloque seu número aqui
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(registroDeAcidente())}`;

    window.open(url, "_blank");
  }

  return { form, setForm, images, handleImages, removeImage, sendToWhatsApp, registroDeAcidente }
}