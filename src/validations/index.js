import * as yup from "yup";

export const bookSearchSchema = yup
  .object({
    bookName: yup.string().required("book name required"),
  })
  .required();
