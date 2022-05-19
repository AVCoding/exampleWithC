    window.onload = async function() { 

	// copy asmLibraryArg from functions.js
	var asmLibraryArg = {};

    	// copy info from functions.js
    	var info = {
	    'env': asmLibraryArg,
	    'wasi_snapshot_preview1': asmLibraryArg,
	  };

	// let wasmMemory =  new WebAssembly.Memory({ initial: 256, maximum: 256}); // Wasm memory 

	let wasmExports = null;
     	let response = await fetch('functions.wasm');
        let bytes = await response.arrayBuffer(); //convert file into a byte array
        let wasmObj = await WebAssembly.instantiate(bytes, info); //create a new WebAssembly object
        wasmExports = wasmObj.instance.exports; //exported functions
        console.log(wasmExports);

        document.getElementById('getSqrbtn').addEventListener("click", function(){
        	document.getElementById('result').innerText =   wasmExports.getSqr( document.getElementById('sqrinput').value ); 
        });

	//2-nd version , with functions.js
        //document.getElementById('getSqrbtn').addEventListener("click", function(){
        	//document.getElementById('result').innerText =  _getSqr( document.getElementById('sqrinput').value ); 
        //});

    }
