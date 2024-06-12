import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";

import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const RecipeNAV = () => {
  const [prompt, setPrompt] = useState("");

  const navigate = useNavigate();
  const path = useLocation().pathname;

  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-lg font-extrabold md:text-xl">
        <Link to="/recipehome">Recipe page</Link>
      </h1>
      {path === "/recipehome" && (
        <div className="flex items-center justify-center space-x-0">
          <p
            onClick={() =>
              navigate(prompt ? "?search=" + prompt : navigate("/recipehome"))
            }
            className="cursor-pointer"
          >
            <MdSearch />
          </p>

          <input
            onChange={(e) => setPrompt(e.target.value)}
            className="px-3 outline-none"
            placeholder="search a post"
            type="text"
          />
        </div>
      )}
    </div>
  );
};

export default RecipeNAV;
