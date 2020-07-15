<script>
	export let during = false;
</script>

<style>
	.loader {
        margin-left: auto;
        margin-right: auto;
    }
    .loader > img {
        height: 30px;
        width: 30px;
    }
</style>

{#if during == true}
	<div class="loader"><img src="/public/img/loader.gif" alt="En cours..."></div>
{/if}