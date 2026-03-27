import { VitimaDTO } from "./Vitima.dto";

export class VeiculoDTO {
    tipoVeiculo?: string;
    placa?: string;
    nomeCondutor?: string;
    numeroOcupantes?: string;
    removido: boolean = false;
    removidoTipo?: string;
    removidoAuto?: string;
    responsavel: boolean = false;
    responsavelNome?: string;
    responsavelCPF?: string;

    vitimas?: VitimaDTO[];
}