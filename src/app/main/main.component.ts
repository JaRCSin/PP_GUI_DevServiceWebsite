import { Component, OnInit } from '@angular/core';
import { Container, Main } from 'tsparticles';
import { ISourceOptions } from 'tsparticles';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  id = "tsparticles";

    
    /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";

  options: ISourceOptions = {
    background: {
      color: {
          value: "#101c57"
      }
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: {
                enable: false,
                mode: "push"
            },
            onHover: {
                enable: false,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 10
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 100,
                duration: 0.4
            }
        }
    },
    particles: {
        color: {
            value: "#ffffff"
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1
        },
        collisions: {
            enable: true
        },
        move: {
            direction: "none",
            enable: true,
            outModes: "bounce",
            random: false,
            speed: 0.5,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 80
        },
        opacity: {
            value: 0.3
        },
        shape: {
            type: "circle"
        },
        size: {
            random: true,
            value: 5
        }
    },
    detectRetina: true
  }
    
    /* or the classic JavaScript object */

  particlesLoaded(container: Container): void {
      console.log(container);
  }
  
  particlesInit(main: Main): void {
      console.log(main);
      
      // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }
  

}
