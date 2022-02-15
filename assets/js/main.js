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
            editor.ui.view.editable.element.style.height = '350px';
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

