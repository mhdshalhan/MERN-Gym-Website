import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthError, login } from "../../actions/userActions";
import MetaData from "../../components/layouts/MetaData";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.authState
  );
  const redirect = location.search ? "/" + location.search.split("=")[1] : "/";

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirect);
    }

    if (error) {
      toast(error, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: "error",
        onOpen: () => {
          dispatch(clearAuthError);
        },
      });
      return;
    }
  }, [error, isAuthenticated, dispatch, navigate]);
  return (
    <>
      <Fragment>
        <MetaData title={`Login`} />

        <div className="w-full flex justify-center items-center h-[70vh]">
          <div className="flex flex-col justify-center items-center space-y-4 w-[90%] md:w-[30%]">
            <h1 className="text-xl font-bold text-left">
              Login in yor account
            </h1>
            <form onSubmit={submitHandler}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-2 border-2 border-black outline-0"
                type=" text"
                placeholder="Enter your email"
              />

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-4 border-2 border-black outline-0"
                type="password"
                placeholder="Enter your Password"
              />

              <button className="w-full px-4 py-2 mt-4 text-lg font-bold text-white bg-black rounded-lg hover:text-black">
                Login
              </button>

              <div className="flex items-center justify-center mt-2 space-x-5">
                <p>New Here?</p>
                <p className="space-x-5 text-gray-500 hover:text-black">
                  <Link to="/register">Register</Link>
                  <Link to="/password/forgot" className="">
                    Forgot Password?
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    </>
  );
};

export default Login;
