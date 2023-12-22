import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Signup = () => {
  const { createUser, handleUpdateProfile } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [photo, setPhoto] = useState();

  const handleCreateUser = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Signed up...");

    try {
      await createUser(email, password);
      handleUpdateProfile(name, photo);
      toast.success("Signed up successfully", { id: toastId });

      navigate(location?.state ? location?.state : "/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <div>
        <div className="mx-auto">
          <div className="flex justify-center px-6 py-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-lg">
              <div
                className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/Mv9hjnEUHR4/600x800")',
                }}
              />
              <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
                  Create an Account!
                </h3>
                <form
                  onSubmit={handleCreateUser}
                  className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded"
                >
                  <div className="mb-4">
                    <div className="mb-4">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                        htmlFor="firstName"
                      >
                        Name
                      </label>
                      <input
                        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        type="text"
                        name="name"
                        id="name"
                        onBlur={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="mb-4">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                        htmlFor="firstName"
                      >
                        Photo URL
                      </label>
                      <input
                        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        type="text"
                        name="photo"
                        id="photo"
                        onBlur={(e) => setPhoto(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                      type="email"
                      name="email"
                      id="email"
                      onBlur={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <div className="mb-4">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        type="password"
                        name="password"
                        id="password"
                        onBlur={(e) => setPassword(e.target.value)}
                      />
                      <p className="text-xs italic text-red-500">
                        Please choose a password.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                    >
                      Register Now
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <Link
                      to="/login"
                      className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                    >
                      Already have an account? Login!
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
