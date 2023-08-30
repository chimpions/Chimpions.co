
<div class="card__glare" />

<style>

	.card__glare {
		transform: translateZ(1.4px);
		background: radial-gradient(
			farthest-corner circle at var(--mx) var(--my),
			rgba(255, 255, 255, 0.4) 10%,
			rgba(255, 255, 255, 0.35) 20%,
			rgba(0, 0, 0, 0.5) 90%
		);
		mix-blend-mode: overlay;
		opacity: var(--o);
	}

</style>