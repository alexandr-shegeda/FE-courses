function brightness() {
    debugger;
    var r = Math.floor(this.red*255);
    var g = Math.floor(this.green*255);
    var b = Math.floor(this.blue*255);
    debugger;
    return (r * 77 + g * 150 + b * 29) >> 8;
}