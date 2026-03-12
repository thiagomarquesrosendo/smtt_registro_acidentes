'use client'

export interface ChangeHandlerProps {
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Pavimento(props: ChangeHandlerProps) {
    return (
        <div>
            <label>
                <input type="radio" name="pavimento" value="Asfalto" onChange={props.onChangeHandler} />Asfalto
            </label>
            <label>
                <input type="radio" name="pavimento" value="Esburacado" onChange={props.onChangeHandler} />Esburacado
            </label>
            <label>
                <input type="radio" name="pavimento" value="Calçamento" onChange={props.onChangeHandler} />Calçamento
            </label>
            <label>
                <input type="radio" name="pavimento" value="Terra" onChange={props.onChangeHandler} />Terra
            </label>
        </div>
    );
}