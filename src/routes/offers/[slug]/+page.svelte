<script>
	export let data;
	const { offer } = data;
</script>

<div>
	<a href="/" class="flex items-center justify-center">
		<img class="" width="700" src="/logo.png" alt="logo" />
	</a>

	<div class="px-4">
		<div
			class="rounded-xl px-2 overflow-hidden relative shadow-xl bg-stone-200 text-stone-700 max-w-xl"
		>
			<div class="carousel carousel-center p-4 space-x-4 bg-stone-200 rounded-box">
				{#each offer.images as imagePath}
					<div class="carousel-item">
						<img class="object-cover rounded-box h-[30rem]" src={imagePath} alt="offer" />
					</div>
				{/each}
			</div>
			<div class="p-5">
				<h1 class="text-xl font-semibold">{offer.title}</h1>
				<p class="mt-4">{offer.description}</p>
				<h2 class="text-lg font-semibold mt-4">Details</h2>
				<p class=" whitespace-pre-wrap">{offer.details}</p>
				<h2 class="text-lg font-semibold mt-4">Incluye</h2>
				<ul>
					{#each offer.included as include}
						<li>{include}</li>
					{/each}
				</ul>

				<button class="btn btn-primary mt-8 text-stone-300">Reserva ya</button>
			</div>
		</div>
	</div>
</div>
