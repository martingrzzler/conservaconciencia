<script lang="ts">
	export let title: string;
	export let description: string;
	export let imagePath: string;
	export let slug: string;
</script>

<div class="flex flex-col gap-10 items-center px-4">
	<div class="rounded-xl overflow-hidden relative shadow-xl bg-stone-200 text-stone-700 max-w-xl">
		<div>
			<img class="object-cover rounded-b-xl w-full h-[30rem]" src={imagePath} alt="offer" />
		</div>
		<div class="p-5">
			<h1 class="text-xl font-semibold">{title}</h1>
			<p>{description}</p>
			<a href={`offers/${slug}`} class="btn btn-primary mt-8 text-stone-300">Ver mas</a>
		</div>
	</div>
</div>
