import { useDispatch } from "react-redux";
import { setChoice } from "../features/choice";
const HomePage = () => {
  const dispatch = useDispatch();

  const handleChoiceChange = (value) => {
    dispatch(setChoice(value));
    console.log(value);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Home Page</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <select
            onChange={(e) => handleChoiceChange(e.target.value)}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Select a choice
            </option>
            <option>Bakery</option>
            <option>Bar</option>
            <option>Cafe</option>
            <option>Fast food restaurant</option>
            <option>Icecream Shop</option>
            <option>Chinese Restaurant</option>
            <option>Pizza Place</option>
            <option>Sushi Restaurant</option>
            <option>Thai Restaurant</option>
            <option>Vegetarian Restaurant</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
