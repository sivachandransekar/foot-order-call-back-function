let btn=document.getElementById("click");

btn.addEventListener("click",(e)=>{
  e.preventDefault();
  let myname=document.getElementById("Name").value;
  console.log(myname);
  let food=document.getElementById("food").value;
  console.log(food);
  let qty=document.getElementById("qty").value;
  console.log(qty);
  let amount=qty*100;

  let order=(name,food,price)=>{
    alert(`${name} order the ${food}`);
    alert(`The app notes down the order`)

    setTimeout(()=>{
      // preparefood(food);
      alert(`PizzaHub Prepare the ${food}, and it is ready after a while`);

      setTimeout(()=>{
        // confirmfood(food);
        alert(`Confirming the ${food} is on the way.The total bill amount is ${price}`);

        setTimeout(()=>{
          // ordersuccess();
          alert(`Your order delivered successfully`);

        },10000)
    
      },10000)

    },10000)
  }

  order(myname,food,amount)
})


// let prepare=(food)=>{
//   alert(`PizzaHub Prepare the ${food}, and it is ready after a while`)
// }

// let confirm=(food)=>{
//   alert(`Confirming the ${food} is on the way`)
// }

// let success=()=>{
//   alert(`Your order delivered successfully`);
// }