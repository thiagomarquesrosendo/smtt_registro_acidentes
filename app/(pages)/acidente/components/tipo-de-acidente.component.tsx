'use client'

import { Dispatch, SetStateAction } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto";
import { listaTiposAcidentes } from "../constant/listaTiposAcidentes";
import { TipoDeAcidenteHook } from "../hooks/tipo-de-acidente.hook";

export interface TipoDeAcidenteProps {
    form: AcidenteDTO;
    setForm: Dispatch<SetStateAction<AcidenteDTO>>;
}

export default function TipoDeAcidente(props: TipoDeAcidenteProps) {

    const { form, setForm } = props;
    const { opcoesSubItem, handleChangeTipoAcidente, handleChangeSubTipoAcidente, handleChangeTextArea} = TipoDeAcidenteHook(form, setForm);

    return (
        <div>
            <select value={form.tipoAcidente} onChange={handleChangeTipoAcidente} required>
                <option value="">Selecione o Tipo do Acidente</option>
                {Object.keys(listaTiposAcidentes).map((tipo) => (
                    <option key={tipo} value={tipo}>{tipo}</option>
                ))}
            </select>

            {/* Combobox 2 */}
            {opcoesSubItem.length > 0 ? (
                <select value={form.tipoAcidenteSubTipo} onChange={handleChangeSubTipoAcidente} required disabled={opcoesSubItem.length > 0 ? false : true}>
                    <option value="">Selecione as circustâncias do Acidente</option>
                    {opcoesSubItem.map((opcoes) => (
                        <option key={opcoes} value={opcoes}>{opcoes}</option>
                    ))}
                </select>
            ) : (
                <></>
            )}


            <textarea rows={2} cols={30} name="tipoAcidenteObs" value={form.tipoAcidenteObs} placeholder="Informe mais detalhes sobre o acidente" 
               onChange={handleChangeTextArea} >
           </textarea>
        </div>
    );
}