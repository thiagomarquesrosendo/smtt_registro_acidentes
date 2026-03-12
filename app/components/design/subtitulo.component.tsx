import "../../css/formulario.css"

export interface SubtituloProps {
    text: string;
}

export default function Subtitulo(props: SubtituloProps) {
    return (
        <h2>{props.text}</h2>
    );
}