import Cabecalho from "./cabecalho.component";
import Menu from "./menu.component";
import Rodape from "./rodape.component";

export default function Pagina(props: any) {

    return (
        <div>
            <Cabecalho />
            <Menu />
            <main>{props.children}</main>
            <Rodape />
        </div>
    );
}