import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="container  bg-gray-50 flex justify-center flex-col h-[100vh] items-center mx-auto">
        <h1 className="text-4xl font-bold font-serif uppercase">
          2FA - System
        </h1>
        <div className="flex gap-4">
          <Button className="mt-10">
            <Link to="/register">Signup</Link>
          </Button>
          <Button className="mt-10">
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
