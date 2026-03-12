import Link from "next/link";

export default function Menu() {
    return (
        <aside>
            <nav>
                <Link rel="stylesheet" href="/" className="link">Ínicio</Link>
                <Link rel="stylesheet" href="/acidente" className="link">Registro de Acidentes</Link>
                <Link rel="stylesheet" href="/teste" className="link">Testes</Link>
                <Link rel="stylesheet" href="/formulario_whatsapp" className="link">Formulário Whatsapp</Link>
            </nav>
        </aside>
    );
}