import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "../Blog/components/Loader";
import Homrecipe from "./Companets/Homrecipe";
import { URL } from "../Blog/pages/url";
import RecipeNAV from "./Companets/recipenav";

const RecipeHome = () => {
  const { search } = useLocation();
  const [recipes, setRecipes] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(false);

  const fetchRecipes = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "recipes" + search); // Update the URL to match your backend route
      console.log(res.data);
      setRecipes(res.data);
      if (res.data.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [search]);

  return (
    <>
      <RecipeNAV />
      <div className="px-5 flex-col md:px-[200px] min-h-[80vh] mb-12 ">
        {loader ? (
          <div className="h-[40vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : !noResults ? (
          recipes.map((recipe) => (
            <Link key={recipe._id} to={`/recipage/${recipe._id}`}>
              {" "}
              {/* Update route to match your frontend routes */}
              <Homrecipe key={recipe._id} recipe={recipe} />
            </Link>
          ))
        ) : (
          <h3 className="mt-16 font-bold text-center">No posts available</h3>
        )}
      </div>
    </>
  );
};

export default RecipeHome;
