const productsContainer = document.querySelector('#products-container');

// Запускаем getProducts


// Асинхронная функция получения данных из файла products.json
async function getProducts_obs() {
	// Получаем данные из products.json
	const response = await fetch('./js/products_obs.json');
	// Парсим данные из JSON формата в JS
	const productsArray = await response.json();
	// Запускаем ф-ю рендера (отображения товаров)
	renderProducts(productsArray);
};
getProducts_obs();




async function getProducts_roll() {
	// Получаем данные из products.json
	const response = await fetch('./js/products_roll.json');
	// Парсим данные из JSON формата в JS
	const productsArray = await response.json();
	// Запускаем ф-ю рендера (отображения товаров)
    

	productsContainer.innerHTML = "";


	renderProducts(productsArray);
	console.log("ROLL")
};
document.querySelector("#rolss").onclick = function(){
	getProducts_roll() ;
	
  };





  async function getProducts_sushi() {
	// Получаем данные из products.json
	const response = await fetch('./js/products_sushi.json');
	// Парсим данные из JSON формата в JS
	const productsArray = await response.json();
	// Запускаем ф-ю рендера (отображения товаров)
	

	productsContainer.innerHTML = "";



	renderProducts(productsArray);
	console.log("SUSHI")
};

  document.querySelector("#sushs").onclick = function(){
	getProducts_sushi();
	
  };





  async function getProducts_sup() {
	// Получаем данные из products.json
	const response = await fetch('./js/products_sup.json');
	// Парсим данные из JSON формата в JS
	const productsArray = await response.json();
	// Запускаем ф-ю рендера (отображения товаров)
	

    productsContainer.innerHTML = "";



	renderProducts(productsArray);
	console.log("SUP")
};
 document.querySelector("#sups").onclick = function(){
	getProducts_sup();
	
 };








 async function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = `<div class="col-md-6">
						<div class="card mb-4" data-id="${item.id}">
							<img class="product-img" src="img/roll/${item.imgSrc}" alt="">
							<div class="card-body text-center">
								<h4 class="item-title">${item.title}</h4>
								<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт.</small></p>

								<div class="details-wrapper">

									<!-- Счетчик -->
									<div class="items counter-wrapper">
										<div class="items__control" data-action="minus">-</div>
										<div class="items__current" data-counter>1</div>
										<div class="items__control" data-action="plus">+</div>
									</div>
									<!-- // Счетчик -->

									<div class="price">
										<div class="price__weight">${item.weight}г.</div>
										<div class="price__currency">${item.price} ₽</div>
									</div>
								</div>

								<button data-cart type="button" class="btn btn-block btn-outline-warning">
									+ в корзину
								</button>

							</div>
						</div>
					</div>`;
       productsContainer.insertAdjacentHTML('beforeend', productHTML);

       // productsContainer.innerHTML = productHTML;

    });
}
