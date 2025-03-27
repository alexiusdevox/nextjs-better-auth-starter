"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignoutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/");
    router.refresh(); // Aggiorna la pagina per riflettere il nuovo stato di autenticazione
  };

  return (
    <button
      className="bg-neutral-700 text-white p-2 rounded-md"
      onClick={handleSignOut}
    >
      Signout
    </button>
  );
}
