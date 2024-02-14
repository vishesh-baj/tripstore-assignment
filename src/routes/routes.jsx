import { nanoid } from "nanoid";
import { PATHS } from "./paths";
import { DetailsPage, HomePage, ListingPage } from "../pages";

export const routes = [
  {
    key: nanoid(),
    path: PATHS.home,
    Element: HomePage,
  },
  {
    key: nanoid(),
    path: PATHS.details,
    Element: DetailsPage,
  },
  {
    key: nanoid(),
    path: PATHS.listing,
    Element: ListingPage,
  },
];
