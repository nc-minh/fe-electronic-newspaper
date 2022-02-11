import env from '../../env.js'
let theEditor;
ClassicEditor
        .create( document.querySelector( '#editor' ), {
            cloudServices: {
                tokenUrl: env.tokenUrl,
                uploadUrl: env.uploadUrl
            }
        })
        .then( editor => {
            theEditor = editor;
        } )
        .catch( err => {
            console.error( err.stack );
        } );




function getDataFromTheEditor() {
    return theEditor.getData();
}

document.getElementById( 'submit' ).addEventListener( 'click', () => {
    console.log( getDataFromTheEditor() );
} );