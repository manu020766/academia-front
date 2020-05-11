import { Component, OnInit, HostListener } from '@angular/core'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  // Declare height and width variables
  // scrHeight:any
  scrWidth:any
  open:boolean
  style:string

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        // this.scrHeight = window.innerHeight
        this.scrWidth = window.innerWidth

        if (this.scrWidth > 1024) {
          this.open = true
          this.style = 'side'
        } else {
          this.open = false
          this.style = 'push'
        } 
  }

  constructor() {
    this.getScreenSize()
   }

  ngOnInit(): void {}

}
