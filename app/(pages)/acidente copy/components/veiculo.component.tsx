'use client'

import { OcultarObjetosFormulario } from "../hooks/ocultar-objetos-formulario.hook";
import VitimaVeiculo from "./vitima-veiculo.component";

export interface ChangeHandlerProps {
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Veiculo(props: ChangeHandlerProps) {

    const {isVisible, toggleVisibility} = OcultarObjetosFormulario(11, 10);

    return (
        <div>
            <span>Tipo de Veículo:</span>
            <label>
                <input type="radio" name="veiculoTipo" value="Bicicleta" onChange={props.onChangeHandler} />Bicicleta
            </label>
            <label>
                <input type="radio" name="veiculoTipo" value="Motocicleta" onChange={props.onChangeHandler} />Motocicleta
            </label>
            <label>
                <input type="radio" name="veiculoTipo" value="Carro" onChange={props.onChangeHandler} />Carro
            </label>
            <label>
                <input type="radio" name="veiculoTipo" value="Caminhão" onChange={props.onChangeHandler} />Caminhão
            </label>
            <label>
                <input type="radio" name="veiculoTipo" value="Ônibus" onChange={props.onChangeHandler} />Ônibus
            </label>


            <input type="text" name="veiculoPlaca" placeholder="Placa do veículo" onChange={props.onChangeHandler} />
            <input type="text" name="veiculoNomeCondutor" placeholder="Nome do condutor" onChange={props.onChangeHandler} />
            <input type="text" name="veiculoNumeroOcupantes" placeholder="Número de ocupantes" onChange={props.onChangeHandler} />


            <label>
                <input type="checkbox" name="veiculoPossuiVitimas" value="Possui vítimas" onChange={props.onChangeHandler} onClick={(e) => toggleVisibility(0, e)} />Possui vítimas:
            </label>
            <div style={{ display: isVisible[0] ? 'block' : 'none' }}>
                <div className="grupoForm" style={{marginBottom:"10px"}}>
                    <VitimaVeiculo onChangeHandler={props.onChangeHandler} />
                </div>
            </div>


            <label>
                <input type="checkbox" name="veiculoRemovido" value="Removido para o pátio" onChange={props.onChangeHandler} />Removido para o pátio:
            </label>
            <div className="grupoForm">
                <span>Tipificação de Auto de Infração:</span>
                <div>
                    <div className="grupoRadio">
                        <label>
                            <input type="radio" name="veiculoRemovidoTipo" value="Licenciamento Atrasado" onChange={props.onChangeHandler} />Licenciamento Atrasado
                        </label>
                        <label>
                            <input type="radio" name="veiculoRemovidoTipo" value="Estacionamnto irregular" onChange={props.onChangeHandler} />Estacionamnto irregular
                        </label>
                        <label>
                            <input type="radio" name="veiculoRemovidoTipo" value="Falta de equipamento obrigatório" onChange={props.onChangeHandler} />Falta de equipamento obrigatório
                        </label>
                    </div>
                    
                    <div className="grupoInput">
                        <input type="text" name="veiculoRemovidoAuto" placeholder="Número do Auto de Infração" onChange={props.onChangeHandler} />
                    </div>
                </div>
            </div>


            <label>
                <input type="checkbox" name="veiculoResponsavel" value="Apresentação de responsável pelo veículo" onChange={props.onChangeHandler} />Apresentação de responsável pelo veículo:
            </label>
            <div className="grupoForm">
                <input type="text" name="veiculoResponsavelNome" placeholder="Nome do Responsável" onChange={props.onChangeHandler} />
                <input type="text" name="veiculoResponsavelCPF" placeholder="CPF" onChange={props.onChangeHandler} />
            </div>
        </div>
    );
}