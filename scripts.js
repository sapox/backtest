// backbone model
var Blog = Backbone.Model.extend({
	defaults: {
		author: '',
		title: '',
		url: ''
	}
});
// backbone collection
var Blogs = Backbone.Collection.extend({});
// instantiate two blogs

var blog1 = new Blog({
	author: 'Mangaso Rodriguez',
	title: 'mango para todos',
	url: 'http://elclubdelmango.com'
});

var blog2 = new Blog({
	author: 'Mandarina Ruiz',
	title: 'man man man',
	url: 'http://mandarinados.com'
});

// instantiate a collection
var blogs = new Blogs([blog1, blog2]);

//backbone views
// for one view
var BlogView = Backbone.View.extend({
	model: new Blog(),
	tagName: 'tr',
	initialize: function(){
		this.template = _.template($('.blogs-list-template').html());
	},
	render: function(){
		this.$el.html(this.template({model: this.model.toJSON()}))
	}
});
// for al blogs
var BlogsView = Backbone.View.extend({

});