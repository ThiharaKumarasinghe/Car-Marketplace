import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import companyLogo from "/Logo.png";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className=" flex justify-between items-center shadow-sm p-3">
      <div className=" w-[230px] flex justify-center">
        <Link to={"/"}>
          <img src={companyLogo} className=" " />
        </Link>
      </div>

      <ul className=" hidden md:flex gap-16">
        <li className=" font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          <Link to={"/"}>Home</Link>
        </li>
        <li className=" font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Search
        </li>
        <li className=" font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          New
        </li>
        <li className=" font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Used
        </li>
      </ul>

      {isSignedIn ? (
        <div className=" flex items-center gap-5">
          <UserButton />
          <Link to={"/profile"}>
            <Button>Submit Listing</Button>
          </Link>
        </div>
      ) : (
        <div>
          <SignInButton mode="modal">
            <Button>Sing In</Button>
          </SignInButton>
        </div>
      )}
    </div>
  );
};

export default Header;
