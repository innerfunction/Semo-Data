//var i18n = require('./lib/i18n');

exports.init = function( $form ) {
    console.log('* Init form.js: Basic-0');
    console.log( '$FORM JQUERY --> ');
    console.log($form);
    //$.nub.init( document.body );
    // TODO: Check why this is not working
    //$.nub.init( $form );
    $.nub.init();
};

exports.validateDocument = function( page ) {
    console.log('exports.validate form.js basic-0');
    if (!page.title) {
        return ('Title is required');
    }
};

// rel: /remote/website/data/
/*exports.validator = function(){
    'title' : function(val){
        if (!val) return 'Title is required'
    },
    'description' : function(val){
        if (!description) return 'Description is required'
    }
}*/
