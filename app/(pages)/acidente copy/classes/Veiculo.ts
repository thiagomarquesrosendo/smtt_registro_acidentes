import { Vitima } from "./Vitima";

export class Veiculo {
    tipo?: string;
    placa?: string;
    nomeCondutor?: string;
    numeroOcupantes?: string;
    possuiVitimas?: string;

    vitimas?: Vitima[];
    
    removido?: string;
    removidoTipo?: string;
    removidoAuto?: string;
    responsavel?: string;
    responsavelNome?: string;
    responsavelCPF?: string;
}