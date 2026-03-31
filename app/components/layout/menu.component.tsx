import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { LogoutButton } from "@/app/(pages)/login/components/logout-button.component";
import SidebarApp from "./sidebar.component";

export default async function Menu() {
    const session = await getSession()

    if (!session) {
        redirect("/login")
    }

    return (
        <aside>
            <nav>
                <SidebarApp />
                <span>Bem vindo(a)!</span>
                {session ? (
                    <>
                        <span>{session.name}</span>
                        <LogoutButton />
                    </>
                ) : (
                    <></>
                )}
            </nav>
        </aside>
    );
}
