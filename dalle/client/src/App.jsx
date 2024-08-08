import React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";

import { logo, logo2 } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-[#f5ede0] sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <div className="flex">
          <Link to="/">
            <img src={logo} alt="logo" className="w-28 object-contain" />
          </Link>
          <Link to="/">
            <img src={logo2} alt="logo2" className="ml-2 w-28 object-contain" />
          </Link>
        </div>
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#d69341] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#27282b] min-h-[calc(100vh - 73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
