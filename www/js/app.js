// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {
    
    /* ---------------------------------- Local Variables ---------------------------------- */
    var adapter = new WebSqlAdapter();
    adapter.initialize().done(function () {
        console.log("Data adapter initialized");
        renderHomeView();

    });

    /* --------------------------------- Event Registration -------------------------------- */
    $('.search-key').on('keyup', findByName);
    $('.help-btn').on('click', function() {
        alert("Some help here...");
    });
     document.addEventListener('deviceready', 
        function () 
        {
            if (navigator.notification) { // Override default HTML alert with native dialog
                window.alert = function (message) {
                    navigator.notification.alert(
                        message,    // message
                        null,       // callback
                        "Tutorial:Cordova", // title
                        'OK'        // buttonName
                    );
                };
            }
            FastClick.attach(document.body);
        }, false);

    /* ---------------------------------- Local Functions ---------------------------------- */
    function renderHomeView() 
    {
        console.log("Ha entrado en renderHome");
        var html =
           "<br/><br/>\n\
            <input class='help-btn' type='button' value='help'/>"+
            "<h1>Directory</h1>" +
            "<input class='search-key' type='search' placeholder='Enter name'/>" +
            "<ul class='employee-list'></ul>";
        $('body').html(html);
        $('.search-key').on('keyup', findByName);
        
        console.log($('.help-btn'));
    }
    
    function findByName() {
        adapter.findByName($('.search-key').val()).done(function (employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i = 0; i < l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });
    }
    

}());