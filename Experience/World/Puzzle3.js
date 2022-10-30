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
        this.puzzle2 = this.experience.world.puzzle2;

        this.p3lock = []
        this.accessp3 = false;

        this.object = this.cube.scene.children;

        this.button19p = false;
        this.button20p = false;
        this.button21p = false;
        this.button22p = false;
        this.button23p = false;
        this.button24p = false;
        this.button25p = false;
        this.button26p = false;
        this.button27p = false;

        this.puzzle2.on("puzzle3complete", ()=>{
            
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

        if (this.p3lock.length === 9){
            if (this.p3lock[0] === 2 
                && this.p3lock[1] === 1 
                && this.p3lock[2] === 9 
                && this.p3lock[3] === 4
                && this.p3lock[4] === 7
                && this.p3lock[5] === 6
                && this.p3lock[6] === 5
                && this.p3lock[7] === 8                
                && this.p3lock[8] === 3                
                ){
                
                setTimeout(() => {
                    this.accessp2 = true;
                    this.resources.items.success.play(); 
                    

                    // console.log("access granted")
                    this.emit("puzzle3complete")
                    this.accessp3 = true;
                    this.p3lock.length = 0 
                   }, 1000);
                
            } else {

                setTimeout(() => {
                    this.p3_resetAll();
                    this.p3lock.length = 0 
                    this.resources.items.error.play(); 
                    // console.log("access denied")
                   }, 50);
                
            }
            // console.log(this.p1lock)
        }
        
    }

      

    p3_resetAll(){
        
        this.object.forEach((e) => {
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_19"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_20"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_21"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_22"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_23"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_24"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_25"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_26"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                    if (e.name === "Button_27"){                                                        
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    }
                    // this.accessp1 = false;
                    this.button19p = false;
                    this.button20p = false;
                    this.button21p = false;
                    this.button22p = false;
                    this.button23p = false;
                    this.button24p = false;
                    this.button25p = false;
                    this.button26p = false;
                    this.button27p = false; 
                })                                        
            } 
        }) 
        
    }

    button_19(){

        this.object.forEach((e) => {
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_19" && this.button19p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button19p === false){
                    this.button19p = true;
                    this.p3lock.push(1)
                  }                         
                
            } 
        })                                       
    }
    button_20(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_20" && this.button20p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button20p === false){
                    this.button20p = true;
                    this.p3lock.push(2)
                  }                         
                
            } 
        })                                       
    }
    button_21(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_21" && this.button21p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button21p === false){
                    this.button21p = true;
                    this.p3lock.push(3)
                  }                         
                
            } 
        })                                       
    }
    button_22(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_22" && this.button22p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button22p === false){
                    this.button22p = true;
                    this.p3lock.push(4)
                  }                         
                
            } 
        })                                       
    }
    button_23(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_23" && this.button23p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button23p === false){
                    this.button23p = true;
                    this.p3lock.push(5)
                  }                         
                
            } 
        })                                       
    }
    button_24(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_24" && this.button24p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button24p === false){
                    this.button24p = true;
                    this.p3lock.push(6)
                  }                         
                
            } 
        })                                       
    }
    button_25(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_25" && this.button25p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button25p === false){
                    this.button25p = true;
                    this.p3lock.push(7)
                  }                         
                
            } 
        })                                       
    }
    button_26(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_26" && this.button26p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button26p === false){
                    this.button26p = true;
                    this.p3lock.push(8)
                  }                         
                
            } 
        })                                       
    }
    button_27(){

        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "Button_27" && this.button27p === false){   
                        this.resources.items.button_2.currentTime = 0;
                        this.resources.items.button_2.play();                                                       
                        GSAP.to(e.position, {
                            x: 0,
                            y: 0,
                            z: 0.05,                 
                            ease: "expo.easeOut",                   
                            duration: 0.10,                                               
                        }) 
                    } 
                })
                if(this.button27p === false){
                    this.button27p = true;
                    this.p3lock.push(9)
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