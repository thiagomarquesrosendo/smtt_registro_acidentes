'use client'
import { ChangeEvent, useState } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto"
import { Dispatch, SetStateAction } from "react";

export function IluminacaoHook(form: AcidenteDTO, setForm: Dispatch<SetStateAction<AcidenteDTO>>) {

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setForm(prevState => ({
            ...prevState, ...form, [name]: value}));
    }

    return { handleChangeInput }
}