import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit():void{
    this.readjs();
  }
  readjs() {
    var dropdown = document.getElementsByClassName("dropdown-my");
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      } else {
      dropdownContent.style.display = "block";
      }
      });
    }
  }

}
// import { Component, OnInit,AfterViewInit } from '@angular/core';
// declare var $:any;

// @Component({
//   selector: 'app-slider',
//   templateUrl: 'slider.component.html',
//   styleUrls: ['slider.component.css']
// })
// export class SidebarComponent implements OnInit, AfterViewInit {
//   constructor() {}

//   ngOnInit(): void {}
//   ngAfterViewInit():void{
//     this.readjs();
//   }
//   readjs() {
//     $('.btn').click(function () {
//       $('.btn').toggleClass('click');
//       $('.sidebar').toggleClass('show');
//     });
//     $('.feat-btn').click(function () {
//       $('nav ul .feat-show').toggleClass('show');
//       $('nav ul .first').toggleClass('rotate');
//     });
//     $('.serv-btn').click(function () {
//       $('nav ul .serv-show').toggleClass('show1');
//       $('nav ul .second').toggleClass('rotate');
//     });
//     $('nav ul li').click(function () {
//       $('nav ul li').addClass('active').siblings().removeClass('active');
//     });
//   }
// }

