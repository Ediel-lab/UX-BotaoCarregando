import { useState } from "react";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleClick() {
    setLoading(true);
    setMessage("");

    // Simula uma requisição de 2 segundos
    setTimeout(() => {
      setLoading(false);
      setMessage("Ação concluída com sucesso!");
    }, 2000);
  }

  return (
    <div className="app-container">
      <h1 className="title">Exercício: Botão de Carregamento</h1>

      <p className="description">
        Esse código simula uma operação que demora 2 segundos.
      </p>

      <button
        className="btn"
        onClick={handleClick}
        disabled={loading}
        aria-busy={loading}
        aria-live="polite"
      >
        {loading ? (
          <span className="spinner" role="status" aria-hidden="true"></span>
        ) : null}
        {loading ? "Enviando..." : "Enviar"}
      </button>

      {message && <p className="success" role="alert">{message}</p>}
    </div>
  );
}
  