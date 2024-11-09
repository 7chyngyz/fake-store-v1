"use client";
import scss from "./Header.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import BurgerButton from "@/components/ui/BurgerButton/BurgerButton";
import BurgerMenu from "@/components/ui/BurgerMenu/BurgerMenu";
import { links, linksAuth } from "@/constants/links";
import SearchMulti from "@/components/shared/SearchSection/SearchMulti";
import axios from "axios";

export default function Header() {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const pathName = usePathname();
  const { data: session } = useSession();
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768
  );

  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/v1/get-me");
      setUser(data);
      console.log("user", data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const handleLogout = () => {
    if (session) {
      signOut();
    } else {
      setUser(undefined);
      console.log("User logged out");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Link href={"/"}>
              <h1>ChikaShop</h1>
            </Link>
          </div>

          {!isMobile && (
            <div className={scss.header_nav}>
              <nav>
                <ul>
                  {(session || user ? linksAuth : links).map((el, index) => (
                    <li key={index}>
                      <Link
                        className={
                          pathName === el.href
                            ? `${scss.link} ${scss.active}`
                            : `${scss.link}`
                        }
                        href={el.href}
                      >
                        {el.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
          <div className={scss.block}>
            {isMobile ? <FaSearch /> : <SearchMulti />}
            <div className={scss.icons}>
              <Link href={"/favorite"}>
                <IoMdHeartEmpty className={scss.icon1} />
              </Link>
              <Link href={"/basket"}>
                <IoCartOutline className={scss.icon2} />
              </Link>
              <div className={scss.auth}>
                {session || user ? (
                  <>
                    <b className={scss.profile}>
                      <FaRegUser className={scss.icon3} />
                    </b>
                    <div className={scss.trip}>
                      <span>{session?.user?.email || user?.email}</span>
                      <ul>
                        <li>Manage my account</li>
                        <li>My order</li>
                        <li>My cancellations</li>
                        <li>My reviews</li>
                      </ul>
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  </>
                ) : (
                  <b onClick={() => signIn()}>Sign In</b>
                )}
              </div>
              {isMobile && (
                <>
                  <BurgerButton />
                  <BurgerMenu />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
