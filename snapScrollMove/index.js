class snapScrollMove{
	constructor(dom) {
		this.parent = dom;
		this.length = (this.parent.scrollWidth / this.parent.clientWidth) | 0;
		this.index = (this.parent.scrollLeft / this.parent.clientWidth) | 0;
	}
	moveTo(index){
		index = index % this.length;
		this.parent.scrollLeft = this.parent.clientWidth * index;
		this.index = index;
	}
	getIndex(){
		this.index = (this.parent.scrollLeft / this.parent.clientWidth) | 0;
		return this.index;
	}
}
