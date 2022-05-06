import React, {useEffect, useState} from "react";
import Tarea from "./tarea";
import TareasForm from "./tareasForm";

const TareasList = () => {

    const [tareas, setTareas] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetch("https://tareas-api5.azurewebsites.net/tareas")
            .then((res) => res.json())
            .then((data) => setTareas(data.data))
            .catch((err) => console.log(`Error: ${err}`));
    }, []);

    const getTareas = () => {
        fetch("https://tareas-api5.azurewebsites.net/tareas")
            .then((res) => res.json())
            .then((data) => setTareas(data.data))
            .catch((err) => console.log(`Error: ${err}`));
    }

    const createTarea = (data) => {
        try {
            fetch("https://tareas-api5.azurewebsites.net/tareas", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then(response => response.json())
                .then(dataResponse => {
                    setTareas([...tareas, dataResponse.data]);
                    setTareas([...tareas, ...tareas]);
                    setShowForm(false);
                }).then(() => {
                getTareas();
            });
        } catch (err) {
            console.log(err);
        }
    }

    const updateTarea = (tarea) => {
        try {
            fetch(`https://tareas-api5.azurewebsites.net/tareas/${tarea._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tarea),
            }).then(response => response.json())
                .then(() => {
                getTareas();
            });
        } catch (err) {
            console.log(err);
        }
    }

    const deleteTarea = async (idx) => {
        try {
            fetch(`https://tareas-api5.azurewebsites.net/tareas/${idx}`, {
                method: 'DELETE',
            }).then(response => response.json())
                .then(() => {
                    getTareas();
                });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="container">
            {tareas.map((tarea, index) => (
                <Tarea
                    key={index}
                    index={index}
                    tarea={tarea}
                    onDelete={deleteTarea}
                    onUpdate={updateTarea}
                />
            ))}
            <button className="new-btn btn"
                    onClick={() => setShowForm(!showForm)}>{showForm ? "Cerrar" : "Nueva tarea"}
            </button>
            {showForm && <TareasForm onClickFn={createTarea}/>}
        </div>
    );
}

export default TareasList;