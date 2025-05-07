import React, { useState } from 'react';
import axios from 'axios';
import './CertificateForm.css';

const CertificateForm = () => {
  const [email, setEmail] = useState('');
  const [cursoId, setCursoId] = useState('');
  const [mensagem, setMensagem] = useState('');

  const emitirCertificado = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/certificados', {
        email,
        cursoId
      });

      setMensagem('✅ Certificado emitido com sucesso!');
      setEmail('');
      setCursoId('');
    } catch (err) {
      console.error(err);
      setMensagem('❌ Erro ao emitir certificado.');
    }
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <h2>Emitir Certificado</h2>
        <form onSubmit={emitirCertificado}>
          <input
            type="email"
            placeholder="Email do Aluno"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="ID do Curso"
            value={cursoId}
            onChange={(e) => setCursoId(e.target.value)}
            required
          />
          <button type="submit">Emitir</button>
        </form>
        {mensagem && <p className="mensagem">{mensagem}</p>}
      </div>
    </div>
  );
};

export default CertificateForm;
