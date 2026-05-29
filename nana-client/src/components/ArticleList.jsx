import { Link } from "react-router-dom";
import Button from "./Button";

const ArticleList = ({ articles }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {articles.map((article, index) => (
        <article
          key={article.name}
          className="group rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          {/* Image */}
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200">
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Meta */}
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-600">
            Article {String(index + 1).padStart(2, "0")}
          </p>

          {/* Title */}
          <h3 className="mt-2 text-lg font-semibold text-zinc-900 transition-colors group-hover:text-blue-700">
            {article.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            {article.content[0].substring(0, 150)}...
          </p>

          {/* Button */}
          <Link to={`/articles/${article.name}`}>
            <Button className="mt-5 w-full rounded-xl bg-blue-900 text-white transition hover:bg-blue-800">
              Read More
            </Button>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
