/**
 * Created by marcinra on 10/18/13.
 */
var address, headText2, fixed_slogan_1, fixed_slogan_2;
var init = function(){
    address = '142m1MpXHhymF4aASiWwYohe1Y55v5BQwc';
    headText2= document.getElementsByClassName('headText2')[0];
    headText2.hidden = true;
    fixed_slogan_1 = document.getElementById('fixed_slogan_1');
    fixed_slogan_2 = document.getElementById('fixed_slogan_2');
    fixed_slogan_2.hidden = true;
}


function isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

var validateValue = function(temp){
    if(!isNumber(temp.value)){
        temp.value='0.00';
        alert("can't read value it's not a number");
    }
}

var runAnimations = function(success, transaction_id){
    var element = document.getElementsByClassName('back_img')[0];
        element.className +=(' animation');
        headText2.hidden = false;
        fixed_slogan_1.hidden = true;
        fixed_slogan_2.hidden = false;
    var head_elements = document.getElementsByClassName('headText1');
        for(o in head_elements) head_elements[o].hidden = true;
}

var send = function(){
        var amount_val = document.getElementById('in_cash');
        var amount = bitcoin.btc_string_to_satoshi(amount_val.value);
        if(amount!=0){
            bitcoin.sendMoney(address, amount, runAnimations);
        }
    }

