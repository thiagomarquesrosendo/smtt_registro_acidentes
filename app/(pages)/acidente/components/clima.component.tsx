'use client'

export interface ChangeHandlerProps {
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Clima(props: ChangeHandlerProps) {
    return (
        <div>
            <label>
                <input type="radio" name="climaTipo" value="Claro" onChange={props.onChangeHandler} />Claro
            </label>
            <label>
                <input type="radio" name="climaTipo" value="Chuvoso" onChange={props.onChangeHandler} />Chuvoso
            </label>
            <label>
                <input type="radio" name="climaTipo" value="Nublado" onChange={props.onChangeHandler} />Nublado
            </label>
        </div>
    );
}