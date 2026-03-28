 import { useEffect, useState } from "react";
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

    const message = `📋 *REGISTRO DE ACIDENTE DE TRÂNSITO* ✅

-------------------------------------------------------
🧭 *LOCAL DO ACIDENTE*

  *Logradouro:* ${form.logradouro}
  *Ponto de Referência:* ${form.pontoReferencia}
  *Bairro:* ${form.bairro}
  *Horário:* ${form.horario}

-------------------------------------------------------
👨‍✈️ *AGENTES NA OCORRÊNCIA*

  *Nomes:* ${form.agentesOcorrencia}

-------------------------------------------------------
📵 *TIPO DE ACIDENTE*

  *Tipo de Acidente:* ${form.tipoAcidente} ${form.tipoAcidenteSubTipo}
  *Detalhes do Acidente:* ${form.tipoAcidenteObs}
  *Gravidade:* ${form.gravidade}
  
-------------------------------------------------------
🚔 *VEÍCULOS ENVOLVIDOS* ${form.veiculos!.length > 0 
  ? (`${form.veiculos!.map((veiculo: VeiculoDTO, indexVeiculo: number) => (
`

  ${indexVeiculo + 1}) VEÍCULO ${veiculo.tipoVeiculo === "Bicicleta" ? `🚴‍♀️` : (veiculo.tipoVeiculo === "Motocicleta" ? `🏍️` : (veiculo.tipoVeiculo === "Carro" ? `🚗` : (veiculo.tipoVeiculo === "Caminhão" ? `🚛` : (veiculo.tipoVeiculo === "Ônibus" ? `🚌` : ``)) ) )}

  *Tipo de Veículo:* ${veiculo.tipoVeiculo}
  *Placa:* ${veiculo.placa}
  *Nome do Condutor:* ${veiculo.nomeCondutor}  
  *Número de Ocupantes:* ${veiculo.numeroOcupantes} pessoa(s)
  ${veiculo.removido ? (`*Removido para o pátio:*
    - Tipificação do AIT: ${veiculo.removidoTipo}
    - Número do AIT: ${veiculo.removidoAuto}`) 
  : (`*Sem realizar remoção de veículo*`)}
  ${veiculo.responsavel ? (`*Responsável pelo veículo:*
    - Nome: ${veiculo.responsavelNome}
    - CPF: ${veiculo.responsavelCPF}`) 
  : (`*Sem a necessidade de um responsável*`)}
  ${veiculo.vitimas?.length! > 0 
    ? (`${veiculo.vitimas!.map((vitima: VitimaDTO, indexVitima: number) => (
`

      ${indexVitima + 1}) VÍTIMA

      *Nome da Vitima:* ${vitima.nomeVitima}
      *CPF:* ${vitima.cpfVitima}
      *Tipo de vítima:* ${vitima.tipoVitima}
      ${vitima.medicoVitima ? (`*Atendimento Médico:*
        - Tipo de Atendimento: ${vitima.medicoTipoVitima}`) : (`*Sem a necessidade de atendiemento médico*`)}
      ${vitima.hospitalVitima ? (`*Conduzido para o Hospital:* 
        - Nome do Hospital: ${vitima.hospitalNomeVitima}`) : (`*Sem a necessidade de atendiemento hospitalar*`)} 
`))} `) : (`*Sem vítimas*`)} `))}`) : (`\n\n  *Sem veículos acidentados*`)}

-------------------------------------------------------
🚶‍♂️ *DADOS DOS PEDESTRES* ${form.pedestres!.length > 0 
  ? (`${form.pedestres!.map((pedestre: PedestreDTO, indexPedestre: number) => (
`

  ${indexPedestre + 1}) VÍTIMA

  *Nome da Vitima:* ${pedestre.nomePedestre}
  *CPF:* ${pedestre.cpfPedestre}
  *Tipo de vítima:* ${pedestre.tipoPedestre}
  ${pedestre.medicoPedestre ? (`*Atendimento Médico:*
    - Tipo de Atendimento: ${pedestre.medicoTipoPedestre}`) : (`*Sem a necessidade de atendiemento médico*`)}
  ${pedestre.hospitalPedestre ? (`*Conduzido para o Hospital:* 
    - Nome do Hospital: ${pedestre.hospitalNomePedestre}`) : (`*Sem a necessidade de atendiemento hospitalar*`)} 
`))} `) : (`\n\n  *Sem pedestres vitimados*`)}

-------------------------------------------------------
📝 *MAIS DETALHES DO ACIDENTE*
${form.detalhesFazerBO ? (`\n  *Orientados a fazer Boletim de Ocorrência.*`) : ""}${form.detalhesCPTRAN ? (`\n  *CPTRAN esteve no local.*`) : ""}${form.detalhesIML ? (`\n  *IML esteve presente no local.*`) : ""}${form.detalhesAcordo ? (`\n  *Acordo formal pré-processual:*\n    - Nº Acordo: ` + form.detalhesAcordoNumero) : ""}
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