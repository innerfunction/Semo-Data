// Set baseUrl to your Semo-Data path
var baseUrl = '/Users/javierloriente/workspace/git/innerfunction/Semo-Data/';
exports.defaultFramework = 'bottom_grid_menu_jqm';


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
