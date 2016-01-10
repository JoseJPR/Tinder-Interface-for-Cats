window.addEventListener('load', function() {
    
    //You can change (bottom) or (left)
    $JSView.run();
    
    $JSView.declareView({ 
        home: {
            url: '/home',
            template: 'views/home.html',
            controller: 'home'
        }
    });
    
    $JSView.initView('home');
    
}, false);