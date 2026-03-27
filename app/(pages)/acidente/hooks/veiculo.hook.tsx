'use client'
import { ChangeEvent, useEffect, useState } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto";
import { Dispatch, SetStateAction } from "react";
import { listaTiposVeiculos } from "../constant/listaTiposVeiculos";

export function VeiculoHook(form: AcidenteDTO, setForm: Dispatch<SetStateAction<AcidenteDTO>>) {

    const handleChangeInput = (indexVeiculo: number, e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;

        if (name === "placa")
          form.veiculos![indexVeiculo].placa = value;
        else if (name === "nomeCondutor")
          form.veiculos![indexVeiculo].nomeCondutor = value;
        else if (name === "numeroOcupantes")
          form.veiculos![indexVeiculo].numeroOcupantes = value;
        else if (name === "removido")
          form.veiculos![indexVeiculo].removido = checked;
        else if (name === "removidoTipo")
          form.veiculos![indexVeiculo].removidoTipo = value;
        else if (name === "removidoAuto")
          form.veiculos![indexVeiculo].removidoAuto = value;
        else if (name === "responsavel")
          form.veiculos![indexVeiculo].responsavel = checked;
        else if (name === "responsavelNome")
          form.veiculos![indexVeiculo].responsavelNome = value;
        else if (name === "responsavelCPF")
          form.veiculos![indexVeiculo].responsavelCPF = value;
        
        setForm(prevState => ({
            ...prevState, ...form, [name]: value}));
    }

    const [item, setItem] = useState<string>("");

    const handleChangeSelect = (indexVeiculo: number, e: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === "tipoVeiculo")
          form.veiculos![indexVeiculo].tipoVeiculo = value;

        setItem(e.target.value);
        setForm(prevState => ({
            ...prevState, ...form, [name]: value}));
    }

    function addVeiculo() {
        form.veiculos!.push({
            tipoVeiculo: "",
            placa: "",      
            nomeCondutor: "",
            numeroOcupantes: "",      
            removido: false,
            removidoTipo: "",
            removidoAuto: "",
            responsavel: false,
            responsavelNome: "",
            responsavelCPF: "",
            vitimas: []
        });
        setForm(prevState => ({
                    ...prevState, ...form}));
    }

    function delVeiculo(indexVeiculo: number) {
        form.veiculos?.splice(indexVeiculo, 1);
        setForm(prevState => ({
            ...prevState, ...form}));
    }

    return { handleChangeInput, item, setItem, handleChangeSelect, addVeiculo, delVeiculo }
}