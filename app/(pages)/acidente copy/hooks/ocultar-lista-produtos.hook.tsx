import React, { useState } from 'react';

// 1. Definir o tipo do objeto
type Produto = {
  id: number;
  nome: string;
  categoria: string;
};

const OcultarListaProdutos: React.FC = () => {
  const dadosIniciais: Produto[] = [
    { id: 1, nome: 'Maçã', categoria: 'fruta' },
    { id: 2, nome: 'Cenoura', categoria: 'legume' },
    { id: 3, nome: 'Banana', categoria: 'fruta' },
    { id: 4, nome: 'Batata', categoria: 'legume' },
  ];

  // 2. Estado para armazenar categorias ocultas (checkboxes marcados = ocultar)
  const [categoriasOcultas, setCategoriasOcultas] = useState<string[]>([]);

  // 3. Handler para mudar o estado do checkbox
  const handleCheckboxChange = (categoria: string) => {
    setCategoriasOcultas((prev) =>
      prev.includes(categoria)
        ? prev.filter((c) => c !== categoria) // Remove da lista de ocultar
        : [...prev, categoria] // Adiciona à lista de ocultar
    );
  };

  // 4. Filtrar os dados (se estiver nas categorias ocultas, não mostra)
  const produtosVisiveis = dadosIniciais.filter(
    (produto) => !categoriasOcultas.includes(produto.categoria)
  );

  return (
    <div>
      <h3>Ocultar Categorias:</h3>
      <label>
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange('fruta')}
        />
        Ocultar Frutas
      </label>
      <label style={{ marginLeft: '10px' }}>
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange('legume')}
        />
        Ocultar Legumes
      </label>

      <h3>Produtos ({produtosVisiveis.length})</h3>
      <ul>
        {produtosVisiveis.map((prod) => (
          <li key={prod.id}>
            {prod.nome} ({prod.categoria})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OcultarListaProdutos;