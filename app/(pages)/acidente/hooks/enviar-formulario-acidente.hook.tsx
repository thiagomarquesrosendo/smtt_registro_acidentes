import { ChangeEvent, useState } from "react";
import { EnviarFotos } from "./enviar-fotos.hook";
import { AcidenteDTO } from "../dto/Acidente.dto";
import { VitimaDTO } from "../dto/Vitima.dto";
import { VeiculoDTO } from "../dto/Veiculo.dto";
import { PedestreDTO } from "../dto/Pedestre.dto";

export function EnviarFormularioAcidente() {
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
    detalhesAcordo: "",
    detalhesAcordoNumero: "",
    climaTipo: "",
    sinalizacao: "",
    sinalizacaoObs: "",
    iluminacao: "",
    iluminacaoNoite: "",
    pavimento: "",
  });

  function handleChange(indexVeiculo: number, indexPedestre: number, indexVeiculoVitima: number, e: ChangeEvent<HTMLInputElement>) {  // ChangeEvent<HTMLInputElement>
    const { name, value, type, checked } = e.target;

    if (indexVeiculo === -1 && indexPedestre === -1 && indexVeiculoVitima === -1) {
      if (type === "checkbox") {
        if (checked)
          setForm({...form, [name]: value});
        else
          setForm({...form, [name]: ""});
      } else
        setForm({...form, [name]: value});
    } else if (indexVeiculo > -1 && indexPedestre === -1 && indexVeiculoVitima === -1) {
      if (name === "tipoVeiculo")
        form.veiculos![indexVeiculo].tipoVeiculo = value;
      else if (name === "placa")
        form.veiculos![indexVeiculo].placa = value;
      else if (name === "nomeCondutor")
        form.veiculos![indexVeiculo].nomeCondutor = value;
      else if (name === "numeroOcupantes")
        form.veiculos![indexVeiculo].numeroOcupantes = value;
      else if (name === "possuiVitimas")
        form.veiculos![indexVeiculo].possuiVitimas = value;
      else if (name === "removido")
        form.veiculos![indexVeiculo].removido = value;
      else if (name === "removidoTipo")
        form.veiculos![indexVeiculo].removidoTipo = value;
      else if (name === "removidoAuto")
        form.veiculos![indexVeiculo].removidoAuto = value;
      else if (name === "responsavel")
        form.veiculos![indexVeiculo].responsavel = value;
      else if (name === "responsavelNome")
        form.veiculos![indexVeiculo].responsavelNome = value;
      else if (name === "responsavelCPF")
        form.veiculos![indexVeiculo].responsavelCPF = value;
    } else if (indexPedestre > -1 && indexVeiculo === -1 && indexVeiculoVitima === -1) {
      if (name === "nomePedestre")
        form.pedestres![indexPedestre].nomePedestre = value;
      else if (name === "cpfPedestre")
        form.pedestres![indexPedestre].cpfPedestre = value;
      else if (name === "tipoPedestre")
        form.pedestres![indexPedestre].tipoPedestre = value;
      else if (name === "medicoPedestre")
        form.pedestres![indexPedestre].medicoPedestre = value;
      else if (name === "medicoTipoPedestre")
        form.pedestres![indexPedestre].medicoTipoPedestre = value;
      else if (name === "hospitalPedestre")
        form.pedestres![indexPedestre].hospitalPedestre = value;
      else if (name === "hospitalNomePedestre")
        form.pedestres![indexPedestre].hospitalNomePedestre = value;
    } else if (indexVeiculo > -1 && indexVeiculoVitima > -1 && indexPedestre === -1) {
      if (name === "nomeVitima")
        form.veiculos![indexVeiculo].vitimas![indexVeiculoVitima].nomeVitima = value;
      else if (name === "cpfVitima")
        form.veiculos![indexVeiculo].vitimas![indexVeiculoVitima].cpfVitima = value;
      else if (name === "tipoVitima")
        form.veiculos![indexVeiculo].vitimas![indexVeiculoVitima].tipoVitima = value;
      else if (name === "medicoVitima")
        form.veiculos![indexVeiculo].vitimas![indexVeiculoVitima].medicoVitima = value;
      else if (name === "medicoTipoVitima")
        form.veiculos![indexVeiculo].vitimas![indexVeiculoVitima].medicoTipoVitima = value;
      else if (name === "hospitalVitima")
        form.veiculos![indexVeiculo].vitimas![indexVeiculoVitima].hospitalVitima = value;
      else if (name === "hospitalNomeVitima")
        form.veiculos![indexVeiculo].vitimas![indexVeiculoVitima].hospitalNomeVitima = value;
    }

    setForm(prevState => ({
            ...prevState, form}));
  }

  function addVeiculo() {
    form.veiculos!.push({
      tipoVeiculo: "",
      placa: "",      
      nomeCondutor: "",
      numeroOcupantes: "",      
      possuiVitimas: "",
      vitimas: [],
      removido: "",
      removidoTipo: "",
      removidoAuto: "",
      responsavel: "",
      responsavelNome: "",
      responsavelCPF: ""
    });
    setForm(prevState => ({
            ...prevState, form}));
  }

  function delVeiculo(indexVeiculo: number) {
    form.veiculos?.splice(indexVeiculo, 1);
    setForm(prevState => ({
            ...prevState, form}));
  }

  function addPedestre() {
    form.pedestres!.push({
      nomePedestre: "",
      cpfPedestre: "",
      tipoPedestre: "",
      medicoPedestre: "",
      medicoTipoPedestre: "",
      hospitalPedestre: "",
      hospitalNomePedestre: ""
    });
    setForm(prevState => ({
            ...prevState, form}));
  }

  function delPedestre(indexPedestre: number) {
    form.pedestres?.splice(indexPedestre, 1);
    setForm(prevState => ({
            ...prevState, form}));
  }

  function addVeiculoVitima(indexVeiculo: number) {
    form.veiculos![indexVeiculo].vitimas?.push({
      nomeVitima: "",
			cpfVitima: "",
			tipoVitima: "",
			medicoVitima: "",
			medicoTipoVitima: "",
			hospitalVitima: "",
			hospitalNomeVitima: ""
    });
    setForm(prevState => ({
            ...prevState, form}));
  }

  function delVeiculoVitima(indexVeiculo: number, indexVitima: number) {
    form.veiculos![indexVeiculo].vitimas?.splice(indexVitima, 1);
    setForm(prevState => ({
            ...prevState, form}));
  }

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
  Possui vítimas: ${veiculo.possuiVitimas}

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

  return { form, setForm, images, handleChange, handleImages, removeImage, sendToWhatsApp, registroDeAcidente, addVeiculo, delVeiculo, addPedestre, delPedestre, addVeiculoVitima, delVeiculoVitima }









  

  // function handleChange(e: any) {  // ChangeEvent<HTMLInputElement>
  //   const { name, value, type, checked } = e.target;

  //   if (type === "checkbox") {
  //     if (checked)
  //       setForm({...form, [name]: value});
  //     else
  //       setForm({...form, [name]: ""});
  //   } else
  //     setForm({...form, [name]: value});

  //   // setForm({
  //   //   ...form,
  //   //   [name]: type === "checkbox" ? checked : value,
  //   // });
  // }
}