import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CertificateList.css';

const CertificateList = () => {
  const [certificados, setCertificados] = useState([]);
  const [erro, setErro] = useState('');

  useEffect(() => {
    const fetchCertificados = async () => {
      try {
        const response = await axios.get('http://localhost:3003/certificados');
        setCertificados(response.data);
      } catch (err) {
        console.error(err);
        setErro('Erro ao carregar certificados.');
      }
    };

    fetchCertificados();
  }, []);

  return (
    <div className="list-container">
      <h2>Lista de Certificados</h2>
      {erro && <p className="erro">{erro}</p>}
      {certificados.length === 0 ? (
        <p>Nenhum certificado emitido ainda.</p>
      ) : (
        <ul className="certificado-lista">
          {certificados.map((cert) => (
            <li key={cert.id}>
              <p><strong>Aluno:</strong> {cert.email}</p>
              <p><strong>Curso:</strong> {cert.cursoId}</p>
              <p><strong>Status:</strong> {cert.status}</p>
              <p><strong>Emitido em:</strong> {new Date(cert.dataEmissao).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CertificateList;
