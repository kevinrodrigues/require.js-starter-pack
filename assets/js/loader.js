/* author : Kevin Rodrigues. */

require.config({
    baseUrl: 'assets/js',
    paths: {
        //jquery loaded from the CDN with a fall back local version..
        jquery: [
            '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
            'jquery-1.10.2'
        ],
        //libs we will load in..
        modernizer:'modernizr-2.6.2.min',
    }
});

//make use of the above from here..

require(['loader'], function() {
    //update the div 'custom'..
    require(['page/feature']);
});