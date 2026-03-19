import { ChangeEvent, useEffect, useState } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto"
import { Dispatch, SetStateAction } from "react";
import { listaTiposBairros } from "../constant/listaTiposBairros";

export function LogradouroHook(form: AcidenteDTO, setForm: (acidente: Dispatch<SetStateAction<AcidenteDTO>>) => void) {

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setForm(prevState => ({
            ...prevState, ...form, [name]: value}));
    }
    
    const [item, setItem] = useState<string>("");
    const [opcoesSubItem, setOpcoesSubItem] = useState<string[]>([]);

    const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;

        setItem(e.target.value);
        setForm(prevState => ({
            ...prevState, ...form, [name]: value}));
    }
    
    useEffect(() => {
        setOpcoesSubItem(listaTiposBairros["Bairros"]);
    }, []);

    return { handleChangeInput, item, setItem, opcoesSubItem, handleChangeSelect }
}