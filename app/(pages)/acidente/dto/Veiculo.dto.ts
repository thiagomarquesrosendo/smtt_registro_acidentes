import { VitimaDTO } from "./Vitima.dto";

export class VeiculoDTO {
    tipoVeiculo?: string;
    placa?: string;
    nomeCondutor?: string;
    numeroOcupantes?: string;
    possuiVitimas?: string;

    vitimas?: VitimaDTO[];
    
    removido?: string;
    removidoTipo?: string;
    removidoAuto?: string;
    responsavel?: string;
    responsavelNome?: string;
    responsavelCPF?: string;
}