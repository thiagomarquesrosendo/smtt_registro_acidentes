'use client'

import { OcultarObjetosFormulario } from "../hooks/ocultar-objetos-formulario.hook";

export interface ChangeHandlerProps {
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

export default function MaisDetalhesDoAcidente(props: ChangeHandlerProps) {

    const {isVisible, toggleVisibility} = OcultarObjetosFormulario(15, 15);

    return (
        <div>
            <label>
                <input type="checkbox" name="detalhesFazerBO" value="Orientados a fazer Boletim de Ocorrência" 
                    onChange={props.onChangeHandler} />Orientados a fazer Boletim de Ocorrência
            </label>
            <label>
                <input type="checkbox" name="detalhesCPTRAN" value="CPTRAN" 
                    onChange={props.onChangeHandler} />CPTRAN
            </label>
            <label>
                <input type="checkbox" name="detalhesIML" value="IML" 
                    onChange={props.onChangeHandler} />IML
            </label>
            <label>
                <input type="checkbox" name="detalhesAcordo" value="Acordo formal pré-processual" 
                    onChange={props.onChangeHandler} onClick={(e) => toggleVisibility(15, e)} />Acordo formal pré-processual
            </label>
            
            <div className="grupoForm" style={{ display: isVisible[15] ? 'block' : 'none' }}>
                <input type="text" name="detalhesAcordoNumero" placeholder="Número do Acordo" onChange={props.onChangeHandler} />
            </div>
        </div>
    );
}