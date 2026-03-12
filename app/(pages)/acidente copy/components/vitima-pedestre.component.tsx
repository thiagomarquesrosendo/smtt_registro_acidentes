'use client'

export interface ChangeHandlerProps {
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

export default function VitimaPedestre(props: ChangeHandlerProps) {
    return (
        <div>
            <input type="text" name="pedestreVitimaNome" placeholder="Nome da vítima" onChange={props.onChangeHandler} />
            <input type="text" name="pedestreVitimaCPF" placeholder="CPF" onChange={props.onChangeHandler} />
            
            <span>Tipo de vítima:</span>
            <div className="grupoRadio">
                <label>
                    <input type="radio" name="pedestreVitimaTipo" value="Condutor" onChange={props.onChangeHandler} />Condutor
                </label>
                <label>
                    <input type="radio" name="pedestreVitimaTipo" value="Passageiro" onChange={props.onChangeHandler} />Passageiro
                </label>
            </div>

            <label>
                <input type="checkbox" name="pedestreVitimaMedico" value="Atendimento Médico" onChange={props.onChangeHandler} />Atendimento Médico:
            </label>
            
            <div className="grupoRadio">
                <label>
                    <input type="radio" name="pedestreVitimaMedicoTipo" value="Samu" onChange={props.onChangeHandler} />Samu
                </label>
                <label>
                    <input type="radio" name="pedestreVitimaMedicoTipo" value="Bombeiro" onChange={props.onChangeHandler} />Bombeiro
                </label>
            </div>
            
            <label>
                <input type="checkbox" name="pedestreVitimaHospital" value="Conduzido para o Hospital" onChange={props.onChangeHandler} />Conduzido para o Hospital:
            </label>
            
            <div className="grupoForm">
                <input type="text" name="pedestreVitimaHospitalNome" placeholder="Nome do Hospital" onChange={props.onChangeHandler} />
            </div>
        </div>
    );
}