"use client";

import { signUp } from "@/server/users";
import { useState } from "react";

export default function SignUpButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    if (isLoading) return; // Previene doppi clic
    
    setIsLoading(true);
    try {
      await signUp();
      // Non è necessario aggiungere un redirect qui perché
      // la funzione signUp server-side lo gestirà
    } catch (error) {
      console.error("Sign up failed:", error);
      setIsLoading(false);
    }
  };

  return (
    <button
      className={`bg-neutral-700 text-white p-2 rounded-md ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
      onClick={handleSignUp}
      disabled={isLoading}
    >
      {isLoading ? "Registrazione..." : "Sign Up"}
    </button>
  );
}
