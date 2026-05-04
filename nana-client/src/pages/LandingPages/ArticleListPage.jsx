import Button from "../../components/Button";
import ArticleList from "../../components/ArticleList";
import articles from "../../data/article-content";

const ArticleListPage = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <section className="border-y border-zinc-200 bg-blue-950 px-4 py-8 sm:px-6 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-200">
          Articles
        </p>

        <h1 className="max-w-xl text-3xl font-bold leading-tight text-white">
          Featured articles in a simple card grid
        </h1>

        <p className="mt-4 max-w-lg text-sm leading-5 text-blue-200 sm:text-base">
          A clean wireframe section for article thumbnails, titles, short
          descriptions, and one clear action per card.
        </p>

        <div className="mt-6">
          <Button
            to="/"
            className="rounded-xl text-white transition hover:bg-blue-950"
          >
            Back Home
          </Button>
        </div>
      </section>

      <section className="relative border-y border-blue-900/20 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 px-4 py-10 sm:px-6 lg:px-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-400 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600 blur-3xl" />
        </div>

        <div className="relative mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-700">
            Featured Articles
          </p>

          <h2 className="mt-2 text-4xl font-bold text-blue-950">
            Article card grid
          </h2>

          <div className="mt-4 h-1 w-80 rounded-full bg-blue-900" />
        </div>

        <ArticleList articles={articles} />
      </section>
    </div>
  );
};

export default ArticleListPage;
