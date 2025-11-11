import { prismaClient } from "@repo/db/client";
export default async function Home() {
  const users = await prismaClient.user.findMany();
  return (
    <div>
      {JSON.stringify(users)}
    </div>
  );
}

// export const revalidate = 60  // revalidate this page every 60 sec
// or
// export const dynamic = 'force-dynamic'