'use client'

export interface ChangeHandlerProps {
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Iluminacao(props: ChangeHandlerProps) {
    return (
        <div>
            <label>
                <input type="radio" name="iluminacaoTipo" value="Amanhecer" onChange={props.onChangeHandler} />Amanhecer
            </label>
            <label>
                <input type="radio" name="iluminacaoTipo" value="Dia" onChange={props.onChangeHandler} />Dia
            </label>
            <label>
                <input type="radio" name="iluminacaoTipo" value="Entardecer" onChange={props.onChangeHandler} />Entardecer
            </label>
            <label>
                <input type="radio" name="iluminacaoTipo" value="Noite" onChange={props.onChangeHandler} />Noite
            </label>

            
            <label>
                <input type="radio" name="iluminacaoNoiteTipo" value="Iluminada" onChange={props.onChangeHandler} />Iluminada
            </label>
            <label>
                <input type="radio" name="iluminacaoNoiteTipo" value="Sem Iluminação" onChange={props.onChangeHandler} />Sem Iluminação
            </label>
        </div>
    );
}