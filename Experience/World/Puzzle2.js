import * as THREE from "three"
import Experience from "../Experience.js";
import { EventEmitter} from "events";
import GSAP from "gsap"

export default class Puzzle2 extends EventEmitter   {
    constructor() {

        super();
               
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;   
        this.time = this.experience.time;
        this.cube = this.experience.resources.items.cube;
        this.puzzle1 = this.experience.world.puzzle1;

        this.p2lock = []
        this.accessp2 = false;

        this.object = this.cube.scene.children;

        this.button10p = false;
        this.button11p = false;
        this.button12p = false;
        this.button13p = false;
        this.button14p = false;
        this.button15p = false;
        this.button16p = false;
        this.button17p = false;
        this.button18p = false;

        this.puzzle1.on("puzzle1complete", ()=>{
            
            setTimeout(() => {
                
                this.resources.items.loading.play(); 
                
               }, 1700);
            
            // console.log("PAME LIGOOOOOO")

        });
        
        this.timeline = new GSAP.timeline();


        // if(this.experience.world.puzzle1.accessp1 === true) {
        // }
        // console.log(this.object)
       
    }


    lockCheck(){

        if (this.p2lock.length === 9){
            if (this.p2lock[0] === 3 
                && this.p2lock[1] === 2 
                && this.p2lock[2] === 1 
                && this.p2lock[3] === 6
                && this.p2lock[4] === 5
                && this.p2lock[5] === 4
                && this.p2lock[6] === 9
                && this.p2lock[7] === 8
                && this.p2lock[8] === 7                
                ){
                
                setTimeout(() => {
                    this.accessp2 = true;
                    this.resources.items.success.play(); 
                    

                    // console.log("access granted")
                    this.emit("puzzle2complete")
                    this.p2lock.length = 0 
                   }, 1000);
                
            } else {

                setTimeout(() => {
                    this.p2_resetAll();
                    this.p2lock.length = 0 
                    this.resources.items.error.play(); 
                    // console.log("access denied")
                   }, 50);
                
            }
            // console.log(this.p1lock)
        }
        
    }

      

    p2_resetAll(){
        
        this.object.forEach((e) => {
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_10"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_11"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_12"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_13"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_14"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_15"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_16"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_17"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_18"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    }
                    // this.accessp1 = false;
                    this.button10p = false;
                    this.button11p = false;
                    this.button12p = false;
                    this.button13p = false;
                    this.button14p = false;
                    this.button15p = false;
                    this.button16p = false;
                    this.button17p = false;
                    this.button18p = false; 
                })                                        
            } 
        }) 
        
    }

    button_10(){

        this.object.forEach((e) => {
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_10" && this.button10p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button10p === false){
                    this.button10p = true;
                    this.p2lock.push(1)
                  }                         
                
            } 
        })                                       
    }
    button_11(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_11" && this.button11p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button11p === false){
                    this.button11p = true;
                    this.p2lock.push(2)
                  }                         
                
            } 
        })                                       
    }
    button_12(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_12" && this.button12p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button12p === false){
                    this.button12p = true;
                    this.p2lock.push(3)
                  }                         
                
            } 
        })                                       
    }
    button_13(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_13" && this.button13p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button13p === false){
                    this.button13p = true;
                    this.p2lock.push(4)
                  }                         
                
            } 
        })                                       
    }
    button_14(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_14" && this.button14p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button14p === false){
                    this.button14p = true;
                    this.p2lock.push(5)
                  }                         
                
            } 
        })                                       
    }
    button_15(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_15" && this.button15p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button15p === false){
                    this.button15p = true;
                    this.p2lock.push(6)
                  }                         
                
            } 
        })                                       
    }
    button_16(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_16" && this.button16p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button16p === false){
                    this.button16p = true;
                    this.p2lock.push(7)
                  }                         
                
            } 
        })                                       
    }
    button_17(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_17" && this.button17p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button17p === false){
                    this.button17p = true;
                    this.p2lock.push(8)
                  }                         
                
            } 
        })                                       
    }
    button_18(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_18" && this.button18p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: -0.05,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button18p === false){
                    this.button18p = true;
                    this.p2lock.push(9)
                  }                         
                
            } 
        })                                       
    }       

   

            
    

    update(){
        
        // console.log(this.p2lock)
        // console.log(this.access)
        // console.log(this.p1lock.length)
        // console.log(this.access)
        
         //else if (this.p1lock.length > 5) {
        //     // this.p1lock.length = 0;
        // }
        
        
    }
} 