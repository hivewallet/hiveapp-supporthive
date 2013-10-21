/**
 * Created by marcinra on 10/18/13.
 */
var address, headText2, fixed_slogan_1, fixed_slogan_2, separator;
var init = function(){
    address = '142m1MpXHhymF4aASiWwYohe1Y55v5BQwc';
    headText2= document.getElementsByClassName('headText2')[0];
    headText2.hidden = true;
    fixed_slogan_1 = document.getElementById('fixed_slogan_1');
    fixed_slogan_2 = document.getElementById('fixed_slogan_2');
    fixed_slogan_2.hidden = true;
    bitcoin.getSystemInfo(function(info) {
        separator = info.decimalSeparator;
        var amount_val = document.getElementById('in_cash');
        amount_val.value = '1'+ separator + '00';
    });
}

var btc_string_to_satoshi = function(amount){
    var tab = [];
    if (amount.indexOf(separator) > 0 ){
        tab = amount.split(separator);
    }else{
        tab = [amount,'0'];
    }
    var count = tab[1].length;
    tab = [parseInt(tab[0]), parseInt(tab[1])];
    return tab[0]*bitcoin.BTC_IN_SATOSHI + tab[1]*(bitcoin.BTC_IN_SATOSHI/(Math.pow(10,count)));
}

function isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

var validateValue = function(temp){
    if (temp.indexOf(separator)>0){
        temp.replace(separator,'.');
    }
    if(!isNumber(temp.value)){
        temp.value='1'+separator+'00';
        alert("can't read value it's not a number");
    }
}

var runAnimations = function(success, transaction_id){
    if (success){
        var element = document.getElementsByClassName('back_img')[0];
        element.className +=(' animation');
        headText2.hidden = false;
        fixed_slogan_1.hidden = true;
        fixed_slogan_2.hidden = false;
        var head_elements = document.getElementsByClassName('headText1');
        for(o in head_elements) head_elements[o].hidden = true;
    }
}

var send = function(){
        var amount_val = document.getElementById('in_cash');
        var amount = btc_string_to_satoshi(amount_val.value);
        if(amount!=0){
            bitcoin.sendMoney(address, amount, runAnimations);
        }
    }

