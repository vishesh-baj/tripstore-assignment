import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookSearchSchema } from "../validations";
import { useMutation } from "react-query";
import axios from "axios";
import { API_KEY } from "../constants";
import { useState } from "react";
import { convertToApiString } from "../utils";
import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../routes/paths";
import Card from "../components/Card";
import { selectBook } from "../features/book";

const ListingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(bookSearchSchema) });
  const categoryName = useSelector((x) => x.category.value);
  const onSubmit = (data) => {
    categoryMutation.mutate(data);
    reset();
  };

  const categoryMutation = useMutation(
    (data) =>
      axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${convertToApiString(
          data.bookName
        )}&category=${categoryName}&key=${API_KEY}`
      ),
    {
      onSuccess: (data) => {
        setSearchData(data.data.items);
      },
    }
  );

  const handleDetailsClick = (item) => {
    console.log(item);
    dispatch(selectBook(item.volumeInfo));
    navigate(PATHS.details);
  };

  return (
    <div className="w-screen h-screen rounded bg-base-300">
      <div className="flex justify-center flex-col items-center">
        <h1 className=" text-3xl text-accent text-center md:text-8xl py-8">
          {categoryName.toUpperCase()}
        </h1>
        <Link to={PATHS.home}>Go Back</Link>
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
            <Card
              detailsHandler={handleDetailsClick}
              key={item.id}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListingPage;
