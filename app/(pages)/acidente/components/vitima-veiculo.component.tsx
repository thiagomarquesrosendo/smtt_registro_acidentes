'use client'

import { Dispatch, SetStateAction } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto";
import { VeiculoDTO } from "../dto/Veiculo.dto";
import { VitimaVeiculoHook } from "../hooks/vitima-veiculo.hook";
import { mascaraTextoCPF } from "../hooks/mascara-texto.hook";

export interface VitimaVeiculoProps { 
    form: AcidenteDTO;
    setForm: (acidente: Dispatch<SetStateAction<AcidenteDTO>>) => void;
    indexVeiculo: number;
    veiculo: VeiculoDTO;
}

export default function VitimaVeiculo(props: VitimaVeiculoProps) {

    const { form, setForm, indexVeiculo, veiculo } = props;
    const { handleChangeInput, addVeiculoVitima, delVeiculoVitima } = VitimaVeiculoHook(form, setForm);
    const { cpf, handleChangeInputCPF } = mascaraTextoCPF(form, setForm);

    return (
        <div className="itens">
            {veiculo.vitimas!.map((vitima, indexVitima) => (
                <div key={indexVitima} className="sublista">
                    <div className="titulo">
                        <h1>VÍTIMA {indexVitima + 1}</h1>
                        <button type="button" className="del"
                            onClick={() => delVeiculoVitima(indexVeiculo, indexVitima)}>Excluir</button>
                    </div>

                    <div style={{marginBottom:"10px"}} className="grupoVertical">
                        <input type="text" name="nomeVitima" value={vitima.nomeVitima} placeholder="Nome da vítima" 
                            onChange={(e) => handleChangeInput(indexVeiculo, indexVitima, e)} />
                        <input type="text" name="cpfVitima" value={cpf} placeholder="CPF" maxLength={14}
                            onChange={(e) => handleChangeInputCPF(indexVeiculo, indexVitima, e)} />
                        
                        <span>Tipo de vítima:</span>
                        <div className="grupoHorizontal">
                            <label>
                                <input type="radio" name="tipoVitima" value="Condutor" 
                                    onChange={(e) => handleChangeInput(indexVeiculo, indexVitima, e)} />Condutor
                            </label>
                            <label>
                                <input type="radio" name="tipoVitima" value="Passageiro" 
                                    onChange={(e) => handleChangeInput(indexVeiculo, indexVitima, e)} />Passageiro
                            </label>
                        </div>

                        <label>
                            <input type="checkbox" name="medicoVitima" value="Atendimento Médico" 
                                onChange={(e) => handleChangeInput(indexVeiculo, indexVitima, e)} />Atendimento Médico:
                        </label>
                        { vitima.medicoVitima ? (
                            <div className="grupoHorizontal">
                                <label>
                                    <input type="radio" name="medicoTipoVitima" value="Samu" 
                                        onChange={(e) => handleChangeInput(indexVeiculo, indexVitima, e)} />Samu
                                </label>
                                <label>
                                    <input type="radio" name="medicoTipoVitima" value="Bombeiro" 
                                        onChange={(e) => handleChangeInput(indexVeiculo, indexVitima, e)} />Bombeiro
                                </label>
                            </div>
                        ) : (
                            <></>
                        ) }
                        
                        <label>
                            <input type="checkbox" name="hospitalVitima" value="Conduzido para o Hospital" 
                                onChange={(e) => handleChangeInput(indexVeiculo, indexVitima, e)} />Conduzido para o Hospital:
                        </label>
                        { vitima.hospitalVitima ? (
                            <div className="grupoHorizontal">
                                <input type="text" name="hospitalNomeVitima" placeholder="Nome do Hospital" 
                                    onChange={(e) => handleChangeInput(indexVeiculo, indexVitima, e)} />
                            </div>
                        ) : (
                            <></>
                        ) }
                    </div>
                </div>
            ))}
            <button type="button" className="blue"
                onClick={() => addVeiculoVitima(indexVeiculo)}>+ Vítima</button>
        </div>
    );
}