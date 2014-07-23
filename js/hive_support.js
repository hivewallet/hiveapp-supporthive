var hiveInfo;
var defaultAmountSatoshi = 5000000;
var donationAddress = '1HLRg9C1GsfEVH555hgcjzDeas14jen2Cn';

var init = function() {
  $('.headText2').hide();
  $('#fixed_slogan_2').hide();
  bitcoin.getSystemInfo(function(info) {
    hiveInfo = info;
    $('.preferredBitcoinFormat').text(hiveInfo.preferredBitcoinFormat);
  });
  $('#in_cash').val(bitcoin.userStringForSatoshi(defaultAmountSatoshi));
  $('#send').click( send );
}

var send = function() {
  var userAmountSatoshi = bitcoin.satoshiFromUserString($('#in_cash').val());
  if (userAmountSatoshi > 0){
      bitcoin.sendMoney(donationAddress, userAmountSatoshi, runAnimations);
  }
}

var runAnimations = function(success, transaction_id) {
  if (success){
    $('.back_img').addClass('animation');
    $('.headText1').hide();
    $('.headText2').show();
    $('#fixed_slogan_1').hide();
    $('#fixed_slogan_2').show();
  }
}