    window.onload = async function() { 

    	// copy info from functions.js
    	var info = {
		    'env': asmLibraryArg,
		    'wasi_snapshot_preview1': asmLibraryArg,
		  };

     	let response = await fetch('functions.wasm');
        let bytes = await response.arrayBuffer();
        let wasmObj = await WebAssembly.instantiate(bytes, info);
        wasmExports = wasmObj.instance.exports;
        console.log(wasmExports);

        document.getElementById('getSqrbtn').addEventListener("click", function(){
        	document.getElementById('result').innerText =  _getSqr( document.getElementById('sqrinput').value ); 
        });

    }