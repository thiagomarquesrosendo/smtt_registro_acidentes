'use client'

export interface ChangeHandlerProps {
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Logradouro(props: ChangeHandlerProps) {
    return (
        <div>
            <input type="text" name="acidenteLogradouro" placeholder="Logradouro" onChange={props.onChangeHandler} />
            <input type="text" name="acidentePontoReferencia" placeholder="Ponto de Referência" onChange={props.onChangeHandler} />
            <input type="text" name="acidenteBairro" placeholder="Bairro" onChange={props.onChangeHandler} />
            <input type="text" name="acidenteHorario" placeholder="Horário" onChange={props.onChangeHandler} />
        </div>
    );
}