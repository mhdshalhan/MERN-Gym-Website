import React, { useState } from "react";
import axios from "axios";
import { URL } from "../Blog/pages/url";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("ingredients", ingredients);
    data.append("instructions", instructions);

    if (file) {
      data.append("photo", file);
    }

    try {
      const res = await axios.post(URL + "recipes/create", data, {
        withCredentials: true,
      });
      navigate("/recipage/" + res.data._id);
      console.log(res.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <div className="px-6 md:px-[200px] mt-5 mb-10">
        <h1 className="font-bold md:text-2xl text-xl ">Create a Recipe</h1>
        <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter recipe title"
            className="px-4 py-2 outline-none"
          />
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            className="px-4"
          />

          <textarea
            onChange={(e) => setIngredients(e.target.value)}
            rows={15}
            cols={30}
            className="px-4 py-2 outline-none"
            placeholder="Enter ingredients"
          />

          <textarea
            onChange={(e) => setInstructions(e.target.value)}
            rows={15}
            cols={30}
            className="px-4 py-2 outline-none"
            placeholder="Enter instruction"
          />
          <button
            onClick={handleCreate}
            className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg "
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
