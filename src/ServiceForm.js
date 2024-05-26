import React, { useState, useEffect } from 'react'; // Importa React e os hooks useState e useEffect

// Componente para o formulário de serviços
function ServiceForm({ addService, currentService, updateService }) {
  const [name, setName] = useState(currentService ? currentService.name : ''); // Estado para o nome do serviço
  const [description, setDescription] = useState(currentService ? currentService.description : ''); // Estado para a descrição do serviço

  // Função de submissão do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    if (currentService) {
      updateService({ name, description }); // Atualiza o serviço se estiver editando
    } else {
      addService({ name, description }); // Adiciona um novo serviço se não estiver editando
    }
    setName(''); // Reseta o campo de nome
    setDescription(''); // Reseta o campo de descrição
  };

  // Efeito para preencher o formulário com dados do serviço atual ao editar
  useEffect(() => {
    if (currentService) {
      setName(currentService.name);
      setDescription(currentService.description);
    }
  }, [currentService]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do Serviço"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição do Serviço"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">{currentService ? 'Atualizar Serviço' : 'Adicionar Serviço'}</button>
    </form>
  );
}

export default ServiceForm; // Exporta o componente ServiceForm
