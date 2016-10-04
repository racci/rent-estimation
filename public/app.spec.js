describe('Apartment inputs', function() {
   
	describe('Testing  controller',function(){
		it('should initilize scope', function(){
			module('rentApp');

			var scope = {};

			inject(function($controller){
				ctrl = $controller('rentCtrl', {$scope:scope});
			});

			expect(scope.price).toBeDefined();
			expect(scope.price).toBe(null);
		})
	})  
});