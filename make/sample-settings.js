// Set baseUrl to your Semo-Data path
var baseUrl = '/Users/user/Documents/go-movil/WebMob/Semo-Data';
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
