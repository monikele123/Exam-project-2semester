$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '10368911651',
        limit: 100,
        resolution: 'standard_resolution',
        accessToken: '10368911651.1677ed0.348f5f1985d94961b87a44cdb08e67e9',
        sortBy: 'most-recent',
        template: '<div class="col-lg-4 instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});
                  