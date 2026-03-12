'use client'

export interface ChangeHandlerProps {
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

export default function GravidadeDoAcidente(props: ChangeHandlerProps) {
    return (
        <div>
            <label>
                <input type="radio" name="gravidadeTipo" value="Apenas danos materiais" onChange={props.onChangeHandler} />Apenas danos materiais
            </label>
            <label>
                <input type="radio" name="gravidadeTipo" value="Com vítimas (apenas feridos)" onChange={props.onChangeHandler} />Com vítimas (apenas feridos)
            </label>
            <label>
                <input type="radio" name="gravidadeTipo" value="Com vítimas fatais" onChange={props.onChangeHandler} />Com vítimas fatais
            </label>
        </div>
    );
}