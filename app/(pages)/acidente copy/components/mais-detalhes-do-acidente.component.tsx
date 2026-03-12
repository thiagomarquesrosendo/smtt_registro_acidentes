'use client'

export interface ChangeHandlerProps {
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

export default function MaisDetalhesDoAcidente(props: ChangeHandlerProps) {
    return (
        <div>
            <label>
                <input type="checkbox" name="detalhesFazerBO" value="Orientados a fazerem B.O. (Boletim de Ocorrência)" onChange={props.onChangeHandler} />Orientados a fazerem B.O. (Boletim de Ocorrência)
            </label>
            <label>
                <input type="checkbox" name="detalhesCPTRAN" value="CPTRAN" onChange={props.onChangeHandler} />CPTRAN
            </label>
            <label>
                <input type="checkbox" name="detalhesIML" value="IML" onChange={props.onChangeHandler} />IML
            </label>
            <label>
                <input type="checkbox" name="detalhesAcordo" value="Acordo formal pré-processual" onChange={props.onChangeHandler} />Acordo formal pré-processual
            </label>
            
            <div className="grupoForm">
                <input type="text" name="detalhesAcordoNumero" placeholder="Número do Acordo" onChange={props.onChangeHandler} />
            </div>
        </div>
    );
}