import UserCard from "../app/components/UserCard";
import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/option";


export default async function Home() {
  const session = await getServerSession(options)

  return (
    <>
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )}
    </>
  )
}