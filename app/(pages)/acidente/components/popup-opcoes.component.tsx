'use client'
import "../../../css/popup.css"
import PopupOpcoesHook from "../hooks/popup-opcoes.hook";

export default function PopupOpcoes() {

    const {isPopupOpen, abrirPopup, fecharPopup} = PopupOpcoesHook();

    return (
        <div className="popup">
            <button onClick={abrirPopup}>Abrir Opções</button>

            {/* Renderização condicional do pop-up */}
            {isPopupOpen && (
            <div className="fundo">
                <div className="cabecalho">
                    <span>Escolha a opção</span>
                    <button type="button" onClick={fecharPopup}>X</button>
                </div>
                <div className="conteudo">
                    <button type="button" onClick={() => console.log('Opção 1')}>Novo registro</button>
                    <button type="button" onClick={() => console.log('Opção 2')}>Salvar</button>
                </div>
            </div>
            )}
        </div>
    );
}