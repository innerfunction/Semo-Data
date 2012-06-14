exports.framework = 'jquery-mobile';
exports.forceBuild = true;

exports.targetForDevice = function( device ) {
    return 'default';
};

exports.setup = function( target, device, indir, outdir, callback ) {
    indir.cp('images css', outdir, callback );
};

exports.build = function( target, device, data, indir, outdir, page, callback ) {
    indir.file('index.html').evaluate( data.website, outdir.file('index.html'), callback );
};

exports.preview = function( device, data, indir, outfile, page, callback ) {
    indir.file('page.html').evaluate( data, outfile, callback );
};
