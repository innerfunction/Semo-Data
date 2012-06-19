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
        slug: 'accordion_single_page_jqm'
    },
    theme : {
        id : 'id',
        slug : 'metro',
        base : 'c'
    },
    pages: [
        { id: 0, type: 'basic-0', title: 'Page zero', body: 'Soy el cuerpo', topImage: 'http://misteridea.com/wp-content/uploads/misteridea1.png' },
<<<<<<< HEAD
        { id: 1, type: 'contact-0', title: 'Contact', address: 'Calle mayor', email: 'a@attch.com', phone:'0852285651', website:'www.innerfuction.com', facebook:'http://facebook.com/misteridea.es', twitter: '@misteridea', linkedin: 'http://linkedin.com/misteridea'},
        { id: 2, type: 'poll-0', title: 'Poll', question: 'What do you do?'},
        { id: 3, type: 'contact-form-0', title: 'Contact', address: 'Harcourt Street 20, Dublin 2', twitter: '@twitter', phone: '0875557575'},
        { id: 4, type: 'two-columns-0', title: 'Two colums', tagLine: 'WE ARE A FRANK AND TENACIOUS PR AGENCY BASED IN DUBLIN, IRELAND THAT PLANS AND EXECUTES INNOVATIVE AND SAVVY CAMPAIGNS FOR A RANGE OF CONSUMER AND CORPORATE CLIENTS.', body:'With 11.7million users and the capacity retain and engage users for the same amount of time as Facebook, Pinterest is the latest social media platform to consume us. But whatâ€™s the best way to use it when promoting a client? And is for big brands at all?', columnOneTitle: 'I am 1', columnTwoTitle:'I am 2', columnOneBody: 'With 11.7million users and the capacity retain and engage users for the same amount of time as Facebook, Pinterest is the latest social media platform to consume us. But whatâ€™s the best way to use it when promoting a client? And is for big brands at all?', columnTwoBody: 'With 11.7million users and the capacity retain and engage users for the same amount of time as Facebook, Pinterest is the latest social media platform to consume us. But whatâ€™s the best way to use it when promoting a client? And is for big brands at all?'  }
=======
        { id: 1, type: 'contact-0', title: 'Contact' },
        { id: 2, type: 'map-0', title: 'Map', tagline: 'this is my site'},
        { id: 3, type: 'contact-0', title: 'Contact' },
        { id: 4, type: 'social-media-0', twitter: 'http://twitter.com/natcrea', facebook: 'http://twitter.com/natcrea' },
	{ id: 5, type: 'gallery-0'}
>>>>>>> dc7fede56dd040db3459fe4a77feb6f93e9e599b
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
