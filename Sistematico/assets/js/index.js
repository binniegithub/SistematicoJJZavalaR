var addProductButton = document.getElementById("add-product");
var productTableBody = document.getElementById("listaProductos").getElementsByTagName("tbody")[0];

function addProduct(){
    let row = productTableBody.insertRow();
    let colProducto = row.insertCell(0);
    let colCantidad = row.insertCell(1);
    let colPrecio = row.insertCell(2);
    let colSubtotal = row.insertCell(3);
    let colbutton = row.insertCell(4);

    colProducto.innerHTML = document.getElementById("producto").value;
    colCantidad.innerHTML = document.getElementById("cantidad").value;
    colPrecio.innerHTML = document.getElementById("precio").value;
    colSubtotal.innerHTML = document.getElementById("cantidad").value*document.getElementById("precio").value;
    colbutton.innerHTML = "<button type='button' onclick='deleteProduct(this)'>Eliminar</button>";

}
function deleteProduct(sender){
    if(confirm("¿Desea eliminar?")){
        let rowIndex = sender.parentNode.parentNode.rowIndex;
        productTableBody.deleteRow(rowIndex -1);
    }

}
addProductButton.onclick = function(){
    addProduct();
} 


function CalTotal(){
    var table = document.getElementById("listaProductos");
            var sumVal = 0;
            for(var i = 1; i < table.rows.length; i++)
            {
                sumVal = sumVal + parseInt(table.rows[i].cells[3].innerHTML);
            }
    return sumVal;
}