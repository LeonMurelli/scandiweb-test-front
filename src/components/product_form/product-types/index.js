import DVD from "./DvdForm";
import Book from "./BookForm";
import Furniture from "./FurnitureForm";

export const productTypes = {
  dvd: {
    label: `DVD`,
    renderForm: DVD,
  },
  book: {
    label: `Book`,
    renderForm: Book,
  },
  furniture: {
    label: `Furniture`,
    renderForm: Furniture,
  },
};