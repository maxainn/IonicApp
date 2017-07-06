import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {


	consolaSeleccionada = null;
	verJuegos: boolean = false;

	consolas = [
		{
			id: 'ps',
			nombre: "PlayStation",
			historia: "La PlayStation fue lanzada a la venta el 3 de diciembre de 1994 en Japón, el 9 de septiembre de 1995 en EE. UU. y el 29 de septiembre de 1995 en Europa. Todo empezó con un contrato roto con Nintendo a finales de la década de 1980. Nintendo acordó con Sony, a finales de los ochenta, desarrollar para su exitosa SuperNintendo un apéndice para incorporar juegos en CD, además del tradicional cartucho. El gigante de los videojuegos, sin embargo, rompió con la tecnológica japonesa, neófita entonces en la industria, porque consideraba que cedía demasiado en el control y beneficios derivados de la venta de juegos en CD.",
			cantidadDeJuegos: 250,
			juegos: {
				multiplayer: [
					{
						nombre: 'Titanfall 2',
						year: 2016,
						image: 'http://orig10.deviantart.net/d0c0/f/2016/331/d/5/titanfall_2_icon_by_troublem4ker-daptny1.png',
					},
					{
						nombre: 'Call of Duty MF 3',
						year: 2013,
						image: 'http://orig08.deviantart.net/66bd/f/2011/343/b/4/call_of_duty__modern_warfare_3_icon_by_mohitg-d4int3n.png',
					},
					{
						nombre: 'Skate 3',
						year: 2013,
						image: 'https://pbs.twimg.com/profile_images/683761356/SKTE3logoVERT1rgb.jpg',
					}
				],
				singleplayer: [
					{
						nombre: 'God of War 2',
						year: 2005,
						image: 'http://s3.laps4.com/trofeos/psntrofeos/76901.PNG',
					},
					{
						nombre: 'Red Dead Redemption',
						year: 2015,
						image: 'http://orig05.deviantart.net/0768/f/2012/045/4/6/red_dead_redemption_by_solobrus22-d4ppmz8.png',
					},
					{
						nombre: 'Tony Hawk Pro Skate 2',
						year: 2007,
						image: 'http://img.kbhgames.com/2015/06/Tony-Hawks-Pro-Skater-2.jpg'
					}
				]
			},
		},
		{
			id: 'xbox',
			nombre: "Xbox 360",
			historia: "Xbox es una marca de videojuegos creada por Microsoft que incluye una serie de videoconsolas desarrolladas por la misma compañía, de sexta a octava generación, así como aplicaciones (juegos), servicios de streaming y el servicio en línea Xbox Live. La marca fue introducida por primera vez el 15 de noviembre de 2001 en los Estados Unidos, con el lanzamiento de la consola Xbox. Dicho dispositivo original fue la primera consola de videojuegos ofrecida por una empresa estadounidense después que de la Atari Jaguar detuvo ventas en 1996. La consola llegó a más de 24 millones de unidades vendidas hasta el 10 de mayo de 2006.1 La segunda consola de Microsoft, Xbox 360, fue lanzada en 2005 y ha vendido más de 85.6 millones de consolas en todo el mundo hasta junio del 2015.2 La sucesora de Xbox 360 y la consola de Microsoft más reciente, Xbox One,3 fue revelada el 21 de mayo de 2013.4 Xbox One ha sido lanzada en 21 mercados de todo el mundo el 22 de noviembre de 2013,5 siendo el Reino Unido el primer país.6",
			cantidadDeJuegos: 180,
			juegos: {
				multiplayer: [
					{
						nombre: 'Mortal Kombat',
						year: 2015,
						image: 'http://img4.meristation.as.com/files/imagenes/general/mortal-kombat-x-enhanced-online-beta-header.jpg'
					},
					{
						nombre: 'Mortal Kombat',
						year: 2015,
						image: 'http://img4.meristation.as.com/files/imagenes/general/mortal-kombat-x-enhanced-online-beta-header.jpg'
					},
					{
						nombre: 'Mortal Kombat',
						year: 2015,
						image: 'http://img4.meristation.as.com/files/imagenes/general/mortal-kombat-x-enhanced-online-beta-header.jpg'
					}
				],
				singleplayer: [
					{
						nombre: 'FIFA',
						year: 2015,
						image: 'http://img4.meristation.as.com/files/imagenes/general/mortal-kombat-x-enhanced-online-beta-header.jpg'
					},
					{
						nombre: 'Mortal Kombat',
						year: 2015,
						image: 'http://img4.meristation.as.com/files/imagenes/general/mortal-kombat-x-enhanced-online-beta-header.jpg'
					},
					{
						nombre: 'Mortal Kombat',
						year: 2015,
						image: 'http://img4.meristation.as.com/files/imagenes/general/mortal-kombat-x-enhanced-online-beta-header.jpg'
					}
				]
			}


		},
		{
			id: 'ns',
			nombre: "Nintendo Switch",
			descripcion: "Historia de nintendo",
			cantidadDeJuegos: 150,
			juegos: {
				multiplayer: [
					{
						nombre: 'Mortal Kombat',
						year: 2015,
						image: 'http://img4.meristation.as.com/files/imagenes/general/mortal-kombat-x-enhanced-online-beta-header.jpg'
					},
					{
						nombre: 'Mortal Kombat',
						year: 2015,
						image: 'http://img4.meristation.as.com/files/imagenes/general/mortal-kombat-x-enhanced-online-beta-header.jpg'
					},
					{
						nombre: 'Mortal Kombat',
						year: 2015,
						image: 'http://img4.meristation.as.com/files/imagenes/general/mortal-kombat-x-enhanced-online-beta-header.jpg'
					}
				],
				singleplayer: [
					{
						nombre: 'FIFA',
						year: 2015,
						image: 'http://img4.meristation.as.com/files/imagenes/general/mortal-kombat-x-enhanced-online-beta-header.jpg'
					},
					{
						nombre: 'Mortal Kombat',
						year: 2015,
						image: 'http://img4.meristation.as.com/files/imagenes/general/mortal-kombat-x-enhanced-online-beta-header.jpg'
					},
					{
						nombre: 'Mortal Kombat',
						year: 2015,
						image: 'http://img4.meristation.as.com/files/imagenes/general/mortal-kombat-x-enhanced-online-beta-header.jpg'
					}
				]
			},
		}
	]

	constructor(public navCtrl: NavController) {

	}


	onChangeConsola(consolaDelSelect) {

		console.log(consolaDelSelect);

		for (var i = 0; i < this.consolas.length; i++) {

			if (this.consolas[i].id == consolaDelSelect)
				this.consolaSeleccionada = this.consolas[i];

		}
	}

	onVerJuegos() {
		this.verJuegos = !this.verJuegos;
	}

}
