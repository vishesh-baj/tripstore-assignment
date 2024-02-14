import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { placesSchema } from "../validations";
const ListingsPage = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(placesSchema) });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="w-screen h-screen">
      <h1 className="text-2xl text-center py-8">Listings Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control px-4 md:px-8">
          <label htmlFor="place" className="label">
            <span className="label-text">Search Places</span>
          </label>
          <input
            {...register("place")}
            className="input input-primary"
            type="text"
            name="place"
            id="place"
          />
          {errors?.place && (
            <p className="text-rose-500 text-sm pt-4">
              {errors?.place?.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ListingsPage;
