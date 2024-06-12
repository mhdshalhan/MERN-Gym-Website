import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../Blog/pages/url";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../Blog/components/Loader";

const EditRecipe = () => {
  const recipeId = useParams().id;
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const fetchRecipe = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "recipes/" + recipeId);
      setTitle(res.data.title);
      setInstructions(res.data.ingredients);
      setIngredients(res.data.instructions);
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, [recipeId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedRecipe = {
      title,
      instructions,
      ingredients,
    };

    try {
      const res = await axios.put(URL + "recipes/" + recipeId, updatedRecipe, {
        withCredentials: true,
      });
      navigate("/recipage/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {loader ? (
        <div className="h-[80vh] flex justify-center items-center w-full">
          <Loader />
        </div>
      ) : (
        <div className="px-8 md:px-[200px] mt-10 mb-5">
          <h1 className="mt-8 text-xl font-bold md:text-2xl">Update Recipe</h1>
          <form className="flex flex-col w-full mt-4 space-y-4 md:space-y-8">
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Enter recipe title"
              className="px-4 py-2 outline-none"
            />
            <input
              onChange={(e) => setIngredients(e.target.value)}
              value={ingredients}
              rows={10}
              cols={20}
              className="px-4 py-2 outline-none"
              placeholder="Enter recipe ingredients"
            />
            <textarea
              onChange={(e) => setInstructions(e.target.value)}
              value={instructions}
              rows={10}
              cols={25}
              className="px-4 py-2 outline-none"
              placeholder="Enter recipe instructions"
            />
            <button
              onClick={handleUpdate}
              className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2  bottom-6 md:text-lg"
            >
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditRecipe;
