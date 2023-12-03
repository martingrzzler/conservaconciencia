type Offer = {
	title: string;
	slug: string;
	details: string;
	included: string[];
	description: string;
	price: string;
	images: string[];
};
export const offers: Offer[] = [
	{
		title: 'Cerro Quinto',
		slug: 'cerro-quinto',
		details: `Duración estimada: 6 horas
Sendero tipo: MR (Mediano recorrido) 
Exigencia: 3.8 de 5 Media Alta. 🏃‍♀️
Ecosistema: Bosques de niebla intervenidos y páramo
Condiciones climáticas y atmosféricas: Es posible que se presenten lluvias, es importante llevar impermeables, zapatos para trekking, abrigo para el frio, ropa cómoda para el sendero.
🥾💧⛰
Altitud: 1.800 – 2.850: hay un ascenso de 1000 metros. En un total de 11 KM`,
		description: `Ubicado en la vereda de Cacique Ebaque, forma parte de la cadena montañosa del cerro Guayacundo, una montaña sagrada Muisca, centtro de ofrendas y ceremonias a la madre tierra.  
En esta experiencia el protagonista sera el paisaje, ya que en la cumbre del cerro tendremos una vista 360° del oriente cundinamarques con una panorámica fuera de serie de la laguna sagrada de Ubaque, el valle del río Blanco, Choachí, Ubaque, Fómeque y al fondo las montañas de 4.000 de Chingaza. `,
		included: [
			'Transporte 4x4 del final de la caminata hacia Choachi',
			'Entrada al predio',
			'Seguro de accidentes',
			'Registro fotográfico digital',
			'Interpretación ambiental – Guia local profesional',
			'Grupos mayores a 7 incluye guia adicional'
		],
		price: `Con transporte desde Bogotá. 
1 persona: 380.000$     2 personas: 210.000$c/u       3 ó 4 personas: 150.000$ c/u    Mas de 5 personas: 110.000$ c/u
Sin transporte desde Bogotá
1 persona 350.000$     2 personas: 190.000$c/u     3 ó 4 personas: 130.000$ c/u     Mas de 5 personas: 95.000$c/u
Cotiza tu experiencia segun tu necesidad`,
		images: [...Array(7).keys()].map((i) => i + 1).map((n) => `/cerro-quinto/${n}.jpeg`)
	},
	{
		title: 'Maza Fonte',
		slug: 'maza-fonte',
		details: `Duración estimada: 6 horas
Sendero tipo: LR (Largo recorrido) OPC 1  y OPC 2 MR (mediano recorrido)
Exigencia: 4 de 5  Alta. 🏃‍♀️
Ecosistema: Bosques de niebla intervenidos y páramo
Condiciones climáticas y atmosféricas: Es posible que se presenten lluvias, es importante llevar impermeables, zapatos para trekking, abrigo para el frio, ropa cómoda para el sendero.
🥾💧⛰
Altitud: 2700 – 3700: hay un ascenso de 1000 metros. En un total de 11 KM`,
		description: `Nuestro destino: Sendero Laguna de Paramillo, Bosques de amortiguación del paramo Chingaza, costado occidental de la cordillera oriental. Dos grandes bosques muy particulares en vegetación y biodiversidad, en este lugar es posible avistar el oso de antojos ya que atravesaremos su hogar entre puyas, aves, orquídeas endémicas y el reconocido Espeletia Uribei único en el mundo.  

Sera un recorrido entre los 2.680msnm y los 3.780msnm.  
Es una ruta perfecta para el avistamiento de aves de montaña y orquídeas exóticas. En medio del recorrido llegaremos a la laguna del paramillo, una bella acumulación de agua recién nacida del páramo de Chingaza.`,
		included: [
			'Transporte 4x4 desde Choachi',
			'Entrada a la reserva natural',
			'Seguro de accidentes',
			'Registro fotográfico digital',
			'Interpretación ambiental – Guia local profesional Biologa',
			'Guia local obligatorio de la reserva natural'
		],
		price: `1 2 pers: 650.000$    3 pers:  200.000$c/u     4 pers: 165.000$ c/u      +5 pers: 125.000$c/u`,
		images: ['1.jpg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg'].map((name) => `/maza-fonte/${name}`)
	},
	{
		title: 'La cara del indio',
		slug: 'la-cara-del-indio',
		details: `Duración estimada de la ruta: 7 horas
Sendero tipo: GR (Grande recorrido)
Condiciones climáticas y atmosféricas: Es posible que se presenten lluvias, es importante llevar impermeables, zapatos tipo botas de caucho o para trekking, abrigo para el frio, ropa cómoda para el sendero. Medias de cambio.
Grado de dificultad de la ruta natural: Nivel 4 de 5 (medio-alto)
Edad y condición física del participante: 12 - 65  años`,
		description: `La Cara del Indio, un imponente mirador encajado en potentes rocas de origen marino, cubiertas por el megadiverso bosque andino y la sublime magia de los guardianes del páramo; caminos antiguos y pinturas rupestres unen nuestros pasos a los de nuestros ancestros Chiguachis, dueños y señores del territorio Monte Luna.

La cara del indio tiene una vista maravillosa desde donde se observan los municipios de Une, Fómeque, Cáqueza, veredas de Choachí. Allí se siente una brisa fresca que relaja el cuerpo y el espíritu. Se divisa la cuenca de río Palmar, río Blanco, los cerros de Guayacundo, el Quinto Alto de los órganos del parque Nacional Chingaza, entre otros lugares.`,
		included: [
			'Refrigerio campesino',
			'Seguro de accidentes',
			'Asistencia turistica (mas de 6 personas)',
			'Registro fotográfico',
			'Interpretación ambiental – Profesional biología',
			'Transporte desde Bogotá'
		],
		price: `Con transporte incluido: 1 prs: 320.000$     2  -3 pers:  160.000$c/u     4 pers:  110.000$ c/u     + 5 pers: 95.000$c/u
Sin transporte desde Bogota : 1 pers: 300.000$     2- 3 pers: 140.000$c/u     4 pers:  95.000$ c/u   +5 pers: 80.000$c/u`,
		images: ['1.jpeg'].map((name) => `/cara-del-indio/${name}`)
	},
	{
		title: 'Valle escondido',
		slug: 'valle-escondido',
		details: `Duración estimada de la ruta: 4 horas
Sendero tipo: GR (Mediano recorrido)
Condiciones climáticas y atmosféricas: Es posible que se presenten lluvias, es importante llevar impermeables, zapatos tipo botas de caucho o para trekking, abrigo para el frio, ropa cómoda para el sendero. Medias de cambio.
Grado de dificultad de la ruta natural: Nivel 3 de 5 (medio)
Edad y condición física del participante: 8 - 68  años`,
		description: `Valle escondido es uno de nuestros destinos favoritos para vivir los paisajes andinos, bosques y la biodiversidad.

La experiencia a la que les invitamos, pasará por visitar pinturas rupestres, caminos reales, bosques de niebla y una hermosa cascada con agua nacida del paramo.  Es un trek ideal para quienes buscan un paisaje diferente y silencioso.`,
		included: [
			'Seguro medico',
			'Interpretacion ambiental',
			'Guía profesional y local, Biologa',
			'Refrigerio campesino',
			'Visita a los diferentes atractivos (pictogramas mhuyscas, cmaino real, valle escondido y paramo cruz verde)',
			'Permisos de acceso',
			'Registro fotográfico digital',
			'Transporte desde bogota (ida y regreso)'
		],
		price: `Con transporte incluido:  1 Prs: 300.000$     2  - 3Prs:  190.000$c/u     4Prs: 110.000$ c/u   +5Pers: 85.000$c/u
Sin transporte incluido:  1 Prs: 280.000$     2  - 3Prs:  175.000$c/u       4Prs: 95.000$ c/u     +5Pers: 75.000$ c/u`,
		images: [...Array(5).keys()].map((i) => i + 1).map((n) => `/valle-escondido/${n}.jpeg`)
	},
	{
		title: 'Cascada la Chorrera',
		slug: 'cascada-la-chorrera',
		details: `Duración estimada de la ruta: 4 horas -  5 km
Sendero tipo: GR (Mediano recorrido)
Condiciones climáticas y atmosféricas: Es posible que se presenten lluvias, es importante llevar impermeables, zapatos tipo botas de caucho o para trekking, abrigo para el frio, ropa cómoda para el sendero. Medias de cambio.
Grado de dificultad de la ruta natural: Nivel 2 de 5 (bajo)
Edad y condición física del participante: 5 - 70  años`,
		description: `Conoce la mas  alta cascada escalonada de Colombia, La chorrera !! Un lugar hermoso para vivir la magia del agua y el boque huemedo. Es un recorrido comodo, para casi todas las edades. Durante el recorrido estaras acompañado una excelente guia local y profesional que podra hacer que disfrutes este lugar como nunca. Tambien podras visitar el chiflon, una cascada donde podras pasar por detras de ella y disfrutar el agua como nunca antes.`,
		included: [
			'Transporte desde choachi hacia el destino.',
			'Entrada al parque aventura',
			'Guia local y profesional biologa',
			'Entradas y suvenir (tula)',
			'Interpretación ambiental',
			'Almuerzo y snacks'
		],
		price: `Con transporte 1 Prs: 450.000$           2Prs: 280.000$c/u         3-  4Prs: 210.000$ c/u         +5P : 160.000$c/u
Sin transporte: 1 Prs: 300.000$     2Prs:  190.000$c/u         3-  4Prs: 160.000$ c/u    +5P : 125.000$c/u`,
		images: [...Array(5).keys()].map((i) => i + 1).map((n) => `/cascada-la-chorrera/${n}.jpeg`)
	},
	{
		title: 'Laguna sagrada de Ubaque',
		slug: 'laguna-sagrada-de-ubaque',
		details: `Duración estimada de la ruta: 4 horas -  5 km
Sendero tipo: GR (Mediano recorrido)
Condiciones climáticas y atmosféricas: Es posible que se presenten lluvias, es importante llevar impermeables, zapatos tipo botas de caucho o para trekking, abrigo para el frio, ropa cómoda para el sendero. Medias de cambio.
Grado de dificultad de la ruta natural: Nivel 2 de 5 (bajo)
Edad y condición física del participante: 5 - 70  años`,
		description: `Caminata veredal a la Laguna Sagrada de Ubaque (Para todas las edades)

Un recorrido por la asombrosa historia de las antiguas civilizaciones que habitaron la cordillera oriental, viajar en el tiempo, recorrer los más espectaculares paisajes naturales andinos y finalmente, comprender la importancia de esta región y sus elementos naturales en la cosmovisión del pueblo muisca.`,
		included: [
			'Seguro medico',
			'Guía local profesional',
			'Interpretación ambiental',
			'Refrigerio chiguano',
			'Transporte 4x4 de retorno al municipio',
			'Registro fotografico'
		],
		price: `
Con transporte desde Bogota : 1 pers: 350.000$         3 -4 pers:  120.000$ c/u        +5pers:  95.000$c/u
Sin transporte desde Bogota : 1 pers: 290.000$           3 -4 pers:  99.000$ c/u         +5 pers:  75.000$c/u`,
		images: [...Array(5).keys()].map((i) => i + 1).map((n) => `/laguna-sagrada-de-ubaque/${n}.jpeg`)
	},
	{
		title: 'Ruta Biocultural Mhuysca',
		slug: 'ruta-biocultural-mhuysca',
		details: `Duración estimada de la ruta: 4 horas -  5 km
Sendero tipo: GR (Mediano recorrido)
Condiciones climáticas y atmosféricas: Es posible que se presenten lluvias, es importante llevar impermeables, zapatos tipo botas de caucho o para trekking, abrigo para el frio, ropa cómoda para el sendero. Medias de cambio.
Grado de dificultad de la ruta natural: Nivel 2 de 5 (bajo)
Edad y condición física del participante: 5 - 70  años`,
		description: `¿Tienes un día para disfrutar del oriente?
Este plan es para ti. En un día podrás vivir una experiencia de inmersión total en el territorio, recorriendo caminos ancestrales en medio de historias y biodiversidad. Una mezcla perfecta entre la naturaleza y la cultura mhuysca y campesina que no te puedes perder.                                                                                                                                                                                                                                                                                                                  
RUTA 1. Laguna Sagrada Ubaque + Pueblitour
RUTA 2. Laguna Sagrada Ubaque + Museo etnocultura`,
		included: [
			'Seguro de accidentes',
			'Caminata interpretativa Laguna Sagrada de Ubaque',
			'Transporte de retorno al final del recorrido',
			'Guia local + Guia profesional                                                                                   PLAN 1.',
			'Refrigerio (gastronomia chiguana)',
			'Pueblitour y tour muralismo',
			'PLAN 2.',
			'Transporte intermunicipal hacia y desde el museo',
			'Almuerzo tipico campesino',
			'Entrada al Museo + Recorrido con guia Local',
			'Circulo de la palabra.'
		],
		price: `PLAN 1 :     1Prs  : 295.000$   2 Prs: 185.000$c/u   3 - 4 Prs: 125.000$c/u    5 - 8 Prs: 95.000$c/u
PLAN 2:     1Prs: 350.000$   2 Prs: 210.000$c/u   3 - 4 Prs.: 150.000$c/u    5 - 8 Prs: 110.000$c/u`,
		images: []
	},
	{
		title: 'Escalada Choachi,Rutas para disfrutar: 3 rutas',
		slug: 'escalada-choachi',
		details: `Una experiencia para conectar con las rocas, el fondo del mar y la altura !
En medio de nuestra hermosa cordillera oriental, esta vez nuestro limite sera el cielo. Abrimos esta experiencia para que conectes con tu ser y expandas tus limites corporales y mentales.

Esta experiencia estará acompañada de guias profesionales en escalada, biología y cultura muisca, lo que permitirá que disfrutes como nunca la montaña  y la roca.`,
		description: '',
		included: [
			'Seguro de accidentes- deportes de aventura',
			'Entrada a la zona',
			'Guia profesional WFR.',
			'Equipo de escalada (cuerda, arnes, casco, cintas exprés, cintas generales, mosquetones de seguridad) - No incluye pies de gato',
			'Taller de inducción a la escalada en roca.'
		],
		price: `Con transporte desde Bogota       1Pers: 350.000$   2 pers: 240.000$ c/u     3-4 pers: 180.000$ c/u       + 5 pers: 150.000$c/u   
Sin transporte  1Pers:335.000$    2 pers: 225.000$ c/u       3-4 pers: 165.000$ c/u      + 5 pers: 120.000$c/u       `,
		images: [...Array(4).keys()].map((i) => i + 1).map((n) => `/escalada-choachi/${n}.jpeg`)
	},
	{
		title: 'Trekking al parque Nacional Los nevados',
		slug: 'trekking-parque-nacional-los-nevados',
		details: `Duración estimada de la ruta: 5 dias
Sendero tipo: GR (Largo recorrido)
Condiciones climáticas y atmosféricas: Es posible que se presenten lluvias, es importante llevar impermeables, zapatos tipo botas de caucho o para trekking, abrigo para el frio, ropa cómoda para el sendero. Medias de cambio.
Grado de dificultad de la ruta natural: Nivel 5 de 5 (alto)
Edad y condición física del participante: Requierre que los caminantes tengan experiencia previa en trekking. Buena condicion fisica. Optimo descanso e hidratación previa.`,
		description: `Un recorrido por todo el parque Nacional natural los nevados, desde Ibague, Tolima, hasta Salento Quindio. Pasaremos por los mas hermosos paisajes de la cordillera central, entre los nevados de Santa Isabel, Nevado del Tolima, Nevado del Ruiz y Paramillo del Quindio. Cinco dias de montaña, comartir, paisajismo y magia andina.`,
		included: [
			'Puedes solicitar nuestro catalogo completo de esta experiencia para todos los detalles. Es posible adecuar el plan a tus requerimientos y tiempos.'
		],
		price: '',
		images: []
	},
	{
		title: 'Nevado del Tolima (intento de cumbre )',
		slug: 'nevado-del-tolima',
		details: `Duración estimada de la ruta: 4 dias  
Sendero tipo: GR (Largo recorrido)
Condiciones climáticas y atmosféricas: Es posible que se presenten lluvias, es importante llevar impermeables, zapatos tipo botas de caucho o para trekking, abrigo para el frio, ropa cómoda para el sendero. Medias de cambio.
Grado de dificultad de la ruta natural: Nivel 5 de 5 (alto)  
Edad y condición física del participante: Requierre que los caminantes tengan experiencia previa en trekking. Buena condicion fisica. Optimo descanso e hidratación previa.`,
		description: '',
		included: [
			'ALIMENTACION',
			'TRANSPORTE',
			'EQUIPO DE MONTAÑA',
			'HOSPEDAJE',
			'Porteo de maletas (opcional)'
		],
		price: `Para grupos de +3 personas: 1´500.000$ c/u.  Si deseas ir solo o con solo dos personas, podemos enviarte cotización, una vez nos contactes.`,
		images: []
	}
];
