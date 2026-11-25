
"use client";
import React from 'react'

export default function Caracteristicas() {
  const caracteristicas = [
    'JSX, sintaxe que mistura HTML e JS.',
    'Componentes, funções que retornam JSX.',
    'Componentes Reutilizáveis e Modulares.',
    'Roteamento Automático e APIs.',
    'Hooks: useState, useEffect e useSWR.',
    'Renderização Rápida e SEO Friendly.',
    'TypeScript Seguro e Escalável.',
    'Comunidade Ativa e Popularidade.'
  ];

  function mostrarMensagem() {
    alert("Estás a aprender React e Next.js!");
  }

  return (
    <div>
      <h2>Características do React e Next.js</h2>

      <ul>
        {caracteristicas.map((caracteristica, index) => (
          <li key={index}>
            {caracteristica}
          </li>
        ))}
      </ul>

      <button
        onClick={mostrarMensagem}
        className="bg-blue-500 text-white p-2 rounded-lg mt-4"
      >
        Clica aqui!
      </button>
    </div>
  );
}
