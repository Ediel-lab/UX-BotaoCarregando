import React, { useState } from "react";
import "./App.css";

// Modal de Sucesso
function SuccessModal({ message, onClose }) {
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-content" role="document">
        <p>{message}</p>
        <button className="btn" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setLoading(true);
    setShowModal(false);
    setMessage("");

    setTimeout(() => {
      setLoading(false);
      setMessage("Ação concluída com sucesso!");
      setShowModal(true);
    }, 2000);
  }

  function closeModal() {
    setShowModal(false);
    setMessage("");
  }

  return (
    <div className="app-container">
      <h1 className="title">Exercício: Botão de Carregamento</h1>
      <p className="description">
        Esse código simula uma operação que leva 2 segundos.
      </p>

      <button
        className="btn"
        onClick={handleClick}
        disabled={loading}
        aria-busy={loading}
      >
        {loading && <span className="spinner" aria-hidden="true"></span>}
        {loading ? "Enviando…" : "Enviar"}
      </button>

      {showModal && (
        <SuccessModal message={message} onClose={closeModal} />
      )}
    </div>
  );
}
