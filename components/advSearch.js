// document.querySelector('.advSearch').addEventListener('mouseover',() =>{
import './style.css'
function advSearch(iphones) {
  const menuAdvSearch = document.createElement('div')
  menuAdvSearch.classList.add('menuAdvSearch')
  menuAdvSearch.appendChild(sellerFilter(iphones))
  menuAdvSearch.appendChild(priceFilter())
  return menuAdvSearch
}

export function sellerFilter(iphones) {
  const sellers = new Set(iphones.map((iphone) => iphone.seller))
  const selectMenu = document.createElement('select')
  selectMenu.classList.add('selectMenu')
  const shop = document.createElement('option')
  shop.textContent = '----'
  selectMenu.appendChild(shop)
  for (const seller of sellers) {
    const shop = document.createElement('option')
    shop.textContent = seller
    selectMenu.appendChild(shop)
  }
  return selectMenu
}
export function priceFilter() {
  // const prices = iphones.map(iphone => iphone.price)
  const priceFilterContainer = document.createElement('div')
  priceFilterContainer.classList.add('priceSearch')
  const search = document.createElement('input')
  search.setAttribute('type', 'text')
  search.setAttribute('placeholder', 'Buscar')
  search.classList.add('searchPrice')
  const go = document.createElement('button')
  go.textContent = 'Go'
  go.classList.add('goButton')
  priceFilterContainer.appendChild(search)
  priceFilterContainer.appendChild(go)
  return priceFilterContainer
}

export function clearResults() {
  // const clearResultsContainer = document.createElement('div')
  const clearResultsButton = document.createElement('button')
  clearResultsButton.textContent = 'Clear'
  // clearResultsContainer.classList.add('clearDiv')
  clearResultsButton.classList.add('clearButton')
  // clearResultsContainer.appendChild(clearResultsButton)
  return clearResultsButton
}
export default advSearch
