import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

export default function Dashboard() {
    const [userName, setUserName] = useState('');
    const [tasks, setTasks] = useState([]);
    const [description, setDescription] = useState('');
    const [selectedHour, setSelectedHour] = useState('08:00');
    const navigate = useNavigate();

    useEffect(() => {
        const name = localStorage.getItem('userName');
        if (!name) {
            navigate('/');
        } else {
            setUserName(name);
            // Load tasks from localStorage
            const savedTasks = localStorage.getItem('tasks');
            if (savedTasks) {
                setTasks(JSON.parse(savedTasks));
            }
        }
    }, [navigate]);

    // Generate hours from 5 AM to 11 PM
    const hours = [];
    for (let i = 5; i <= 23; i++) {
        const hour = i.toString().padStart(2, '0') + ':00';
        hours.push(hour);
    }

    const handleAddTask = (e) => {
        e.preventDefault();
        if (description.trim()) {
            const newTask = {
                id: Date.now(),
                time: selectedHour,
                description: description,
                completed: false,
            };
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            setDescription('');
        }
    };

    const handleToggleTask = (id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const handleDeleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const handleLogout = () => {
        localStorage.removeItem('userName');
        navigate('/');
    };

    const tasksByHour = {};
    hours.forEach((hour) => {
        tasksByHour[hour] = tasks.filter((task) => task.time === hour);
    });

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Planificador de Timeboxing</h1>
                <div className="header-actions">
                    <span className="user-name">Hola, {userName}</span>
                    <button onClick={handleLogout} className="logout-btn">
                        Cerrar Sesión
                    </button>
                </div>
            </header>

            <main className="dashboard-main">
                <aside className="sidebar">
                    <form onSubmit={handleAddTask} className="task-form">
                        <h2>Agregar Tarea</h2>
                        <div className="form-group">
                            <label htmlFor="description">Descripción</label>
                            <input
                                type="text"
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Describe tu tarea"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="hour">Hora</label>
                            <select
                                id="hour"
                                value={selectedHour}
                                onChange={(e) => setSelectedHour(e.target.value)}
                            >
                                {hours.map((hour) => (
                                    <option key={hour} value={hour}>
                                        {hour}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="add-btn">
                            Agregar
                        </button>
                    </form>
                </aside>

                <section className="timebox-grid">
                    <h2>Tu Día</h2>
                    <div className="grid">
                        {hours.map((hour) => (
                            <div key={hour} className="timebox">
                                <div className="time-label">{hour}</div>
                                <div className="tasks">
                                    {tasksByHour[hour].length > 0 ? (
                                        tasksByHour[hour].map((task) => (
                                            <div
                                                key={task.id}
                                                className={`task-item ${task.completed ? 'completed' : ''}`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={task.completed}
                                                    onChange={() => handleToggleTask(task.id)}
                                                />
                                                <span>{task.description}</span>
                                                <button
                                                    onClick={() => handleDeleteTask(task.id)}
                                                    className="delete-btn"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="empty-slot">-</div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
