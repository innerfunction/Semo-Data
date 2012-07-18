exports.init = function( $form ) {
    console.log('* Init form.js: Basic-0');
    console.log( $form );
    $.nub.init( document.body );
    // TODO: Check why this is not working
    //$.nub.init( $form );
};

exports.validate = function( page ) {
    console.log('exports.validate form.js basic-0');
};

