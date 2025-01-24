import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/dist/server/api-utils";

export default async function Dashboard() {
  const { isAuthenticated, user } = getKindeServerSession();
  const isLogged = await isAuthenticated();
  if (!isLogged) {
    redirect("/api/auth/login");
  }
  return <div></div>;
}
