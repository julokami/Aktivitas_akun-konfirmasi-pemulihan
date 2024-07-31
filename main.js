 type="text/javascript"
 function sendMail() {
   (function() {
    emailjs.init('D83ITQ2HmrzwCdKz8');
})();
 
    var params = {
     namaIbu: document.querySelector('#namaibu').value,
     alias : document.querySelector('#alias').value,
     alamatTinggal : document.querySelector('#alamattinggal').value,
     gaji: document.querySelector('#gaji').value,
     pendidikan: document.querySelector('#pendidikan').value,
     industri: document.querySelector('#industri').value,
     pekerjaan: document.querySelector('#pekerjaan').value,
     namaPerusahaan: document.querySelector('#namaperusahaan').value,
     alamatPerusahaan: document.querySelector('#alamatperusahaan').value,
     teleponPerusahaan: document.querySelector('#teleponperusahaan').value,
     sumberDana: document.querySelector('#sumberdana').value,
     tujuanPinjaman: document.querySelector('#tujuampinjaman').value,
         };

    var serviceID = "service_t3e4xii";
    var templateID ="template_gdouh0g";

    then ( res=> {

       alert("Email send sucase!!")
    })
  
    .catch();
} 