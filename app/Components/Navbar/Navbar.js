"use client";

import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../public/logo.png";
export default function Navbar() {
  const pathName = usePathname();
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();

  const navItem = (
    <>
      <li>
        <Link
          href="/"
          className={pathName === "/" ? "font-bold text-white" : ""}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/profile"
          className={pathName === "/profile" ? "font-bold text-white" : ""}
        >
          Profile
        </Link>
      </li>
    </>
  );
  return (
    <div className="bg-orange-600">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItem}
            </ul>
          </div>
          <Image src={logo} width={70} height={50} alt="logoimage"></Image>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end flex gap-3">
          {isLoading ? (
            <span className="text-white">Loading...</span>
          ) : isAuthenticated ? (
            <div className="flex items-center gap-2">
              {user?.picture && (
                <Image
                  src={user.picture}
                  alt="User photo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <span className="text-white font-medium">{user?.name}</span>
              <LogoutLink>
                <button className="btn btn-secondary">Logout</button>
              </LogoutLink>
            </div>
          ) : (
            <LoginLink>
              <button className="btn btn-primary">Sign In</button>
            </LoginLink>
          )}
        </div>
      </div>
    </div>
  );
}
