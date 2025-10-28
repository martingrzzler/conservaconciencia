type Offer = {
	title: string;
	slug: string;
	details: string;
	included: string[];
	description: string;
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
		images: [...Array(7).keys()].map((i) => i + 1).map((n) => `/cerro-quinto/${n}.jpeg`)
	},
	{
		title: 'Hike Entre gigantes',
		slug: 'hike-entre-gigantes',
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
		images: ['1.jpg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg'].map((name) => `/hike-entre-gigantes/${name}`)
	},
	 {
		 title: 'Cañón de Hycagua',
		 slug: 'canon-hycagua',
		 details: `Duración: 5 horas
Distancia: 4.5 km
Desnivel acumulado: 250 m
Nivel de dificultad: 3/5
Tipo de sendero: técnico, con tramos de bosque y cañón`,
		 description: `Embárcate en una experiencia única entre montañas, bosque de niebla y el sonido del agua que da vida al Cañón de Hycagua.
	Caminaremos por senderos cubiertos de niebla hasta llegar a una hermosa cascada donde podrás sentir la energía pura del agua, la roca y la montaña.
	Un día para desconectarte, reconectarte con la naturaleza y vivir Choachí desde una perspectiva diferente.

	Al unirte, apoyas un proyecto de restauración y conservación que protege los ecosistemas altoandinos y su biodiversidad.

	Cupos limitados — reserva tu lugar y deja que la montaña te cuente su historia.`,
		 included: [
			 'Almuerzo',
			 'Seguro de accidentes',
			 'Registro fotográfico digital',
			 'Interpretación ambiental y cultural',
			 'Guianza profesional local - Biólogo/a',
			 'Entrada a la reserva privada',
			 'Transporte desde Bogotá'
		 ],
		 images: [...Array(14).keys()].map((i) => i + 1).map((n) => `/canon-hycagua/${n}.jpeg`)
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
		images: [...Array(5).keys()].map((i) => i + 1).map((n) => `/cara-del-indio/${n}.jpeg`)
	},
	{
		title: 'Bosque encantado',
		slug: 'bosque-encantado',
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
		images: [...Array(5).keys()].map((i) => i + 1).map((n) => `/bosque-encantado/${n}.jpeg`)
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
		images: [...Array(4).keys()].map((i) => i + 1).map((n) => `/ruta-biocultural-mhuysca/${n}.jpeg`)
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
		images: [...Array(7).keys()]
			.map((i) => i + 1)
			.map((n) => `/trekking-parque-nacional-los-nevados/${n}.jpeg`)
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
		images: [...Array(8).keys()].map((i) => i + 1).map((n) => `/nevado-del-tolima/${n}.jpeg`)
	}
];
