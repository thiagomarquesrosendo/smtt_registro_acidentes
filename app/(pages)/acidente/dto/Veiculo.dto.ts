import { VitimaDTO } from "./Vitima.dto";

export class VeiculoDTO {
    tipoVeiculo?: string;
    placa?: string;
    nomeCondutor?: string;
    numeroOcupantes?: string;
    removido?: boolean;
    removidoTipo?: string;
    removidoAuto?: string;
    responsavel?: boolean;
    responsavelNome?: string;
    responsavelCPF?: string;

    vitimas?: VitimaDTO[];
}