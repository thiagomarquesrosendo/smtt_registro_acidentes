import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AcidenteDTO } from "../dto/Acidente.dto";

export function PersistenciaDeDadosHook(form: AcidenteDTO, setForm: Dispatch<SetStateAction<AcidenteDTO>>) {

    const [contador, setContador] = useState<number>(0);

    useEffect(() => {
        receberDados();
        
        const intervalId = setInterval(() => { // Define o intervalo para rodar. Exemplo: 1000 -> 1 segundo (1000ms)
            setContador((prev) => prev + 1);
            salvarDados();
            // alert(JSON.stringify(form))
        }, 180000);  // 3 minutos

        // Função de limpeza: para o timer quando o componente é desmontado
        return () => clearInterval(intervalId);
    }, []); // Array vazio garante que o efeito rode apenas na montagem

    function receberDados() {
        form.logradouro = localStorage.getItem('logradouro') ?? "";
        form.pontoReferencia = localStorage.getItem('pontoReferencia') ?? "";
        form.bairro = localStorage.getItem('bairro') ?? "";
        form.horario = localStorage.getItem('horario') ?? "";
        form.agentesOcorrencia = localStorage.getItem('agentesOcorrencia') ?? "";
        form.tipoAcidente = localStorage.getItem('tipoAcidente') ?? "";
        form.tipoAcidenteSubTipo = localStorage.getItem('tipoAcidenteSubTipo') ?? "";
        form.tipoAcidenteObs = localStorage.getItem('tipoAcidenteObs') ?? "";
        form.gravidade = localStorage.getItem('gravidade') ?? "";

        let qtdVeiculos = Number.parseInt(localStorage.getItem('qtdVeiculos') ?? "0");
        for (let index = 0; index < qtdVeiculos; index++) {
            addVeiculo();
            form.veiculos![index].tipoVeiculo = localStorage.getItem('tipoVeiculo'+index) ?? "";
            form.veiculos![index].placa = localStorage.getItem('placa'+index) ?? "";
            form.veiculos![index].nomeCondutor = localStorage.getItem('nomeCondutor'+index) ?? "";
            form.veiculos![index].numeroOcupantes = localStorage.getItem('numeroOcupantes'+index) ?? "";
            form.veiculos![index].removido = localStorage.getItem('removido'+index) === "true" ? true : false;
            form.veiculos![index].removidoTipo = localStorage.getItem('removidoTipo'+index) ?? "";
            form.veiculos![index].removidoAuto = localStorage.getItem('removidoAuto'+index) ?? "";
            form.veiculos![index].responsavel = localStorage.getItem('responsavel'+index) === "true" ? true : false;
            form.veiculos![index].responsavelNome = localStorage.getItem('responsavelNome'+index) ?? "";
            form.veiculos![index].responsavelCPF = localStorage.getItem('responsavelCPF'+index) ?? "";

            let qtdVitimas = Number.parseInt(localStorage.getItem('qtdVitimas'+index) ?? "0");
            for (let index2 = 0; index2 < qtdVitimas; index2++) {
                addVeiculoVitima(index);
                form.veiculos![index].vitimas![index2].nomeVitima = localStorage.getItem('nomeVitima'+index+'&'+index2) ?? "";
                form.veiculos![index].vitimas![index2].cpfVitima = localStorage.getItem('cpfVitima'+index+'&'+index2) ?? "";
                form.veiculos![index].vitimas![index2].tipoVitima = localStorage.getItem('tipoVitima'+index+'&'+index2) ?? "";
                form.veiculos![index].vitimas![index2].medicoVitima = localStorage.getItem('medicoVitima'+index+'&'+index2) === "true" ? true : false;
                form.veiculos![index].vitimas![index2].medicoTipoVitima = localStorage.getItem('medicoTipoVitima'+index+'&'+index2) ?? "";
                form.veiculos![index].vitimas![index2].hospitalVitima = localStorage.getItem('hospitalVitima'+index+'&'+index2) === "true" ? true : false;
                form.veiculos![index].vitimas![index2].hospitalNomeVitima = localStorage.getItem('hospitalNomeVitima'+index+'&'+index2) ?? "";
            }               
        }

        let qtdPedestres = Number.parseInt(localStorage.getItem('qtdPedestres') ?? "0");
        for (let index = 0; index < qtdPedestres; index++) {
            addPedestre();
            form.pedestres![index].nomePedestre = localStorage.getItem('nomePedestre'+index) ?? ""; 
            form.pedestres![index].cpfPedestre = localStorage.getItem('cpfPedestre'+index) ?? ""; 
            form.pedestres![index].tipoPedestre = localStorage.getItem('tipoPedestre'+index) ?? ""; 
            form.pedestres![index].medicoPedestre = localStorage.getItem('medicoPedestre'+index) === "true" ? true : false;
            form.pedestres![index].medicoTipoPedestre = localStorage.getItem('medicoTipoPedestre'+index) ?? ""; 
            form.pedestres![index].hospitalPedestre = localStorage.getItem('hospitalPedestre'+index) === "true" ? true : false;
            form.pedestres![index].hospitalNomePedestre = localStorage.getItem('hospitalNomePedestre'+index) ?? ""; 
        }

        form.detalhesFazerBO = localStorage.getItem('detalhesFazerBO') === "true" ? true : false;
        form.detalhesCPTRAN = localStorage.getItem('detalhesCPTRAN') === "true" ? true : false;
        form.detalhesIML = localStorage.getItem('detalhesIML') === "true" ? true : false;
        form.detalhesAcordo = localStorage.getItem('detalhesAcordo') === "true" ? true : false;
        form.climaTipo = localStorage.getItem('climaTipo') ?? "";
        form.sinalizacao = localStorage.getItem('sinalizacao') ?? "";
        form.sinalizacaoObs = localStorage.getItem('sinalizacaoObs') ?? "";
        form.iluminacao = localStorage.getItem('iluminacao') ?? "";
        form.iluminacaoNoite = localStorage.getItem('iluminacaoNoite') ?? "";
        form.pavimento = localStorage.getItem('pavimento') ?? "";

        setForm(prevState => ({
        ...prevState, form}));
    }

    function salvarDados() {
        localStorage.setItem('logradouro', form.logradouro + "");
        localStorage.setItem('pontoReferencia', form.pontoReferencia + "");
        localStorage.setItem('bairro', form.bairro + "");
        localStorage.setItem('horario', form.horario + "");
        localStorage.setItem('agentesOcorrencia', form.agentesOcorrencia + "");
        localStorage.setItem('tipoAcidente', form.tipoAcidente + "");
        localStorage.setItem('tipoAcidenteSubTipo', form.tipoAcidenteSubTipo + "");
        localStorage.setItem('tipoAcidenteObs', form.tipoAcidenteObs + "");
        localStorage.setItem('gravidade', form.gravidade + "");

        localStorage.setItem('qtdVeiculos', form.veiculos!.length + "");
        form.veiculos!.map((veiculo, index) => (
            localStorage.setItem('tipoVeiculo'+index, form.veiculos![index].tipoVeiculo + ""),
            localStorage.setItem('placa'+index, form.veiculos![index].placa + ""),
            localStorage.setItem('nomeCondutor'+index, form.veiculos![index].nomeCondutor + ""),
            localStorage.setItem('numeroOcupantes'+index, form.veiculos![index].numeroOcupantes + ""),
            localStorage.setItem('removido'+index, form.veiculos![index].removido + ""),
            localStorage.setItem('removidoTipo'+index, form.veiculos![index].removidoTipo + ""),
            localStorage.setItem('removidoAuto'+index, form.veiculos![index].removidoAuto + ""),
            localStorage.setItem('responsavel'+index, form.veiculos![index].responsavel + ""),
            localStorage.setItem('responsavelNome'+index, form.veiculos![index].responsavelNome + ""),
            localStorage.setItem('responsavelCPF'+index, form.veiculos![index].responsavelCPF + ""),

            localStorage.setItem('qtdVitimas'+index, form.veiculos![index].vitimas!.length + ""),
            form.veiculos![index].vitimas!.map((vitima, index2) => (
                localStorage.setItem('nomeVitima'+index+'&'+index2, form.veiculos![index].vitimas![index2].nomeVitima + ""),
                localStorage.setItem('cpfVitima'+index+'&'+index2, form.veiculos![index].vitimas![index2].cpfVitima + ""),
                localStorage.setItem('tipoVitima'+index+'&'+index2, form.veiculos![index].vitimas![index2].tipoVitima + ""),
                localStorage.setItem('medicoVitima'+index+'&'+index2, form.veiculos![index].vitimas![index2].medicoVitima + ""),
                localStorage.setItem('medicoTipoVitima'+index+'&'+index2, form.veiculos![index].vitimas![index2].medicoTipoVitima + ""),
                localStorage.setItem('hospitalVitima'+index+'&'+index2, form.veiculos![index].vitimas![index2].hospitalVitima + ""),
                localStorage.setItem('hospitalNomeVitima'+index+'&'+index2, form.veiculos![index].vitimas![index2].hospitalNomeVitima + "")
            ))
        ));

        localStorage.setItem('qtdPedestres', form.pedestres!.length + "");
        form.pedestres!.map((pedestre, index) => (
            localStorage.setItem('nomePedestre'+index, form.pedestres![index].nomePedestre + ""),
            localStorage.setItem('cpfPedestre'+index, form.pedestres![index].cpfPedestre + ""),
            localStorage.setItem('tipoPedestre'+index, form.pedestres![index].tipoPedestre + ""),
            localStorage.setItem('medicoPedestre'+index, form.pedestres![index].medicoPedestre + ""),
            localStorage.setItem('medicoTipoPedestre'+index, form.pedestres![index].medicoTipoPedestre + ""),
            localStorage.setItem('hospitalPedestre'+index, form.pedestres![index].hospitalPedestre + ""),
            localStorage.setItem('hospitalNomePedestre'+index, form.pedestres![index].hospitalNomePedestre + "")
        ));

        localStorage.setItem('detalhesFazerBO', form.detalhesFazerBO + "");
        localStorage.setItem('detalhesCPTRAN', form.detalhesCPTRAN + "");
        localStorage.setItem('detalhesIML', form.detalhesIML + "");
        localStorage.setItem('detalhesAcordo', form.detalhesAcordo + "");
        localStorage.setItem('detalhesAcordoNumero', form.detalhesAcordoNumero + "");
        localStorage.setItem('climaTipo', form.climaTipo + "");
        localStorage.setItem('sinalizacao', form.sinalizacao + "");
        localStorage.setItem('sinalizacaoObs', form.sinalizacaoObs + "");
        localStorage.setItem('iluminacao', form.iluminacao + "");
        localStorage.setItem('iluminacaoNoite', form.iluminacaoNoite + "");
        localStorage.setItem('pavimento', form.pavimento + "");
    }

    function limparDados() {
        localStorage.removeItem('logradouro');
        localStorage.removeItem('pontoReferencia');
        localStorage.removeItem('bairro');
        localStorage.removeItem('horario');
        localStorage.removeItem('agentesOcorrencia');
        localStorage.removeItem('tipoAcidente');
        localStorage.removeItem('tipoAcidenteSubTipo');
        localStorage.removeItem('tipoAcidenteObs');
        localStorage.removeItem('gravidade');

        let qtdVeiculos = Number.parseInt(localStorage.getItem('qtdVeiculos') ?? "0");
        let qtdVitimas = 0;
        for (let index = 0; index < qtdVeiculos; index++) {
            localStorage.removeItem('tipoVeiculo'+index);
            localStorage.removeItem('placa'+index);
            localStorage.removeItem('nomeCondutor'+index);
            localStorage.removeItem('numeroOcupantes'+index);
            localStorage.removeItem('removido'+index);
            localStorage.removeItem('removidoTipo'+index);
            localStorage.removeItem('removidoAuto'+index);
            localStorage.removeItem('responsavel'+index);
            localStorage.removeItem('responsavelNome'+index);
            localStorage.removeItem('responsavelCPF'+index); 
            
            qtdVitimas = Number.parseInt(localStorage.getItem('qtdVitimas'+index) ?? "0");
            for (let index2 = 0; index2 < qtdVitimas; index2++) {
                localStorage.removeItem('nomeVitima'+index+'&'+index2);
                localStorage.removeItem('cpfVitima'+index+'&'+index2);
                localStorage.removeItem('tipoVitima'+index+'&'+index2);
                localStorage.removeItem('medicoVitima'+index+'&'+index2);
                localStorage.removeItem('medicoTipoVitima'+index+'&'+index2);
                localStorage.removeItem('hospitalVitima'+index+'&'+index2);
                localStorage.removeItem('hospitalNomeVitima'+index+'&'+index2);
            }
            localStorage.removeItem('qtdVitimas'+index);
        }
        localStorage.removeItem('qtdVeiculos');
        
        let qtdPedestres = Number.parseInt(localStorage.getItem('qtdPedestres') ?? "0");
        for (let index = 0; index < qtdPedestres; index++) {
            localStorage.removeItem('nomePedestre'+index);
            localStorage.removeItem('cpfPedestre'+index);
            localStorage.removeItem('tipoPedestre'+index);
            localStorage.removeItem('medicoPedestre'+index);
            localStorage.removeItem('medicoTipoPedestre'+index);
            localStorage.removeItem('hospitalPedestre'+index);
            localStorage.removeItem('hospitalNomePedestre'+index);
        }
        localStorage.removeItem('qtdPedestres');

        localStorage.removeItem('detalhesFazerBO');
        localStorage.removeItem('detalhesCPTRAN');
        localStorage.removeItem('detalhesIML');
        localStorage.removeItem('detalhesAcordo');
        localStorage.removeItem('climaTipo');
        localStorage.removeItem('sinalizacao');
        localStorage.removeItem('sinalizacaoObs');
        localStorage.removeItem('iluminacao');
        localStorage.removeItem('iluminacaoNoite');
        localStorage.removeItem('pavimento');

        setForm({
            logradouro: "",
            pontoReferencia: "",
            bairro: "",
            horario: "",
            agentesOcorrencia: "",
            tipoAcidente: "",
            tipoAcidenteSubTipo: "",
            tipoAcidenteObs: "",
            gravidade: "",
            veiculos: [],
            pedestres: [],
            detalhesFazerBO: false,
            detalhesCPTRAN: false,
            detalhesIML: false,
            detalhesAcordo: false,
            detalhesAcordoNumero: "",
            climaTipo: "",
            sinalizacao: "",
            sinalizacaoObs: "",
            iluminacao: "",
            iluminacaoNoite: "",
            pavimento: "",
        });

        setContador(0);
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


    return { salvarDados, receberDados, limparDados }
} 