
export class Praisebutton{
         
	constructor(el) {
		this.el=el;
		this.times=0;
		this.el.bind("click",()=>{
			// $.ajax({
			// 	type: 'get',
			// 	url: '/index/add',
			//  success: function ( data ) {
			// 	$(".time").text(data);
			//  },
			// error: function ( data ) {
			//   alert(data);
			// }
			// });
			axios.get('/index/add')
			.then(function (response) {
				setTimeout(function(){
					console.log(response.data);
					$(".time").text(response.data);
				},1000);
			 
			})
		});
		  console.log(this.el);
		  
	}
		
}

