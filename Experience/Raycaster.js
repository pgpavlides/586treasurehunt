import * as THREE from "three";
import Experience from "./Experience.js";
import { EventEmitter } from "events";
import GSAP from "gsap";

export default class Raycaster extends EventEmitter {
  constructor() {
    super();

    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.resources = this.experience.resources;

    this.camera = this.experience.camera;
    this.world = this.experience.world;
    this.device = this.sizes.device;
    this.cube = this.resources.experience.scene;
    this.device = this.sizes.device;
    // this.animation = this.world.animations;
    // this.player = this.experience.audioplayer

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.hover = new THREE.Vector2();

    this.currentIntersect = null;

    this.onPointerMove();
    this.onPointerClick();
    this.onPointerHover();
    
    
  }

  onPointerHover() {
    window.addEventListener("pointerdown", (event) => {
      this.hover.x = (event.clientX / this.sizes.width) * 2 - 1;
      this.hover.y = -(event.clientY / this.sizes.height) * 2 + 1;
    });
  }

  onPointerMove() {
    window.addEventListener("mousemove", (event) => {
      this.mouse.x = (event.clientX / this.sizes.width) * 2 - 1;
      this.mouse.y = -(event.clientY / this.sizes.height) * 2 + 1;
    });
  }

  onPointerClick() {
    // console.log(this.device);
    if (this.device === "desktop") {
      window.addEventListener("click", () => {
        this.timeline = new GSAP.timeline();

        if (this.currentIntersect)
          console.log(this.currentIntersect)
          this.object = this.currentIntersect.object.name;
        {
          if (this.object === "button_start") {
            this.world.animations.firstStep();
            this.world.animations.setAnimation();           
          }
          
          if (this.object === "Button_1") {
            this.world.puzzle1.button_1();
            this.world.puzzle1.lockCheck();            
          }
          if (this.object === "Button_2") {
            this.world.puzzle1.button_2();
            this.world.puzzle1.lockCheck();            
          }
          if (this.object === "Button_3") {
            this.world.puzzle1.button_3();
            this.world.puzzle1.lockCheck();            
          }
          if (this.object === "Button_4") {
            this.world.puzzle1.button_4();
            this.world.puzzle1.lockCheck();            
          }
          if (this.object === "Button_5") {
            this.world.puzzle1.button_5();
            this.world.puzzle1.lockCheck();            
          }
          if (this.object === "Button_6") {
            this.world.puzzle1.button_6();
            this.world.puzzle1.lockCheck();            
          }
          if (this.object === "Button_7") {
            this.world.puzzle1.button_7();
            this.world.puzzle1.lockCheck();            
          }
          if (this.object === "Button_8") {
            this.world.puzzle1.button_8();
            this.world.puzzle1.lockCheck();            
          }
          if (this.object === "Button_9") {
            this.world.puzzle1.button_9();
            this.world.puzzle1.lockCheck();            
          }
          if (this.object === "Button_10") {
            this.world.puzzle2.button_10();
            this.world.puzzle2.lockCheck();            
          }
          if (this.object === "Button_11") {
            this.world.puzzle2.button_11();
            this.world.puzzle2.lockCheck();            
          }
          if (this.object === "Button_12") {
            this.world.puzzle2.button_12();
            this.world.puzzle2.lockCheck();            
          }
          if (this.object === "Button_13") {
            this.world.puzzle2.button_13();
            this.world.puzzle2.lockCheck();            
          }
          if (this.object === "Button_14") {
            this.world.puzzle2.button_14();
            this.world.puzzle2.lockCheck();            
          }
          if (this.object === "Button_15") {
            this.world.puzzle2.button_15();
            this.world.puzzle2.lockCheck();            
          }
          if (this.object === "Button_16") {
            this.world.puzzle2.button_16();
            this.world.puzzle2.lockCheck();            
          }
          if (this.object === "Button_17") {
            this.world.puzzle2.button_17();
            this.world.puzzle2.lockCheck();            
          }
          if (this.object === "Button_18") {
            this.world.puzzle2.button_18();
            this.world.puzzle2.lockCheck();            
          }
          if (this.object === "Button_19") {
            this.world.puzzle3.button_19();
            this.world.puzzle3.lockCheck();            
          }
          if (this.object === "Button_20") {
            this.world.puzzle3.button_20();
            this.world.puzzle3.lockCheck();            
          }
          if (this.object === "Button_21") {
            this.world.puzzle3.button_21();
            this.world.puzzle3.lockCheck();            
          }
          if (this.object === "Button_22") {
            this.world.puzzle3.button_22();
            this.world.puzzle3.lockCheck();            
          }
          if (this.object === "Button_23") {
            this.world.puzzle3.button_23();
            this.world.puzzle3.lockCheck();            
          }
          if (this.object === "Button_24") {
            this.world.puzzle3.button_24();
            this.world.puzzle3.lockCheck();            
          }
          if (this.object === "Button_25") {
            this.world.puzzle3.button_25();
            this.world.puzzle3.lockCheck();            
          }
          if (this.object === "Button_26") {
            this.world.puzzle3.button_26();
            this.world.puzzle3.lockCheck();            
          }
          if (this.object === "Button_27") {
            this.world.puzzle3.button_27();
            this.world.puzzle3.lockCheck();            
          }
          if (this.object === "Button_28") {
            this.world.puzzle4.button_28();
            this.world.puzzle4.lockCheck();            
          }
          if (this.object === "Button_29") {
            this.world.puzzle4.button_29();
            this.world.puzzle4.lockCheck();            
          }
          if (this.object === "Button_30") {
            this.world.puzzle4.button_30();
            this.world.puzzle4.lockCheck();            
          }
          if (this.object === "Button_31") {
            this.world.puzzle4.button_31();
            this.world.puzzle4.lockCheck();            
          }
          if (this.object === "Button_32") {
            this.world.puzzle4.button_32();
            this.world.puzzle4.lockCheck();            
          }
          if (this.object === "Button_33") {
            this.world.puzzle4.button_33();
            this.world.puzzle4.lockCheck();            
          }
          if (this.object === "Button_34") {
            this.world.puzzle4.button_34();
            this.world.puzzle4.lockCheck();            
          }
          if (this.object === "Button_35") {
            this.world.puzzle4.button_35();
            this.world.puzzle4.lockCheck();            
          }
          if (this.object === "Button_36") {
            this.world.puzzle4.button_36();
            this.world.puzzle4.lockCheck();            
          }
        }
      });
    } else if (this.device === "mobile") {
      window.addEventListener("pointerup", (event) => {
        
        // console.log(this.currentIntersect)
        this.timeline = new GSAP.timeline();

        if (this.currentIntersect)
          this.object = this.currentIntersect.object.name;
        // console.log(this.currentIntersect)

        {
          // console.log(this.currentIntersect)
          if (this.object === "button_start") {
            this.world.animations.firstStep();
            this.world.animations.setAnimation();           
          }
          
          if (this.object === "Button_1") {
            this.world.puzzle1.button_1();
            this.world.puzzle1.lockCheck();            
          }
          if (this.object === "Button_2") {
            this.world.puzzle1.button_2();
            this.world.puzzle1.lockCheck();            
          }
          if (this.object === "Button_3") {
            this.world.puzzle1.button_3();
            this.world.puzzle1.lockCheck();            
          }
          if (this.object === "Button_4") {
            this.world.puzzle1.button_4();
            this.world.puzzle1.lockCheck();            
          }
          if (this.object === "Button_5") {
            this.world.puzzle1.button_5();
            this.world.puzzle1.lockCheck();            
          }
          if (this.object === "Button_6") {
            this.world.puzzle1.button_6();
            this.world.puzzle1.lockCheck();            
          }
          if (this.object === "Button_7") {
            this.world.puzzle1.button_7();
            this.world.puzzle1.lockCheck();            
          }
          if (this.object === "Button_8") {
            this.world.puzzle1.button_8();
            this.world.puzzle1.lockCheck();            
          }
          if (this.object === "Button_9") {
            this.world.puzzle1.button_9();
            this.world.puzzle1.lockCheck();            
          }
          if (this.object === "Button_10") {
            this.world.puzzle2.button_10();
            this.world.puzzle2.lockCheck();            
          }
          if (this.object === "Button_11") {
            this.world.puzzle2.button_11();
            this.world.puzzle2.lockCheck();            
          }
          if (this.object === "Button_12") {
            this.world.puzzle2.button_12();
            this.world.puzzle2.lockCheck();            
          }
          if (this.object === "Button_13") {
            this.world.puzzle2.button_13();
            this.world.puzzle2.lockCheck();            
          }
          if (this.object === "Button_14") {
            this.world.puzzle2.button_14();
            this.world.puzzle2.lockCheck();            
          }
          if (this.object === "Button_15") {
            this.world.puzzle2.button_15();
            this.world.puzzle2.lockCheck();            
          }
          if (this.object === "Button_16") {
            this.world.puzzle2.button_16();
            this.world.puzzle2.lockCheck();            
          }
          if (this.object === "Button_17") {
            this.world.puzzle2.button_17();
            this.world.puzzle2.lockCheck();            
          }
          if (this.object === "Button_18") {
            this.world.puzzle2.button_18();
            this.world.puzzle2.lockCheck();            
          }
          if (this.object === "Button_19") {
            this.world.puzzle3.button_19();
            this.world.puzzle3.lockCheck();            
          }
          if (this.object === "Button_20") {
            this.world.puzzle3.button_20();
            this.world.puzzle3.lockCheck();            
          }
          if (this.object === "Button_21") {
            this.world.puzzle3.button_21();
            this.world.puzzle3.lockCheck();            
          }
          if (this.object === "Button_22") {
            this.world.puzzle3.button_22();
            this.world.puzzle3.lockCheck();            
          }
          if (this.object === "Button_23") {
            this.world.puzzle3.button_23();
            this.world.puzzle3.lockCheck();            
          }
          if (this.object === "Button_24") {
            this.world.puzzle3.button_24();
            this.world.puzzle3.lockCheck();            
          }
          if (this.object === "Button_25") {
            this.world.puzzle3.button_25();
            this.world.puzzle3.lockCheck();            
          }
          if (this.object === "Button_26") {
            this.world.puzzle3.button_26();
            this.world.puzzle3.lockCheck();            
          }
          if (this.object === "Button_27") {
            this.world.puzzle3.button_27();
            this.world.puzzle3.lockCheck();            
          }
          if (this.object === "Button_28") {
            this.world.puzzle4.button_28();
            this.world.puzzle4.lockCheck();            
          }
          if (this.object === "Button_29") {
            this.world.puzzle4.button_29();
            this.world.puzzle4.lockCheck();            
          }
          if (this.object === "Button_30") {
            this.world.puzzle4.button_30();
            this.world.puzzle4.lockCheck();            
          }
          if (this.object === "Button_31") {
            this.world.puzzle4.button_31();
            this.world.puzzle4.lockCheck();            
          }
          if (this.object === "Button_32") {
            this.world.puzzle4.button_32();
            this.world.puzzle4.lockCheck();            
          }
          if (this.object === "Button_33") {
            this.world.puzzle4.button_33();
            this.world.puzzle4.lockCheck();            
          }
          if (this.object === "Button_34") {
            this.world.puzzle4.button_34();
            this.world.puzzle4.lockCheck();            
          }
          if (this.object === "Button_35") {
            this.world.puzzle4.button_35();
            this.world.puzzle4.lockCheck();            
          }
          if (this.object === "Button_36") {
            this.world.puzzle4.button_36();
            this.world.puzzle4.lockCheck();            
          }
          
          
          








        }
      });
    }
  }

