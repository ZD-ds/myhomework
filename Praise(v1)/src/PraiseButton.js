
export class Praisebutton{
         
	constructor(el) {
		this.el=el;
		this.times=0;
		this.el.bind("click",()=>{
			
			this.times=add(this.times);
			 $('.time').text(this.times);
		});
		  console.log(this.el);
		  
	}
		
}

