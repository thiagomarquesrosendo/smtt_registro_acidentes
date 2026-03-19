'use client'

import { Dispatch, SetStateAction } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto";
import { AgentesHook } from "../hooks/agentes.hook";

export interface AgentesProps {
    form: AcidenteDTO;
    setForm: (acidente: Dispatch<SetStateAction<AcidenteDTO>>) => void;
}

export default function Agentes(props: AgentesProps) {
    
    const { form, setForm } = props;
    const { handleChangeInput } = AgentesHook(form, setForm);

    return (
        <div>
            <input type="text" name="agentesOcorrencia" placeholder="Nomes dos Agentes" required 
                onChange={handleChangeInput} />
        </div>
    );
}