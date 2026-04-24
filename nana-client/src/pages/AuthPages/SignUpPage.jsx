import { Link } from "react-router-dom";
import Button from "../../components/Button";

const inputClasses =
  "mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900";

const actionButtonClassName =
  "w-full rounded-xl py-3 text-[11px] tracking-[0.2em]";

const SignUpPage = () => {
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

          <form className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <input placeholder="First name" className={inputClasses} />
              <input placeholder="Last name" className={inputClasses} />
            </div>

            <input type="email" placeholder="Email" className={inputClasses} />
            <input
              type="password"
              placeholder="Password"
              className={inputClasses}
            />

            <Button variant="primary" className="w-full py-3 text-sm">
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
