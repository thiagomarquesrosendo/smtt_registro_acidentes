'use client'

import { Dispatch, SetStateAction } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto";
import { GravidadeDoAcidenteHook } from "../hooks/gravidade-do-acidente.hook";

export interface GravidadeDoAcidenteProps {
    form: AcidenteDTO;
    setForm: (acidente: Dispatch<SetStateAction<AcidenteDTO>>) => void;
}

export default function GravidadeDoAcidente(props: GravidadeDoAcidenteProps) {

    const { form, setForm } = props;
    const { handleChangeInput } = GravidadeDoAcidenteHook(form, setForm);

    return (
        <div>
            <label>
                <input type="radio" name="gravidade" value="Apenas danos materiais" required
                    onChange={handleChangeInput} />Apenas danos materiais
            </label>
            <label>
                <input type="radio" name="gravidade" value="Com vítimas (apenas feridos)" required
                    onChange={handleChangeInput} />Com vítimas (apenas feridos)
            </label>
            <label>
                <input type="radio" name="gravidade" value="Com vítimas fatais" required
                    onChange={handleChangeInput} />Com vítimas fatais
            </label>
        </div>
    );
}