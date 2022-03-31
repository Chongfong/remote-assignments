function avg(data){
    let total = 0;
    let quantity = data.size;
    for (let i = 0; i < quantity; i++){
        total+= data.products[i].price;
    }
    return(total/quantity);


    // your code here
    }
    avg({
    size:3,
    products:[
    {
    name:"Product 1",
    price:100
    },
    {
    name:"Product 2",
    price:700
    },
    {
    name:"Product 3",
    price:250
    }
    ]
    }); // show the average price of all products