// Set baseUrl to your Semo-Data path
var baseUrl = '/Users/albertovelaz2002/Documents/go-movil/Webmob/Semo-Data';
exports.defaultFramework = 'jquery-mobile';


exports.dirs = {
    frameworks: baseUrl+'/frameworks',
    themes:     baseUrl+'/themes',
    pageTypes:  baseUrl+'/page-types',
    templates:  baseUrl+'/templates',
    public:     baseUrl+'/public'
};
exports.baseurl = {
    pageTypes:  baseUrl+'/page-types',
    public:     '/'
};
exports.build = {
    watchFiles: true
};
