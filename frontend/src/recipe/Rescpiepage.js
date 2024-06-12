import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import axios from "axios";
import { URL } from "../Blog/pages/url";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../Blog/components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { IFs } from "../Blog/pages/url";

const Rescpiepage = () => {
  const recipeId = useParams().id;
  const [recipe, setRecipe] = useState({});
  const [loader, setLoader] = useState(false);
  const { user } = useSelector((state) => state.authState);
  const navigate = useNavigate();

  const fetchRecipe = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "recipes/" + recipeId);
      setRecipe(res.data);
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(true);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, [recipeId]);

  const handleDeleteRecipe = async () => {
    try {
      const res = await axios.delete(URL + "recipes/" + recipeId, {
        withCredentials: true,
      });
      console.log("Deletion successful"); // Add a log statement to check if deletion is successful
      navigate("/recipehome");
    } catch (err) {
      console.log("Error deleting recipe:", err); // Log any errors during deletion
    }
  };

  return (
    <div className="min-h-screen">
      {loader ? (
        <div className="h-[80vh] flex justify-center items-center  w-full">
          <Loader />
        </div>
      ) : (
        <div className="px-8 md:px-[200px] mt-8 mb-5">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-black md:text-3xl">
              {recipe.title}
            </h1>
            <div className="flex items-center justify-center space-x-2">
              {user.role === "admin" && (
                <>
                  <p
                    className="cursor-pointer"
                    onClick={() => navigate("/editescipe/" + recipeId)}
                  >
                    <BiEdit />
                  </p>
                  <p className="cursor-pointer" onClick={handleDeleteRecipe}>
                    <MdDelete />
                  </p>
                </>
              )}
            </div>
          </div>
          <img
            src={IFs + recipe.photo}
            className="w-full mx-auto mt-8 "
            alt=""
          />
          <div className="flex items-center justify-between mt-2 md:mt:4 ">
            <div className="flex space-x-2">
              <p>{new Date(recipe.updatedAt).toString().slice(0, 15)}</p>
              <p>{new Date(recipe.updatedAt).toString().slice(16, 24)}</p>
            </div>
          </div>
          <p className="mx-auto my-8 ">{recipe.ingredients}</p>
          <hr />
          <p className="mx-auto my-8 ">{recipe.instructions}</p>
        </div>
      )}
    </div>
  );
};

export default Rescpiepage;
