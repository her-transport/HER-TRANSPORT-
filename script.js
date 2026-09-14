const WA="6283172176645";
const menuBtn=document.getElementById("menuBtn");
const navMenu=document.getElementById("navMenu");
menuBtn.addEventListener("click",()=>navMenu.classList.toggle("open"));
document.querySelectorAll("#navMenu a").forEach(a=>a.addEventListener("click",()=>navMenu.classList.remove("open")));
const dateInput=document.getElementById("tanggal");
const now=new Date();
dateInput.min=new Date(now.getTime()-now.getTimezoneOffset()*60000).toISOString().slice(0,10);
document.getElementById("year").textContent=new Date().getFullYear();

document.getElementById("bookingForm").addEventListener("submit",function(e){
  e.preventDefault();
  const nama=document.getElementById("nama").value.trim();
  const wa=document.getElementById("wa").value.trim();
  const jemput=document.getElementById("jemput").value.trim();
  const tujuan=document.getElementById("tujuan").value.trim();
  const tanggal=document.getElementById("tanggal").value;
  const jam=document.getElementById("jam").value;
  const layanan=document.getElementById("layananSelect").value;
  const catatan=document.getElementById("catatan").value.trim();
  const text=`Halo HER Transport 👋%0A%0ASaya ingin booking:%0A%0A*Nama:* ${encodeURIComponent(nama)}%0A*No. WA:* ${encodeURIComponent(wa)}%0A*Layanan:* ${encodeURIComponent(layanan)}%0A*Jemput:* ${encodeURIComponent(jemput)}%0A*Tujuan:* ${encodeURIComponent(tujuan)}%0A*Tanggal:* ${encodeURIComponent(tanggal)}%0A*Jam:* ${encodeURIComponent(jam)}%0A*Catatan:* ${encodeURIComponent(catatan||"-")}%0A%0AMohon konfirmasi ketersediaan dan tarif. Terima kasih.`;
  window.open(`https://wa.me/${WA}?text=${text}`,"_blank");
});
