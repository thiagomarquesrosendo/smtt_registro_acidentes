'use client'

import { VeiculoDTO } from "../dto/Veiculo.dto";
import VitimaVeiculo from "./vitima-veiculo.component";
import { AcidenteDTO } from "../dto/Acidente.dto";
import { VeiculoHook } from "../hooks/veiculo.hook";
import { Dispatch, SetStateAction } from "react";
import { mascaraTextoCPF, mascaraTextoPlacaVeicular } from "../hooks/mascara-texto.hook";
import Subtitulo from "@/app/components/design/subtitulo.component";
import { listaTiposVeiculos } from "../constant/listaTiposVeiculos";

export interface VeiculoProps {
    form: AcidenteDTO;
    setForm: Dispatch<SetStateAction<AcidenteDTO>>;
}

export default function Veiculo(props: VeiculoProps) {

    const { form, setForm } = props;
    const { handleChangeInput, item, setItem, handleChangeSelect, addVeiculo, delVeiculo } = VeiculoHook(form, setForm);
    const { cpf, handleChangeInputCPF } = mascaraTextoCPF(form, setForm);
    const { placa, handleChangeInputPlacaVeicular } = mascaraTextoPlacaVeicular(form, setForm);

    return (
        <div className="itens">
            {form.veiculos!.map((veiculo: VeiculoDTO, indexVeiculo: number) => (
                <div key={indexVeiculo} className="lista">
                    <div className="titulo">
                        <h1>VEÍCULO - V{indexVeiculo + 1}</h1>
                        <button type="button" className="del"
                            onClick={() => delVeiculo(indexVeiculo)}>Excluir</button>
                    </div>

                    <select name="tipoVeiculo" value={item} onChange={(e) => handleChangeSelect(indexVeiculo, e)} required>
                        <option value="">Selecione o Tipo de Veículo</option>
                        {listaTiposVeiculos.map((opcoes) => (
                            <option key={opcoes} value={opcoes}>{opcoes}</option>
                        ))}
                    </select>

                    {veiculo.tipoVeiculo !== "Bicicleta" ? (
                        <input type="text" name="placa" value={placa} placeholder="Placa do veículo" maxLength={7}
                            onChange={(e) => handleChangeInputPlacaVeicular(indexVeiculo, e)} />
                    ) : (
                        <></>
                    )}
                    <input type="text" name="nomeCondutor" value={veiculo.nomeCondutor ?? ""} placeholder="Nome do condutor" 
                        onChange={(e) => handleChangeInput(indexVeiculo, e)} />
                    <input type="number" name="numeroOcupantes" value={veiculo.numeroOcupantes ?? ""} placeholder="Número de ocupantes" 
                        onChange={(e) => handleChangeInput(indexVeiculo, e)} />

                    <label>
                        <input type="checkbox" name="removido" value="Removido para o pátio" checked={veiculo.removido === true} 
                            onChange={(e) => handleChangeInput(indexVeiculo, e)} />Removido para o pátio:
                    </label>
                    { veiculo.removido ? (
                        <div className="grupoVertical">
                            <span>Tipificação de Auto de Infração:</span>
                            <div className="subGrupoVertical">
                                <label>
                                    <input type="radio" name="removidoTipo" value="Licenciamento atrasado" checked={veiculo.removidoTipo === "Licenciamento atrasado"} 
                                        onChange={(e) => handleChangeInput(indexVeiculo, e)} />Licenciamento atrasado
                                </label>
                                <label>
                                    <input type="radio" name="removidoTipo" value="Estacionamento irregular" checked={veiculo.removidoTipo === "Estacionamento irregular"}  
                                        onChange={(e) => handleChangeInput(indexVeiculo, e)} />Estacionamento irregular
                                </label>
                                <label>
                                    <input type="radio" name="removidoTipo" value="Falta de equipamento obrigatório" checked={veiculo.removidoTipo === "Falta de equipamento obrigatório"}  
                                        onChange={(e) => handleChangeInput(indexVeiculo, e)} />Falta de equipamento obrigatório
                                </label>
                            </div>
                            
                            <div className="subGrupoHorizontal">
                                <input type="text" name="removidoAuto" value={veiculo.removidoAuto} placeholder="Número do Auto de Infração" 
                                    onChange={(e) => handleChangeInput(indexVeiculo, e)} />
                            </div>
                        </div>
                    ) : (
                        <></>
                    ) }


                    <label>
                        <input type="checkbox" name="responsavel" value="Apresentação de responsável pelo veículo" checked={veiculo.responsavel === true} 
                            onChange={(e) => handleChangeInput(indexVeiculo, e)} />Apresentação de responsável pelo veículo:
                    </label>
                    { veiculo.responsavel ? (
                        <div className="grupoVertical">
                            <input type="text" name="responsavelNome" value={veiculo.responsavelNome} placeholder="Nome do Responsável" 
                                onChange={(e) => handleChangeInput(indexVeiculo, e)} />
                            <input type="text" name="responsavelCPF" value={cpf} placeholder="CPF" maxLength={14}
                                onChange={(e) => handleChangeInputCPF(indexVeiculo, -1, e)} />
                        </div>
                    ) : (
                        <></>
                    ) }

                    <Subtitulo text="DADOS DAS VÍTIMAS" />
                    <VitimaVeiculo form={form} setForm={setForm}
                        indexVeiculo={indexVeiculo} veiculo={veiculo}  />
                </div>
            ))}
            <button type="button" className="add" 
                onClick={() => addVeiculo()}>+ Veiculo</button>
        </div>
    );
}