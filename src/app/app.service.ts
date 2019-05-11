import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  visible: boolean;

  constructor() { this.visible = true; }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }



 
}