"use client"
import Titulo from "@/app/components/design/titulo.component";
import { FormularioLoginHook } from "../hooks/formulario-login.hook";
import "../../../css/login.css"

export default function FormularioLogin() {

    const { isLoading, setIsLoading, error, setError, fieldErrors, setFieldErrors, handleSubmit } = FormularioLoginHook();

    return (
        <div className="login">
            <form className="fundo" onSubmit={handleSubmit}>

                <div className="titulo">
                    <Titulo text="ÁREA DE ACESSO AO SISTEMA" />
                </div>
                <div className="conteudo">
                    <img src="./agtaju.png" alt="Agentes de Trânsito de Aracaju" />
                    <input type="text" name="email" value="thiago@thiago.com" placeholder="Informe o número da Matrícula" required disabled={isLoading} readOnly />
                    <input type="password" name="password" value="123456" placeholder="Nome de guerra" required disabled={isLoading} readOnly />
                    {error && (
                        <div className="erro">
                            <div>{error}</div>
                            <div>{fieldErrors.name}</div>
                            <div>{fieldErrors.email}</div>
                            <div>{fieldErrors.password}</div>
                            <div>{fieldErrors.confirmPassword}</div>
                        </div>
                    )}
                </div>
                <button type="submit" value="Enviar" className="entrar" disabled={isLoading}>Entrar</button>
            </form>
        </div>
    );
}