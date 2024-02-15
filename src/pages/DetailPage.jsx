import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PATHS } from "../routes/paths";
const DetailPage = () => {
  const bookDetails = useSelector((x) => x.book.value);

  return (
    <div className="w-screen h-screen flex flex-col ">
      <h1 className=" text-3xl md:text-8xl text-center py-8">
        {bookDetails.title}
      </h1>
      <div className="flex justify-center">
        <Link to={PATHS.home} className="btn ">
          Go Back
        </Link>
      </div>
      <p className="text-sm text-center">{bookDetails.subtitle}</p>
      <div className="flex flex-col items-center justify-center ">
        <figure className="w-96 h-96 overflow-hidden rounded-xl">
          <img
            className="object-cover w-full h-full rounded-xl mt-4"
            src={bookDetails.imageLinks?.thumbnail}
            alt=""
          />
        </figure>
        <div className=" py-8">
          <h2 className="text-2xl text-center ">Description</h2>
          <p className="text-center px-8">{bookDetails.description}</p>
        </div>
        <div className=" py-8">
          <h2 className="text-2xl text-center ">Authors</h2>
          <p className="text-center px-8">
            {bookDetails &&
              bookDetails?.authors?.map((author) => {
                return <p key={nanoid()}>{author}</p>;
              })}
          </p>
        </div>

        <a to={bookDetails.previewLink} className="btn btn-primary">
          buy now
        </a>
      </div>
    </div>
  );
};

export default DetailPage;
