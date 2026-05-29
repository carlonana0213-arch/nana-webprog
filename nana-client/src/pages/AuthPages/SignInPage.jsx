import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../services/UserService";
import Button from "../../components/Button";

const inputClasses =
  "mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900";

const actionButtonClassName =
  "w-full rounded-xl py-3 text-[11px] tracking-[0.2em]";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await loginUser({
        email,
        password,
      });

      console.log("Login success:", data);

      // Save auth data
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("firstName", data.firstName);
      localStorage.setItem("userId", data.userId);

      // Redirect
      if (data.role === "admin") {
        navigate("/dashboard");
      } else if (data.role === "editor") {
        navigate("/");
      }
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message || "Login failed. Please try again.",
      );
    }
  };
  return (
    <div className="w-full max-w-md">
      <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-semibold tracking-tight text-blue-950">
            Log In
          </h1>
          <p className="mt-3 text-sm text-blue-900/60">
            Access your store account to review orders and saved items.
          </p>
          <p className="mt-4 text-sm text-red-500">{error}</p>
          <form className="mt-8 space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="text-sm font-medium text-blue-900">
                Email Address
              </label>
              <input
                type="email"
                placeholder="student@email.com"
                className={inputClasses}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-blue-900">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className={inputClasses}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-blue-900/60">
                <input type="checkbox" className="h-4 w-4 accent-blue-900" />
                Remember me
              </label>
              <button className="text-blue-900 hover:text-blue-700">
                Forgot?
              </button>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full py-3 text-sm"
            >
              Log In
            </Button>

            <div className="grid gap-3 sm:grid-cols-2">
              <Button
                type="button"
                variant="secondary"
                className="w-full py-3 text-sm"
              >
                Google
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="w-full py-3 text-sm"
              >
                Apple
              </Button>
            </div>
          </form>
          <p className="mt-8 text-sm text-blue-900/60">
            No account?{" "}
            <Link to="/auth/signup" className="font-semibold text-blue-950">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
