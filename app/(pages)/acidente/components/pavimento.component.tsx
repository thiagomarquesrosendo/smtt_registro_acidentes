'use client'

import { Dispatch, SetStateAction } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto";
import { PavimentoHook } from "../hooks/pavimento.hook";

export interface PavimentoProps {
    form: AcidenteDTO;
    setForm: Dispatch<SetStateAction<AcidenteDTO>>;
}

export default function Pavimento(props: PavimentoProps) {

    const { form, setForm } = props;
    const { handleChangeInput } = PavimentoHook(form, setForm);

    return (
        <div>
            <label>
                <input type="radio" name="pavimento" value="Asfalto" checked={form.pavimento === "Asfalto"}
                    onChange={handleChangeInput} />Asfalto
            </label>
            <label>
                <input type="radio" name="pavimento" value="Esburacado" checked={form.pavimento === "Esburacado"} 
                    onChange={handleChangeInput} />Esburacado
            </label>
            <label>
                <input type="radio" name="pavimento" value="Calçamento" checked={form.pavimento === "Calçamento"} 
                    onChange={handleChangeInput} />Calçamento
            </label>
            <label>
                <input type="radio" name="pavimento" value="Terra" checked={form.pavimento === "Terra"} 
                    onChange={handleChangeInput} />Terra
            </label>
        </div>
    );
}