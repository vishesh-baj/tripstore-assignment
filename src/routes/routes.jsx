import { nanoid } from "nanoid";
import { DetailsPage, HomePage, ListingPage } from "../pages";
import { PATHS } from "./paths";
export const ROUTES = [
  {
    key: nanoid(),
    path: PATHS.homePage,
    Element: <HomePage />,
  },
  {
    key: nanoid(),
    path: PATHS.detailsPage,
    Element: <DetailsPage />,
  },
  {
    key: nanoid(),
    path: PATHS.listingsPage,
    Element: <ListingPage />,
  },
];
