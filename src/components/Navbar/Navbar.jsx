"use client"; // Add this line to make the component a Client Component

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaList,
  FaRegHeart,
  FaRegUser,
  FaSearch,
  FaTimesCircle,
} from "react-icons/fa";
import {
  FaArrowRightFromBracket,
  FaCartShopping,
  FaStarHalfStroke,
} from "react-icons/fa6";

const Navbar = () => {
  const pathname = usePathname();
  const session = useSession();
  console.log(session);

  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div>
      <div className="relative bg-black py-6 flex justify-center items-center">
        <p className="text-[10px] lg:text-sm text-white font-semibold absolute left-1/2 transform -translate-x-1/2">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-semibold text-[12px] lg:text-[15px] ml-2">
            Shop Now
          </span>
        </p>

        {/* Select Dropdown */}
        <div className="absolute right-7 hidden md:flex items-center space-x-2">
          <select
            id="language"
            name="language"
            className="bg-black text-white border-none focus:ring-0 focus:outline-none"
          >
            <option value="english">English</option>
            <option value="bangla">Bangla</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
      </div>

      {/* second nav */}
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content bg-gray-200 rounded-md z-[999] mt-3 w-40 p-4 space-y-3 font-semibold text-[16px]"
            >
              {navItems.map((item) => (
                <Link href={item.path} key={item.title}>
                  <div className="relative">
                    {item.title}
                    {pathname === item.path && (
                      <span className="absolute block w-full h-[2px] bg-gray-400 bottom-0 left-0"></span>
                    )}
                  </div>
                </Link>
              ))}
              {!session.data ? <Link href="/login">Sign-In</Link> : ""}
            </ul>
          </div>
          <Image
            width={100}
            height={100}
            alt="Logo of navbar"
            src="/assets/logo.jpg"
          />
        </div>
        <div className="navbar-center z-50 hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-[16px] flex items-center gap-8">
            {navItems.map((item) => (
              <Link href={item.path} key={item.title}>
                <div className="relative">
                  {item.title}
                  {pathname === item.path && (
                    <span className="absolute block w-full h-[2px] bg-gray-400 bottom-0 left-0"></span>
                  )}
                </div>
              </Link>
            ))}
            {!session.data ? <Link href="/login">Sign-In</Link> : ""}
          </ul>
        </div>

        <div className="navbar-end">
          <div className="flex items-center mr-4">
            <input
              placeholder="Search"
              className="bg-gray-200 relative px-3 py-[6px] rounded-sm"
              type="text"
            />
            <div className="absolute right-[193px]">
              <FaSearch />
            </div>
          </div>
          <div className="ml-5">
            <FaRegHeart className="text-2xl" />
          </div>
          <div className="ml-5 mr-5">
            <FaCartShopping className="text-black w-6 h-6" />
          </div>

          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  width={60}
                  height={60}
                  alt="User Profile"
                  src="/assets/Services (3).png"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content font-bold space-y-2 rounded-md z-50 mt-3 w-48 p-4 bg-white/40 backdrop-blur-md text-black"
            >
              <li>
                <div>
                  <FaRegUser />
                  <Link href="/manageAccount">Manage Account</Link>
                </div>
              </li>
              <li>
                <div>
                  <FaList />
                  <p>My Order</p>
                </div>
              </li>
              <li>
                <div>
                  <FaTimesCircle />
                  <p>My Cancellations</p>
                </div>
              </li>
              <li>
                <div>
                  <FaStarHalfStroke />
                  <p>My Reviews</p>
                </div>
              </li>
              <li>
                <div>  
                <button
                    onClick={() =>
                      signOut({
                        callbackUrl: "/login",
                      })
                    }
                  >
                    Logout
                  </button>
                  <FaArrowRightFromBracket />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
