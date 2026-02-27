import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Welcome.css';

export default function Welcome() {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleStart = (e) => {
        e.preventDefault();
        if (name.trim()) {
            localStorage.setItem('userName', name);
            navigate('/dashboard');
        }
    };

    return (
        <div className="welcome-container">
            <div className="welcome-card">
                <h1>Daily Timeboxing</h1>
                <p className="subtitle">Planifica tu día con bloques de tiempo</p>

                <form onSubmit={handleStart}>
                    <div className="form-group">
                        <label htmlFor="name">Tu nombre</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ingresa tu nombre"
                            autoFocus
                            required
                        />
                    </div>
                    <button type="submit" className="start-btn">
                        Comenzar
                    </button>
                </form>
            </div>
        </div>
    );
}
