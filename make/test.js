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
        slug: 'buttons_three_column_grid_menu_jqm'
    },
    theme : {
        id : 'id',
        slug : 'elevate',
        base : 'a'
    },
    pages: [
        { id: 0, type: 'basic-0', title: 'Page zero', body: 'Soy el cuerpo', topImage: 'http://misteridea.com/wp-content/uploads/misteridea1.png' },
        { id: 1, type: 'contact-0', address:'Elm street, 2', title: 'Contact', phone:'+34629328171', email:'johndoe@google.com', emailSubject:'Here we go!', defaultEmailText:'Nevermind, my friend',twitter:'alberto_velaz' ,facebook: 'gomovil'},
        { id: 2, type: 'map-0', title: 'Map', address: 'Circus Street',mapURI:'40.396764,-3.713379'},
        { id: 3, type: 'contact-0', title: 'Contact' },
        { id: 4, type: 'social-media-0', twitter: 'http://twitter.com/natcrea', facebook: 'http://facebook.com/gomovil' },
        { id: 5, type: 'gallery-0'},
        { id: 6, type: 'youtube-0', videoURI:'http://www.youtube.com/embed/6dPm6BDp8wY?rel=0'}
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
