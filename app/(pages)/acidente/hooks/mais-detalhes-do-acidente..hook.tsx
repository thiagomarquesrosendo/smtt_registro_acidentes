import { ChangeEvent, useState } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto"
import { Dispatch, SetStateAction } from "react";

export function MaisDetalhesDoAcidenteHook(form: AcidenteDTO, setForm: Dispatch<SetStateAction<AcidenteDTO>>) {

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;

        if (name === "detalhesFazerBO") {
            form.detalhesFazerBO = checked;
        } else if (name === "detalhesCPTRAN") {
            form.detalhesCPTRAN = checked;
        } else if (name === "detalhesIML") {
            form.detalhesIML = checked;
        } else if (name === "detalhesAcordo") {
            form.detalhesAcordo = checked;
        }

        setForm(prevState => ({
            ...prevState, ...form}));
    }

    return { handleChangeInput }
}