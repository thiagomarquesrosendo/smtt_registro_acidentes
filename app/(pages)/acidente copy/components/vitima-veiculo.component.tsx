'use client'

import { useState } from "react";

export interface ChangeHandlerProps {
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

export default function VitimaVeiculo(props: ChangeHandlerProps) {

    const [qtdVeiculos, setQtdVeiculos] = useState([0]);

    const [numeros, setNumeros] = useState([0]);

    const handleItem = (index: number, event: any) => {
        const itens = [...numeros];
        itens[index] = event.target.value;
        setNumeros(itens);
    }

    return (
        <div>
            <div className="grupoForm" style={{marginBottom:"10px"}}>
                <input type="text" name="veiculoQtdVitimas" placeholder="qtdVeiculos de vítimas" 
                    onChange={(e) => handleItem(0, e)} value="" />
            </div>

            {qtdVeiculos.map((item, index) => (
                <div key={index} className="grupoForm" style={{marginBottom:"10px"}}>
                    
                    <span>Vitima {index + 1}</span>

                    <input type="text" name={"veiculoVitimaNome" + index} placeholder="Nome da vítima" onChange={props.onChangeHandler} />
                    <input type="text" name={"veiculoVitimaCPF" + index} placeholder="CPF" onChange={props.onChangeHandler} />
                    
                    <span>Tipo de vítima:</span>
                    <div className="grupoRadio">
                        <label>
                            <input type="radio" name={"veiculoVitimaTipo" + index} value="Condutor" onChange={props.onChangeHandler} />Condutor
                        </label>
                        <label>
                            <input type="radio" name={"veiculoVitimaTipo" + index} value="Passageiro" onChange={props.onChangeHandler} />Passageiro
                        </label>
                    </div>

                    <label>
                        <input type="checkbox" name={"veiculoVitimaMedico" + index} value="Atendimento Médico" onChange={props.onChangeHandler} />Atendimento Médico:
                    </label>
                    
                    <div className="grupoRadio">
                        <label>
                            <input type="radio" name={"veiculoVitimaMedicoTipo" + index} value="Samu" onChange={props.onChangeHandler} />Samu
                        </label>
                        <label>
                            <input type="radio" name={"veiculoVitimaMedicoTipo" + index} value="Bombeiro" onChange={props.onChangeHandler} />Bombeiro
                        </label>
                    </div>
                    
                    <label>
                        <input type="radio" name={"veiculoVitimaHospital" + index} value="Conduzido para o Hospital" onChange={props.onChangeHandler} />Conduzido para o Hospital:
                    </label>

                    <div className="grupoInput">
                        <input type="text" name={"veiculoVitimaHospitalNome" + index} placeholder="Nome do Hospital" onChange={props.onChangeHandler} />
                    </div>
                </div>
            ))}
        </div>
    );
}