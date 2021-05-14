module.exports = class Operation{
    /** construct class */
    constructor(x, y){
        this.x=x;
        this.y=y;
    }
    /** get sum of x and y */
    sum(){
        return this.x + this.y;
    }
}