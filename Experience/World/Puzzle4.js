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
        this.puzzle3 = this.experience.world.puzzle3;

        this.p4lock = []
        this.accessp4 = false;

        this.object = this.cube.scene.children;

        this.button28p = false;
        this.button29p = false;
        this.button30p = false;
        this.button31p = false;
        this.button32p = false;
        this.button33p = false;
        this.button34p = false;
        this.button35p = false;
        this.button36p = false;

        this.puzzle3.on("puzzle3complete", ()=>{
            
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

        if (this.p4lock.length === 9){
            if (this.p4lock[0] === 2 
                && this.p4lock[1] === 1 
                && this.p4lock[2] === 4 
                && this.p4lock[3] === 3
                && this.p4lock[4] === 7
                && this.p4lock[5] === 9
                && this.p4lock[6] === 5
                && this.p4lock[7] === 8                
                && this.p4lock[8] === 6                
                ){
                
                setTimeout(() => {
                    this.resources.items.success.play(); 
                    

                    // console.log("access granted")
                    this.emit("puzzle4complete")
                    this.accessp4 = true;
                    this.p4lock.length = 0 
                   }, 1000);
                
            } else {

                setTimeout(() => {
                    this.p4_resetAll();
                    this.p4lock.length = 0 
                    this.resources.items.error.play(); 
                    // console.log("access denied")
                   }, 50);
                
            }
            // console.log(this.p1lock)
        }
        
    }

      

    p4_resetAll(){
        
        this.object.forEach((e) => {
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_28"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_29"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_30"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_31"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_32"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_33"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_34"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_35"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_36"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    }
                    // this.accessp1 = false;
                    this.button28p = false;
                    this.button29p = false;
                    this.button30p = false;
                    this.button31p = false;
                    this.button32p = false;
                    this.button33p = false;
                    this.button34p = false;
                    this.button35p = false;
                    this.button36p = false; 
                })                                        
            } 
        }) 
        
    }

    button_28(){

        this.object.forEach((e) => {
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_28" && this.button28p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button28p === false){
                    this.button28p = true;
                    this.p4lock.push(1)
                  }                         
                
            } 
        })                                       
    }
    button_29(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_29" && this.button29p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button29p === false){
                    this.button29p = true;
                    this.p4lock.push(2)
                  }                         
                
            } 
        })                                       
    }
    button_30(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_30" && this.button30p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button30p === false){
                    this.button30p = true;
                    this.p4lock.push(3)
                  }                         
                
            } 
        })                                       
    }
    button_31(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_31" && this.button31p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button31p === false){
                    this.button31p = true;
                    this.p4lock.push(4)
                  }                         
                
            } 
        })                                       
    }
    button_32(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_32" && this.button32p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button32p === false){
                    this.button32p = true;
                    this.p4lock.push(5)
                  }                         
                
            } 
        })                                       
    }
    button_33(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_33" && this.button33p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button33p === false){
                    this.button33p = true;
                    this.p4lock.push(6)
                  }                         
                
            } 
        })                                       
    }
    button_34(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_34" && this.button34p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button34p === false){
                    this.button34p = true;
                    this.p4lock.push(7)
                  }                         
                
            } 
        })                                       
    }
    button_35(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_35" && this.button35p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button35p === false){
                    this.button35p = true;
                    this.p4lock.push(8)
                  }                         
                
            } 
        })                                       
    }
    button_36(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_36" && this.button36p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0.05,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button36p === false){
                    this.button36p = true;
                    this.p4lock.push(9)
                  }                         
                
            } 
        })                                       
    }       

   

            
    

    update(){
        
        // console.log(this.p2lock)
        // console.log(this.accessp3)
        // console.log(this.p1lock.length)
        // console.log(this.access)
        
         //else if (this.p1lock.length > 5) {
        //     // this.p1lock.length = 0;
        // }
        
        
    }
} 