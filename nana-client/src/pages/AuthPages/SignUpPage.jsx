import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUser } from "../../services/UserService";
import Button from "../../components/Button";

const inputClasses =
  "mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900";

const actionButtonClassName =
  "w-full rounded-xl py-3 text-[11px] tracking-[0.2em]";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUser({
        ...form,

        // Required backend fields
        age: "0",
        gender: "other",
        contactNumber: "00000000000",
        username: form.email,
        address: "Not provided",

        // Forced defaults
        role: "editor",
        isActive: false,
      });

      setSuccess("Account created successfully. Waiting for admin approval.");

      setError("");

      setTimeout(() => {
        navigate("/auth/signin");
      }, 2000);
    } catch (err) {
      console.error(err);

      setError(err.response?.data?.message || "Signup failed.");
    }
  };
  return (
    <div className="w-full max-w-md">
      <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-semibold tracking-tight text-blue-950">
            Sign Up
          </h1>

          <p className="mt-3 text-sm text-blue-900/60">
            Create your account to get started.
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                name="firstName"
                placeholder="First name"
                className={inputClasses}
                value={form.firstName}
                onChange={handleChange}
              />
              <input
                name="lastName"
                placeholder="Last name"
                className={inputClasses}
                value={form.lastName}
                onChange={handleChange}
              />
              {error && <p className="mt-4 text-sm text-red-500">{error}</p>}

              {success && (
                <p className="mt-4 text-sm text-green-600">{success}</p>
              )}
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              className={inputClasses}
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={inputClasses}
              value={form.password}
              onChange={handleChange}
            />

            <Button
              type="submit"
              variant="primary"
              className="w-full py-3 text-sm"
            >
              Create Account
            </Button>

            <div className="grid gap-3 sm:grid-cols-2">
              <Button variant="secondary" className="w-full py-3 text-sm">
                Google
              </Button>
              <Button variant="secondary" className="w-full py-3 text-sm">
                Apple
              </Button>
            </div>
          </form>

          <p className="mt-8 text-sm text-blue-900/60">
            Already have an account?{" "}
            <Link to="/auth/signin" className="font-semibold text-blue-950">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
