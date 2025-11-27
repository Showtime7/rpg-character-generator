import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.firstName) newErrors.firstName = 'El nombre es requerido';
        if (!formData.lastName) newErrors.lastName = 'El apellido es requerido';
        if (!formData.dob) newErrors.dob = 'La fecha de nacimiento es requerida';

        if (!formData.email) {
            newErrors.email = 'El correo es requerido';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Correo inválido';
        }

        if (!formData.password) {
            newErrors.password = 'La contraseña es requerida';
        } else if (formData.password.length < 6) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
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
            setIsSuccess(true);
            localStorage.setItem('registeredUser', JSON.stringify({
                email: formData.email,
                password: formData.password,
                name: formData.firstName
            }));
        }
    };

    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {
                navigate('/login');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isSuccess, navigate]);

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-fantasy-bg text-fantasy-text font-sans flex flex-col items-center justify-center p-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-fantasy-primary/20 rounded-full blur-[100px]"></div>
                </div>
                <div className="bg-fantasy-dark/50 p-8 rounded-xl border border-fantasy-primary/30 text-center max-w-md w-full animate-fade-in backdrop-blur-md z-10">
                    <h2 className="text-3xl font-serif text-fantasy-primary mb-4">¡Registro Exitoso!</h2>
                    <p className="mb-4 text-fantasy-accent/80">Tu cuenta ha sido creada correctamente.</p>
                    <p className="text-sm opacity-70">Serás redirigido al inicio de sesión en unos momentos...</p>
                    <div className="mt-6 w-12 h-12 border-4 border-fantasy-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-fantasy-bg text-fantasy-text font-sans flex flex-col items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fantasy-primary/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="w-full max-w-md bg-fantasy-dark/50 p-8 rounded-xl border border-fantasy-primary/30 shadow-2xl backdrop-blur-md z-10">
                <h2 className="text-3xl font-serif text-fantasy-primary mb-6 text-center">Registro de Aventurero</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-fantasy-accent/80 mb-1">Nombre</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full bg-fantasy-bg/50 border border-fantasy-primary/30 rounded-lg p-2 text-fantasy-text focus:border-fantasy-primary focus:ring-1 focus:ring-fantasy-primary outline-none transition-all"
                                placeholder="Ej. Aragorn"
                            />
                            {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-fantasy-accent/80 mb-1">Apellido</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full bg-fantasy-bg/50 border border-fantasy-primary/30 rounded-lg p-2 text-fantasy-text focus:border-fantasy-primary focus:ring-1 focus:ring-fantasy-primary outline-none transition-all"
                                placeholder="Ej. Elessar"
                            />
                            {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-fantasy-accent/80 mb-1">Fecha de Nacimiento</label>
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className="w-full bg-fantasy-bg/50 border border-fantasy-primary/30 rounded-lg p-2 text-fantasy-text focus:border-fantasy-primary focus:ring-1 focus:ring-fantasy-primary outline-none transition-all [color-scheme:dark]"
                        />
                        {errors.dob && <p className="text-red-400 text-xs mt-1">{errors.dob}</p>}
                    </div>

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
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full bg-fantasy-bg/50 border border-fantasy-primary/30 rounded-lg p-2 text-fantasy-text focus:border-fantasy-primary focus:ring-1 focus:ring-fantasy-primary outline-none transition-all pr-10"
                                placeholder="••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-fantasy-primary/70 hover:text-fantasy-primary"
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-fantasy-primary text-white font-medium tracking-wide py-2 px-4 rounded-lg hover:bg-blue-600 transition-all shadow-lg shadow-fantasy-primary/20 mt-6"
                    >
                        Registrarse
                    </button>
                </form>

                <div className="mt-6 text-center text-sm">
                    <span className="opacity-70 text-fantasy-accent/60">¿Ya tienes cuenta? </span>
                    <Link to="/login" className="text-fantasy-primary hover:text-blue-400 transition-colors">Inicia Sesión</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
