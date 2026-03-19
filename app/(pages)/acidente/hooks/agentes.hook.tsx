import { ChangeEvent } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto"
import { Dispatch, SetStateAction } from "react";

export function AgentesHook(form: AcidenteDTO, setForm: (acidente: Dispatch<SetStateAction<AcidenteDTO>>) => void) {

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setForm(prevState => ({
            ...prevState, ...form, [name]: value}));
    }

    return { handleChangeInput }
}