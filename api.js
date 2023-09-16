const tablaCompania  = document.getElementById("tablaCompania");
const quantity  = document.getElementById("quantity");

document.getElementById("busqueda").addEventListener("click", listarcompanias);


    async function listarcompanias(){
        var url = 'https://fakerapi.it/api/v1/companies?'
        var quantityUrl = "_quantity=" + quantity.value
        url += quantityUrl
        const companieData = await fetch(url, {
          headers: {
            'Accept': 'application/json'
          }
        });
        const dataObj = await companieData.json();
        tablaCompania.innerHTML = recorrerCompanias(dataObj.data);
        
    }

    function recorrerCompanias(jsonData){
var nombres = '<table class="table"><tr><thead class="thead-dark"><th>Nombre</th><th>Pais</th><th>Website</th><th>Email</th></tr></thead>'
        for(i=0;i<jsonData.length;i++){
            nombres += '<tr><td>' +jsonData[i].name + '</td>';
            nombres += '<td>' +jsonData[i].country + '</td>';
            nombres += '<td>' +jsonData[i].website + '</td>';
            nombres += '<td>' +jsonData[i].email + '</td > </tr> ';


        }
        nombres += '</table>';
        return nombres;
    }
    
