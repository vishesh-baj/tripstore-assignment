import { Link, useNavigate } from "react-router-dom";
import Badge from "../components/Badge";
import { PATHS } from "../routes/paths";
import { useDispatch } from "react-redux";
import { selectCategory } from "../features/category";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCategorySelect = (categoryName) => {
    dispatch(selectCategory(categoryName));
    navigate(PATHS.listing);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-info">Hello there</h1>
          <p className="py-6">
            Welcome to the most{" "}
            <span className="text-info animate-pulse">asthetic</span> looking
            book library. <br /> To get started, select a category
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Badge
              handleClick={handleCategorySelect}
              categoryName="Fiction"
              color={"bg-primary"}
              textColor={"text-white"}
            />
            <Badge
              handleClick={handleCategorySelect}
              categoryName="Mystery"
              color={"bg-secondary"}
              textColor={"text-white"}
            />
            <Badge
              handleClick={handleCategorySelect}
              categoryName="Thriller"
              color={"bg-info"}
              textColor={"text-white"}
            />
            <Badge
              handleClick={handleCategorySelect}
              categoryName="Horror"
              color={"bg-warning"}
              textColor={"text-white"}
            />
            <Badge
              handleClick={handleCategorySelect}
              categoryName="Romance"
              color={"bg-error"}
              textColor={"text-white"}
            />
            <Badge
              handleClick={handleCategorySelect}
              categoryName="Biography"
              color={"bg-accent"}
              textColor={"text-white"}
            />
          </div>
          <div className="mt-8">
            <Link to={PATHS.listing} className="btn  animate-bounce">
              OR GO WILD
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
