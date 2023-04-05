class KeyboardInput{
    constructor(){
        this.key = [];

        document.addEventListener('keydown',(ev)=>{
            this.key[ev.key] =true;
        })
        document.addEventListener('keyup',(ev)=>{
            this.key[ev.key] =false;
        })
    }
}
export default KeyboardInput;