'use client'

import { Dispatch, SetStateAction } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto";
import { SinalizacaoHook } from "../hooks/sinalizacao.hook";

export interface SinalizacaoProps {
    form: AcidenteDTO;
    setForm: (acidente: Dispatch<SetStateAction<AcidenteDTO>>) => void;
}

export default function Sinalizacao(props: SinalizacaoProps) {

    const { form, setForm } = props;
    const { handleChangeInput, handleChangeTextarea } = SinalizacaoHook(form, setForm);

    return (
        <div>
            <label>
                <input type="radio" name="sinalizacao" value="Existente" onChange={handleChangeInput} />Existente
            </label>
            <label>
                <input type="radio" name="sinalizacao" value="Precária" onChange={handleChangeInput} />Precária
            </label>
            <label>
                <input type="radio" name="sinalizacao" value="Inexistente" onChange={handleChangeInput} />Inexistente
            </label>
            <label>
                <input type="radio" name="sinalizacao" value="Deficiente" onChange={handleChangeInput} />Deficiente
            </label>
            
            
            <textarea rows={2} cols={30} name="sinalizacaoObs" placeholder="Informe mais detalhes da Sinalização" 
                onChange={handleChangeTextarea} >
            </textarea>
        </div>
    );
}