document.addEventListener('DOMContentLoaded', (event) =>{
    //alert(document.getElementById('num1'));
    //add another event for the btnCalculate
    const btnCalculate = document.getElementById('btnCalculate');

    //when you click this button, add those two numbers together
    btnCalculate.addEventListener('click', (event) => {
        event.preventDefault( ); //disable refresh of form
        calculate();
    });
});

function calculate(){
    //hold the value of the element contents
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');

    //these will return as string concatenation unless they are parsed to an Int
    const sum = parseInt(num1.value) + parseInt(num2.value);

    const h2 = document.getElementById('result');
    h2.innerText = sum;
}
