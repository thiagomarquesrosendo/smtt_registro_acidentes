'use client'

import { ChangeEvent, useState } from "react";
import { VitimaDTO } from "../dto/Vitima.dto";

export interface ChangeHandlerProps { 
    // onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
    onChangeHandler: (indexVeiculo: number, indexPedestre: number, indexVeiculoVitima: number, e: ChangeEvent<HTMLInputElement>) => void;
    indexVeiculo: number;
    indexVeiculoVitima: number;
    vitima: VitimaDTO;
    delVeiculoVitima: (indexVeiculo: number, indexVitima: number) => void;
}

export default function VitimaVeiculo(props: ChangeHandlerProps) {

    const { onChangeHandler, indexVeiculo, indexVeiculoVitima, vitima, delVeiculoVitima } = props;

    const [numeros, setNumeros] = useState([0]);

    const handleItem = (index: number, event: any) => {
        const itens = [...numeros];
        itens[index] = event.target.value;
        setNumeros(itens);
    }

    return (
        <div className="lista">
            <div className="titulo">
                <h3>VÍTIMA - {indexVeiculoVitima + 1}</h3>
                <button type="button" className="del"
                    onClick={() => delVeiculoVitima(indexVeiculo, indexVeiculoVitima)}>Excluir</button>
            </div>

            <div className="grupoForm" style={{marginBottom:"10px"}}>
                
                <span>Vitima {indexVeiculoVitima + 1}</span>

                <input type="text" name="nomeVitima" value={vitima.nomeVitima} placeholder="Nome da vítima" 
                    onChange={(e) => onChangeHandler(indexVeiculo, -1, indexVeiculoVitima, e)} />
                <input type="text" name="cpfVitima" value={vitima.cpfVitima} placeholder="CPF" 
                    onChange={(e) => onChangeHandler(indexVeiculo, -1, indexVeiculoVitima, e)} />
                
                <span>Tipo de vítima:</span>
                <div className="grupoRadio">
                    <label>
                        <input type="radio" name="tipoVitima" value="Condutor" 
                            onChange={(e) => onChangeHandler(indexVeiculo, -1, indexVeiculoVitima, e)} />Condutor
                    </label>
                    <label>
                        <input type="radio" name="tipoVitima" value="Passageiro" 
                            onChange={(e) => onChangeHandler(indexVeiculo, -1, indexVeiculoVitima, e)} />Passageiro
                    </label>
                </div>

                <label>
                    <input type="checkbox" name="medicoVitima" value="Atendimento Médico" 
                        onChange={(e) => onChangeHandler(indexVeiculo, -1, indexVeiculoVitima, e)} />Atendimento Médico:
                </label>
                
                <div className="grupoRadio">
                    <label>
                        <input type="radio" name="medicoTipoVitima" value="Samu" 
                            onChange={(e) => onChangeHandler(indexVeiculo, -1, indexVeiculoVitima, e)} />Samu
                    </label>
                    <label>
                        <input type="radio" name="medicoTipoVitima" value="Bombeiro" 
                            onChange={(e) => onChangeHandler(indexVeiculo, -1, indexVeiculoVitima, e)} />Bombeiro
                    </label>
                </div>
                
                <label>
                    <input type="radio" name="hospitalVitima" value="Conduzido para o Hospital" 
                        onChange={(e) => onChangeHandler(indexVeiculo, -1, indexVeiculoVitima, e)} />Conduzido para o Hospital:
                </label>

                <div className="grupoInput">
                    <input type="text" name="hospitalNomeVitima" placeholder="Nome do Hospital" 
                        onChange={(e) => onChangeHandler(indexVeiculo, -1, indexVeiculoVitima, e)} />
                </div>
            </div>
        </div>
    );
}