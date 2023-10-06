import { configureStore } from "@reduxjs/toolkit";

import paginateReducer from "./paginate";
import genresReducer from "./genres";
import emailReducer from "./email";
import authReducer from "./auth";
import reloadPageReducer from "./reload";

const store = configureStore({
  reducer: {
    paginate: paginateReducer,
    setGenres: genresReducer,
    email: emailReducer,
    auth: authReducer,
    reload: reloadPageReducer,
  },
});

export default store;
