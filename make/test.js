// Setup this property to point to your Semo-Server folder
var semoPath = '../../Semo-Server/';
var semoModules = semoPath + 'node_modules/';
var semoBuild = semoPath + 'semo-build/';

var mods = {
    log:        require(semoModules+'log4js'),
    build:      require(semoBuild+ 'index'),
    settings:   require('./sample-settings'),
    devices:    require(semoPath+'semo-devices')
};
var log = mods.log.getLogger('SemoBuild-Test');


// This is you website data, update as convenient
var website = {
    // This is not a real property of the website object but used in make script
    settings : mods.settings,

    title: 'Test website',
    slug:  'test',
    account : {
        username : 'username'
    },
    template: {
        slug: 'single_colum_jqm'
    },
    theme : {
        id : 'id',
        slug : 'winter',
        base : 'c'
    },
    pages: [
        { id: 0, type: 'basic-0', title: 'Page zero', body: 'Soy el cuerpo', topImage: 'http://misteridea.com/wp-content/uploads/misteridea1.png' },
        { id: 1, type: 'contact-0', title: 'Contact' },
        { id: 2, type: 'map-0', title: 'Map', tagline: 'this is my site'},
        { id: 3, type: 'contact-0', title: 'Contact' },
        { id: 4, type: 'social-media-0', twitter: 'http://twitter.com/natcrea', facebook: 'http://twitter.com/natcrea' }
    ] 
};

var devices = [ mods.devices.get('preview') ];
var slug = {
    slug : 'slug',
    account : {
        username : 'test',
    }
}

mods.build.init( mods.settings, function() {
    log.info('*** build system initialized ***');
    mods.build.build( mods.settings,slug, devices, website, undefined, false, function() {
        log.info('*** build complete ***');
        // TODO : This is to test page preview
        //var stream = new mods.build.StreamFile( process.stdout );
        //mods.build.doPreview( mods.settings, website, 1, stream, function() {
        //    log.info('*** preview complete ***');
        //});
    });
})
