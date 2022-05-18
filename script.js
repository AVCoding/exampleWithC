    window.onload = async function() { 


     	let response = await fetch('functions.wasm');
        let bytes = await response.arrayBuffer();
        let wasmObj = await WebAssembly.instantiate(bytes, info);
        wasmExports = wasmObj.instance.exports;
        console.log(wasmExports);

        document.getElementById('getSqrbtn').addEventListener("click", function(){
        	document.getElementById('result').innerText =  _getSqr( document.getElementById('sqrinput').value ); 
        });

    }
