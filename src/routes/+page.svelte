<script>
	export let data;
	import OfferCard from '$lib/OfferCard.svelte';
</script>

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
<h1 class="text-center mb-10 text-teal-800 font-semibold text-xl">
	Bioturismo, montañismo y senderismo
</h1>
<div class="flex flex-col gap-10 items-center px-1">
	{#each data.offers as offer}
		<OfferCard {...offer} imagePath={offer.images[0]} />
	{/each}
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
