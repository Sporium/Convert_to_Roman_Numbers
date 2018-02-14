
function convertToRoman(num) {
 var rezult = '';
  var font_ar = [1,4,5,9,10,40,50,90,100,400,500,900,1000,4000,5000,9000,10000];
var font_rom = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M",
"M&#8577;","&#8577;","&#8577;&#8578;","&#8578;"];

  
 //if (!num) return '';
 
 var n = font_ar.length - 1;
 while (num > 0) {
    if (num >= font_ar[n]) {
        rezult += font_rom[n];
        num -= font_ar[n];
    }
    else n--;
 }
 return rezult;
}
  
convertToRoman(42);
