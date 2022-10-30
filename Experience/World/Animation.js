import * as THREE from "three"
import Experience from "../Experience.js";
import { EventEmitter} from "events";
import GSAP from "gsap"



export default class Animation  {
    constructor() {
        
        
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;  
        this.camera = this.experience.camera.perpectiveCamera; 
        
        this.cube = this.experience.resources.items.cube
       
    
        this.time = this.experience.time;
        this.object = this.cube.scene.children;
        // console.log(this.object)

        this.animationstart = true
        
        // console.log(this.world)

        
        this.mixer = new THREE.AnimationMixer(this.cube.scene);
        
        // this.animation.actions.idle = this.animation.mixer.clipAction(this.resource.cube)
        // this.actions.idle = this.animation.mixer.clipAction(this.cube.animations[0])
       
        // this.firstStep();
        this.timeline = new GSAP.timeline();
        
    //    this.p1_Red();
       
        

        
    } 

    starttextApear() {
        this.object.forEach((e) => {
            // console.log(e)
            if (e.name === "Cube"){  
                e.children.forEach((e) => {                    
                    if (e.name === "text_loutra"){   
                        console.log(e)                                                       
                        GSAP.to(e.position, {
                            x: 0,
                            y: 3,
                            z: 0,
                            delay: 0.15,                 
                            ease: "expo.easeOut",                   
                            duration: 2,                     
                        }) 
                    } 
                })                         
                
            } 
        })
    }


    firstStep() {   
        
        this.object[1].children.forEach((e) => {
            if (e.name === "Button_Main" && this.animationstart === true){  
                // console.log("test")
                // this.p1red = false;                            
                this.timeline.to(e.position, {
                    x: 0,
                    y: -0.50,
                    z: 0,
                    // delay: 0.1,                 
                    ease: "expo.easeOut",                   
                    duration: 1,
                                         
                }) 
            } 
        })

        this.object.forEach((e) => {
            if (e.name === "Main_Door" && this.animationstart === true){  
                // this.animationstart === false;
                this.timeline.to(e.position, {
                    x: 0,
                    y: -7,
                    z: 0,
                    // delay: 1,                 
                    ease: "expo.easeOut",                   
                    duration: 3,  
                                      
                }, "same") 
            } 
            if (e.name === "Cube" && this.animationstart === true){  
                // this.animationstart === false;
                this.timeline.to(e.position, {
                    x: 0,
                    y: -1.2,
                    z: 0,
                    delay: 1.7,                 
                    ease: "expo.easeOut",                   
                    duration: 3,
                    
                                      
                }, "same") 
            } 


        })          
    }

   


    setAnimation(){
        
        // console.log(this.camera.position)
        
        
        // this.timeline.to(this.camera.position, {
        //     x: 1,
        //     y: 1,
        //     z: 1,                 
        //     ease: "sine(2.5)",               
        //     duration: 1,                     
        
        // });
        this.timeline.to(this.camera.position, {
            x: 4,
            y: 4,
            z: -2,                 
            ease: "cir(2.5)",               
            duration: 3,                     
        
        },"same");
        this.timeline.to(this.camera.position, {
            x: 4,
            y: 4,
            z: -2,                 
            ease: "cir(2.5)",               
            duration: 3,                     
        
        },"same");
        this.timeline.to(this.camera.position, {
            x: 5,
            y: 5,
            z: 5,                 
            ease: "cir(4.5)",   
            delay: 0.2,            
            duration: 3, 
            
                               
        
        });
        

        
        
        
        
            
    }        

            
    

    update(){
        this.mixer.update(this.time.delta * 0.001) 
        // console.log(this.camera.position)
    }
} 