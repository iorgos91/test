class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	createDiv() {
		let element = document.createElement('div');
		document.body.appendChild(element);
		element.style.cssText = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
	}
}

const item = new Options(100, 100, "#fff", 14, "center");

let btn = document.getElementsByTagName('button')[0];
    btn.addEventListener('click', function (){
    item.createDiv();
});    