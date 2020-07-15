<script>
	export let image;
	export let image_mime;
	export let size = "250px";

	import { Buffer } from "buffer";
	var Base64 = require('js-base64').Base64;

	const default_image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgAgMAAACmHu77AAAADFBMVEXf39+zs7PExMTU1NSQ2M1BAAACzklEQVR42uzBgQAAAACAoP2pF6kCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGB27tgmdiCKwvDg1Qv2SUvmEjZ4BThwtiW8gDusBMEWQEAJ28T0QQluwiUQ0AXyvezaCGFC5hydL0Mk/MHIc8eDRURERERERERERERERERERNb0tiIPCUaxNaeEorFVx4Ria6tyQtHZOphFsrd15wSitXWHBEIhtVFIbRRSG4XUhirk8N3vFPIzhSgkgVBIbfhC3vILRUhvlgeGkGJmJ4KQnZ/GEYR0NhnwQ0abHPBDzJ3gQxpzR/iQnbk7+JCtuQwf8scCfEhnYUAP2Vs4K+TXxR/bWjgo5NcppDZki50mhOaBSLNFodk07szdw4d8Gqz6PMCGpLIYdYs94Ia08/OwmYpgQ+bjIF/4+Ywa0sxLZB+XGUFDFkemo02eUEO2l6fIxsILaMj1tcKNhTyAhny5rfkAHtLZxRN2yGhXBTqE5S5KwxKyYwnpWEJalpBCEuIblFzwQ3yt393ih/gG5TH18CE+jDyn9IoeMn6cN24Kdsjmekz3FzukmU+3/kGHfKz1yaYgh3SLixy3yCGtLX7sgUPKp3cLI2yIr/WMfIjtLvfoCEL8fc9/gpDYoBCEFN+g4IfEMAL9xirc+DBCEBIbFIIQX+sngpAYRghCbIL9enoxjBCE+Fo/EoTEMEIQEsMIQUgMI/ghMYyAX6qZhxGCkBhGCEJiGIEOofnHfIXURCG1UUhtFFIbmhCaj+nRfN6Q5oOTNJ8Apfko6zs7dyADAAAAMMjf+h5fgfRpcgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqD04EAAAAAAQ5G89yBUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwH2Lva8nFuuAAAAAABJRU5ErkJggg==";

	let img_url;

	$: if (image == undefined) {
		img_url = default_image;
	} else {
		img_url = "data:image/" + image_mime + ";base64," + Base64.fromUint8Array(image);
	}

	function imageEdited(e) {
		let file_blob = e.target.files[0];

		file_blob.arrayBuffer().then(img_buffer => {
			img_buffer = new Uint8Array(img_buffer)
			image = Buffer.from(img_buffer);
			image_mime = file_blob.mime;
			img_url = "data:image/png;base64," + Base64.fromUint8Array(img_buffer);
		})
	}

</script>

<style>
	#editable {
		padding: 0px;
		border-radius: 4px;
		border: solid black 1px;
		width: var(--size);
		height: var(--size);
	}

	#editable img {
		width: 100%;
		height: 100%;
		border-radius: 4px;
	}
</style>

<div id="editable" style="--size: {size};">
	<img src="{img_url}" alt="Cover" />
	<input type="file" accept="image/png, image/jpeg" on:change={imageEdited} />
</div>
