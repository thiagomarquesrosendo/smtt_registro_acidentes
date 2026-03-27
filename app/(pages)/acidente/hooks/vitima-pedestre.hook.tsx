import { ChangeEvent, useState } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto"
import { Dispatch, SetStateAction } from "react";

export function VitimaPedestreHook(form: AcidenteDTO, setForm: Dispatch<SetStateAction<AcidenteDTO>>) {

    const handleChangeInput = (indexPedestre: number, e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;

        if (name === "nomePedestre")
          form.pedestres![indexPedestre].nomePedestre = value;
        else if (name === "cpfPedestre")
          form.pedestres![indexPedestre].cpfPedestre = value;
        else if (name === "tipoPedestre" + indexPedestre)
          form.pedestres![indexPedestre].tipoPedestre = value;
        else if (name === "medicoPedestre")
          form.pedestres![indexPedestre].medicoPedestre = checked;
        else if (name === "medicoTipoPedestre" + indexPedestre)
          form.pedestres![indexPedestre].medicoTipoPedestre = value;
        else if (name === "hospitalPedestre")
          form.pedestres![indexPedestre].hospitalPedestre = checked;
        else if (name === "hospitalNomePedestre")
          form.pedestres![indexPedestre].hospitalNomePedestre = value;

        setForm(prevState => ({
            ...prevState, ...form, [name]: value}));
    }

    function addPedestre() {
        form.pedestres!.push({
            nomePedestre: "",
            cpfPedestre: "",
            tipoPedestre: "",
            medicoPedestre: false,
            medicoTipoPedestre: "",
            hospitalPedestre: false,
            hospitalNomePedestre: ""
        });
        setForm(prevState => ({
            ...prevState, ...form}));
    }

    function delPedestre(indexPedestre: number) {
        form.pedestres?.splice(indexPedestre, 1);
        setForm(prevState => ({
            ...prevState, ...form}));
    }

    return { handleChangeInput, addPedestre, delPedestre }
}