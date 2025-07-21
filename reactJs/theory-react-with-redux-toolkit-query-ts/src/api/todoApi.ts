import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery ({baseUrl: "https://687076977ca4d06b34b6dc20.mockapi.io/api/v1"}),
    tagTypes: ["Todos"],
    endpoints: (builder) => ({
        getTodos: builder .query<Todo[], void>({
            query: () => "todos",
            providesTags: ["Todos"],
        }),
        addTodo: builder.mutation<Todo, Partial<Todo>>({
            query: (body) => ({
                url: "todos",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Todos"],
        }),
        updateTodo: builder.mutation<Todo, Todo>({
            query: ({id, ...patch}) => ({
                url: `todos/${id}`,
                method: "PATCH",
                body: patch,

            }),
            invalidatesTags: ["Todos"],
        }),
        deleteTodo: builder.mutation<{success: boolean, id: number}, number> ({
            query: (id) => ({
                url: `todos/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Todos"],
        }),
    })
})

export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} = todoApi;