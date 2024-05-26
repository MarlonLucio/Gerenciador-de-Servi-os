import React from 'react'; // Importa React

// Componente para a lista de serviços
function ServiceList({ services, deleteService, editService }) {
  return (
    <div>
      <h2>Lista de Serviços</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index} className={service.exiting ? 'exiting' : ''}>
            <div>
              <strong>{service.name}</strong>
              <p>{service.description}</p>
            </div>
            <div className="service-actions">
              <button className="edit" onClick={() => editService(index)}>Editar</button>
              <button onClick={() => deleteService(index)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList; // Exporta o componente ServiceList
