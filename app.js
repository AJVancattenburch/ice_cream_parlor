const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 5,
  quantity:0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 5,
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 5,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2,
  quantity: 0
}]

const containers = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  quantity: 0
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  quantity: 0
}]


let clickCount = 0



function buyCookieDough() {
  let foundFlavor = iceCream[0]
  foundFlavor.quantity++
  console.log(foundFlavor)

  drawCart()
}

function buyVanilla() {
  let foundFlavor = iceCream[1]
  foundFlavor.quantity++
  console.log(foundFlavor)
    drawCart()
}

function buyStrawberry() {
  let foundFlavor = iceCream[2]
  foundFlavor.quantity++
  console.log(foundFlavor)
    drawCart()
}

function buySprinkles() {
  let foundFlavor = toppings[0]
  foundFlavor.quantity++
  console.log(foundFlavor)
    drawCart()
    drawTotal()
}

function buyChips() {
  let foundFlavor = toppings[1]
  foundFlavor.quantity++
  console.log(foundFlavor)
    drawCart()
}

function buyCone() {
  let foundFlavor = containers[0]
  foundFlavor.quantity++
  console.log(foundFlavor)
    drawCart()
    drawTotal()
}

function buyBowl() {
  let foundFlavor = containers[1]
  foundFlavor.quantity++
  console.log(foundFlavor)

  drawCart()
  drawTotal()
}


function returnCookieDough() {
  let foundFlavor = iceCream[0]
  foundFlavor.quantity--
  if (foundFlavor.quantity == -1) {
    foundFlavor.quantity = 0
  }
  console.log(foundFlavor)
}

function returnVanilla() {
  let foundFlavor = iceCream[1]
  foundFlavor.quantity--
  if (foundFlavor.quantity == -1) {
    foundFlavor.quantity = 0
  }
  console.log(foundFlavor)
}

function returnStrawberry() {
  let foundFlavor = iceCream[2]
  foundFlavor.quantity--
  if (foundFlavor.quantity == -1) {
    foundFlavor.quantity = 0
  }
  console.log(foundFlavor)
}

function returnSprinkles() {
  let foundFlavor = toppings[0]
  foundFlavor.quantity--
  if (foundFlavor.quantity == -1) {
    foundFlavor.quantity = 0
  }
  console.log(foundFlavor)

  
  drawCart()
  drawTotal()
}

function returnChips() {
  let foundFlavor = toppings[1]
  foundFlavor.quantity--
  if (foundFlavor.quantity == -1) {
    foundFlavor.quantity = 0
  }
  console.log(foundFlavor)
}

function returnCone() {
  let foundFlavor = containers[0]
  foundFlavor.quantity--
  if (foundFlavor.quantity == -1) {
    foundFlavor.quantity = 0
  }
  console.log(foundFlavor)
}

function returnBowl() {
  let foundFlavor = containers[1]
  foundFlavor.quantity--
  if (foundFlavor.quantity == -1) {
    foundFlavor.quantity = 0
  }
  console.log(foundFlavor)
}


function drawCart() {

  console.log("drawing cart")
  let total = 0
  let template = ''
  iceCream.forEach(i => {
      if (i.quantity > 0 && i.name == "Cookie Dough") {
        total = i.quantity * i.price
          template += `

                      <div class="h-100 m-1">
                        <img src="https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg" height="50px" width="50px" class="rounded-2" alt=Cookie Dough>         
                        <br>
                        ${i.name}
                        <br>
                        Qty:${i.quantity} $${total}
                      </div>
                      `
                        } else if ( i.quantity > 0 && i.name == "Vanilla") {
                          template += `
                                    <div class="m-1">
                                      <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg" height="50px" width="50px" class="rounded-2" alt=Vanilla>
                                      <br>
                                      ${i.name}
                                      <br>
                                      Qty:${i.quantity} $${total}
                                    </div>`
                        } else if ( i.quantity > 0 && i.name == "Strawberry") {
                          template += `
                                    <div class="m-1">
                                      <img src="https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg" height="50px" width="50px" class="rounded-2" alt=Strawberry>
                                      <br>
                                      ${i.name}
                                      <br>
                                      Qty:${i.quantity} $${total}
                                    </div>`
                        }
                      }
                    )




  let template2 = ''
  let totalToppings = 0
  toppings.forEach(t => {
      if (t.quantity > 0 && t.name == "Sprinkles") {
        totalToppings = t.quantity * t.price
          template2 += `
                      <div class="m-1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg" height="50px" width="50px" class="rounded-2" alt="Sprinkles">
                        <br>
                        ${t.name}
                        <br>
                        Qty:${t.quantity} $${totalToppings}
                      </div>`
          } else if ( t.quantity > 0 && t.name == "Choc Chips") {
            template2 += `
                      <div class="m-1">
                        <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360" height="50px" width="50px" class="rounded-2" alt="Choc Chips">
                        <br>
                        ${t.name}
                        <br>
                        Qty:${t.quantity} $${totalToppings}
                      </div>`
                    }
                  }
                )






  let template3 = ''
  let totalContainers = 0
  containers.forEach(c => {
    if ( c.quantity > 0 && c.name == "Waffle Cone") {
      totalContainers = c.quantity * c.price
      template3 += `
                    <div class="m-1">
                      <img src="https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg" height="50px" width="50px" class="rounded-2" alt="Waffle Cone">
                      <br>
                      ${c.name}
                      <br>
                      Qty:${c.quantity} $${totalContainers}
                    </div>`
        } else if ( c.quantity > 0 && c.name == "Waffle Bowl") {
          template3 += `
                    <div class="m-1">
                      <img src="http://images.wbmason.com/350/L_JOY66050.jpg" height="50px" width="50px" class="rounded-2" alt="Waffle Bowl">
                      <br>
                      ${c.name}
                      <br>
                      Qty:${c.quantity} $${totalContainers}
                    </div>
                    <button onclick="clearCart()" class="btn btn-danger">Clear Cart</button>`
                  }
                }
              )

  document.getElementById("cart").innerHTML = template + template2 + template3

  drawTotal()
  
console.log("drawing cart")

}

function drawTotal() {

  let total = 0
  iceCream.forEach(i => i.quantity > 0 ? total += i.quantity * i.price : total += 0)
  console.log(total, 'total');
  document.getElementById('total').innerText = total.toString()

  let totalToppings = 0
  toppings.forEach(t => t.quantity > 0 ? totalToppings += t.quantity * t.price : totalToppings += 0)
  console.log(totalToppings, 'totalToppings');
  document.getElementById('totalToppings').innerText = totalToppings.toString()

  let totalContainers = 0
  containers.forEach(c => c.quantity > 0 ? totalContainers += c.quantity * c.price : totalContainers += 0)
  console.log(totalContainers, 'totalContainers');
  document.getElementById('totalContainers').innerText = totalContainers.toString()

}


function clearCart() {

  document.getElementById("cart").innerHTML = ""

}