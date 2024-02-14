import * as yup from "yup";
export const placesSchema = yup.object({
  place: yup.string("Place must be a string").required("Place is required"),
});
