import React, { useState } from 'react';
import axios from 'axios';
import './CertificateCancel.css';

const CertificateCancel = () => {
  const [certificadoId, setCertificadoId] = useState('');
  const [motivo, setMotivo] = useState('');
  const [mensagem, setMensagem] = useState('');

  const cancelarCertificado = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:8080/certificados/${certificadoId}/cancelar`, {
        motivo,
        dataCancelamento: new Date().toISOString()
      });

      setMensagem('✅ Certificado cancelado com sucesso!');
      setCertificadoId('');
      setMotivo('');
    } catch (err) {
      console.error(err);
      setMensagem('❌ Erro ao cancelar certificado.');
    }
  };

  return (
    <div className="cancel-container">
      <h2>Cancelar Certificado</h2>
      <form onSubmit={cancelarCertificado}>
        <input
          type="text"
          placeholder="ID do Certificado"
          value={certificadoId}
          onChange={(e) => setCertificadoId(e.target.value)}
          required
        />
        <textarea
          placeholder="Motivo do Cancelamento"
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          required
        ></textarea>
        <button type="submit">Cancelar</button>
      </form>
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
};

export default CertificateCancel;
