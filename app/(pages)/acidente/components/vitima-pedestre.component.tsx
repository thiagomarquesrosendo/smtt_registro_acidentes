'use client'

import { ChangeEvent } from "react";
import { PedestreDTO } from "../dto/Pedestre.dto";
import { OcultarObjetosFormulario } from "../hooks/ocultar-objetos-formulario.hook";

export interface ChangeHandlerProps {
    // onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
    onChangeHandler: (indexVeiculo: number, indexPedestre: number, indexVeiculoVitima: number, e: ChangeEvent<HTMLInputElement>) => void;
    indexPedestre: number;
    pedestre: PedestreDTO;
    delPedestre: (index: number) => void;
}

export default function VitimaPedestre(props: ChangeHandlerProps) {

    const { onChangeHandler, indexPedestre, pedestre, delPedestre } = props;
    const {isVisible, toggleVisibility} = OcultarObjetosFormulario(13, 14);

    return (
        <div className="lista">
            <div className="titulo">
                <h3>PEDESTRE - {indexPedestre + 1}</h3>
                <button type="button" className="del"
                    onClick={() => delPedestre(indexPedestre)}>Excluir</button>
            </div>
            <input type="text" name="nomePedestre" value={pedestre.nomePedestre} placeholder="Nome da vítima" 
                onChange={(e) => onChangeHandler(-1, indexPedestre, -1, e)} />
            <input type="text" name="cpfPedestre" value={pedestre.cpfPedestre} placeholder="CPF" 
                onChange={(e) => onChangeHandler(-1, indexPedestre, -1, e)} />
            
            <span>Tipo de vítima:</span>
            <div className="grupoRadio">
                <label>
                    <input type="radio" name="tipoPedestre" value="Condutor" 
                        onChange={(e) => onChangeHandler(-1, indexPedestre, -1, e)} />Condutor
                </label>
                <label>
                    <input type="radio" name="tipoPedestre" value="Passageiro" 
                        onChange={(e) => onChangeHandler(-1, indexPedestre, -1, e)} />Passageiro
                </label>
            </div>

            <label>
                <input type="checkbox" name="medicoPedestre" value="Atendimento Médico" 
                    onChange={(e) => onChangeHandler(-1, indexPedestre, -1, e)} 
                    onClick={(e) => toggleVisibility(13, e)} />Atendimento Médico:
            </label>
            
            <div className="grupoRadio" style={{ display: isVisible[13] ? 'block' : 'none' }}>
                <label>
                    <input type="radio" name="medicoTipoPedestre" value="Samu" 
                        onChange={(e) => onChangeHandler(-1, indexPedestre, -1, e)} />Samu
                </label>
                <label>
                    <input type="radio" name="medicoTipoPedestre" value="Bombeiro" 
                        onChange={(e) => onChangeHandler(-1, indexPedestre, -1, e)} />Bombeiro
                </label>
            </div>
            
            <label>
                <input type="checkbox" name="hospitalPedestre" value="Conduzido para o Hospital" 
                    onChange={(e) => onChangeHandler(-1, indexPedestre, -1, e)}
                    onClick={(e) => toggleVisibility(14, e)}  />Conduzido para o Hospital:
            </label>
            
            <div className="grupoForm" style={{ display: isVisible[14] ? 'block' : 'none' }}>
                <input type="text" name="hospitalNomePedestre" value={pedestre.hospitalNomePedestre} placeholder="Nome do Hospital" 
                    onChange={(e) => onChangeHandler(-1, indexPedestre, -1, e)} />
            </div>
        </div>
    );
}