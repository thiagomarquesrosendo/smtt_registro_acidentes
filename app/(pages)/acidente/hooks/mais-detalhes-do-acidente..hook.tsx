import { ChangeEvent, useState } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto"
import { Dispatch, SetStateAction } from "react";

export function MaisDetalhesDoAcidenteHook(form: AcidenteDTO, setForm: (acidente: Dispatch<SetStateAction<AcidenteDTO>>) => void) {

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;

        if (name === "detalhesAcordo") {
            form.detalhesAcordo = checked;
        }

        setForm(prevState => ({
            ...prevState, ...form}));
    }

    return { handleChangeInput }
}