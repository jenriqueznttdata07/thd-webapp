import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import storage from "./customStorage";
import { authReducer } from "./slices/authSlice";
import logger from "redux-logger";

const authPersistConfig = {
    key: "auth",
    storage: storage,
    withlist: ["isAuth", "jid"],
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;