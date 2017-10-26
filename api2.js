$(document).ready(function(){
    $.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-10-18&end_date=2017-10-25&api_key=uBbS7vZx5Jtx6pAfsZBVVrMThUPYxy6eMNq7m8iG', function(data){
        


    for(let asteroid of data.near_earth_objects['2017-10-18']) {
        
        if(asteroid.is_potentially_hazardous_asteroid === true) {
            var asteroidName = asteroid.name
            console.log(asteroidName)
        		$('.2017-10-18 .name').append("<br>" + asteroidName)
        	if(asteroid.estimated_diameter.feet) {
                var asteroidDiameter = asteroid.estimated_diameter.feet.estimated_diameter_max
                console.log(asteroidDiameter)
                $('.2017-10-18 .diameter').append("<br>" + asteroidDiameter)
    		}
    		if(asteroid.close_approach_data['0'].relative_velocity) {
                var velocity = asteroid.close_approach_data['0'].relative_velocity.miles_per_hour
                console.log(velocity)
                $('.2017-10-18 .velocity').append("<br>" + velocity)
            }
            if(asteroid.close_approach_data['0'].miss_distance) {
                var distance = asteroid.close_approach_data['0'].miss_distance.miles
                console.log(distance)
                $('.2017-10-18 .distance').append("<br>" + distance)
            }
		}

	}

	for(let asteroid of data.near_earth_objects['2017-10-19']) {
        
        if(asteroid.is_potentially_hazardous_asteroid === true) {
            var asteroidName = asteroid.name
            console.log(asteroidName)
        		$('.2017-10-19 .name').append("<br>" + asteroidName)
        	if(asteroid.estimated_diameter.feet) {
                var asteroidDiameter = asteroid.estimated_diameter.feet.estimated_diameter_max
                console.log(asteroidDiameter)
                $('.2017-10-19 .diameter').append("<br>" + asteroidDiameter)
    		}	
    		if(asteroid.close_approach_data['0'].relative_velocity) {
                var velocity = asteroid.close_approach_data['0'].relative_velocity.miles_per_hour
                console.log(velocity)
                $('.2017-10-19 .velocity').append("<br>" + velocity)
            }
            if(asteroid.close_approach_data['0'].miss_distance) {
                var distance = asteroid.close_approach_data['0'].miss_distance.miles
                console.log(distance)
                $('.2017-10-19 .distance').append("<br>" + distance)
            }
		}

	}

	for(let asteroid of data.near_earth_objects['2017-10-20']) {
        
        if(asteroid.is_potentially_hazardous_asteroid === true) {
            var asteroidName = asteroid.name
            console.log(asteroidName)
            $('.2017-10-20 .name').append("<br>" + asteroidName)
        
        	if(asteroid.estimated_diameter.feet) {
                var asteroidDiameter = asteroid.estimated_diameter.feet.estimated_diameter_max
                console.log(asteroidDiameter)
                $('.2017-10-20 .diameter').append("<br>" + asteroidDiameter)
    		}
    		if(asteroid.close_approach_data['0'].relative_velocity) {
                var velocity = asteroid.close_approach_data['0'].relative_velocity.miles_per_hour
                console.log(velocity)
                $('.2017-10-20 .velocity').append("<br>" + velocity)
            }
            if(asteroid.close_approach_data['0'].miss_distance) {
                var distance = asteroid.close_approach_data['0'].miss_distance.miles
                console.log(distance)
                $('.2017-10-20 .distance').append("<br>" + distance)
            }
		}

	}

	for(let asteroid of data.near_earth_objects['2017-10-21']) {
        
        if(asteroid.is_potentially_hazardous_asteroid === true) {
            var asteroidName = asteroid.name
            console.log(asteroidName)
            $('.2017-10-21 .name').append("<br>" + asteroidName)
        
        	if(asteroid.estimated_diameter.feet) {
                var asteroidDiameter = asteroid.estimated_diameter.feet.estimated_diameter_max
                console.log(asteroidDiameter)
                $('.2017-10-21 .diameter').append("<br>" + asteroidDiameter)
    		}
    		if(asteroid.close_approach_data['0'].relative_velocity) {
                var velocity = asteroid.close_approach_data['0'].relative_velocity.miles_per_hour
                console.log(velocity)
                console.log(distance)
                $('.2017-10-21 .velocity').append("<br>" + velocity)
            }
            if(asteroid.close_approach_data['0'].miss_distance) {
                var distance = asteroid.close_approach_data['0'].miss_distance.miles
                console.log(distance)
                $('.2017-10-21 .distance').append("<br>" + distance)
            }
		}

	}

	for(let asteroid of data.near_earth_objects['2017-10-22']) {
        
        if(asteroid.is_potentially_hazardous_asteroid === true) {
            var asteroidName = asteroid.name
            console.log(asteroidName)
            $('.2017-10-22 .name').append("<br>" + asteroidName)
        
        	if(asteroid.estimated_diameter.feet) {
                var asteroidDiameter = asteroid.estimated_diameter.feet.estimated_diameter_max
                console.log(asteroidDiameter)
                $('.2017-10-22 .diameter').append("<br>" + asteroidDiameter)
    		}
    		if(asteroid.close_approach_data['0'].relative_velocity) {
                var velocity = asteroid.close_approach_data['0'].relative_velocity.miles_per_hour
                console.log(velocity)
                $('.2017-10-22 .velocity').append("<br>" + velocity)
            }
            if(asteroid.close_approach_data['0'].miss_distance) {
                var distance = asteroid.close_approach_data['0'].miss_distance.miles
                console.log(distance)
                $('.2017-10-22 .distance').append("<br>" + distance)
            }
		}

	}

	for(let asteroid of data.near_earth_objects['2017-10-23']) {
        
        if(asteroid.is_potentially_hazardous_asteroid === true) {
            var asteroidName = asteroid.name
            console.log(asteroidName)
             $('.2017-10-23 .name').append("<br>" + asteroidName)
        
        	if(asteroid.estimated_diameter.feet) {
                var asteroidDiameter = asteroid.estimated_diameter.feet.estimated_diameter_max
                console.log(asteroidDiameter)
                $('.2017-10-23 .diameter').append("<br>" + asteroidDiameter)
    		}
    		if(asteroid.close_approach_data['0'].relative_velocity) {
                var velocity = asteroid.close_approach_data['0'].relative_velocity.miles_per_hour
                console.log(velocity)
                $('.2017-10-23 .velocity').append("<br>" + velocity)
            }
            if(asteroid.close_approach_data['0'].miss_distance) {
                var distance = asteroid.close_approach_data['0'].miss_distance.miles
                console.log(distance)
                $('.2017-10-23 .distance').append("<br>" + distance)
            }
		}

	}

	for(let asteroid of data.near_earth_objects['2017-10-24']) {
        
        if(asteroid.is_potentially_hazardous_asteroid === true) {
            var asteroidName = asteroid.name
            console.log(asteroidName)
            $('.2017-10-24 .name').append("<br>" + asteroidName)
        
        	if(asteroid.estimated_diameter.feet) {
                var asteroidDiameter = asteroid.estimated_diameter.feet.estimated_diameter_max
                console.log(asteroidDiameter)
                $('.2017-10-24 .diameter').append("<br>" + asteroidDiameter)
    		}
    		if(asteroid.close_approach_data['0'].relative_velocity) {
                var velocity = asteroid.close_approach_data['0'].relative_velocity.miles_per_hour
                console.log(velocity)
                $('.2017-10-24 .velocity').append("<br>" + velocity)
            }
            if(asteroid.close_approach_data['0'].miss_distance) {
                var distance = asteroid.close_approach_data['0'].miss_distance.miles
                console.log(distance)
                $('.2017-10-24 .distance').append("<br>" + distance)
            }
		}

	}

	for(let asteroid of data.near_earth_objects['2017-10-25']) {
        
        if(asteroid.is_potentially_hazardous_asteroid === true) {
            var asteroidName = asteroid.name
            console.log(asteroidName)
            $('.2017-10-24 .name').append("<br>" + asteroidName)
        
        	if(asteroid.estimated_diameter.feet) {
                var asteroidDiameter = asteroid.estimated_diameter.feet.estimated_diameter_max
                console.log(asteroidDiameter)
                $('.2017-10-24 .diameter').append("<br>" + asteroidDiameter)
    		}
    		if(asteroid.close_approach_data['0'].relative_velocity) {
                var velocity = asteroid.close_approach_data['0'].relative_velocity.miles_per_hour
                console.log(velocity)
                $('.2017-10-24 .velocity').append("<br>" + velocity)
            }
            if(asteroid.close_approach_data['0'].miss_distance) {
                var distance = asteroid.close_approach_data['0'].miss_distance.miles
                console.log(distance)
                $('.2017-10-24 .distance').append("<br>" + distance)
            }
		}

	}
  
//   var page = `

// 	<h1> Were All Gonna Die <h1>

// 	<table>
// 		<td>
// 			<tr>
// 				${asteroidName}
// 			</tr>
// 			<tr>
// 				 Max Diameter: ${asteroidDiameter}
// 			</tr>
// 			<tr>
// 				 velocity: ${velocity}
// 			</tr>
// 			<tr>
// 				Distance from Earth: ${distance}
// 			</tr>
// 		</td>
// 	</table>
// `

// $('body').append(page)
 	
})

})
















