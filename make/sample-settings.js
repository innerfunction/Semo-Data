// Set baseUrl to your Semo-Data path
var baseUrl = '/Users/javierloriente/workspace/git/innerfunction/Semo-Data';
exports.defaultFramework = 'jquery-mobile';


exports.dirs = {
    frameworks: baseUrl+'/frameworks',
    themes:     baseUrl+'/themes',
    pageTypes:  baseUrl+'/page-types',
    templates:  baseUrl+'/templates',
    public:     baseUrl+'/public'
};
exports.baseurl = {
    pageTypes:  '/rsc/page-types',
    public:     '/'
};
exports.build = {
    watchFiles: true
};
