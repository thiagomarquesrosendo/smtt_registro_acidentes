'use client'

import { useState } from "react";

export function OcultarObjetosFormulario(inicio: number, fim: number) {

    const [isVisible, setIsVisible] = useState<boolean[]>([false]);
    
    const toggleVisibility = (index: number, event: any) => {
        const itens = [...isVisible];

        for (let i = 0; i < itens.length; i++) {
            if (i >= inicio && i <= fim)
                itens[i] = false;
        }

        if (index >= 0)
            itens[index] = event.target.checked;

        setIsVisible(itens);
    };

    return {isVisible, toggleVisibility}

    








//   const [form, setForm] = useState({
//     colisaoTipo: "",
//     abalroamentoTipo: "",
//     atropelamentoTipo: "",
//     choqueTipo: "",
//     veiculoPossuiVitimas: "",
//     veiculoRemovido: "",
//     veiculoResponsavel: "",
//     pedestreVitimaMedico: "",
//   });

//   function handleChange(e: ChangeEventHandler<HTMLInputElement>) {
//     const { name, value, type, checked } = e.target;

//     setForm({
//       ...form,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   }








    
    // const [isVisible, setIsVisible] = useState(false);

    // const toggleVisibility: ChangeEventHandler<HTMLInputElement> = (e) => {
    //     setIsVisible(e.target.checked);
    // };
    
    // return {isVisible, toggleVisibility}
}