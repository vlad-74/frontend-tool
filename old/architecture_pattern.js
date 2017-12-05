(function() {
  
	var app = {
		
		initialize : function () {			
			this.modules();
			this.setUpListeners();
		},

		modules: function () {

		},

		setUpListeners: function () {
			$('form').click($.proxy(this.submitForm, this));
		},

		submitForm: function () {
			// some actions here
			// this === app ( $.proxy help with it)
		}		
		
	}

	app.initialize();

}());