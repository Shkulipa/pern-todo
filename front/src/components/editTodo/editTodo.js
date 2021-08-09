import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import UseApi from "../../hooks/useApi";

const EditTodo = ({todo_id, description, getTodos}) => {
    const [show, setShow] = useState(false);
    const [descr, setDescr] = useState(description);
    const handleClose = () => {
        setDescr(description);
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const handlerChange = (val) => {
        setDescr(val);
    }
    const updateDesc = async (e) => {
        e.preventDefault();
        try {
            const body = {
                description: descr
            };
            await UseApi({
                method: "PUT",
                todo_id: todo_id,
                data: body
            });
            getTodos();
        } catch (e) {
            console.error(e);
        }
        setShow(false);
    }


    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Please, input new description</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" className="form-control" value={descr} onChange={(e) => handlerChange(e.target.value)}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="warning" onClick={ e => updateDesc(e)} >
                        Edit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditTodo;
