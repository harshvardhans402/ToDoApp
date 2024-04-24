import { createSlice, current } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const addTodoReducer = createSlice({
    name: "todos",
    initialState,
    reducers: {
        //here we will write our reducer
        //Adding todos
        add: (state, action) => {
            state.push(action.payload);
            localStorage.setItem("todos", JSON.stringify(state))

        },
        //remove todos
        remove: (state, action) => {
            const rmstate = state.filter((item) => item.id !== action.payload)
            localStorage.setItem("todos", JSON.stringify(rmstate))

            return rmstate;

        },
        //update todos
        update: (state, action) => {
            const updatedstate = state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        item: action.payload.item,
                        id: action.payload.id,
                        completed: false
                    };
                }
                else {
                    return todo
                }


            });
            localStorage.setItem("todos", JSON.stringify(updatedstate))
            return updatedstate;
        },
        //completed
        complete: (state, action) => {
            const comp = state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: true,
                    };
                }
                return todo;

            });
            localStorage.setItem("todos", JSON.stringify(comp))
            return comp;

        },
    },
});

export const {
    add,
    remove,
    update,
    complete,
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
