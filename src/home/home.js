export default function homepage() {
	function introduction() {
		const heading1 = document.createElement("h1");
		heading1.textContent =
			"Welcome to Goodfood, Where Flavor and Tradition Meet!";

		const paragraph = document.createElement("p");
		paragraph.textContent =
			"Located in the heart of New York City, Goodfood is more than just a dining spot; it's a place where every dish tells a story. With a warm and elegant atmosphere, perfect for any occasion, we offer a dining experience that awakens the senses and warms the heart.";

		return [heading1, paragraph];
	}

	function main() {
		const firstHeading2 = document.createElement("h2");
		firstHeading2.textContent = "Our Philosophy";

		const firstParagraph = document.createElement("p");
		firstParagraph.textContent =
			"We believe that a great meal starts with quality ingredients. That’s why we carefully select fresh produce and work with local suppliers to ensure the taste and authenticity of every dish. Our team of experienced chefs combines skill and creativity to turn simple ingredients into culinary masterpieces.";

		const secondHeading2 = document.createElement("h2");
		secondHeading2.textContent = "What We Offer";

		const secondParagraph = document.createElement("p");
		secondParagraph.textContent =
			"At Goodfood, our menu celebrates the diversity of flavors. From light and appetizing starters, to main courses that range from traditional to contemporary, and desserts that end your meal on a sweet note. Whether it's a romantic dinner, a gathering with friends, or a family celebration, we have something special for every occasion.";
        
        return [firstHeading2, firstParagraph, secondHeading2, secondParagraph];
	}

	return [...introduction(), ...main()];
}
