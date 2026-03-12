'use client'

import { OcultarObjetosFormulario } from "../hooks/ocultar-objetos-formulario.hook";

export interface ChangeHandlerProps {
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

export default function TipoDeAcidente(props: ChangeHandlerProps) {

    const {isVisible, toggleVisibility} = OcultarObjetosFormulario(0, 10);

    return (
        <div>
            <label>
                <input type="radio" name="acidente" value="Colisão" onChange={(e) => toggleVisibility(0, e)} />Colisão:
            </label>

            <div className="grupoRadio" id="colisao" style={{ display: isVisible[0] ? 'block' : 'none' }}>
                <label>
                    <input type="radio" name="colisaoTipo" value="Frontal" onChange={props.onChangeHandler} />Frontal
                </label>
                <label>
                    <input type="radio" name="colisaoTipo" value="Traseira" onChange={props.onChangeHandler} />Traseira
                </label>
                <label>
                    <input type="radio" name="colisaoTipo" value="Engavetamento" onChange={props.onChangeHandler} />Engavetamento
                </label>
            </div>


            <label>
                <input type="radio" name="acidente" value="Abalroamento" onChange={(e) => toggleVisibility(1, e)} />Abalroamento:
            </label>

            <div className="grupoRadio" id="abalroamento" style={{ display: isVisible[1] ? 'block' : 'none' }}>
                <label>
                    <input type="radio" name="abalroamentoTipo" value="Lateral" onChange={props.onChangeHandler} />Lateral
                </label>
                <label>
                    <input type="radio" name="abalroamentoTipo" value="Transversal" onChange={props.onChangeHandler} />Transversal
                </label>
            </div>


            <label>
                <input type="radio" name="acidente" value="Atropelamento" onChange={(e) => toggleVisibility(2, e)} />Atropelamento:
            </label>

            <div className="grupoRadio" id="atropelamento" style={{ display: isVisible[2] ? 'block' : 'none' }}>
                <label>
                    <input type="radio" name="atropelamentoTipo" value="Pedestre" onChange={props.onChangeHandler} />Pedestre
                </label>
                <label>
                    <input type="radio" name="atropelamentoTipo" value="Animal" onChange={props.onChangeHandler} />Animal
                </label>
            </div>


            <label>
                <input type="radio" name="acidente" value="Choque" onChange={(e) => toggleVisibility(3, e)} />Choque:
            </label>

            <div className="grupoRadio" id="choque" style={{ display: isVisible[3] ? 'block' : 'none' }}>
                <label>
                    <input type="radio" name="choqueTipo" value="Casa/Muro" onChange={props.onChangeHandler} />Casa/Muro
                </label>
                <label>
                    <input type="radio" name="choqueTipo" value="Barranco/Defesa" onChange={props.onChangeHandler} />Barranco/Defesa
                </label>
                <label>
                    <input type="radio" name="choqueTipo" value="Prisma" onChange={props.onChangeHandler} />Prisma
                </label>
                <label>
                    <input type="radio" name="choqueTipo" value="Veiculo Parado" onChange={props.onChangeHandler} />Veiculo Parado
                </label>
                <label>
                    <input type="radio" name="choqueTipo" value="Veiculo Estacionado" onChange={props.onChangeHandler} />Veiculo Estacionado
                </label>
                <label>
                    <input type="radio" name="choqueTipo" value="Poste" onChange={props.onChangeHandler} />Poste
                </label>
                <label>
                    <input type="radio" name="choqueTipo" value="Árvore" onChange={props.onChangeHandler} />Árvore
                </label>
                <label>
                    <input type="radio" name="choqueTipo" value="Outros" onChange={props.onChangeHandler} />Outros
                </label>
            </div>


            <label>
                <input type="radio" name="acidente" value="Capotamento" onChange={props.onChangeHandler} onClick={(e) => toggleVisibility(-1, e)} />Capotamento
            </label>


            <label>
                <input type="radio" name="acidente" value="Tombamento" onChange={props.onChangeHandler} onClick={(e) => toggleVisibility(-1, e)} />Tombamento
            </label>
            
            
            <label>
                <input type="radio" name="acidente" value="Saída de Pista" onChange={props.onChangeHandler} onClick={(e) => toggleVisibility(-1, e)} />Saída de Pista
            </label>
            
            
            <label>
                <input type="radio" name="acidente" value="Quedas" onChange={props.onChangeHandler} onClick={(e) => toggleVisibility(-1, e)} />Quedas
            </label>
            
            
            <label>
                <input type="radio" name="acidente" value="Incêndio" onChange={props.onChangeHandler} onClick={(e) => toggleVisibility(-1, e)} />Incêndio
            </label>
            
            
            <label>
                <input type="radio" name="acidente" value="Outros" onChange={props.onChangeHandler} onClick={(e) => toggleVisibility(-1, e)} />Outros
            </label>
            

            <input type="text" name="acidenteObs" placeholder="Informe mais detalhes sobre o acidente" onChange={props.onChangeHandler} />
        </div>
    );
}