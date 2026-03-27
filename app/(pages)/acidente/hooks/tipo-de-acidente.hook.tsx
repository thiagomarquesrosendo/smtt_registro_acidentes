'use client'
import { ChangeEvent, useEffect, useState } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto";
import { listaTiposAcidentes } from "../constant/listaTiposAcidentes";
import { Dispatch, SetStateAction } from "react";

export function TipoDeAcidenteHook(form: AcidenteDTO, setForm: Dispatch<SetStateAction<AcidenteDTO>>) {

    const [item, setItem] = useState<string>("");
    const [subItem, setSubItem] = useState<string>("");
    const [opcoesSubItem, setOpcoesSubItem] = useState<string[]>([]);

    useEffect(() => {
        if (form.tipoAcidente) {
            setOpcoesSubItem(listaTiposAcidentes[form.tipoAcidente] || []);
            setSubItem("");
        } else {
            setOpcoesSubItem([]);
            setSubItem("");
        }
    }, [form.tipoAcidente]);

    const handleChangeTipoAcidente = (e: ChangeEvent<HTMLSelectElement>) => {
        form.tipoAcidente = e.target.value;
        setItem(e.target.value);
    };

    const handleChangeSubTipoAcidente = (e: ChangeEvent<HTMLSelectElement>) => {
        form.tipoAcidenteSubTipo = e.target.value;
        setSubItem(e.target.value);
    };

    const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setForm(prevState => ({
            ...prevState, ...form, [name]: value}));
    }

    return { opcoesSubItem, handleChangeTipoAcidente, handleChangeSubTipoAcidente, handleChangeTextArea }
}