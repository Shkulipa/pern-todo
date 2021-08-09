import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import UseApi from "../../hooks/useApi";

const InputTodo = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = {description};

            await UseApi({
                method: "POST",
                data: body
            });

            window.location = "/"
        } catch(e) {
            console.error(e);
        }
    }

    return (
        <>
            <h1 className="text-center mt-5">Input Todo</h1>
            <form className="d-flex mt-5 mb-5" onSubmit={onSubmitForm}>
                <Row className = "w-100">
                    <Col xs={11}>
                        <input type="text" className="form-control" value={description}
                               onChange={e => setDescription(e.target.value)}/>
                    </Col>
                    <Col xs={1}>
                        <button className="btn btn-success">Add</button>
                    </Col>
                </Row>


            </form>
        </>
    );
}

export default InputTodo;
