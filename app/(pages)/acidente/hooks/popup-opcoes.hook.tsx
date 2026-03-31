import { useState } from "react";

export default function PopupOpcoesHook() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const abrirPopup = () => setIsPopupOpen(true);
    const fecharPopup = () => setIsPopupOpen(false);

    return {isPopupOpen, abrirPopup, fecharPopup}
}