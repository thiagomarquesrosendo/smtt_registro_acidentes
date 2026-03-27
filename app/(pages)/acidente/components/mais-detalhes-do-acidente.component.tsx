'use client'

import { Dispatch, SetStateAction } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto";
import { MaisDetalhesDoAcidenteHook } from "../hooks/mais-detalhes-do-acidente..hook";

export interface MaisDetalhesDoAcidenteProps {
    form: AcidenteDTO;
    setForm: Dispatch<SetStateAction<AcidenteDTO>>;
}

export default function MaisDetalhesDoAcidente(props: MaisDetalhesDoAcidenteProps) {

    const { form, setForm } = props;
    const { handleChangeInput } = MaisDetalhesDoAcidenteHook(form, setForm);

    return (
        <div>
            <label>
                <input type="checkbox" name="detalhesFazerBO" value="Orientados a fazer Boletim de Ocorrência" checked={form.detalhesFazerBO}
                    onChange={handleChangeInput} />Orientados a fazer Boletim de Ocorrência
            </label>
            <label>
                <input type="checkbox" name="detalhesCPTRAN" value="CPTRAN" checked={form.detalhesCPTRAN}
                    onChange={handleChangeInput} />CPTRAN
            </label>
            <label>
                <input type="checkbox" name="detalhesIML" value="IML" checked={form.detalhesIML} 
                    onChange={handleChangeInput} />IML
            </label>
            <label>
                <input type="checkbox" name="detalhesAcordo" value="Acordo formal pré-processual" checked={form.detalhesAcordo} 
                    onChange={handleChangeInput} />Acordo formal pré-processual
            </label>
            
            { form.detalhesAcordo ? (
                <div className="nivel1">
                    <input type="text" name="detalhesAcordoNumero" value={form.detalhesAcordoNumero} placeholder="Número do Acordo" required
                        onChange={handleChangeInput} />
                </div>
            ) : (
                <></>
            ) }
        </div>
    );
}