import HomePost from "../components/HomePost";
import axios from "axios";
import { URL } from "./url";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import SerachNav from "../components/SerachNav";

const Home = () => {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const [noResults, setNoresults] = useState(false);
  const [loder, setLoder] = useState(false);
  // const { user } = useContext(UserContext);

  const fetchPosts = async () => {
    setLoder(true);
    try {
      const res = await axios.get(URL + "api/v1/" + search);
      console.log(res.data);
      setPosts(res.data);
      if (res.data.length === 0) {
        setNoresults(true);
      } else {
        setNoresults(false);
      }
      setLoder(false);
    } catch (err) {
      console.log(err);
      setLoder(true);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <>
      <SerachNav />
      <div className="px-5 flex-col md:px-[200px] min-h-[80vh] mb-4">
        {loder ? (
          <div className="h-[40vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : !noResults ? (
          posts.map((post) => (
            <>
              <Link key={post._id} to={`/post/${post._id}`}>
                <HomePost key={post._id} post={post} />
              </Link>
            </>
          ))
        ) : (
          <h3 className="mt-16 font-bold text-centre">No posts availble </h3>
        )}
      </div>
    </>
  );
};

export default Home;
