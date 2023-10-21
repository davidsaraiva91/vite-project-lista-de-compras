import { useState } from "react";
import { useRef } from "react";
import { v4 } from "uuid";

function App() {
  const [produtos, setProdutos] = useState([]);
  const inputRef = useRef();

  function cliqueiNoBotao() {
    console.log(v4())
    setProdutos([
      { id: v4 (), nome:inputRef.current.value
      },...produtos]);
      inputRef.current.value = ''

  }
  function deletarProduto(id){
    setProdutos(produtos.filter(produto => produto.id !== id))

  }

  return (
    <div>
      <h1>Lista de compras</h1>
      <input placeholder="produto..." ref={inputRef} />
      <button onClick={cliqueiNoBotao}>adicionar</button>

      {produtos.map((produto) => (
        <div key={produto.id}>
          <p>{produto.nome}</p>
          <button onClick={() => deletarProduto(produto.id)}>🗑️</button>
          </div>

      ))}
    </div>
  );
}

export default App;
