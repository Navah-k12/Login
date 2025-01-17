// src/components/Login.tsx
import React, { useState } from 'react';
import '../style/login.css';  // Asegúrate de importar el archivo CSS

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Por favor, llena todos los campos.');
      return;
    }

    try {
      // Lógica de login
      if (formData.email === 'user@example.com' && formData.password === 'password') {
        alert('Login exitoso');
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (err) {
      setError('Hubo un error al procesar tu solicitud');
    }
  };

  return (
    <div>
      <h2> Iniciar Sesion</h2>
      {error && <p className="error">{error}</p>}  {/* Mostrar error si existe */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
