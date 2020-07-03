<script>
    import { Buffer } from "buffer";
    import ID3 from "./node-id3.js"
    var toBuffer = require('blob-to-buffer')

    console.log(ID3)

    function salut(e) {
        toBuffer(e.target.files[0], function (err, buffer) {
            if (err) throw err
            
            console.log(buffer)

            console.log(ID3.read(buffer))
        })
    }
</script>

<style>

</style>

<h1>Hello World</h1>

<input type="file" id="fileinput" accept="mp3" on:change={salut} />