'use client'
import { Dispatch, SetStateAction, useState } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto";

export function mascaraTextoCPF(form: AcidenteDTO, setForm: Dispatch<SetStateAction<AcidenteDTO>>) {
    const [cpf, setCpf] = useState('');

    const maskCpf = (value: string) => {
        return value
            .replace(/\D/g, '') // Remove caracteres não numéricos
            .replace(/(\d{3})(\d)/, '$1.$2') // Ponto após 3 dígitos
            .replace(/(\d{3})(\d)/, '$1.$2') // Ponto após 6 dígitos
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2') // Traço antes dos 2 últimos
            .substring(0, 14); // Limita tamanho
    };

    const handleChangeInputCPF = (indexVeiculo: number, indexVitima: number, e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      
      const cpfValido = maskCpf(value);
      setCpf(cpfValido);

      if (indexVeiculo > -1 && indexVitima === -1) {
        if (name === "responsavelCPF")
            form!.veiculos![indexVeiculo].responsavelCPF = cpfValido;
      } else if (indexVeiculo > -1 && indexVitima > -1) {
        if (name === "cpfVitima")
            form!.veiculos![indexVeiculo].vitimas![indexVitima].cpfVitima = cpfValido;
      } else if (indexVeiculo === -1 && indexVitima > -1) {
        if (name === "cpfPedestre")
            form!.pedestres![indexVitima].cpfPedestre = cpfValido;
      }

      setForm(prevState => ({
        ...prevState, ...form}));
    };

    return {cpf, handleChangeInputCPF};
}

export function mascaraTextoPlacaVeicular(form: AcidenteDTO, setForm: Dispatch<SetStateAction<AcidenteDTO>>) {
    const [placa, setPlaca] = useState('');

    const maskPlaca = (value: string) => {
        return value
            .replace(/[\s.-]/g, "") // Substitui espaços, hífens ou pontos por nada
            // .replace(/^([A-Z]{3})(\d[A-Z\d]\d{2})$/, "$1-$2")  // Adiciona um hífen após o 3º caractere
            // .replace(/(\d{5})(\d{3})/, "$1-$2")  // Adicionar hífen no meio de números
            .substring(0, 7) // Limita tamanho
            .toUpperCase();  // Transforma o texto em maíusculo
    };

    const handleChangeInputPlacaVeicular = (indexVeiculo: number, e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      
      const placaValida = maskPlaca(value);

      setPlaca(placaValida);

      form!.veiculos![indexVeiculo].placa;
      setForm(prevState => ({
        ...prevState, ...form}));
    };

    return {placa, handleChangeInputPlacaVeicular};
}

export const maskMoney = (event: React.FormEvent<HTMLInputElement>) => {
  const { value } = event.currentTarget;
  return value
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2})$/, '$1,$2')
    .replace(/(?=(\d{3})+(\D))\B/g, '.');
};

export const maskPhone = (event: React.FormEvent<HTMLInputElement>) => {
  event.currentTarget.maxLength = 15;
  const { value } = event.currentTarget;
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{4})/, '$1-$2');
};

export const maskCEP = (event: React.FormEvent<HTMLInputElement>) => {
  event.currentTarget.maxLength = 9;
  const { value } = event.currentTarget;
  return value.replace(/\D/g, '').replace(/^(\d{5})(\d{3})+?$/, '$1-$2');
};


/*
    SITE BOM PARA EXPLICAR COMO UTILIZAR MASCARAS:
    https://medium.com/@pedro.lg.cs/implementando-m%C3%A1scaras-em-inputs-utilizando-react-typescript-bafe4d6adfa0
*/