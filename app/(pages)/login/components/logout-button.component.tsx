'use client'
import { Link } from "lucide-react";
import { LogoutButtonHook } from "../hooks/logout-button.hook";

export function LogoutButton() {

    const { isLoading, setIsLoading, handleLogout } = LogoutButtonHook();

    return (
        <>
            <button onClick={handleLogout} disabled={isLoading} className="link">
                {isLoading ? "Saindo..." : "Sair"}
            </button>
            {/* <Link rel="stylesheet" href="/">Ínicio</Link> */}
        </>
    )
}