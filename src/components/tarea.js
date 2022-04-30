import React, {useState} from "react";
import TareasFormUpdate from "./tareasUpdateForm";

const Tarea = ({tarea, onDelete, idx, onUpdate}) => {

    const [showForm, setShowForm] = useState(false);
    
    const actualizarTarea = (tareaNueva) => {
        onUpdate(tareaNueva);
    }
    const clickTarea = () => {
        onDelete(tarea._id);
    }

    return (
        <div className="container">
            <h5>{tarea.name}</h5>
            <h5>{`Id mongo: ${tarea._id}`}</h5>
            <h5>{`Id: ${tarea.id}`}</h5>
            <h5>{`Materia: ${tarea.materia}`}</h5>
            <h5>{`Puntos: ${tarea.puntos}`}</h5>
            <h5>{`Fecha de entrega: ${tarea.fechaEntrega}`}</h5>
            <h5>{`Fecha de creación: ${tarea.fechaCreacion}`}</h5>
            <div className="btn-container">
                <button onClick={clickTarea} className="btn">Borrar</button>
                <button className="btn"
                        onClick={() => setShowForm(!showForm)}>{showForm ? "Cerrar" : "Actualizar"}
                </button>
                {showForm && <TareasFormUpdate onClickFnUpdate={actualizarTarea} oldTarea={tarea}/>}
                    </div>
                    </div>
    )
}

export default Tarea;