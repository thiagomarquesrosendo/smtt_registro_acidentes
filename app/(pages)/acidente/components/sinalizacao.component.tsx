'use client'

import { Dispatch, SetStateAction } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto";
import { SinalizacaoHook } from "../hooks/sinalizacao.hook";

export interface SinalizacaoProps {
    form: AcidenteDTO;
    setForm: Dispatch<SetStateAction<AcidenteDTO>>;
}

export default function Sinalizacao(props: SinalizacaoProps) {

    const { form, setForm } = props;
    const { handleChangeInput, handleChangeTextarea } = SinalizacaoHook(form, setForm);

    return (
        <div>
            <label>
                <input type="radio" name="sinalizacao" value="Existente" checked={form.sinalizacao === "Existente"}
                    onChange={handleChangeInput} />Existente
            </label>
            <label>
                <input type="radio" name="sinalizacao" value="Precária" checked={form.sinalizacao === "Precária"} 
                    onChange={handleChangeInput} />Precária
            </label>
            <label>
                <input type="radio" name="sinalizacao" value="Inexistente" checked={form.sinalizacao === "Inexistente"} 
                    onChange={handleChangeInput} />Inexistente
            </label>
            <label>
                <input type="radio" name="sinalizacao" value="Deficiente" checked={form.sinalizacao === "Deficiente"} 
                    onChange={handleChangeInput} />Deficiente
            </label>
            
            
            <textarea rows={2} cols={30} name="sinalizacaoObs" value={form.sinalizacaoObs} placeholder="Informe mais detalhes da Sinalização" 
                onChange={handleChangeTextarea} >
            </textarea>
        </div>
    );
}