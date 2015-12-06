requirejs.config({
    baseUrl: 'js/src/modules',
    paths: {
        jquery: '../../lib/jquery',
        knockout: '../../lib/knockout',
        underscore: '../../lib/underscore',
        //knockoutmapping: '../../knockout.mapping'
    }
});

requirejs(['knockout','main'], function(ko, main){
	ko.applyBindings(new main());
});