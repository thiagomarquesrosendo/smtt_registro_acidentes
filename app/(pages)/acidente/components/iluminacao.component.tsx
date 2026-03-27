'use client'

import { Dispatch, SetStateAction } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto";
import { IluminacaoHook } from "../hooks/iluminacao.hook";

export interface IluminacaoProps {
    form: AcidenteDTO;
    setForm: Dispatch<SetStateAction<AcidenteDTO>>;
}

export default function Iluminacao(props: IluminacaoProps) {

    const { form, setForm } = props;
    const { handleChangeInput } = IluminacaoHook(form, setForm);

    return (
        <div>
            <label>
                <input type="radio" name="iluminacao" value="Amanhecer" checked={form.iluminacao === "Amanhecer"} required 
                    onChange={handleChangeInput} />Amanhecer
            </label>
            <label>
                <input type="radio" name="iluminacao" value="Dia" checked={form.iluminacao === "Dia"} required 
                    onChange={handleChangeInput} />Dia
            </label>
            <label>
                <input type="radio" name="iluminacao" value="Entardecer" checked={form.iluminacao === "Entardecer"} required 
                    onChange={handleChangeInput} />Entardecer
            </label>
            <label>
                <input type="radio" name="iluminacao" value="Noite" checked={form.iluminacao === "Noite"} required 
                    onChange={handleChangeInput} />Noite
            </label>

            { form.iluminacao === "Noite" ? (
                <div className="nivel1">
                    <label>
                        <input type="radio" name="iluminacaoNoite" value="Iluminada" checked={form.iluminacaoNoite === "Iluminada"} required 
                            onChange={handleChangeInput} />Iluminada
                    </label>
                    <label>
                        <input type="radio" name="iluminacaoNoite" value="Sem Iluminação" checked={form.iluminacaoNoite === "Sem Iluminação"} required 
                            onChange={handleChangeInput} />Sem Iluminação
                    </label>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}