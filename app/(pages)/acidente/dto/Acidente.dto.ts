import { PedestreDTO } from "./Pedestre.dto";
import { VeiculoDTO } from "./Veiculo.dto";

export class AcidenteDTO {
    logradouro?: string;
    pontoReferencia?: string;
    bairro?: string;
    horario?: string;
    agentesOcorrencia?: string;

    tipoAcidente?: string;
    tipoAcidenteSubTipo?: string;
    tipoAcidenteObs?: string;
    gravidade?: string;

    veiculos?: VeiculoDTO[];
    pedestres?: PedestreDTO[];

    detalhesFazerBO: boolean = false;
    detalhesCPTRAN: boolean = false;
    detalhesIML: boolean = false;
    detalhesAcordo: boolean = false;
    detalhesAcordoNumero?: string;
    climaTipo?: string;
    sinalizacao?: string;
    sinalizacaoObs?: string;
    iluminacao?: string;
    iluminacaoNoite?: string;
    pavimento?: string;
}