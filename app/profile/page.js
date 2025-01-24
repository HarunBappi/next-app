"use client";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { isAuthenticated, isLoading, user } = useKindeAuth();
  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/login");
    return null;
  }

  return (
    <div>
      <div>
        {user?.picture && (
          <Image
            src={user.picture}
            alt="User photo"
            width={100}
            height={100}
            className="rounded-full"
          />
        )}
        <p>Name: {user?.name}</p>
        <p>Email: {user?.email}</p>
      </div>
    </div>
  );
}
