Person = Backbone.Model.extend({
    initalize: function () {
        $('#p1').append('<p id="p2">This was added as a Backbone.Model.extend method.</p>');
    }
});

var person = new Person();