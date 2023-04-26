import { Component } from '@angular/core';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: '../szablon.html',
  styleUrls: ['../styles.css']
})
export class AppComponent {
  cena:number[] = [
    1029, //gtx 1650 0
    520, //gtx 1060 1
    1339, //rtx 2060 2 
    2379, //ryzen9 3 
    899, //ryzen7 4
    1639, //i5 5
    599, //acernitro 6
    1749, //lg 7 
    469, //acernn 8
    209, //kingston 9
    205, //goodram 10
    359, //adata 11
    349, //steelseries 12
    265, //razer 13 
    289, //roccat 14
  ];
  numerkarty:any = 0;
  imie:any = "";
  email:any = "";
  nazwisko:any = "";
  telefon:any = "";
  numerprocka:any = 3;
  numermonitora:any = 6;
  numerramu:any = 9;
  numerklaw:any = 12;
  wypierdolblad(){
    let xdd = document.getElementById("imie");
    xdd.setAttribute("style","border:1px; border-style:solid; border-color:red;");
  }
  gitimie(){
    let xdd = document.getElementById("imie");
    xdd.setAttribute("style","border:0px; border-style:solid; border-color:red;");
  } 
  wypierdolbladnazwisko(){
    let xddd = document.getElementById("nazwisko");
    xddd.setAttribute("style","border:1px; border-style:solid; border-color:red;");
  }
  gitnazwisko(){
    let xdd = document.getElementById("nazwisko");
    xdd.setAttribute("style","border:0px; border-style:solid; border-color:red;");
  }
  wypierdolbladtelefon(){
    let xdddd = document.getElementById("telefon");
    xdddd.setAttribute("style","border:1px; border-style:solid; border-color:red;");
  }
  gitnumer(){
    let xdd = document.getElementById("telefon");
    xdd.setAttribute("style","border:0px; border-style:solid; border-color:red;");
  }
  wypierdolblademail(){
    let xddddd = document.getElementById("email");
    xddddd.setAttribute("style","border:1px; border-style:solid; border-color:red;");
  }
  gitemail(){
    let xdd = document.getElementById("email");
    xdd.setAttribute("style","border:0px; border-style:solid; border-color:red;");
  }
  niger(){
    alert("Złożono zamówienie");
  }
  sprawdz() {
    var cenakarty = this.cena[0];
    var cenaprocka = this.cena[3];
    var cenamonitora = this.cena[6];
    var cenaramu = this.cena[9];
    var cenaklawy = this.cena[12];
    switch (this.numerkarty) {
      case "0":
        let hujoza = document.getElementById("cwel1");
        let hujozaa = document.getElementById("tekst1");
        let hujozaaa = document.getElementById("karta");
        hujozaaa.textContent = "Karta graficzna: GeForce GTX 1650 - "+this.cena[0]+",00zł"
        hujozaa.textContent = "Cena: 1029,00zł | 4 GB 8002 MHz GDDR5"
        hujoza.setAttribute('src','assets/zdjecia/1650.jpg');
        var cenakarty = this.cena[0];
        break;
      case "1":
        let hujoza2 = document.getElementById("cwel1");
        let hujozaa2 = document.getElementById("tekst1");
        let hujozaaa2 = document.getElementById("karta");
        hujozaaa2.textContent = "Karta graficzna: GeForce GTX 1060 - "+this.cena[1]+",00zł"
        hujozaa2.textContent = "Cena: 520,00zł | 6 GB 8100 MHz GDDR5"
        hujoza2.setAttribute('src','assets/zdjecia/1060.jpg');
        var cenakarty = this.cena[1];
        break;
      case "2":
        let hujoza3 = document.getElementById("cwel1");
        hujoza3.setAttribute('src','assets/zdjecia/2060.jpg');
        let hujozaa3 = document.getElementById("tekst1");
        hujozaa3.textContent = "Cena: 1339,00zł | 6 GB 14000 MHz GDDR6"
        let hujozaaa3 = document.getElementById("karta");
        hujozaaa3.textContent = "Karta graficzna: GeForce GTX 2060- "+this.cena[2]+",00zł"
        var cenakarty = this.cena[2];
        break;
      default:
        break;
    }
    switch (this.numerprocka) {
      case "3":
        let essunia = document.getElementById("cwel2");
        essunia.setAttribute('src','assets/zdjecia/ryzer9.jpg');
        let hujozaa4 = document.getElementById("tekst2");
        let hujozaaa4 = document.getElementById("procesor");
        hujozaaa4.textContent = "Procesor: AMD Ryzen 9 7950X - "+this.cena[3]+",00zł"
        hujozaa4.textContent = "Cena: 2999,00zł | 16/32 rdzeni do 5,7 GHz"
        var cenaprocka = this.cena[3];
        break;
      case "4":
        let essunia2 = document.getElementById("cwel2");
        essunia2.setAttribute('src','assets/zdjecia/ryzen7.jpg');
        let hujozaa5 = document.getElementById("tekst2");
        hujozaa5.textContent = "Cena: 899,00zł | 8/16 rdzeni do 4,6 GHz"
        let hujozaaa5 = document.getElementById("procesor");
        hujozaaa5.textContent = "Procesor: AMD Ryzen 7 5700X - "+this.cena[4]+",00zł"
        var cenaprocka = this.cena[4];
        break;
      case "5":
        let essunia3 = document.getElementById("cwel2");
        essunia3.setAttribute('src','assets/zdjecia/i5.jpg');
        let hujozaa6 = document.getElementById("tekst2");
        hujozaa6.textContent = "Cena: 1639,00zł | 14 rdzeni do 5,1 GHz"
        let hujozaaa6 = document.getElementById("procesor");
        hujozaaa6.textContent = "Procesor: Intel core i5-13600K - "+this.cena[5]+",00zł"
        var cenaprocka = this.cena[5];
        break;
      default:
        break;
    }
    switch (this.numermonitora) {
      case "6":
        let niger = document.getElementById("cwel3");
        niger.setAttribute('src','assets/zdjecia/acernitro.jpg');
        let hujozaa7 = document.getElementById("tekst3");
        hujozaa7.textContent = "Cena: 599,00zł | 1920 x 1080 (FullHD) 16:9 75 Hz 23,8";
        let hujozaaa7 = document.getElementById("monitor");
        hujozaaa7.textContent = "Monitor: Acer Nitro  1920 x 1080 - "+this.cena[6]+",00zł"
        var cenamonitora = this.cena[6];
        break;
      case "7":
        let niger2 = document.getElementById("cwel3");
        niger2.setAttribute('src','assets/zdjecia/lg.jpg');
        let hujozaa8 = document.getElementById("tekst3");
        hujozaa8.textContent = "Cena:  1749,00zł | 2560 x 1440 (WQHD) 16:9 165 Hz 27";
        let hujozaaa8 = document.getElementById("monitor");
        hujozaaa8.textContent = "Monitor: LG  2560 x 1440 - "+this.cena[7]+",00zł"
        var cenamonitora = this.cena[7];
        break;
      case "8":
        let niger3 = document.getElementById("cwel3");
        niger3.setAttribute('src','assets/zdjecia/acernn.jpg');
        let hujozaa9 = document.getElementById("tekst3");
        hujozaa9.textContent = "Cena: 469,00zł | 1920 x 1080 (FullHD) 16:9 75 Hz 23,8";
        let hujozaaa9 = document.getElementById("monitor");
        hujozaaa9.textContent = "Monitor: Acer 1920 x 1080 - "+this.cena[8]+",00zł"
        var cenamonitora = this.cena[8];
        break;
      default:
        break;
    }
    switch (this.numerramu) {
      case "9":
        let ahaspoko = document.getElementById("cwel4");
        ahaspoko.setAttribute('src','assets/zdjecia/kingstone.jpg');
        let hujozaa10 = document.getElementById("tekst4");
        hujozaa10.textContent = "Cena: 209,00 zł | 16GB (2x8GB) 3200MHz DDR4";
        let hujozaaa10 = document.getElementById("ram");
        hujozaaa10.textContent = "Ram: Kingston FURY 16GB - "+this.cena[9]+",00zł"
        var cenaramu = this.cena[9];
        break;
      case "10":
        let ahaspoko2 = document.getElementById("cwel4");
        ahaspoko2.setAttribute('src','assets/zdjecia/goodram.jpg');
        let hujozaa11 = document.getElementById("tekst4");
        hujozaa11.textContent = "Cena: 205,00zł | 16GB (2x8GB) 3200MHz DDR4";
        let hujozaaa11 = document.getElementById("ram");
        hujozaaa11.textContent = "Ram: GOODRAM 16GB - "+this.cena[10]+",00zł"
        var cenaramu = this.cena[10];
        break;
      case "11":
        let ahaspoko3 = document.getElementById("cwel4");
        ahaspoko3.setAttribute('src','assets/zdjecia/adata.jpg');
        let hujozaa12 = document.getElementById("tekst4");
        hujozaa12.textContent = "Cena: 359,00zł | 32GB (2x16GB) 3200MHz DDR4";
        let hujozaaa12 = document.getElementById("ram");
        hujozaaa12.textContent = "Ram: ADATA 32GB  - "+this.cena[11]+",00zł"
        var cenaramu = this.cena[11];
        break;
      default:
        break;
    }
    switch (this.numerklaw) {
      case "12":
        let niewnikam = document.getElementById("cwel5");
        niewnikam.setAttribute('src','assets/zdjecia/steelseries.jpg');
        let hujozaa13 = document.getElementById("tekst5");
        hujozaa13.textContent = "Cena: 349,00 zł | Membranowe Przewodowa";
        let hujozaaa13 = document.getElementById("klawiatura");
        hujozaaa13.textContent = "Klawiatura: SteelSeries Apex 3  - "+this.cena[12]+",00zł"
        var cenaklawy = this.cena[12];
        break;
      case "13":
        let niewnikam2 = document.getElementById("cwel5");
        niewnikam2.setAttribute('src','assets/zdjecia/razer.jpg');
        let hujozaa14 = document.getElementById("tekst5");
        hujozaa14.textContent = "Cena: 265,00 zł | Mechaniczno-membranowe Przewodowa";
        let hujozaaa14 = document.getElementById("klawiatura");
        hujozaaa14.textContent = "Klawiatura: Razer Ornata V2  - "+this.cena[13]+",00zł"
        var cenaklawy = this.cena[13];
        break;
      case "14":
        let niewnikam3 = document.getElementById("cwel5");
        niewnikam3.setAttribute('src','assets/zdjecia/roccat.jpg');
        let hujozaa15 = document.getElementById("tekst5");
        hujozaa15.textContent = "Cena: 289,00 zł | Mechaniczne Przewodowa";
        let hujozaaa15 = document.getElementById("klawiatura");
        hujozaaa15.textContent = "Klawiatura: Roccat VULCAN 121 - "+this.cena[14]+",00zł"
        var cenaklawy = this.cena[14];
        break;
      default:
        break;
    }
    var wszystko = cenakarty + cenaklawy + cenamonitora + cenaprocka + cenaramu;
    console.log(wszystko);
    console.log(cenakarty);
    console.log(cenaprocka);
    console.log(cenamonitora);
    console.log(cenaramu);
    console.log(cenaklawy);
    let wynik = document.getElementById("razem");
    wynik.textContent = "Razem za zestaw: "+wszystko+" zł";
  }
}