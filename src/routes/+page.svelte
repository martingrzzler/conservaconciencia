<div class="flex justify-center">
	<div class="bg-[#01B4B7] h-screen w-full relative">
		<img
			class="absolute translate-y-[18rem] object-cover h-[30rem] left-1/2 -translate-x-1/2"
			src="/volcano.png"
			alt=""
		/>
		<img class="absolute left-1/2 -translate-x-1/2" width="700" src="/logo.png" alt="logo" />
		<img src="/cloud.png" class="absolute opacity-90 w-[15rem] -left-[50%] cloud-right" alt="" />
		<img src="/cloud.png" class="absolute cloud-left opacity-90 w-[18rem] -right-[50%]" alt="" />
	</div>
</div>
<div class="flex flex-col gap-10 items-center px-4">
	<div class="rounded-xl overflow-hidden relative shadow-xl bg-white max-w-xl">
		<div class="roune">
			<img class="object-cover rounded-b-xl w-full h-[30]" src="/maza-fonte.jpg" alt="offer" />
		</div>
		<div class="p-5">
			<h1 class="text-2xl font-semibold">Maza Fonte</h1>
			<p>
				Sendero Laguna de Paramillo, Bosques de amortiguación del Páramo de Chingaza, costado
				occidental de la Cordillera Oriental. Dos grandes bosques muy particulares en vegetación y
				biodiversidad, en este lugar es posible avistar el Oso de Antojos ya que atravesaremos su
				hogar entre puyas, aves, orquídeas endémicas y el reconocido Espeletia Uribei único en el
				mundo!
			</p>
			<button class="btn btn-primary mt-8">Ver mas</button>
		</div>
	</div>
	<div class="rounded-xl overflow-hidden relative shadow-xl bg-white max-w-xl">
		<div class="roune">
			<img
				class="object-cover rounded-b-xl w-full h-[30rem]"
				src="/cara-del-indio.jpeg"
				alt="offer"
			/>
		</div>
		<div class="p-5">
			<h1 class="text-2xl font-semibold">Cara del Indio</h1>
			<p>
				Sendero Laguna de Paramillo, Bosques de amortiguación del Páramo de Chingaza, costado
				occidental de la Cordillera Oriental. Dos grandes bosques muy particulares en vegetación y
				biodiversidad, en este lugar es posible avistar el Oso de Antojos ya que atravesaremos su
				hogar entre puyas, aves, orquídeas endémicas y el reconocido Espeletia Uribei único en el
				mundo!
			</p>
			<button class="btn btn-primary mt-8">Ver mas</button>
		</div>
	</div>
</div>

<style>
	@keyframes moveCloudToLeft {
		0% {
			transform: translateX(0) translateY(10rem);
		}
		100% {
			transform: translateX(-90%) translateY(12rem);
		}
	}

	@keyframes moveCloudToRight {
		0% {
			transform: translateX(0) translateY(7rem);
		}
		100% {
			transform: translateX(100%) translateY(8rem);
		}
	}

	.cloud-left {
		animation: moveCloudToLeft 10s infinite alternate;
	}

	.cloud-right {
		animation: moveCloudToRight 10s infinite alternate;
	}
</style>
