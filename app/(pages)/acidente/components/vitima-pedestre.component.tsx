'use client'

import { Dispatch, SetStateAction } from "react";
import { PedestreDTO } from "../dto/Pedestre.dto";
import { AcidenteDTO } from "../dto/Acidente.dto";
import { VitimaPedestreHook } from "../hooks/vitima-pedestre.hook";
import { mascaraTextoCPF } from "../hooks/mascara-texto.hook";

export interface VitimaPedestreProps {
    form: AcidenteDTO;
    setForm: Dispatch<SetStateAction<AcidenteDTO>>;
}

export default function VitimaPedestre(props: VitimaPedestreProps) {

    const { form, setForm } = props;
    const { handleChangeInput, addPedestre, delPedestre } = VitimaPedestreHook(form, setForm);
    const { handleChangeInputCPF } = mascaraTextoCPF(form, setForm);

    return (
        <div className="itens">
            {form.pedestres!.map((pedestre: PedestreDTO, indexPedestre: number) => (
                <div key={indexPedestre} className="lista">
                    <div className="titulo">
                        <h1>PEDESTRE - {indexPedestre + 1}</h1>
                        <button type="button" className="del"
                            onClick={() => delPedestre(indexPedestre)}>Excluir</button>
                    </div>

                    <input type="text" name="nomePedestre" value={pedestre.nomePedestre} placeholder="Nome da vítima" 
                        onChange={(e) => handleChangeInput(indexPedestre, e)} />
                    <input type="text" name="cpfPedestre" value={pedestre.cpfPedestre} placeholder="CPF" maxLength={14}
                        onChange={(e) => handleChangeInputCPF(-1, indexPedestre, e)} />
                    
                    <span>Tipo de vítima:</span>
                    <div className="grupoHorizontal">
                        <label>
                            <input type="radio" name={"tipoPedestre" + indexPedestre} value="Condutor" checked={pedestre.tipoPedestre === "Condutor"}
                                onChange={(e) => handleChangeInput(indexPedestre, e)} />Condutor
                        </label>
                        <label>
                            <input type="radio" name={"tipoPedestre" + indexPedestre} value="Passageiro" checked={pedestre.tipoPedestre === "Passageiro"} 
                                onChange={(e) => handleChangeInput(indexPedestre, e)} />Passageiro
                        </label>
                    </div>

                    <label>
                        <input type="checkbox" name="medicoPedestre" value="Atendimento Médico" checked={pedestre.medicoPedestre} 
                            onChange={(e) => handleChangeInput(indexPedestre, e)} />Atendimento Médico:
                    </label>
                    { pedestre.medicoPedestre ? (
                        <div className="grupoHorizontal">
                            <label>
                                <input type="radio" name={"medicoTipoPedestre" + indexPedestre} value="Samu" checked={pedestre.medicoTipoPedestre === "Samu"} 
                                    onChange={(e) => handleChangeInput(indexPedestre, e)} />Samu
                            </label>
                            <label>
                                <input type="radio" name={"medicoTipoPedestre" + indexPedestre} value="Bombeiro" checked={pedestre.medicoTipoPedestre === "Bombeiro"}  
                                    onChange={(e) => handleChangeInput(indexPedestre, e)} />Bombeiro
                            </label>
                        </div>
                    ) : (
                        <></>
                    ) }
                    
                    <label>
                        <input type="checkbox" name="hospitalPedestre" value="Conduzido para o Hospital" checked={pedestre.hospitalPedestre} 
                            onChange={(e) => handleChangeInput(indexPedestre, e)} />Conduzido para o Hospital:
                    </label>
                    { pedestre.hospitalPedestre ? (
                        <div className="grupoHorizontal">
                            <input type="text" name="hospitalNomePedestre" value={pedestre.hospitalNomePedestre} placeholder="Nome do Hospital" 
                                onChange={(e) => handleChangeInput(indexPedestre, e)} />
                        </div>
                    ) : (
                        <></>
                    ) }
                </div>
            ))}
            <button type="button" className="add" 
                onClick={() => addPedestre()}>+ Pedestre</button>
        </div>
    );
}