import { ChangeEvent } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto"
import { Dispatch, SetStateAction } from "react";

export function SinalizacaoHook(form: AcidenteDTO, setForm: Dispatch<SetStateAction<AcidenteDTO>>) {

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setForm(prevState => ({
            ...prevState, ...form, [name]: value}));
    }

    const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setForm(prevState => ({
            ...prevState, ...form, [name]: value}));
    }

    return { handleChangeInput, handleChangeTextarea }
}