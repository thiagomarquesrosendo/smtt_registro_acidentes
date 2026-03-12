import { Veiculo } from "./Veiculo";
import { Vitima } from "./Vitima";

export class Acidente {
    logradouro?: string;
    pontoReferencia?: string;
    bairro?: string;
    horario?: string;
    agentesOcorrencia?: string;

    tipoAcidente?: string;
    tipoAcidenteObs?: string;
    gravidade?: string;

    veiculos?: Veiculo[];
    pedestres?: Vitima[];

    detalhesFazerBO?: string;
    detalhesCPTRAN?: string;
    detalhesIML?: string;
    detalhesAcordo?: string;
    detalhesAcordoNumero?: string;
    climaTipo?: string;
    sinalizacao?: string;
    sinalizacaoObs?: string;
    iluminacao?: string;
    iluminacaoNoite?: string;
    pavimento?: string;
}