'use client'

export interface ChangeHandlerProps {
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Sinalizacao(props: ChangeHandlerProps) {
    return (
        <div>
            <label>
                <input type="radio" name="sinalizacaoTipo " value="Existente" onChange={props.onChangeHandler} />Existente
            </label>
            <label>
                <input type="radio" name="sinalizacaoTipo" value="Precária" onChange={props.onChangeHandler} />Precária
            </label>
            <label>
                <input type="radio" name="sinalizacaoTipo" value="Inexistente" onChange={props.onChangeHandler} />Inexistente
            </label>
            <label>
                <input type="radio" name="sinalizacaoTipo" value="Deficiente" onChange={props.onChangeHandler} />Deficiente
            </label>
            
            <input type="text" name="sinalizacaoTipoObs" placeholder="Informe mais detalhes da Sinalização" onChange={props.onChangeHandler} />
        </div>
    );
}