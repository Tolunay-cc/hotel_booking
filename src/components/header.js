"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(screenWidth);

  return (
    <>
      <navbar>
        <div className="bg-black">
          <div className="block lg:flex lg:flex-row justify-between items-center px-2 py-3">
            <Link href="/">
              <div>
                <div class="text-5xl font-extrabold">
                  <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-violet-300">
                    Hotel Booking
                  </span>
                </div>
              </div>
            </Link>
            <div
              className={
                mobileMenuOpen
                  ? "flex flex-col items-center justify-center text-white"
                  : "hidden lg:flex lg:flex-row text-white"
              }
            >
              <Link href={'/otels'} className="px-5">
                Oteller
              </Link>
              <Link href={"#"} className="px-5">
                Hakkımızda
              </Link>
              <Link href={'/iletisim'} className="px-5">
                İletişim
              </Link>
            </div>
            <div className=" absolute top-[18px] right-3 lg:hidden">
              <button
                className="bg-black/25 py-1 px-1 border border-white rounded-sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen === true ? (
                  <IoIosCloseCircleOutline className="text-white" />
                ) : (
                  <RxHamburgerMenu className="text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </navbar>
    </>
  );
};

export default Header;
