				document.getElementById("begin").onclick = function() {
		
					var start = new Date().getTime();
					
					function getRandomColor() {
						
						var letters = '0123456789ABCDEF'.split('');
			
						var color = '#';
			
						for (var i = 0; i < 6; i++ ) {
				
							color += letters[Math.floor(Math.random() * 16)];
			
						}
			
						return color;

					}
					
					function makeShapeAppear() {
						
						var top = Math.random() * 250;
						
						var left = Math.random() * 400;
						
						var width = (Math.random() * 200) + 100;
						
						if (Math.random() > 0.5) {
							
							document.getElementById("shape").style.borderRadius = "50%";
							
						} else {
							
							document.getElementById("shape").style.borderRadius = "0";
							
						}
						
						document.getElementById("shape").style.backgroundColor = getRandomColor();
						
						document.getElementById("shape").style.width = width + "px";
						
						document.getElementById("shape").style.height = width + "px";
						
						document.getElementById("shape").style.top = top + "px";
						
						document.getElementById("shape").style.left = left + "px";
			
						document.getElementById("shape").style.display = "block";
						
						start = new Date().getTime();

					}
					
					function appearAfterDelay() {
						
						setTimeout(makeShapeAppear, Math.random() * 2000);
						
					}
					
					var times = [];
						
					document.getElementById("Stop").onclick = function() {

							var total = 0;
							
							for (var i = 0; i < times.length; i++) {
							
								total += times[i];
							
							}
							
							var avg = Math.round((total/times.length)* 100) / 100;
							
							document.getElementById("avg").innerHTML = avg + "s";
							
							document.getElementById("average").innerHTML = avg + "s";
							
							if (avg < 0.6) {
							
								document.getElementById("fast").style.display = "block";
							
							} else {
							
								document.getElementById("slow").style.display = "block";
							
							}
							
							
					
						}
					
					appearAfterDelay();
					
					document.getElementById("shape").onclick = function() {
						
						document.getElementById("shape").style.display = "none";
						
						var end = new Date().getTime();
						
						var timeTaken = (end - start) / 1000;
						
						document.getElementById("timeTaken").innerHTML = timeTaken + "s";
						
						appearAfterDelay();
											
						times.push(timeTaken);
						
						console.log(times);
						
						
						
						}
						
						
					
					
				
				
				}