
//Basit İndirim Hesaplama//

alert('Ürünün İndirimli Fiyatı: ' + (Number(prompt('Ürünün Fiyatı'))  * ((100 - (Number(prompt('İndirim Yüzdesi')))) /100))  );


//Vize ve Final Notu ile Ortalama://



let vize = Number(prompt('Vize Notunu Giriniz'));
let final = Number(prompt('Final Notunu Giriniz'));
let tamNot = (vize * 0.40) + (final * 0.60);


if (tamNot >= 50) {

alert('Gectiniz Notunuz: ' + tamNot);
 } else if (tamNot >= 40 &&  tamNot < 50) {
alert('Sartlı Gectiniz Notunuz: ' + tamNot); 

} else  { 


(tamNot < 40 )

alert('Kaldınız Notunuz: ' + tamNot); 

}


//Haftanın Günü://



let day =  prompt('0-6 arası değer giriniz');


switch (day) {

case "0" :

console.log('PAZARTESİ');

break;

case "1" :

console.log('SALI');

break;

case "2" :

console.log('ÇARŞAMBA');

break;

case "3" :

console.log('PERŞEMBE');

break;

case "4" :

console.log('CUMA');

break;
case "5" :

console.log('CUMARTESİ');

break;

case "6" :

console.log('PAZAR');

break;

}




//Büyük Sayıyı Bulma://



let sayi1 = Number(prompt('Birinci Sayıyı Giriniz'));
let sayi2 = Number(prompt('İkinci Sayıyı Giriniz'));
let sayi3 = Number(prompt('Üçüncü Sayıyı Giriniz'));

let büyükSayi;

if (sayi1 >= sayi2 && sayi1 >= sayi3) {

   büyükSayi = sayi1;

} else if 
 (sayi2 >= sayi1  && sayi2 >= sayi3) {

 büyükSayi = sayi2;


} else {

(sayi3 >= sayi1 && sayi3 >= sayi2);
büyükSayi = sayi3;
}


console.log(`En büyük sayı: ${büyükSayi}`);
alert(`En büyük sayı: ${büyükSayi}`);





//Saniyeyi Saate Çevirme://




let saniye = Number(prompt ('Saniye Giriniz'));

let saaat = Math.floor(saniye / 3600);
let kalanSaniye = saniye - (saaat * 3600);

let dakika = Math.floor( kalanSaniye / 60);
let sonSaniye = kalanSaniye - ( dakika*60);

console.log (saaat + ' saat' + ' ' +  dakika + ' dakika' + ' ' + sonSaniye +  ' saniye');



//Güncel Yaş Hesaplama://


let dogumYil = Number(prompt('Doğum yılınızı giriniz'));
let dogumAy = Number(prompt('Doğdunuz ayı  giriniz'));
let dogumGun = Number(prompt('Doğdunuz günü giriniz'));

let bugun = new Date();
let yil = bugun.getFullYear();
let ay = bugun.getMonth() + 1;
let gun = bugun.getDate();

let yasYil = yil - dogumYil;
let yasAy = ay - dogumAy;
let yasGun = gun - dogumGun;

if (yasAy < 0 || (yasAy === 0 && yasGun < 0)) {
yasYil--;
yasAy +-12; }


console.log(' Yaşınız: ' + yasYil + ' Yıl ' + yasAy + ' Ay '+ yasGun + ' Gün ' );




//Saatlik Ücret Hesaplama://






let saat = Number(prompt('Kaç saat çalıştınız? '));

let ucret = Number(prompt('Saat başı ücretiniz nedir? '));

let tamUcret = saat * ucret 

alert('Maaşınız: ' + tamUcret + ' TL');


//Aylık Taksit Hesaplama://


let krediMiktari = Number(prompt('Kredi miktarını giriniz.'));
let taksitSayisi =  Number(prompt('Taksit sayısını giriniz.'));
let yillikFaizOrani = Number(prompt('Yıllık faiz oranını giriniz.'));

let aylikFaizOrani = ((yillikFaizOrani / 100 ) / 12);

let aylikTaksit = (krediMiktari * aylikFaizOrani * Math.pow(1 + aylikFaizOrani, taksitSayisi)) / (Math.pow(1 + aylikFaizOrani,taksitSayisi) - 1);

alert('Aylık Taksit:' + aylikTaksit.toFixed(2) + ' ' +'TL');


//Kullanıcı Adı ve Şifre Kontrolü://


let kullaniciAdi = prompt ('Kullanıcı Adınızı Giriniz');
let sifre = prompt ('Şifrenizi Giriniz');

if (kullaniciAdi === 'admin' && sifre === '1234') {
alert('Giriş Başarılı');
} else {

alert('Kullanıcı adı veya şifre hatalı'); }

//Net Kar Hesaplama://

let satisBedeli = Number(prompt('Satış bedelini giriniz'));
let maliyet = Number(prompt('Maliyeti giriniz'));
 
 let kdv = (satisBedeli * 0.20);
let toplamSatisBedeli = (satisBedeli + kdv);

let netKar = ((satisBedeli - maliyet) + kdv);

let gelirVergisi = (netKar * 0.25);
let toplamKar = (netKar-gelirVergisi);

console.log('Satış Bedeli: '+ satisBedeli + ' '+ 'Maliyet: ' + maliyet + ' '+ 'KDV: '+ kdv + ' '+ 'Net Kar: ' + netKar + ' '+'Gelir Vergisi: '+ gelirVergisi +' '+'Toplam Kar: ' + toplamKar + 'TL' );






 

 


 