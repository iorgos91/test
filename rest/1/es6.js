class Options {
	constructor(height, width, bg, border, fontSize, textAlign, padding) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.border = border;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
		this.padding = padding;
	}
	createDiv() {
		let element = document.createElement('div');
		document.body.appendChild(element);
		element.style.cssText = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; border: ${this.border}; font-size:${this.fontSize}px; text-align:${this.textAlign};
		margin:${this.padding}`;
	}
}

colorRandomizer = `#${Math.floor(Math.random()*6)}${Math.floor(Math.random()*6)}${Math.floor(Math.random()*6)}${Math.floor(Math.random()*6)}${Math.floor(Math.random()*6)}${Math.floor(Math.random()*6)}`;
 
const item = new Options(100, 100, colorRandomizer, "#000 2px solid", 14, "center", '10px');

let btn = document.getElementsByTagName('button')[0];
    btn.addEventListener('click', function (){
    item.createDiv();
});    