import Button from "../components/Button";
import post1 from "../assets/images/posts/post-1.jpg";
import post2 from "../assets/images/posts/post-2.jpg";
import post3 from "../assets/images/posts/post-3.jpg";
import post4 from "../assets/images/posts/post-4.jpg";

const ArticlePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Articles
          </p>
          <h1 className="max-w-xl text-3xl font-bold leading-tight text-blue-950 sm:text-4xl">
            Start discovering Articles, Blogs, Posts and more!
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
            Explore all things you might like in this page. Find new and
            exciting content to base your projects on.
          </p>
          <div className="mt-6">
            <Button to="/">Back Home</Button>
          </div>
        </div>
      </section>
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Featured Articles
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-blue-950">
            We think you might like
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img src={post1} alt="post1" className="rounded-3xl" />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 01
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Wireframe layouts basics
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A simple placeholder for a featured article with image, title, and
              short copy.
            </p>
            <Button className="mt-4">Read More</Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img src={post2} alt="post2" className="rounded-3xl" />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 02
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Building clean sections
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Another card using the same layout pattern for a consistent
              article grid.
            </p>
            <Button className="mt-4">Read More</Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img src={post3} alt="post3" className="rounded-3xl" />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 03
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Using cards and lists
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              The same low-fidelity treatment keeps the card section easy to
              scan.
            </p>
            <Button className="mt-4">Read More</Button>
          </article>
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img src={post4} alt="post4" className="rounded-3xl" />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 04
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Low-fidelity article flow
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A final article card to complete the featured grid layout.
            </p>
            <Button className="mt-4">Read More</Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
