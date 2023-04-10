 document.addEventListener('DOMContentLoaded', function () {
  getClientes();
 });
 //mostrar datos en la tabla
function getClientes(){
  fetch('/api/clientes').then(response => response.json()).then((data) => {
    let cabeceras = Object.keys(data[0]);
    let row = document.createElement('tr');
    let thead = document.getElementById('cabeceraTabla');
    thead.innerHTML = "";
    let tbody = document.getElementById('cuerpoTabla');
    tbody.innerHTML = "";
    for (let c of cabeceras) {
      let cell = document.createElement('th');
      cell.innerHTML = c;
      row.appendChild(cell);
    }
    data.forEach(element => {
      let r = document.createElement('tr');
      let valores = Object.values(element)
      for (let valor of valores) {
        let campo = document.createElement('td');
        campo.innerHTML = valor;
        r.appendChild(campo);
      }
      let borrar = document.createElement('td');
      let eliminar = document.createElement('a');
      let iconEliminar = document.createElement('i');
      iconEliminar.classList.add('fas', 'fa-trash-alt', 'm-2');
      eliminar.addEventListener('click', () => deleteCliente(element.customer_id));
      eliminar.appendChild(iconEliminar);

      let editar = document.createElement('a');
      let iconEditar = document.createElement('i');
      iconEditar.classList.add('fas', 'fa-edit', 'm-2');
      editar.addEventListener('click', () => upadateCliente(element.customer_id))
      editar.appendChild(iconEditar);

      borrar.append(editar);
      borrar.append(eliminar);
      r.append(borrar);
      tbody.appendChild(r)
    });
    thead.appendChild(row);
  });
}

document.getElementById('showAddCliente').addEventListener('click', (event) => upCliente(event));

//mostrar añadir cliente
function upCliente(e){
  e.preventDefault();
  document.getElementById("addClienteModal").style.display = "block";
  document.querySelector(".closeModal").addEventListener('click', () => {document.getElementById("addClienteModal").style.display = "none"});
  document.getElementById("addCliente").onclick = añadirCliente
}

//añadir Cliente
function añadirCliente(){
  // Crear un objeto con los valores del formulario
  const newCustomer = {
    customer_id: document.getElementById("customer_id").value,
    company_name: document.getElementById("company_name").value,
    contact_name: document.getElementById("contact_name").value,
    contact_title: document.getElementById("contact_title").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    region: document.getElementById("region").value,
    postal_code: document.getElementById("postal_code").value,
    country: document.getElementById("country").value,
    phone: document.getElementById("phone").value,
    fax: document.getElementById("fax").value
  };
  //Enviar los datos al servidor
  fetch('/api/clientes', {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCustomer),
  })
  .then(async (response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Cliente añadido:", data);
      // Actualizar la tabla de clientes
      getClientes();
      // Cerrar el modal
      document.getElementById("addClienteModal").style.display = "none"
    })
    .catch((error) => {
      console.log("Error al añadir cliente:", error);
      alert("Error al añadir cliente");
    });
  };
  
  //borrar cliente
  function deleteCliente(id){
    fetch(`/api/clientes/${id}`, {
      method: "DELETE",
    }).then(() => {
      getClientes();
    });
  }
  
  function upadateCliente(id){
    document.getElementById("addClienteModal").style.display = "block";
    document.getElementById("customer_id").value = id;
    document.querySelector(".closeModal").addEventListener('click', () => {document.getElementById("addClienteModal").style.display = "none"});
    document.getElementById("addCliente").onclick = actualizarCliente;
  }

  function actualizarCliente(){
      // Crear un objeto con los valores del formulario
  const updateCustomer = {
    customer_id: document.getElementById("customer_id").value,
    company_name: document.getElementById("company_name").value,
    contact_name: document.getElementById("contact_name").value,
    contact_title: document.getElementById("contact_title").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    region: document.getElementById("region").value,
    postal_code: document.getElementById("postal_code").value,
    country: document.getElementById("country").value,
    phone: document.getElementById("phone").value,
    fax: document.getElementById("fax").value
  };
  //Enviar los datos al servidor
  fetch(`/api/clientes/${updateCustomer.customer_id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateCustomer),
  })
  .then(async (response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Cliente actualizado:", data);
      // Actualizar la tabla de clientes
      getClientes();
      // Cerrar el modal
      document.getElementById("addClienteModal").style.display = "none"
    })
    .catch((error) => {
      console.log("Error al añadir cliente:", error);
      alert("Error al añadir cliente");
    });
  }