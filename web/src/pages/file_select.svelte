<script>
  	import {createEventDispatcher, onMount} from "svelte";

  	const dispatch = createEventDispatcher();

	function fileChosed(e) {
		dispatch("file", e.target.files[0])
	}
</script>

<center>
	<p>Merci de sélectionner un fichier</p>
	<input type="file" id="fileinput" accept="audio/mpeg" on:change={fileChosed} />
</center>