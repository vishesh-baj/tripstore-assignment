import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookSearchSchema } from "../validations";
import { useMutation, useQuery } from "react-query";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);

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
        )}&category=${categoryName}&key=${API_KEY}&startIndex=${
          currentPage * 10
        }`
      ),
    {
      onSuccess: (data) => {
        setTotalPages(Math.ceil(data.data.totalItems / 10));
        setSearchData((prevData) => [...prevData, ...data.data.items]);
      },
    }
  );

  const fetchCategories = async () => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${categoryName}&key=${API_KEY}`
    );

    return response.data;
  };

  const handleDetailsClick = (item) => {
    console.log(item);
    dispatch(selectBook(item.volumeInfo));
    navigate(PATHS.details);
  };

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      // Increment the current page
      setCurrentPage((prevPage) => prevPage + 1);

      // Fetch the next page of data
      categoryMutation.mutate({
        bookName: searchData[searchData.length - 1]?.volumeInfo.title || "",
      });
    }
  };
  const { data, isLoading } = useQuery(
    "get-books-by-category",
    fetchCategories,
    {
      onSuccess: (data) => {
        console.log("CATEGORY DATA: ", data.items);
        setSearchData(data.items);
      },
    }
  );

  return (
    <div className="w-screen h-screen rounded ">
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
      <div className="flex justify-center my-4">
        <button onClick={handleLoadMore} className="btn btn-accent">
          Load More
        </button>
      </div>
    </div>
  );
};

export default ListingPage;
