import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // currentRoute: any;

  constructor() {}

  ngOnInit(): void {
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd),
    //   map((navEnd: RouterEvent) => navEnd.url),
    //   first()
    // ).subscribe(
    //   (currentUrl) => {
    //     this.currentRoute = currentUrl;
    //   }
    // );
  }

}
