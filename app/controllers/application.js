import Ember from 'ember';

export default Ember.Controller.extend({
	metawearConnected: false,
	actions: {
		metawear_connect:function(){
			var t = this;
			metawear.init(function(){
				console.log('Connected to Metawear');
				t.set('metawearConnected', true);
			}, function(){
				console.log('No Metawear device');
			});
		},
		metawear_disconnect:function(){
			var t = this;
			metawear.disconnect(function(){
				console.log('disconnected from Metawear');
				t.set('metawearConnected', false);

			},function(){
				console.log('Error Disconnecting Metawear');
			});
		},
		metawear_turnOnLED_red:function(){
			console.log('Turning on meatwear LED RED');
			metawear.setLED(metawear.COLOR.RED);
			metawear.play(true);
		},

		metawear_turnOnLED_blue :function(){
			console.log('Turning on meatwear LED BLUE');
			metawear.setLED(metawear.COLOR.BLUE);
			metawear.play(true);

		},
		metawear_turnOnLED_green: function(){
			console.log('Turning on meatwear LED GREEN');
			metawear.setLED(metawear.COLOR.GREEN);
			metawear.play(true);

		},
		metawear_turnOffLED:function(){
			console.log('Turning Off LED');
			metawear.stop(true);
		}
	}
});
