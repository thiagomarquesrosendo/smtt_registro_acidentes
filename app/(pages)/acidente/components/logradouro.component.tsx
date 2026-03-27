'use client'

import { Dispatch, SetStateAction } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto";
import { LogradouroHook } from "../hooks/logradouro.hook";
import { mascaraTextoCPF } from "../hooks/mascara-texto.hook";
import { listaTiposBairros } from "../constant/listaTiposBairros";

export interface LogradouroProps {
    form: AcidenteDTO;
    setForm: Dispatch<SetStateAction<AcidenteDTO>>;
}

export default function Logradouro(props: LogradouroProps) {

    const { form, setForm } = props;
    const { handleChangeInput, item, setItem, handleChangeSelect } = LogradouroHook(form, setForm);

    return (
        <div>
            <input type="text" name="logradouro" value={form.logradouro} placeholder="Logradouro" required
                onChange={handleChangeInput} />
            <input type="text" name="pontoReferencia" value={form.pontoReferencia} placeholder="Ponto de Referência" required
                onChange={handleChangeInput} />

            <select name="bairro" value={form.bairro} onChange={handleChangeSelect} required>
                <option value="">Selecione o Bairro</option>
                {listaTiposBairros.sort().map((opcoes) => (
                    <option key={opcoes} value={opcoes}>{opcoes}</option>
                ))}
            </select>

            <input type="time" name="horario" value={form.horario} placeholder="Horário" required
                onChange={handleChangeInput} />
        </div>
    );
}