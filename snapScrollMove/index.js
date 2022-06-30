class snapScrollMove{
	constructor(dom) {
		this.parent = dom;
		this.length = Math.round(this.parent.scrollWidth / this.parent.clientWidth);
		this.index = Math.round(this.parent.scrollLeft / this.parent.clientWidth);
	}
	moveTo(index){
		index = index % this.length;
		this.parent.scrollLeft = this.parent.clientWidth * index;
		this.index = index;
	}
	getIndex(){
		this.index = Math.round(this.parent.scrollLeft / this.parent.clientWidth);
		return this.index;
	}
}
