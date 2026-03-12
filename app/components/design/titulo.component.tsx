import "../../css/formulario.css"

export interface TituloProps {
    text: string;
}

export default function Titulo(props: TituloProps) {
    return (
        <h1>{props.text}</h1>
    );
}