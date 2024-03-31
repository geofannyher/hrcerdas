import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../../../components/alert";
import { handleLogin } from "../../../services/supabase/login.services";
const Login = () => {
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, handleAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [tokenExpired, settokenExpired] = useState();
  // Navigation
  const navigate = useNavigate();

  // Security
  // useEffect(() => {
  //   if (localStorage.getItem("user")) {
  //     navigate("/admin");
  //   }
  // }, []);

  // Submit form
  const handleSubmit = async () => {
    const res = await handleLogin({
      email: email,
      password: password,
    });
    console.log(res);
    if (res?.data) {
      const isCredentialsValid = res.data.some((e) => {
        console.log(e.email);
        return email === e?.email && password === e?.password;
      });
      if (isCredentialsValid) {
        localStorage.setItem("user", res?.data[0]?.email);
        navigate("/admin");
      } else {
        alert("Email atau password salah");
      }
    } else {
      alert("Terjadi kesalahan koneksi Database");
    }
  };
  return (
    <>
      <title>HR Cerdas | Login</title>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link to={"#"} className="flex items-center mb-6">
            <img
              className="mr-3 h-6 sm:h-9"
              src={`${process.env.PUBLIC_URL}/HRCerdas.png`}
              alt="HRCerdas logo"
            />
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              {showAlert && <Alert msg={alertMsg} />}

              <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={(e) => {
                  handleSubmit();
                  e.preventDefault();
                }}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email address"
                    required
                    value={email}
                    onFocus={() => handleAlert(false)}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    onFocus={() => handleAlert(false)}
                    type="password"
                    autoComplete="off"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Log in
                </button>
                <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                  <Link
                    to={""}
                    className="font-medium  justify-content text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot your password
                  </Link>
                </p>

                <div className="text-sm font-body text-center text-gray-500 dark:text-gray-400">
                  Don’t have an account yet ?{" "}
                  <button
                    onClick={() => {
                      navigate("/register");
                    }}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign Up Here
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
