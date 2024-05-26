import React, { useState } from 'react'; // Importa React e o hook useState
import ServiceForm from './ServiceForm'; // Importa o componente ServiceForm
import ServiceList from './ServiceList'; // Importa o componente ServiceList

// Componente principal do aplicativo
function App() {
  const [services, setServices] = useState([]); // Estado para armazenar a lista de serviços
  const [currentServiceIndex, setCurrentServiceIndex] = useState(null); // Estado para armazenar o índice do serviço em edição

  // Função para adicionar um novo serviço
  const addService = (service) => {
    setServices([...services, service]);
  };

  // Função para excluir um serviço
  const deleteService = (index) => {
    // Marca o serviço como 'exiting' para animação
    setServices(services.map((service, i) => 
      i === index ? { ...service, exiting: true } : service
    ));
    // Remove o serviço após a animação
    setTimeout(() => {
      setServices(services.filter((_, i) => i !== index));
    }, 300); // Tempo da animação de fadeOut
  };

  // Função para editar um serviço
  const editService = (index) => {
    setCurrentServiceIndex(index);
  };

  // Função para atualizar um serviço
  const updateService = (updatedService) => {
    const updatedServices = services.map((service, index) =>
      index === currentServiceIndex ? updatedService : service
    );
    setServices(updatedServices);
    setCurrentServiceIndex(null); // Reseta o índice do serviço em edição
  };

  return (
    <div className="App">
      <h1>Gerenciador de Serviços</h1>
      <ServiceForm
        addService={addService}
        currentService={currentServiceIndex !== null ? services[currentServiceIndex] : null}
        updateService={updateService}
      />
      <ServiceList services={services} deleteService={deleteService} editService={editService} />
    </div>
  );
}

export default App; // Exporta o componente App
