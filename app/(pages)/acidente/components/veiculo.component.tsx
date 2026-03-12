'use client'

import { ChangeEvent } from "react";
import { VeiculoDTO } from "../dto/Veiculo.dto";
import { OcultarObjetosFormulario } from "../hooks/ocultar-objetos-formulario.hook";
import VitimaVeiculo from "./vitima-veiculo.component";

export interface ChangeHandlerProps {
    // onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
    onChangeHandler: (indexVeiculo: number, indexPedestre: number, indexVeiculoVitima: number, e: ChangeEvent<HTMLInputElement>) => void;
    indexVeiculo: number;
    veiculo: VeiculoDTO;
    delVeiculo: (index: number) => void;
    addVeiculoVitima: (index: number) => void;
    delVeiculoVitima: (indexVeiculo: number, indexVitima: number) => void;
}

export default function Veiculo(props: ChangeHandlerProps) {

    const { onChangeHandler, indexVeiculo, veiculo, delVeiculo, addVeiculoVitima, delVeiculoVitima } = props;
    const { isVisible, toggleVisibility } = OcultarObjetosFormulario(11, 13);

    return (
        <div className="lista">
            <div className="titulo">
                <h3>VEÍCULO - V{indexVeiculo + 1}</h3>
                <button type="button" className="del"
                    onClick={() => delVeiculo(indexVeiculo)}>Excluir</button>
            </div>
            <span>Tipo de Veículo:</span>
            <div className="grupoRadio">
                <label>
                    <input type="radio" name="tipoVeiculo" value="Bicicleta" 
                        onChange={(e) => onChangeHandler(indexVeiculo, -1, -1, e)} />Bicicleta
                </label>
                <label>
                    <input type="radio" name="tipoVeiculo" value="Motocicleta" 
                        onChange={(e) => onChangeHandler(indexVeiculo, -1, -1, e)} />Motocicleta
                </label>
                <label>
                    <input type="radio" name="tipoVeiculo" value="Carro" 
                        onChange={(e) => onChangeHandler(indexVeiculo, -1, -1, e)} />Carro
                </label>
                <label>
                    <input type="radio" name="tipoVeiculo" value="Caminhão" 
                        onChange={(e) => onChangeHandler(indexVeiculo, -1, -1, e)} />Caminhão
                </label>
                <label>
                    <input type="radio" name="tipoVeiculo" value="Ônibus" 
                        onChange={(e) => onChangeHandler(indexVeiculo, -1, -1, e)} />Ônibus
                </label>
            </div>


            <input type="text" name="placa" value={veiculo.placa ?? ""} placeholder="Placa do veículo" 
                onChange={(e) => onChangeHandler(indexVeiculo, -1, -1, e)} />
            <input type="text" name="nomeCondutor" value={veiculo.nomeCondutor ?? ""} placeholder="Nome do condutor" 
                onChange={(e) => onChangeHandler(indexVeiculo, -1, -1, e)} />
            <input type="text" name="numeroOcupantes" value={veiculo.numeroOcupantes ?? ""} placeholder="Número de ocupantes" 
                onChange={(e) => onChangeHandler(indexVeiculo, -1, -1, e)} />


            <label>
                <input type="checkbox" name="possuiVitimas" value="Possui vítimas"
                    onChange={(e) => onChangeHandler(indexVeiculo, -1, -1, e)} 
                    onClick={(e) => toggleVisibility(11, e)} />Possui vítimas:
            </label>
            <div style={{ display: isVisible[11] ? 'block' : 'none' }}>
                {veiculo.vitimas!.map((vitima, indexVitima) => (
                    <div key={indexVitima} className="grupoForm" style={{marginBottom:"10px"}}>
                        <VitimaVeiculo 
                            onChangeHandler={onChangeHandler} indexVeiculo={indexVeiculo} indexVeiculoVitima={indexVitima} vitima={vitima} 
                            delVeiculoVitima={() => delVeiculoVitima(indexVeiculo, indexVitima)} />
                    </div>
                ))}
                <button type="button" onClick={() => addVeiculoVitima(indexVeiculo)} className="add">+ Vítima</button>
            </div>


            <label>
                <input type="checkbox" name="removido" value="Removido para o pátio" 
                    onChange={(e) => onChangeHandler(indexVeiculo, -1, -1, e)}
                    onClick={(e) => toggleVisibility(12, e)} />Removido para o pátio:
            </label>
            <div className="grupoForm" style={{ display: isVisible[12] ? 'block' : 'none' }}>
                <span>Tipificação de Auto de Infração:</span>
                <div>
                    <div className="grupoRadio">
                        <label>
                            <input type="radio" name="removidoTipo" value="Licenciamento Atrasado" 
                                onChange={(e) => onChangeHandler(indexVeiculo, -1, -1, e)} />Licenciamento Atrasado
                        </label>
                        <label>
                            <input type="radio" name="removidoTipo" value="Estacionamnto irregular" 
                                onChange={(e) => onChangeHandler(indexVeiculo, -1, -1, e)} />Estacionamnto irregular
                        </label>
                        <label>
                            <input type="radio" name="removidoTipo" value="Falta de equipamento obrigatório" 
                                onChange={(e) => onChangeHandler(indexVeiculo, -1, -1, e)} />Falta de equipamento obrigatório
                        </label>
                    </div>
                    
                    <div className="grupoInput">
                        <input type="text" name="removidoAuto" placeholder="Número do Auto de Infração" 
                            onChange={(e) => onChangeHandler(indexVeiculo, -1, -1, e)} />
                    </div>
                </div>
            </div>


            <label>
                <input type="checkbox" name="responsavel" value="Apresentação de responsável pelo veículo" 
                    onChange={(e) => onChangeHandler(indexVeiculo, -1, -1, e)}
                    onClick={(e) => toggleVisibility(13, e)}  />Apresentação de responsável pelo veículo:
            </label>
            <div className="grupoForm" style={{ display: isVisible[13] ? 'block' : 'none' }}>
                <input type="text" name="responsavelNome" placeholder="Nome do Responsável" 
                    onChange={(e) => onChangeHandler(indexVeiculo, -1, -1, e)} />
                <input type="text" name="responsavelCPF" placeholder="CPF" 
                    onChange={(e) => onChangeHandler(indexVeiculo, -1, -1, e)} />
            </div>
        </div>
    );
}