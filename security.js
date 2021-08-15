class Security{
    constructor(){
        this.button1 = createButton("Check");
        this.button2 = createButton("Check");
        this.button3 = createButton("Check");

        this.button1.position(100,150);
        this.button2.position(100,360);
        this.button3.position(750,200);

        this.input1 = createInput("word1");
        this.input2 = createInput("word2");
        this.input3 = createInput("word3");

        this.input1.position(100,120);
        this.input2.position(100,330);
        this.input3.position(750,170);
    }
   
    display(){
    
        this.button1.mousePressed(()=>{
            if(system.authenticate(inputName1,this.input1.value())){
                this.input1.hide();
                this.button1.hide();
                score++;
            }
        });

        this.button2.mousePressed(()=>{
            if(system.authenticate(inputName2,this.input2.value())){
                this.input2.hide();
                this.button2.hide();
                score++;
            }
        });

        this.button3.mousePressed(()=>{
            if(system.authenticate(inputName3,this.input3.value())){
                this.input3.hide();
                this.button3.hide();
                score++;
            }
        });
    
    
    

        

    }
}
