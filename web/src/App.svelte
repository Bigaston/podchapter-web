<script>
	import FileSelect from "./pages/file_select.svelte"
	import ChapterEditor from "./pages/chapter_editor.svelte"

    import IconifyIcon from "@iconify/svelte";
    import keyboardIcon from "@iconify/icons-twemoji/keyboard";
    import moneyBagIcon from "@iconify/icons-twemoji/money-bag";

	let file_chosed = false;

	let file_blob = "";

	function fileChosed(e) {
		file_blob = e.detail;
		file_chosed = true;
	}
</script>

<style>
	h1 {
		text-align: center;
	}

	.wrapper {
		padding: 10px;
	}

	.footer {
        font-size: 14px;
        color: #6c757d;
        text-align: center;
        margin-bottom: 2rem;
        padding-top: 2rem;
	}
	
	.footer a {
        color: #6c757d;
	}
</style>

<div class="wrapper">
	<h1>PodChapter</h1>
	{#if !file_chosed}
		<FileSelect on:file={fileChosed} />
	{:else}
		<ChapterEditor {file_blob} on:back={() => {file_blob = undefined; file_chosed = false}}/>
	{/if}
</div>

<div class="footer">
	<p>PodChapter est développé par <a href="https://twitter.com/Bigaston">Bigaston</a> avec l'aide de <a href="https://twitter.com/PofMagicfingers">PofMagicfingers</a></p>
	<p><IconifyIcon icon={keyboardIcon} inline={true} /> <a href="https://github.com/Bigaston/podchapter-web">Code Source</a> | <IconifyIcon icon={moneyBagIcon} inline={true} /> <a href="https://utip.io/bigaston">Me soutenir</a></p>
	<p>Version logiciel disponible sur <a href="https://podchapter.bigaston.dev/">podchapter.bigaston.dev</a></p>
</div>