  update() {
    if (this.device === "desktop") {
      
      this.raycaster.setFromCamera(this.mouse, this.camera.perpectiveCamera);

      this.objectsToTest = [this.cube];
      this.intersects = this.raycaster.intersectObjects(this.objectsToTest);

      if (this.intersects.length) {
        if (!this.currentIntersect) {
          // console.log(this.cube.children[4].children)
          // if(this.currentIntersect.object.name === "Button_1")
          //     {
          //     }
        }

        this.currentIntersect = this.intersects[0];
      } else {
        if (this.currentIntersect) {
          // console.log('mouse leave')
        }

        this.currentIntersect = null;
      }
    } else if (this.device === "mobile") {
      // console.log(this.intersects)

      // console.log(this.cube.children)
      // console.log(this.hover.y);
      this.raycaster.setFromCamera(this.hover, this.camera.perpectiveCamera);
      // this.currentIntersect = null;

      this.objectsToTest = [this.cube];
      this.intersects = this.raycaster.intersectObjects(this.objectsToTest);

      if (this.intersects.length) {
        if (!this.currentIntersect) {
        }

        this.currentIntersect = this.intersects[0];
        // console.log(this.currentIntersect)
      } else {
        if (this.currentIntersect) {
        }

        this.currentIntersect = null;
      }
    }
  }
}
