import { ChangeEvent, useEffect, useState } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto"
import { Dispatch, SetStateAction } from "react";
import { listaTiposBairros } from "../constant/listaTiposBairros";

export function LogradouroHook(form: AcidenteDTO, setForm: Dispatch<SetStateAction<AcidenteDTO>>) {

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setForm(prevState => ({
            ...prevState, ...form, [name]: value}));
    }
    
    const [item, setItem] = useState<string>("");

    const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;

        setItem(e.target.value);
        setForm(prevState => ({
            ...prevState, ...form, [name]: value}));
    }

    return { handleChangeInput, item, setItem, handleChangeSelect }
}