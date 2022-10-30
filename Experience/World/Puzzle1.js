import * as THREE from "three"
import Experience from "../Experience.js";
import { EventEmitter} from "events";
import GSAP from "gsap"

export default class Puzzle1 extends EventEmitter  {
    constructor() {
        
        super();
        
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;   
        this.time = this.experience.time;
        this.cube = this.experience.resources.items.cube
        this.world = this.experience.world.puzzle1

        this.p1lock = []
        this.accessp1 = false;
        this.button1p = false;
        this.button2p = false;
        this.button3p = false;
        this.button4p = false;
        this.button5p = false;
        this.button6p = false;
        this.button7p = false;
        this.button8p = false;
        this.button9p = false;
        
        

        // this.setAnimation();

        this.object = this.cube.scene.children;

        // console.log(this.object)
        // this.starttextApear()
    
       
    }

    
    
    lockCheck(){

        if (this.p1lock.length === 9){
            if (this.p1lock[0] === 1 
                && this.p1lock[1] === 2 
                && this.p1lock[2] === 3 
                && this.p1lock[3] === 7
                && this.p1lock[4] === 8
                && this.p1lock[5] === 9
                && this.p1lock[6] === 4
                && this.p1lock[7] === 5
                && this.p1lock[8] === 6                
                ){
                
                setTimeout(() => {
                    this.accessp1 = true;
                    this.resources.items.success.play(); 
                    

                    // console.log("access granted")
                    this.emit("puzzle1complete")
                    this.p1lock.length = 0
                   }, 1000);
                
            } else {

                setTimeout(() => {
                    this.p1_resetAll();
                    this.p1lock.length = 0 
                    this.resources.items.error.play(); 
                    // console.log("access denied")
                   }, 50);
                
            }
            // console.log(this.p1lock)
        }
        
    }

    p1_resetAll(){
        
        this.object.forEach((e) => {
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_1"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_2"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_3"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_4"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_5"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_6"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_7"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_8"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_9"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    }
                    // this.accessp1 = false;
                    this.button1p = false;
                    this.button2p = false;
                    this.button4p = false;
                    this.button3p = false;
                    this.button6p = false;
                    this.button5p = false;
                    this.button8p = false;
                    this.button7p = false;
                    this.button9p = false; 
                })                                        
            } 
        }) 
        
    }

    button_1(){

        this.object.forEach((e) => {
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_1" && this.button1p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button1p === false){
                    this.button1p = true;
                    this.p1lock.push(1)
                  }                         
                
            } 
        })                                       
    }
    button_2(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_2" && this.button2p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button2p === false){
                    this.button2p = true;
                    this.p1lock.push(2)
                  }                         
                
            } 
        })                                       
    }
    button_3(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_3" && this.button3p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button3p === false){
                    this.button3p = true;
                    this.p1lock.push(3)
                  }                         
                
            } 
        })                                       
    }
    button_4(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_4" && this.button4p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button4p === false){
                    this.button4p = true;
                    this.p1lock.push(4)
                  }                         
                
            } 
        })                                       
    }
    button_5(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_5" && this.button5p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button5p === false){
                    this.button5p = true;
                    this.p1lock.push(5)
                  }                         
                
            } 
        })                                       
    }
    button_6(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_6" && this.button6p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button6p === false){
                    this.button6p = true;
                    this.p1lock.push(6)
                  }                         
                
            } 
        })                                       
    }
    button_7(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_7" && this.button7p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button7p === false){
                    this.button7p = true;
                    this.p1lock.push(7)
                  }                         
                
            } 
        })                                       
    }
    button_8(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_8" && this.button8p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button8p === false){
                    this.button8p = true;
                    this.p1lock.push(8)
                  }                         
                
            } 
        })                                       
    }
    button_9(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_9" && this.button9p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: -0.05,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button9p === false){
                    this.button9p = true;
                    this.p1lock.push(9)
                  }                         
                
            } 
        })                                       
    }           
    

    update(){
        
        // console.log(this.access)
        // console.log(this.p1lock)
        // console.log(this.access)
        
         //else if (this.p1lock.length > 5) {
        //     // this.p1lock.length = 0;
        // }
        
        
    }
} 