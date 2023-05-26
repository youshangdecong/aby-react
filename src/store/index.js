import { configureStore } from "@reduxjs/toolkit";
import mainRenducer from "./modules/main";
import homeReducer from "./modules/home";
import entireReducer from "./modules/entire/reducer";

const store = configureStore({
  reducer: {
    main: mainRenducer,
    home: homeReducer,
    entire: entireReducer,
  },
});

export default store;
