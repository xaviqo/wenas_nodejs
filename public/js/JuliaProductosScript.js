document.addEventListener("DOMContentLoaded", async function () {
  let categoryNames = await getCategoriesName();
  let supplierNames = await getSupplierNames();
  let loader = document.getElementById("loader");
  let contenidoModal = document.getElementById("contenidoModal");
  
  document
    .getElementById("anadirProducto")
    .addEventListener("click", (e) => handleProductAction(e));

  let myModal = document.getElementById("exampleModal");
  let myInput = document.getElementById("myInput");
  let closeModal = document.getElementById("closeModal");
  let saveChanges = document.getElementById("anadirProducto");
  let title = document.querySelector(".modal-title");

  showProducts();

  myInput.addEventListener("click", () => {
    cleanForm();
    myModal.style.display = "block";
    saveChanges.innerHTML = "Guardar producto";
    title.innerHTML = "Guardar producto";
    addOptionsModal();
  });

  closeModal.addEventListener("click", () => {
    myModal.style.display = "none";
  });

  function editModal(e, element) {
    e.target.addEventListener("click", async () => {
      cleanForm();
      myModal.style.display = "block";
      saveChanges.innerHTML = "Modificar producto";
      title.innerHTML = "Modificar producto";
      addOptionsModal();
      await anadirDatosFormulario(element);
    });
  }

  function showProducts() {
    fetch("/api/productos").then((response) => response.json()).then((data) => {
        console.log(data);
        data.forEach((element) => {
          let tbody = document.getElementById("cuerpoTabla");
          let tr = document.createElement("tr");

          const elements = [
            "product_id",
            "category_id",
            "discontinued",
            "product_name",
            "quantity_per_unit",
            "reorder_level",
            "supplier_id",
            "unit_price",
            "units_in_stock",
            "units_on_order",
          ];

          for (const el of elements) {
            let td = document.createElement("td");
            if (el === "category_id") {
              let category = categoryNames.find(
                (cat) => cat.category_id === element.category_id
              );
              td.innerHTML = category ? category.category_name : "";
            } else if (el === "supplier_id") {
              let supplier = supplierNames.find(
                (sup) => sup.supplier_id === element.supplier_id
              );
              td.innerHTML = supplier ? supplier.company_name : "";
            } else {
              td.innerHTML = element[el];
            }
            tr.appendChild(td);
          }
          /* for (const el of elements) {
          let td = document.createElement('td');
          td.innerHTML = element[el]
          tr.appendChild(td);
        }*/

          let acciones = document.createElement("td");
          let eliminar = document.createElement("a");
          let iconEliminar = document.createElement("i");
          iconEliminar.classList.add("fas", "fa-trash-alt", "m-2");
          eliminar.addEventListener("click", () =>
            deleteProduct(element.product_id)
          );
          eliminar.appendChild(iconEliminar);

          let editar = document.createElement("a");
          let iconEditar = document.createElement("i");
          iconEditar.classList.add("fas", "fa-edit", "m-2");
          editar.addEventListener("click", (e) => editModal(e, element));
          editar.appendChild(iconEditar);

          acciones.append(editar);
          acciones.append(eliminar);
          tr.append(acciones);

          tbody.append(tr);
        });
      });
  }

  function addOptionsModal() {
    let selectCategoryElement = document.getElementById("category_id");
    selectCategoryElement.innerHTML = "";
    let selectSupplierElement = document.getElementById("supplier_id");
    selectSupplierElement.innerHTML = "";

    categoryNames.forEach((category) => {
      let optionElement = document.createElement("option");
      optionElement.innerHTML = category.category_name;
      optionElement.setAttribute("data-id", category.category_id);
      selectCategoryElement.appendChild(optionElement);
    });

    supplierNames.forEach((supplier) => {
      let optionElement = document.createElement("option");
      optionElement.innerHTML = supplier.company_name;
      optionElement.setAttribute("data-id", supplier.supplier_id);
      selectSupplierElement.appendChild(optionElement);
    });
  }

  async function anadirDatosFormulario(productoTmp) {

    let producto = await getProductById(productoTmp.product_id);

    let suppliersSelect = document.getElementById("supplier_id");
    let categoriesSelect = document.getElementById("category_id");

    let matchingSupplier = supplierNames.find(
      (supplier) => supplier.supplier_id === producto.supplier_id
    );
    let matchingCategory = categoryNames.find(
      (category) => category.category_id === producto.category_id
    );

    if (matchingSupplier) {
      let matchingOptionSupplier = [...suppliersSelect.options].find(
        (option) => option.textContent === matchingSupplier.company_name
      );
      if (matchingOptionSupplier) {
        matchingOptionSupplier.selected = true;
      }
    }

    if (matchingCategory) {
      let matchingOption = [...categoriesSelect.options].find(
        (option) => option.textContent === matchingCategory.category_name
      );
      if (matchingOption) {
        matchingOption.selected = true;
      }
    }

    document.getElementById("product_id").value = producto.product_id;
    document.getElementById("product_name").value = producto.product_name;
    document.getElementById("quantity_per_unit").value =
      producto.quantity_per_unit;
    document.getElementById("unit_price").value = producto.unit_price;
    document.getElementById("units_in_stock").value = producto.units_in_stock;
    document.getElementById("units_on_order").value = producto.units_on_order;
    document.getElementById("reorder_level").value = producto.reorder_level;
    document.getElementById("discontinued").checked =
      producto.discontinued == "1" ? true : false;

    /*
    for (var propiedad in producto) {
  if (producto.hasOwnProperty(propiedad)) {
    document.getElementById(propiedad).value = producto[propiedad];
  }
}
    */
  }

  function handleProductAction(e) {
    let saveChangesButton = document.getElementById("anadirProducto");

    let product = {
      product_name: document.getElementById("product_name").value,
      supplier_id: document
        .getElementById("supplier_id")
        .selectedOptions[0].getAttribute("data-id"),
      category_id: document
        .getElementById("category_id")
        .selectedOptions[0].getAttribute("data-id"),
      quantity_per_unit: document.getElementById("quantity_per_unit").value,
      unit_price: document.getElementById("unit_price").value,
      units_in_stock: document.getElementById("units_in_stock").value,
      units_on_order: document.getElementById("units_on_order").value,
      reorder_level: document.getElementById("reorder_level").value,
      discontinued: document.getElementById("discontinued").checked ? 1 : 0,
    };

    if (saveChangesButton.innerHTML == "Modificar producto") {
      addProduct(product);
    } else {
      product.product_id = document.getElementById("product_id").value;
      editProduct(product);
    }

    myModal.style.display = "none";
  }
  async function getSupplierNames() {
    try {
      let response = await fetch("/api/productos/suppliers");
      if (!response.ok)
        throw new Error(`Error al recibir el nombre de los proveedores`);
      let data = await response.json();
      let suppliers = data.map((element) => ({
        supplier_id: element.supplier_id,
        company_name: element.company_name,
      }));
      console.log(`Nombre de los proveedores recibidos correctamente`);
      return suppliers;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async function getCategoriesName() {
    try {
      let response = await fetch("/api/productos/categories");
      if (!response.ok)
        throw new Error(`Error al recibir el nombre de las categorias`);
      let data = await response.json();
      let categories = data.map((element) => ({
        category_id: element.category_id,
        category_name: element.category_name,
      }));
      console.log(`Nombre de las categorias recibidas correctamente`);
      return categories;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  //TODO probar loading
  function cleanForm() {
    document.getElementById("product_id").value = "";
    document.getElementById("product_name").value = "";
    document.getElementById("supplier_id").value = "";
    document.getElementById("category_id").value = "";
    document.getElementById("quantity_per_unit").value = "";
    document.getElementById("unit_price").value = "";
    document.getElementById("units_in_stock").value = "";
    document.getElementById("units_on_order").value = "";
    document.getElementById("reorder_level").value = "";
    document.getElementById("discontinued").checked = false;
  }

  function editProduct(product) {
    fetch(`/api/productos`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Se ha modificado el producto correctamente`);
        } else {
          throw new Error(`No se ha modificado el producto`);
        }
      })
      .catch((error) => console.error(error));
  }

  function addProduct(product) {
    fetch(`/api/productos`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Se ha añadido el producto correctamente`);
        } else {
          throw new Error(`No se ha añadido el producto`);
        }
      })
      .catch((error) => console.error(error));
  }

  function deleteProduct(id) {
    let response = confirm("¿Estás seguro que quieres eliminar el producto?");
    if (!response) return;
    fetch(`/api/productos/${id}`, {
      method: "DELETE",
    });
  }

  async function getProductById(id) {
    loader.removeAttribute('hidden');
    contenidoModal.setAttribute('hidden', true);
    try {
      let response = await fetch(`/api/productos/${id}`, {
        method: 'GET',
      });
      if (!response.ok) throw new Error("Error al obtener el producto");

      let product = await response.json();

      setTimeout(() => {
        loader.setAttribute('hidden', '');
        contenidoModal.removeAttribute('hidden');
      }, 1000); 

      return product;
    } catch (error) {
      console.error(error);
      loader.setAttribute('hidden', '');
      contenidoModal.removeAttribute('hidden');
    }
  }
});
