import { ChangeEvent, useState } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto"
import { Dispatch, SetStateAction } from "react";

export function VitimaVeiculoHook(form: AcidenteDTO, setForm: Dispatch<SetStateAction<AcidenteDTO>>) {

    const handleChangeInput = (indexVeiculo: number, indexVitima: number, e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;

        if (name === "nomeVitima")
          form.veiculos![indexVeiculo].vitimas![indexVitima].nomeVitima = value;
        else if (name === "cpfVitima")
          form.veiculos![indexVeiculo].vitimas![indexVitima].cpfVitima = value;
        else if (name === "tipoVitima")
          form.veiculos![indexVeiculo].vitimas![indexVitima].tipoVitima = value;
        else if (name === "medicoVitima")
          form.veiculos![indexVeiculo].vitimas![indexVitima].medicoVitima = checked;
        else if (name === "medicoTipoVitima")
          form.veiculos![indexVeiculo].vitimas![indexVitima].medicoTipoVitima = value;
        else if (name === "hospitalVitima")
          form.veiculos![indexVeiculo].vitimas![indexVitima].hospitalVitima = checked;
        else if (name === "hospitalNomeVitima")
          form.veiculos![indexVeiculo].vitimas![indexVitima].hospitalNomeVitima = value;

        setForm(prevState => ({
            ...prevState, ...form, [name]: value}));
    }

    function addVeiculoVitima(indexVeiculo: number) {
        form.veiculos![indexVeiculo].vitimas?.push({
            nomeVitima: "",
            cpfVitima: "",
            tipoVitima: "",
            medicoVitima: false,
            medicoTipoVitima: "",
            hospitalVitima: false,
            hospitalNomeVitima: ""
        });
        setForm(prevState => ({
            ...prevState, ...form}));
    }

    function delVeiculoVitima(indexVeiculo: number, indexVitima: number) {
        form.veiculos![indexVeiculo].vitimas?.splice(indexVitima, 1);
        setForm(prevState => ({
            ...prevState, ...form}));
    }

    return { handleChangeInput, addVeiculoVitima, delVeiculoVitima }
}