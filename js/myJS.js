function setUpTangle () {

			var tangle = new Tangle(document.getElementById("calorieCalculator"), 
			{
				initialize: function () {
					this.bags = 1;
            		this.calorie_per_apple = 117;
    
				},
				update: function () {
					this.apples = this.bags * 9;
    				this.total_calaries = this.calorie_per_apple*this.apples;
    				
				}
			});

			
			
			// //samples 
			// var element = document.getElementById("example");

			// var tangle = new Tangle(element, {
			// 	initialize: function () {
			// 		this.cookies = 4;
			// 		this.caloriesPerCookie = 50;
			// 	},
			// 	update: function () {
			// 		this.calories = this.cookies * this.caloriesPerCookie;
			// 	}
			// });
		}

