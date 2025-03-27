import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SignOut from "./signout";
import SignUpButton from "./signout";
import LoginButton from "./login-button";


export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <main className="flex flex-col gap-3 items-center justify-center p-10">
      <div className="flex gap-3">
        {!session ? (
          <>
            <LoginButton />
            <SignUpButton />
          </>
        ) : (
          <SignOut />
        )}
      </div>
      <p>{!session ? "Not authenticated" : session.user.name}</p>
    </main>
  );
}
