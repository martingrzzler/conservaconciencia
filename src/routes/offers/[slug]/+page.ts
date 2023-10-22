import { offers } from '$lib/offers';

export const load = async ({ params }) => {
	const slug = params.slug;

	const offer = offers.find((offer) => offer.slug === slug)!;

	return {
		offer
	};
};
