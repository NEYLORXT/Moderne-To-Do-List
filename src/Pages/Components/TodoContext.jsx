import React,{useEffect, useState, useContext, createContext} from "react";

const TodoContext = createContext();

export function TodoProvider({children}){
    const [todos, setTodos] = useState(() =>
    {
        const stored = localStorage.getItem("todos");
        return stored ? JSON.parse(stored) : [];

    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));

    }, [todos]);


    const addTodo = (newTodo) => {
        setTodos(prevTodos => [...prevTodos, newTodo]);
    }

    const editerTodo = (id, updateData) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => todo.id === id ? {...todo, ...updateData} : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }

    return (
        <TodoContext.Provider value={{todos, addTodo, setTodos, editerTodo, deleteTodo}} >
            {children}
        </TodoContext.Provider>
    );


}

export function useTodo(){
    return useContext(TodoContext);
}