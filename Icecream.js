const customerName = document.querySelector('#name');
const orderResult = document.querySelector('.orderReady');
const customerTopping = document.querySelector('#topping');
const customerFlavour = document.querySelector('#flavor');
const submit = document.querySelector('button');
const cone = document.querySelector('.icecreamCone');
const scoop = document.querySelector('.addScoop');
const topping = document.querySelector('.toppings');
const topping1 = document.querySelector('.addTopping1');
const topping2 = document.querySelector('.addTopping2');
const topping3 = document.querySelector('.addTopping3');
const topping4 = document.querySelector('.addTopping4');
const topping5 = document.querySelector('.addTopping5');
const topping6 = document.querySelector('.addTopping6');
const topping7 = document.querySelector('.addTopping7');
const topping8 = document.querySelector('.addTopping8');

function create(){
    return document.createElement('p');
}

const greetCustomer = create();
const preparingScoop = create();
const preparingTopping = create();
const customerToppingChoice = create();
const customerFlavourChoice = create();
const orderComplete = create();

customerToppingChoice.classList.add('display');
customerFlavourChoice.classList.add('display');
greetCustomer.classList.add('result');
preparingScoop.classList.add('orderText');
preparingTopping.classList.add('orderText');
orderComplete.classList.add('result');
;

function greeting() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            orderResult.style.visibility = 'visible'
            cone.style.visibility = 'visible'
            greetCustomer.innerText= `Hello ${customerName.value}`;
            orderResult.append(greetCustomer);
            resolve();
            }, 10)
        })
    }

    function selectedFlavour() {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                const s = customerFlavour.selectedIndex;
                customerFlavourChoice.innerText= `Your ice-cream flavour is: ${customerFlavour[s].innerText}`;
                orderResult.append(customerFlavourChoice);
                resolve();
                }, 1000)
            })
    }

    function prepareScoop() {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                preparingScoop.innerText= 'Scooping your ice-cream...';
                orderResult.append(preparingScoop);
                resolve();
                }, 1000)
            })
        }

function addScoop() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            scoop.style.visibility = 'visible';
            const s = customerFlavour.selectedIndex;
    if(customerFlavour[s].innerText === 'Chocolate'){
        scoop.style.backgroundColor = '#513718'
    }
    else if(customerFlavour[s].innerText === 'Strawberry'){
        scoop.style.backgroundColor = '#bb719f'
    }
    else{
        scoop.style.backgroundColor = 'white'
    }
            resolve();
            }, 2000)
        })
}

function selectedTopping() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const i = customerTopping.selectedIndex;
            customerToppingChoice.innerText = `Your topping is: ${customerTopping[i].innerText}`;
            orderResult.append(customerToppingChoice);
            resolve();
            }, 1000)
        })
    }

    function prepareTopping() {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                preparingTopping.innerText= 'Adding your topping...';
                orderResult.append(preparingTopping);
                resolve();
                }, 1000)
            })
        }

const toppings = [topping1, topping2, topping3, topping4, topping5, topping6, topping7, topping8];

const colors = ['#eba910', '#e06fdc', '#de7331', '#258f9d', '#24b85a','#bb2424', '#d6cde3', '#3443b6'];

function addTopping() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const i = customerTopping.selectedIndex;
            topping.style.visibility = 'visible';
            if(customerTopping[i].innerText === 'Fudge'){
                for (let t of toppings) {
                t.style.backgroundColor = '#6b5521'
                }
            }
            else if(customerTopping[i].innerText === 'Nuts'){
                for (let t of toppings) {
                    t.style.backgroundColor = '#e2ce9e'
                }
            }
            else{
                for (let i=0; i< colors,length; i++){
                    toppings[i].style.backgroundColor = colors[i]
                }
            }
            resolve();
            }, 2000)
        })
}

function complete() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            orderComplete.innerText= 'Your ice-cream is ready. Enjoy!';
            orderResult.append(orderComplete);
            resolve();
            }, 1000)
        })
    }




const orderIcecream = async function() {
    try {
        await greeting();
        await selectedFlavour();
        await prepareScoop();
        await addScoop();
        await selectedTopping();
        await prepareTopping();
        await addTopping();
        complete()
    }
    catch {}
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    orderIcecream()
})










