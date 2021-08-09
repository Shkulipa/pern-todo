const UseApi = async ({method = "", todo_id = "", data = {}}) => {
    switch(method) {
        case "GET":
            try {
                const response = await fetch(`http://localhost:5000/todos`, {
                    method: method,
                });
                return await response.json();
            } catch (e) {
                return console.error(e);
            }
        case "POST":
            try {
                await fetch(`http://localhost:5000/todos`, {
                    method: method,
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify(data)
                });
                return {res: "TODO Added!"};
            } catch (e) {
                console.error(e);
                return {res: "Sorry, there was an error."};
            }
        case "DELETE":
            try {
                await fetch(`http://localhost:5000/todos/${todo_id}`, {
                    method: method,
                });
                return {res: "TODO Deleted!"};
            } catch (e) {
                console.error(e);
                return {res: "Sorry, there was an error."};
            }
        case "PUT":
            try {
                await fetch(`http://localhost:5000/todos/${todo_id}`, {
                    method: method,
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify(data)
                });
                return {res: "TODO Updated!"};
            } catch (e) {
                console.error(e);
                return {res: "Sorry, there was an error."};
            }
        default:
            alert( "Нет таких значений" )
    }
}

export default UseApi;
