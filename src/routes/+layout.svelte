<script>
	import WhatsApp from '$lib/WhatsApp.svelte';
	import '../app.css';
</script>

<div class="bg-[#01B4B7] min-h-screen pb-10 w-screen overflow-x-hidden">
	<slot />
	<a
		href="https://wa.me/+573204550774?text=Hello!%20I%20have%20a%20question."
		class="fixed bottom-4 left-4 bg-white z-50 rounded-full p-4 shadow-2xl"
	>
		<WhatsApp />
	</a>
</div>
