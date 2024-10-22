export default function About() {
	const heading2 = document.createElement("h2");
	heading2.textContent = "Our Story";

	const paragraph = document.createElement("p");
	paragraph.textContent =
		"Founded in 2022, Goodfood was born from a passion for great food and a love for bringing people together. What started as a small family venture has grown into a beloved spot in New York City, known for its welcoming atmosphere and delicious dishes. We believe that food is more than just sustenance—it’s a way to connect, share, and celebrate life’s moments.";

    return [heading2, paragraph];
}
