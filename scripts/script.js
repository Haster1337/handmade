document.getElementById('btnProduct').onclick = function() {
    calcCost();
};

function calcCost() {
    let selectProduct = document.getElementById('selectProduct').value;
    let quantityProduct = document.getElementById('quantityProduct').value;
    let total = selectProduct * quantityProduct;
    document.getElementById('priceProduct').innerHTML = `${total}$`;
    document.getElementById('infoProduct').style.display = 'block';

    if(selectProduct == 0 || quantityProduct == 0) {
        document.getElementById('infoProduct').style.display = 'none';
        alert('Укажите значение');
        return;
    }
}