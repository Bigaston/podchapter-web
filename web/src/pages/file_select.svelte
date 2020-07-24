<script>
  	import {createEventDispatcher, onMount} from "svelte";

  	const dispatch = createEventDispatcher();

	function fileChosed(e) {
		dispatch("file", e.target.files[0])
	}
</script>


<style>
	label {
		display: block;
		margin-bottom: 5px;
	}
</style>

<center>
	<label for="fileinput">Merci de sélectionner un fichier MP3</label>
	<input type="file" id="fileinput" accept="audio/mpeg" on:change={fileChosed} />
</center>