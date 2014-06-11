document.addEventListener('deviceready', 
    function () 
    {
        FastClick.attach(document.body);

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
     }, false);

var homeTpl = Handlebars.compile($("#home-tpl").html());
var employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());

// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {
    
    /* ---------------------------------- Local Variables ---------------------------------- */
    var adapter = new WebSqlAdapter();
    
    adapter.initialize().done(function () {
        console.log("Data adapter initialized");
        renderHomeView(); 

    });
    
    /* --------------------------------- Event Registration -------------------------------- */
     
    /* ---------------------------------- Local Functions ---------------------------------- */
        
    function findByName() {
        /*adapter.findByName($('.search-key').val()).done(function (employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i = 0; i < l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });*/
        adapter.findByName($('.search-key').val()).done(
            function (employees) 
            {
                $('.employee-list').html(employeeLiTpl(employees));
            });
    }
    function renderHomeView() 
    {        
        /*var html =
           "<br/><br/>\n\
            <input class=\"help-btn\" type=\"button\" value=\"help\"/>"+
            "<h1>Directory</h1>" +
            "<input class=\"search-key\" type=\"search\" placeholder=\"Enter name\"/>" +
            "<ul class=\"employee-list\"></ul>";
        $('body').html(html);
        
        $('.search-key').on('keyup', findByName);
        $('.help-btn').on('click', 
        function() {
            alert("Some help here...");
        });*/
        $('body').html(homeTpl());
        $('.search-key').on('keyup', findByName);
       
    }

}());