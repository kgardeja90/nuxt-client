<template>
	<div :style="{ backgroundColor: backgroundcolor }" class="footer-button">
		<button class="btn-confirm" v-on="$listeners">
			Ok
		</button>
	</div>
</template>

<script>
export default {
	props: {
		backgroundcolor: {
			type: String,
			default() {
				return "var(--color-success)";
			},
		},
	},
	data() {
		// This solely exists to appear in the coverage report
		return {};
	},
};
</script>

<style lang="scss" scoped>
@import "@styles";

.footer-button {
	position: relative;
	display: flex;
	flex-shrink: 0;
	align-items: center;
	justify-content: center;
	width: 100%;

	> *:not(:first-child) {
		margin-left: var(--space-md);
	}

	@media only screen and (max-width: 520px) {
		flex-direction: column;
		align-items: normal;
		padding: 0;
		> *:not(:first-child) {
			margin-left: 0;
		}
	}
}

.btn-confirm {
	display: flex;
	flex-shrink: 0;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: var(--space-lg) var(--space-xl);
	font-family: var(--font-accent);
	font-size: var(--text-md);
	font-weight: var(--button-font-weight);
	color: var(--color-white);
	cursor: pointer;
	background: var(--button-background);
	border: none;
	border-radius: 0 0 var(--radius-sm) var(--radius-sm);
	transition: all var(--duration-transition-medium)
		cubic-bezier(0.23, 1, 0.32, 1);

	&:hover,
	&:focus {
		outline: none;

		--button-background: var(--color-success-dark);
	}
	/* stylelint-disable */
	// defined multiple to seperate style from behaviour
	&.is-outline {
		/* stylelint-enable */
		color: var(--button-background);
		background: var(--color-white);
		border: 1px solid var(--button-background);

		&:hover,
		&:focus {
			// increase border size to increase visiblity
			box-shadow: 0 0 0 1px var(--button-background);
		}
	}
}
</style>
