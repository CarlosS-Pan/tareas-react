import {Form, Button} from 'react-bootstrap';
import {useState} from "react";

const TareasFormUpdate = ({onClickFnUpdate, oldTarea}) => {
    const [id, setID] = useState(oldTarea.id);
    const [nombre, setNombre] = useState(oldTarea.name);
    const [materia, setMateria] = useState(oldTarea.materia);
    const [puntos, setPuntos] = useState(oldTarea.puntos);
    const [fechaEntrega, setFechaEntrega] = useState(oldTarea.fechaEntrega);

    const onEnviar = (event) => {
        event.preventDefault();
        if (id === "" || nombre === "" || materia === "" || puntos === "" || fechaEntrega === "") alert("No puede dejar ningún campo vacío");
        else {
            let data = {
                _id: oldTarea._id,
                id: id,
                nombre: nombre,
                materia: materia,
                puntos: puntos,
                fechaEntrega: fechaEntrega
            };
            onClickFnUpdate(data);
        }
    };

    return (
        <Form onSubmit={onEnviar}>
            <Form.Group className="mb-3" controlId="ID">
                <Form.Label>ID: </Form.Label>
                <Form.Control type="text" placeholder="Introduce ID" value={id}
                              onChange={(txt) => setID(txt.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Nombre">
                <Form.Label>Nombre: </Form.Label>
                <Form.Control type="text" placeholder="Introduce nombre" value={nombre}
                              onChange={(txt) => setNombre(txt.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Materia">
                <Form.Label>Materia: </Form.Label>
                <Form.Control type="text" placeholder="Introduce materia" value={materia}
                              onChange={(txt) => setMateria(txt.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Puntos">
                <Form.Label>Puntos: </Form.Label>
                <Form.Control type="number" placeholder="Introduce puntaje" value={puntos}
                              onChange={(txt) => setPuntos(txt.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Fecha">
                <Form.Label>Fecha de entrega: </Form.Label>
                <Form.Control type="date" placeholder="Introduce fecha" value={fechaEntrega}
                              onChange={(txt) => setFechaEntrega(txt.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default TareasFormUpdate