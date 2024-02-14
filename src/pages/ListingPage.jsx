import { useSelector } from "react-redux";

const ListingPage = () => {
  const categoryName = useSelector((x) => x.category.value);

  return (
    <div className="w-screen h-screen rounded bg-base-300">
      <h1 className=" text-3xl text-center md:text-8xl py-8">
        {categoryName.toUpperCase()}
      </h1>
      <div className="flex justify-center">
        <form className="w-1/2">
          <div className="form-control">
            <label htmlFor="category-input" className="label">
              <span className="label-text">Search {categoryName}</span>
            </label>
            <input className="input input-info" type="text" name="" id="" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ListingPage;
