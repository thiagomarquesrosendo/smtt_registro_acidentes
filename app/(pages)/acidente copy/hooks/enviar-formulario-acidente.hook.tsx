import { ChangeEvent, useState } from "react";
import { EnviarFotos } from "./enviar-fotos.hook";

export function EnviarFormularioAcidente() {
  const [form, setForm] = useState({
    acidenteLogradouro: "",
    acidentePontoReferencia: "",
    acidenteBairro: "",
    acidenteHorario: "",
    agentesOcorrencia: "",
    acidenteQtdVeiculos: "",
    acidenteQtdPedestres: "",
    tipoAcidenteQtdTipos: "",
    acidente: "",
    colisaoTipo: "",
    abalroamentoTipo: "",
    atropelamentoTipo: "",
    choqueTipo: "",
    acidenteObs: "",
    gravidadeTipo: "",
    veiculoTipo: "",
    veiculoPlaca: "",
    veiculoNomeCondutor: "",
    veiculoNumeroOcupantes: "",
    veiculoPossuiVitimas: "",
    veiculoQtdVitimas: "",
    veiculoVitimaNome: "",
    veiculoVitimaCPF: "",
    veiculoVitimaTipo: "",
    veiculoVitimaMedico: "",
    veiculoVitimaMedicoTipo: "",
    veiculoVitimaHospital: "",
    veiculoVitimaHospitalNome: "",
    veiculoRemovido: "",
    veiculoRemovidoTipo: "",
    veiculoRemovidoAuto: "",
    veiculoResponsavel: "",
    veiculoResponsavelNome: "",
    veiculoResponsavelCPF: "",
    pedestreVitimaNome: "",
    pedestreVitimaCPF: "",
    pedestreVitimaTipo: "",
    pedestreVitimaMedico: "",
    pedestreVitimaMedicoTipo: "",
    pedestreVitimaHospital: "",
    pedestreVitimaHospitalNome: "",
    detalhesFazerBO: "",
    detalhesCPTRAN: "",
    detalhesIML: "",
    detalhesAcordo: "",
    detalhesAcordoNumero: "",
    climaTipo: "",
    sinalizacaoTipo: "",
    sinalizacaoTipoObs: "",
    iluminacaoTipo: "",
    iluminacaoNoiteTipo: "",
    pavimentoTipo: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  const { images, imageNames, handleImages, removeImage } = EnviarFotos();

  function sendToWhatsApp() {
    const message = `📋 REGISTRO DE ACIDENTES DE TRÂNSITO ✅

----------------------------------------
DADOS DO LOCAL DO ACIDENTE

  Logradouro: ${form.acidenteLogradouro}
  Ponto de Referência: ${form.acidentePontoReferencia}
  Bairro: ${form.acidenteBairro}
  Horário: ${form.acidenteHorario}

----------------------------------------
AGENTES QUE ATENDERAM A OCORRÊNCIA

  Nomes: ${form.agentesOcorrencia}
  
----------------------------------------
ENVOLVIDOS NO ACIDENTE

  Quantidade veiculos: ${form.acidenteQtdVeiculos}
  Quantidade pedestres: ${form.acidenteQtdPedestres}

----------------------------------------
TIPO DE ACIDENTE

  Quantidade de tipos de acidentes: ${form.tipoAcidenteQtdTipos}
  Tipo de Acidente: ${form.acidente}
  Colisão: ${form.colisaoTipo}
  Abalroamento: ${form.abalroamentoTipo}
  Atropelamento: ${form.atropelamentoTipo}
  Choque: ${form.choqueTipo}
  Outros: ${form.acidenteObs}

----------------------------------------
GRAVIDADE DO ACIDENTE

  Situação: ${form.gravidadeTipo}

----------------------------------------
DADOS DOS VEÍCULOS

  Tipo de Veículo: ${form.veiculoTipo}
  Placa: ${form.veiculoPlaca}
  Nome do Condutor: ${form.veiculoNomeCondutor}
  Número de Ocupantes: ${form.veiculoNumeroOcupantes}
  Possui vítimas: ${form.veiculoPossuiVitimas}
  Quantidade de vítimas: ${form.veiculoQtdVitimas}

  1) VÍTIMA

  Nome da Vitima: ${form.veiculoVitimaNome}
  CPF: ${form.veiculoVitimaCPF}
  Atendimento Médico: ${form.veiculoVitimaMedico}
  Tipo de Atendimento: ${form.veiculoVitimaMedicoTipo}
  Conduzido para o Hospital: ${form.veiculoVitimaHospital}
  Nome do Hospital: ${form.veiculoVitimaHospitalNome}
  Tipo de vítima: ${form.veiculoVitimaTipo}

  Removido para o pátio: ${form.veiculoRemovido}
  Tipificação de Auto de Infração: ${form.veiculoRemovidoTipo}
  Número do Auto de Infração: ${form.veiculoRemovidoAuto}
  Apresentação de responsável pelo veículo: ${form.veiculoResponsavel}
  Nome: ${form.veiculoResponsavelNome}
  CPF: ${form.veiculoResponsavelCPF}

----------------------------------------
DADOS DOS PEDESTRES

  1) VÍTIMA

  Nome da Vitima: ${form.pedestreVitimaNome}
  CPF: ${form.pedestreVitimaCPF}
  Atendimento Médico: ${form.pedestreVitimaMedico}
  Tipo de Atendimento: ${form.pedestreVitimaMedicoTipo}
  Conduzido para o Hospital: ${form.pedestreVitimaHospital}
  Nome do Hospital: ${form.pedestreVitimaHospitalNome}
  Tipo de vítima: ${form.pedestreVitimaTipo}

----------------------------------------
MAIS DETALHES DO ACIDENTE

  Orientados a fazerem B.O.: ${form.detalhesFazerBO}
  CPTRAN: ${form.detalhesCPTRAN}
  IML: ${form.detalhesIML}
  Acordo formal pré-processual: ${form.detalhesAcordo}
  Número do Acordo: ${form.detalhesAcordoNumero}
  
----------------------------------------
CLIMA

  Clima: ${form.climaTipo}
  
----------------------------------------
SINALIZAÇÃO

  Sinalização: ${form.sinalizacaoTipo}
  Observações: ${form.sinalizacaoTipoObs}
  
----------------------------------------
ILUMINAÇÃO

  Iluminação: ${form.iluminacaoTipo}
  Iluminação da Noite: ${form.iluminacaoNoiteTipo}
  
----------------------------------------
PAVIMENTO

  Pavimento: ${form.pavimentoTipo}


  =======================================
      Registrado por: Alguém
  =======================================`;

    const phone = "5579988778915"; // coloque seu número aqui
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  }

  return { images, handleChange, handleImages, removeImage, sendToWhatsApp }
}