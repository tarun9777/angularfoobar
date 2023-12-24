import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'varun grover ka standup dekhne chalegi next friday?';
  imgPath = '../assets/giphy.gif';

  @ViewChild('box') box!: ElementRef;

  imgSize!:any;

  btnX!:number;
  btnY!:number;


  constructor(){
    this.imgSize = 300;
  }

  yes(){
    this.imgPath = "../assets/yes.gif";
    this.title = 'Okay..!!'
    this.send();
  }

  send(){
    emailjs.init('dFHH54DErq7ofVCpC');
    emailjs.send('service_qbmx3jc','template_n7dk8uh');
    console.log('email sent!');
  }

 

  moveButton(btn: HTMLElement ){
    const d = this.box.nativeElement.getBoundingClientRect();
    if (d?.width < 300){
      this.imgSize = d?.width;
    }
    else {
      this.imgSize = 300;
    }
    
    btn.style.position = 'absolute';
    btn.style.left = String(Math.random() * d.width + d.x - Number(btn.style.width)) + 'px';
    btn.style.top = String(Math.random() * d.height + d.y) + 'px';
  }
}
