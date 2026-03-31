import "../../css/layout.css";
import "../../css/menu.css"
import "../../css/geral.css";
import "../../css/formulario.css";
import Pagina from "@/app/components/layout/pagina.component";
import Titulo from "@/app/components/design/titulo.component";
import FormularioAcidente from "./components/formulario-acidente.component";

export default function Home() {

    return (
        <Pagina>
            <Titulo text="REGISTRO DE ACIDENTES DE TRÂNSITO" />
            <FormularioAcidente />
        </Pagina>
    );
}