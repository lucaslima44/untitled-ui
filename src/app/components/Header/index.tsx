import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemMenu } from "./ItemMenu";

const menuItems = [
  {
    url: "/",
    title: "Home",
    dropdown: false,
  },
  {
    url: "/products",
    title: "Products",
    dropdown: true,
  },
  {
    url: "/resources",
    title: "Resources",
    dropdown: true,
  },
  {
    url: "/pricing",
    title: "Pricing",
    dropdown: false,
  },
];
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-b-gray-100 w-full h-[80px] flex items-center">
      <GridContainer className="flex items-center justify-between">
        <div className="w-full xl:w-auto flex items-center justify-between gap-10">
          <Image
            src="/Logo.webp"
            width={142}
            height={32}
            alt="Logo Untitled UI"
          />
          <nav className="hidden xl:flex items-center gap-8">
            {menuItems.map(({ url, title, dropdown }, index) => (
              <ItemMenu
                key={index}
                url={url}
                title={title}
                hasDropdown={dropdown}
              />
            ))}
          </nav>
          <button>
            <Image
              src="/menuHamburguer.webp"
              width={40}
              height={40}
              alt="Menu Hamburguer"
              className="block xl:hidden"
            />
          </button>
        </div>
        <div className="">
          <Image
            src="/Avatar.webp"
            width={40}
            height={40}
            alt="Avatar"
            className="hidden xl:block"
          />
        </div>
      </GridContainer>
    </header>
  );
}
