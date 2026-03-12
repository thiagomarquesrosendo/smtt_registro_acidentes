'use client'

export interface ChangeHandlerProps {
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Logradouro(props: ChangeHandlerProps) {
    return (
        <div>
            <input type="text" name="logradouro" placeholder="Logradouro"
                onChange={props.onChangeHandler} />
            <input type="text" name="pontoReferencia" placeholder="Ponto de Referência"
                onChange={props.onChangeHandler} />
            <input type="text" name="bairro" placeholder="Bairro" 
                onChange={props.onChangeHandler} />
            <input type="text" name="horario" placeholder="Horário" 
                onChange={props.onChangeHandler} />
        </div>
    );
}