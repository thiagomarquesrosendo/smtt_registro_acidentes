'use client'

export interface ChangeHandlerProps {
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Sinalizacao(props: ChangeHandlerProps) {
    return (
        <div>
            <label>
                <input type="radio" name="sinalizacao" value="Existente" onChange={props.onChangeHandler} />Existente
            </label>
            <label>
                <input type="radio" name="sinalizacao" value="Precária" onChange={props.onChangeHandler} />Precária
            </label>
            <label>
                <input type="radio" name="sinalizacao" value="Inexistente" onChange={props.onChangeHandler} />Inexistente
            </label>
            <label>
                <input type="radio" name="sinalizacao" value="Deficiente" onChange={props.onChangeHandler} />Deficiente
            </label>
            
            
            <textarea rows={2} cols={30} name="sinalizacaoObs" placeholder="Informe mais detalhes da Sinalização" 
                onChange={props.onChangeHandler} >
            </textarea>
        </div>
    );
}