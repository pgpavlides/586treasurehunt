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
        this.puzzle2 = this.experience.world.puzzle2;
        this.puzzle3 = this.experience.world.puzzle3;
        this.puzzle4 = this.experience.world.puzzle4;

        this.object = this.cube.scene.children;


        
        
        this.timeline = new GSAP.timeline();

        

        // console.log(this.puzzle1.accessp1)


        // if(this.experience.world.puzzle1.accessp1 === true) {
        // }
        // console.log(this.object)
       
    }

    finalCompletion () {

        if(this.puzzle1.accessp1 === true
            && this.puzzle2.accessp2 === true
            && this.puzzle3.accessp3 === true
            && this.puzzle4.accessp4 === true
            ){
                this.object.forEach((e) => {
                    if (e.name === "Cube"){
                        e.children.forEach((e) => {
                            if (e.name === "daskalos_final"){                                                        
                                GSAP.to(e.position, {
                                    x: 0,
                                    y: 0.1,
                                    z: 0,                 
                                    ease: "expo.easeOut",                   
                                    duration: 1,                                               
                                }) 
                            } 
                        })
                    }
                })

            }
        
    }


            
    

    update(){
        
        // console.log(this.puzzle1.accessp1)
        this.finalCompletion();
        // console.log(this.accessp3)
        // console.log(this.p1lock.length)
        // console.log(this.access)
        
         //else if (this.p1lock.length > 5) {
        //     // this.p1lock.length = 0;
        // }
        
        
    }
} 