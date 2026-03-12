'use client'

import { OcultarObjetosFormulario } from "../hooks/ocultar-objetos-formulario.hook";

export interface ChangeHandlerProps {
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Iluminacao(props: ChangeHandlerProps) {

    const {isVisible, toggleVisibility} = OcultarObjetosFormulario(16, 16);

    return (
        <div>
            <label>
                <input type="radio" name="iluminacao" value="Amanhecer" 
                    onChange={props.onChangeHandler} />Amanhecer
            </label>
            <label>
                <input type="radio" name="iluminacao" value="Dia" 
                    onChange={props.onChangeHandler} />Dia
            </label>
            <label>
                <input type="radio" name="iluminacao" value="Entardecer" 
                    onChange={props.onChangeHandler} />Entardecer
            </label>
            <label>
                <input type="radio" name="iluminacao" value="Noite" 
                    onChange={props.onChangeHandler}
                     onClick={(e) => toggleVisibility(16, e)} />Noite
            </label>

            <div className="grupoForm" style={{ display: isVisible[16] ? 'block' : 'none' }}>
                <label>
                    <input type="radio" name="iluminacaoNoite" value="Iluminada" onChange={props.onChangeHandler} />Iluminada
                </label>
                <label>
                    <input type="radio" name="iluminacaoNoite" value="Sem Iluminação" onChange={props.onChangeHandler} />Sem Iluminação
                </label>
            </div>
        </div>
    );
}