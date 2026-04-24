import Button from "../../components/Button";
import Banner from "../../assets/images/system/about-banner.png";
import post1 from "../../assets/images/posts/post-1.jpg";
import post2 from "../../assets/images/posts/post-2.jpg";
import post3 from "../../assets/images/posts/post-3.jpg";
import articles from "../../assets/article-content.js";

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl flex min-h-72 items-center justify-center rounded-[1.25rem] bg-zinc-200">
            <img src={Banner} />
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              ABOUT SODIUM
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-blue-950 sm:text-4xl">
              Share your own design process and become part of the growing
              community!
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              SODIUM is for designers looking to get inspired and inspire back!
              Be part of the network for aspiring artists of the digital age by
              diving deep into your creative process with us!
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/articles">Open Articles</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Profile Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Quick summary blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">05</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Years
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">16</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Projects
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">09</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Clients
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Focus Areas
            </p>
          </div>
        </div>
      </section>
      <section className="border-y border-blue-900/20 bg-blue-50 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-700">
              Our Process
            </p>

            <h2 className="mt-2 text-3xl font-bold text-blue-950">
              How SODIUM helps designers grow
            </h2>

            <div className="mt-6 space-y-5">
              <article className="rounded-2xl border border-blue-900/10 bg-white p-5 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-blue-950">
                  Share Your Work
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Publish breakdowns of your creative process—from ideation to
                  final execution—and showcase your design thinking.
                </p>
              </article>

              <article className="rounded-2xl border border-blue-900/10 bg-white p-5 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-blue-950">
                  Learn From Others
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Explore real case studies and discover how other designers
                  approach typography, layout, and branding.
                </p>
              </article>

              <article className="rounded-2xl border border-blue-900/10 bg-white p-5 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-blue-950">
                  Build Your Identity
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Strengthen your personal design style by consistently sharing
                  and refining your creative process.
                </p>
              </article>
            </div>
          </div>

          {/* RIGHT VISUAL GRID */}
          <div className="rounded-3xl border border-blue-900/10 bg-white p-5 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-700">
              Featured Works
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={post1}
                  className="aspect-square w-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="overflow-hidden rounded-xl">
                <img
                  src={post2}
                  className="aspect-square w-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="overflow-hidden rounded-xl">
                <img
                  src={post3}
                  className="aspect-square w-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="overflow-hidden rounded-xl">
                <img
                  src={articles[0].image}
                  className="aspect-square w-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <Button className="mt-6 w-full bg-blue-900 text-white hover:bg-blue-800">
              Explore Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
