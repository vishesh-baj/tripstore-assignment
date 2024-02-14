import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookSearchSchema } from "../validations";
import { useMutation } from "react-query";
import axios from "axios";
import { API_KEY } from "../constants";
import { useState } from "react";
const ListingPage = () => {
  const [searchData, setSearchData] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(bookSearchSchema) });
  const categoryName = useSelector((x) => x.category.value);

  const onSubmit = (data) => {
    categoryMutation.mutate(data);
  };
  function convertSpaceSeparatedString(inputString) {
    var words = inputString.split(" ");
    var resultString = words.join("+");
    return resultString;
  }

  const categoryMutation = useMutation(
    (data) =>
      axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${convertSpaceSeparatedString(
          data.bookName
        )}&key=${API_KEY}`
      ),
    {
      onSuccess: (data) => {
        setSearchData(data.data.items);
      },
    }
  );

  return (
    <div className="w-screen h-screen rounded bg-base-300">
      <h1 className=" text-3xl text-accent text-center md:text-8xl py-8">
        {categoryName.toUpperCase()}
      </h1>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-1/2">
          <div className="form-control">
            <label htmlFor="category-input" className="label">
              <span className="label-text">
                Search in <span className="text-accent">{categoryName}</span>
              </span>
            </label>
            <input
              {...register("bookName")}
              className="input input-accent"
              type="text"
              name="bookName"
              id=""
            />
            {errors.bookName && (
              <p className="text-rose-500 text-xs mt-2">
                {errors.bookName?.message}
              </p>
            )}
          </div>
          <button type="submit" className="btn btn-accent w-full mt-4">
            Search
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 mx-8">
        {searchData?.map((item) => {
          return (
            <div key={item.id} className="card  bg-base-100 shadow-xl">
              <figure className="w-full h-64 overflow-hidden">
                <img
                  src={item.volumeInfo.imageLinks?.thumbnail}
                  alt="Shoes"
                  className="object-cover w-full h-full"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{item.volumeInfo.title}</h2>
                <p>{item.volumeInfo.subtitle}</p>
                <div className="card-actions justify-end">
                  <a to={item.saleInfo.buyLink} className="btn btn-primary">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListingPage;
