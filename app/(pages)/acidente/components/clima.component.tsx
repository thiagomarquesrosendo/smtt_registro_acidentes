'use client'

import { Dispatch, SetStateAction } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto";
import { ClimaHook } from "../hooks/clima.hook";

export interface ClimaProps {
    form: AcidenteDTO;
    setForm: (acidente: Dispatch<SetStateAction<AcidenteDTO>>) => void;
}

export default function Clima(props: ClimaProps) {

    const { form, setForm } = props;
    const { handleChangeInput } = ClimaHook(form, setForm);

    return (
        <div>
            <label>
                <input type="radio" name="climaTipo" value="Claro" 
                    onChange={handleChangeInput} />Claro
            </label>
            <label>
                <input type="radio" name="climaTipo" value="Chuvoso" 
                    onChange={handleChangeInput} />Chuvoso
            </label>
            <label>
                <input type="radio" name="climaTipo" value="Nublado" 
                    onChange={handleChangeInput} />Nublado
            </label>
        </div>
    );
}