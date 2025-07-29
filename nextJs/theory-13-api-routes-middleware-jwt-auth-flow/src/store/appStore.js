import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "@/app/articles/articleApiSlice";
import { middleware } from "@/middleware";

export const appStore = configureStore (
{
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware),
}
);
