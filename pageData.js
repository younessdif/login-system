let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let create = document.getElementById("create");
let search = document.getElementById("search");
let searchTitle = document.getElementById("searchtitle");
let searchCategory = document.getElementById("searchcategory");
let tbody = document.getElementById("tbody");

//get total
function getTotal() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.background = "green";
  } else {
    total.innerHTML = "";
    total.style.background = "";
  }
}

//create
let proData;
if (localStorage.product != null) {
  proData = JSON.parse(localStorage.product);
} else {
  proData = [];
}
function creatData() {
  const objData = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value
  };












  if (title.value != ""
     && price.value != ""
     && objData.count < 100) {
    if (mode === "create") {
      if (objData.count > 1) {
        for (let i = 0; i < objData.count; i++) {
          proData.push(objData);
        }
      } else {
        proData.push(objData);
      }
    } else {
      mode = "create";
      create.style.background = "";
      create.innerHTML = "create";
      count.style.display = "block";
      proData[tm] = objData;
    }
    clear();
  }








  localStorage.setItem("product", JSON.stringify(proData));
  showData();
}

//read
function showData() {
  getTotal();
  var table = "";
  if (proData.length >= 1) {
    for (let i = 0; i < proData.length; i++) {
      table += `
       <tr>
        <td>${i + 1}</th>
        <td>${proData[i].title}</td>
        <td>${proData[i].price}</td>
        <td>${proData[i].taxes}</td>
        <td>${proData[i].ads}</td>
        <td>${proData[i].discount}</td>
        <td>${proData[i].count}</td>
        <td>${proData[i].category}</td>
        <td><button onclick='updateData(${i})' id='update'>update</button></td>
        <td><button onclick='deleteData(${i})' id='delete'>delete</button></td>
      </tr>
    `;
    }
  }
  tbody.innerHTML = table;
  if (proData.length >= 1) {
    document.getElementById("spr").innerHTML = `
    <button id='da' onclick='deleteAll()'>DELETEALL :(${proData.length})</button>`;
  } else {
    document.getElementById("spr").innerHTML = "";
  }
}
showData();

//clear
function clear() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  getTotal();
  count.value = "";
  category.value = "";
}
clear();
//update
var mode = "create";
var tm;
function updateData(i) {
  title.value = proData[i].title;
  price.value = proData[i].price;
  taxes.value = proData[i].taxes;
  ads.value = proData[i].ads;
  discount.value = proData[i].discount;
  getTotal();
  count.style.display = "none";
  category.value = proData[i].category;
  create.innerHTML = "update";
  create.style.background = "rgb(12, 12, 182)";
  mode = "update";
  tm = i;
  scroll({
    top: 0.1,
    behavior: "smooth"
  });
}
//delete
function deleteData(i) {
  proData.splice(i, 1);
  localStorage.product = JSON.stringify(proData);
  showData();
}
//deleteAll
function deleteAll() {
  proData.splice(0);
  localStorage.clear();
  showData();
}
//search
function searchData(value) {
  let table = "";
  if (moodsearch == "title") {
    for (let i = 0; i < proData.length; i++) {
      if (proData[i].title.includes(value)) {
        table += `
       <tr>
        <td>${i + 1}</th>
        <td>${proData[i].title}</td>
        <td>${proData[i].price}</td>
        <td>${proData[i].taxes}</td>
        <td>${proData[i].ads}</td>
        <td>${proData[i].discount}</td>
        <td>${proData[i].count}</td>
        <td>${proData[i].category}</td>
        <td><button onclick='updateData(${i})' id='update'>update</button></td>
        <td><button onclick='deleteData(${i})' id='delete'>delete</button></td>
      </tr>
    `;
      }
    }
  } else {
    for (let i = 0; i < proData.length; i++) {
      if (proData[i].category.includes(value)) {
        table += `
       <tr>
        <td>${i + 1}</th>
        <td>${proData[i].title}</td>
        <td>${proData[i].price}</td>
        <td>${proData[i].taxes}</td>
        <td>${proData[i].ads}</td>
        <td>${proData[i].discount}</td>
        <td>${proData[i].count}</td>
        <td>${proData[i].category}</td>
        <td><button onclick='updateData(${i})' id='update'>update</button></td>
        <td><button onclick='deleteData(${i})' id='delete'>delete</button></td>
      </tr>
    `;
      }
    }
  }
  tbody.innerHTML = table;
}

//btnsearch
var moodsearch = "title";
function btnSearch(id) {
  if (id === "searchTitle") {
    moodsearch = "title";
    search.placeholder = "search by title";
  } else {
    moodsearch = "category";
    search.placeholder = "search by category";
  }
  search.focus();
  search.value = "";
  showData();
}
//clean data
