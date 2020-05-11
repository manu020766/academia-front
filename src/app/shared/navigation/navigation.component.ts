import { Component, OnInit, HostListener, OnDestroy } from '@angular/core'
import { Observable, Subscription, fromEvent } from 'rxjs'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription
  open:boolean
  style:string

  constructor() {
    this.getScreenSize()

    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => this.getScreenSize())
   }

  getScreenSize(event?) {
        // this.scrHeight = window.innerHeight
        const scrWidth = window.innerWidth

        if (scrWidth > 1024) {
          this.open = true
          this.style = 'side'
        } else {
          this.open = false
          this.style = 'push'
        } 
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }

  ngOnInit(): void {}

}
