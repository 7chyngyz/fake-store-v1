import scss from "./BurgerMenu.module.scss";
import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { signIn, signOut, useSession } from "next-auth/react";
import BurgerButton from "../BurgerButton/BurgerButton";
import { useHeaderStore } from "../../../../store/useHeaderStore";
import { links } from "@/constants/links";

const BurgerMenu = () => {
  const { data: session } = useSession();
  const { isOpen } = useHeaderStore();

  return (
    <section
      className={
        isOpen ? `${scss.BurgerMenu} ${scss.active}` : `${scss.BurgerMenu}`
      }
    >
      <div className={scss.content}>
        <div className={scss.close}>
          <BurgerButton />
        </div>
        <div className={scss.header_nav}>
          <nav className={scss.nav}>
            <ul>
              {links.map((item, index) => (
                <li key={index}>
                  <Link className={scss.link} href={item.href}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={scss.icons}>
            <Link href="/wishlist">
              <IoMdHeartEmpty className={scss.icon} />
            </Link>
            <Link href="/basket">
              <IoCartOutline className={scss.icon} />
            </Link>
            <div className={scss.auth}>
              {session ? (
                <button onClick={() => signOut()} className={scss.logout}>
                  logout
                </button>
              ) : (
                <button onClick={() => signIn("google")} className={scss.login}>
                  login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BurgerMenu;
