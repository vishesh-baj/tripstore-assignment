import { useNavigate } from "react-router-dom";
import Badge from "../components/Badge";
import { PATHS } from "../routes/paths";
import { useDispatch } from "react-redux";
import { selectCategory } from "../features/category";
import { BADGE_MAPPING } from "../mappings";
import { nanoid } from "nanoid";

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
            {BADGE_MAPPING.map(({ categoryName, color, textColor }) => {
              return (
                <Badge
                  key={nanoid()}
                  categoryName={categoryName}
                  color={color}
                  textColor={textColor}
                  handleClick={handleCategorySelect}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
