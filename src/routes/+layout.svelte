<script>
	import Facebook from '$lib/icons/Facebook.svelte';
	import Instagram from '$lib/icons/Instagram.svelte';
	import TripAdvisor from '$lib/icons/TripAdvisor.svelte';
	import WhatsApp from '$lib/icons/WhatsApp.svelte';
	import '../app.css';
</script>

<div class="bg-[#01B4B7] flex justify-center">
	<div class="min-h-screen w-[min(100vw,30rem)] pb-32 overflow-x-hidden">
		<slot />
		<a
			href={`https://wa.me/+573204550774?text=${encodeURIComponent(
				'Hola Conserva con Ciencia, me gustaría saber más sobre sus servicios'
			)}`}
			class="fixed bottom-4 left-4 bg-white z-50 rounded-full p-4 shadow-2xl"
		>
			<WhatsApp />
		</a>
		<div class="flex justify-around mt-10">
			<a href="https://www.instagram.com/conservaconciencia/">
				<Instagram className="fill-teal-700" />
			</a>
			<a
				href="https://www.tripadvisor.co/Attraction_Review-g2437307-d24177876-Reviews-Conserva_Con_Ciencia-Choachi_Cundinamarca_Department.html"
			>
				<TripAdvisor className="fill-teal-700" />
			</a>
			<a href="https://web.facebook.com/ConservaconCiencia/?locale=es_LA&_rdc=1&_rdr">
				<Facebook className="fill-teal-700" />
			</a>
		</div>
	</div>
</div>
