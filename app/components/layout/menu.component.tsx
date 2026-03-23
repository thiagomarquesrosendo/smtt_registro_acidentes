import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { LogoutButton } from "@/app/(pages)/login/components/logout-button.component";

export default async function Menu() {
    const session = await getSession()

    if (!session) {
        redirect("/login")
    }

    return (
        <aside>
            <nav>
                <span>Seja bem vindo(a)!</span>
                {session ? (
                    <>
                        <span>{session.name}</span>
                            <div>Email {session.email}</div>
                            <div>Logout: {new Date(session.expiresAt).toLocaleDateString()}</div>
                        <LogoutButton />
                    </>
                ) : (
                    <></>
                )}
            </nav>
        </aside>
    );
}