import "../css/formulario.css"
import "../css/layout.css"
import "../css/menu.css"
import { User } from "@/lib/userslocal";
import bcrypt from "bcryptjs"
import Pagina from "./layout/pagina.component";

export default function DadosCripotografados() {

    let collection: User[] = [
        { id: "1", name: "Thiago", email: "thiago@thiago.com", password: "123456" },
        { id: "2", name: "Safira", email: "safira@safira.com", password: "123456" },
        { id: "3", name: "Lucas", email: "lucas@lucas.com", password: "123456" },
    ]

    let exibirDados = async (usuario: User) => {
        let texto = "";
        let nome = "";
        let senha = "";

        nome = usuario.name;
        senha = usuario.password;
        texto += `${nome} - ${senha} ==> ${await bcrypt.hash(nome, 12)} - ${await bcrypt.hash(senha, 12)}`;

        return texto;
    }


    return (
        <div className="fundoFormulario">
            <div>
                ${exibirDados(collection[0])}
            </div>
            <div>
                ${exibirDados(collection[1])}
            </div>
            <div>
                ${exibirDados(collection[2])}
            </div>
        </div>
    );
}