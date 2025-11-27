import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email) {
            newErrors.email = 'El correo es requerido';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Correo incorrecto';
        }

        if (!formData.password) {
            newErrors.password = 'La contraseña es requerida';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Check against stored user (mock backend)
            const storedUserStr = localStorage.getItem('registeredUser');
            const storedUser = JSON.parse(storedUserStr);

            if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
                navigate('/generator');
            } else {
                // If credentials don't match or no user registered
                setErrors({
                    email: 'Correo incorrecto',
                    password: 'Contraseña Incorrecta'
                });
            }
        }
    };

    return (
        <div className="min-h-screen bg-fantasy-bg text-fantasy-text font-sans flex flex-col items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-fantasy-primary/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-fantasy-primary/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="w-full max-w-md bg-fantasy-dark/50 p-8 rounded-xl border border-fantasy-primary/30 shadow-2xl backdrop-blur-md z-10">
                <h2 className="text-3xl font-serif text-fantasy-primary mb-6 text-center">Iniciar Sesión</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-fantasy-accent/80 mb-1">Correo Electrónico</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-fantasy-bg/50 border border-fantasy-primary/30 rounded-lg p-2 text-fantasy-text focus:border-fantasy-primary focus:ring-1 focus:ring-fantasy-primary outline-none transition-all"
                            placeholder="correo@ejemplo.com"
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-fantasy-accent/80 mb-1">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full bg-fantasy-bg/50 border border-fantasy-primary/30 rounded-lg p-2 text-fantasy-text focus:border-fantasy-primary focus:ring-1 focus:ring-fantasy-primary outline-none transition-all"
                            placeholder="••••••"
                        />
                        {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-fantasy-primary text-white font-medium tracking-wide py-2 px-4 rounded-lg hover:bg-blue-600 transition-all shadow-lg shadow-fantasy-primary/20 mt-6"
                    >
                        Entrar
                    </button>
                </form>

                <div className="mt-6 text-center text-sm">
                    <span className="opacity-70 text-fantasy-accent/60">¿No tienes cuenta? </span>
                    <Link to="/register" className="text-fantasy-primary hover:text-blue-400 transition-colors">Regístrate aquí</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
