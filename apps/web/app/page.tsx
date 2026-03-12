import {client } from "@repo/db/client"
import { use } from "react";


export default async function Home() {
  const user = await client.user.findFirst()
  return (
    <div>
      {user?.password}
      {user?.username}
      {user?.id}
    </div>

  );
}
