import Button from "../../components/Button";
import Banner from "../../assets/images/system/banner.png";
import post1 from "../../assets/images/posts/post-1.jpg";
import post2 from "../../assets/images/posts/post-2.jpg";
import post3 from "../../assets/images/posts/post-3.jpg";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl mx-auto lg:ml-50">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Hello, there!
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-blue-950 sm:text-4xl">
              Welcome to SODIUM
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-blue-900 sm:text-base">
              A website for design process blogs and design inspirations. Get
              into the minds of fellow designers and share your own process for
              creating stunning graphics, wireframes, and much more!
            </p>
            <div className="mt-6">
              <Button to="/about" variant="primary">
                Learn More
              </Button>
            </div>
          </div>

          <img src={Banner} alt="Banner" />
        </div>
      </section>
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            KPI Section
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Quick overview blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">12</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Projects
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Sections
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Screens
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">04</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Layouts
            </p>
          </div>
        </div>
      </section>
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            YOU MIGHT LIKE
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            EXPLORE POSTS
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img src={post1} alt="post1" className="rounded-3xl" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-blue-950">
              CRUMB CRUMB BRAND
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Design breakdown of the brand "CRUMB CRUMB" by: Elyn Rodas
            </p>
            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img src={post2} alt="post2" className="rounded-3xl" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              STREET STYLE INSPIRED BRANDING
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Playing around with grafitti and illustrations from street
              brandings by: Victor Villena
            </p>
            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img src={post3} alt="post3" className="rounded-3xl" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              SO MATCHA
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Trying paster color combinations for small cafe business by:
              Igilene Castillo
            </p>
            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
