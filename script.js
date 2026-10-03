let products=[];
let selected=null;
fetch("products.json")
  .then(r => r.json())
  .then(data => { products=data; render(); })
  .catch(() => { products=[]; render(); });

function render(){
 const q=document.getElementById("search").value.toLowerCase();
 const box=document.getElementById("products");
 box.innerHTML="";
 products.filter(p=>(p.title+" "+p.country).toLowerCase().includes(q)).forEach((p,i)=>{
   box.innerHTML+=`
   <article class="card">
     <div class="top">
       <div class="flag">${p.flag}</div>
       <div class="status">${p.status}</div>
     </div>
     <div class="discount">🔥 SPECIAL DISCOUNT</div>
     <h2>${p.title}</h2><div style="font-size:12px;color:#61ffd0;margin-top:4px">✦ Featured Listing</div>
     <div class="country">${p.flag} ${p.country}</div>
     <div class="old-price">₹199</div>
     <div class="price">₹${p.price} <small>FINAL PRICE</small></div>
     <div class="stock-note">● AVAILABLE STOCK • </div>
     <button class="buy" onclick="openModal(${i})">Buy now</button>
   </article>`;
 });
}
function openModal(i){
 selected=products[i];
 document.getElementById("mTitle").textContent=selected.title;
 document.getElementById("mInfo").textContent=selected.info;
 document.getElementById("modal").classList.add("show");
}
function closeModal(){document.getElementById("modal").classList.remove("show")}
function contact(){
 const telegramUsername = "Hunterxraj4"; // Change this username if needed
 const message = `Hello! I Buy this whatshapp account :%0A%0A${selected.title}%0A🌍 Country: ${selected.country}%0A💰 Price: ₹${selected.price}`;
 window.location.href = `https://t.me/${telegramUsername}?text=${message}`;
}
render();
