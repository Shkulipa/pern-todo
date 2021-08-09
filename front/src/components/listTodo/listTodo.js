import React, {useEffect, useState} from "react";
import {Table} from "react-bootstrap";

//components
import EditTodo from "../editTodo/editTodo";
import UseApi from "../../hooks/useApi";

const ListTodos = () => {
    const [todos, setTodos] = useState([]);
    const [reload, setReload] = useState(false);

    const getTodos = async () => {
        try {
            const response = await UseApi({
                method: "GET",
            })

            setTodos(response);
        } catch(e) {
            console.error(e);
        }
    }

    //delete func
    const deleteTodo = async (id) => {
        try {
            await UseApi({
                method: "DELETE",
                todo_id: id
            })

            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {todos.map(({todo_id, description, date}, i) => {
                        return (
                            <tr key={todo_id}>
                                <td>{i + 1}</td>
                                <td>{description}</td>
                                <th>{date.slice(0,19).replace(/T/, ' ')}</th>
                                <td>
                                    <EditTodo todo_id={todo_id}
                                              description={description}
                                              getTodos={getTodos}/>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => deleteTodo(todo_id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                )}
                </tbody>
            </Table>
        </>
    )
}

export default ListTodos;
