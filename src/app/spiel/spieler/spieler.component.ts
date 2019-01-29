import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-spieler',
  templateUrl: './spieler.component.html',
  styleUrls: ['./spieler.component.scss']
})
export class SpielerComponent implements OnInit {

  @ViewChild('owlElement') owlElement: OwlCarousel;

  public placeholderImage = '<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0' +
    'cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0ia' +
    'HR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZX' +
    'cgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZDMDg0OyIgZD0iTTMwNC42ODYsMzAwLjQ4M2MtMTAuNDcy' +
    'LTIuMTA1LTE4LjAwNy0xNC4yNTMtMTguMDA3LTI0LjkzNXYtNDcuNjAxaC00OS42MDVoLTAuMDAxaC00OS42MDV2NDcuNjAxICBjMCwxMC42ODItNy41MzQsMjIuODMtMTguMDA3LDI0LjkzNWwtMTIuMDg3LDMuND' +
    'EydjgwLjE5NWg3OS42OTloMC4wMDFoNzkuNjk5di04MC4xOTVMMzA0LjY4NiwzMDAuNDgzeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRjdCMDc2OyIgZD0iTTI0MS4zNjQsMjI3Ljk0NnY3MS4xNThjMCwxMC42ODIsNy' +
    '41MzQsMjIuODMsMTguMDA3LDI0LjkzNWwxMC4wODUsMi44OTFsNDcuMzE3LDE0Ljc1M3YtMzcuNzg4ICBsLTEyLjA4Ny0zLjQxMmMtMTAuNDczLTIuMTA1LTE4LjAwNy0xNC4yNTMtMTguMDA3LTI0LjkzNXYtNDcuN' +
    'jAxaC00NS4zMTVWMjI3Ljk0NnoiLz4KPHBhdGggc3R5bGU9ImZpbGw6IzAwRjBGRjsiIGQ9Ik0zOTMuODUyLDMyMi43MDNsLTcxLjQ4OC0yMi4yOWMtMy45NC0xLjIyOC04LjI0MywwLjQxMi0xMC4yNjYsNC4wMDkg' +
    'IGMtOS44MzIsMTcuNDc5LTM5LjY5NCwzNC40MDItNzUuMDIzLDM0LjQwMnMtNjUuMTkxLTE2LjkyMy03NS4wMjMtMzQuNDAyYy0yLjAyMy0zLjU5Ny02LjMyNi01LjIzNy0xMC4yNjYtNC4wMDlsLTcxLjQ4OCwyMi4y' +
    'OSAgYy00MC40NjksMTEuOTE1LTY4LjI1NCw0OS4wNjItNjguMjU0LDkxLjI0OHY2NC4yMTFjMCwxMC4zOTYsOC40MjcsMTguODIzLDE4LjgyMywxOC44MjNoNDEyLjQxNyAgYzEwLjM5NiwwLDE4LjgyMy04LjQyNywx' +
    'OC44MjMtMTguODIzdi02NC4yMTFDNDYyLjEwNSwzNzEuNzY0LDQzNC4zMTksMzM0LjYxOCwzOTMuODUyLDMyMi43MDN6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMwMEQ2RkY7IiBkPSJNMzkzLjg1MiwzMjIuNzAzbC03M' +
    'S40ODgtMjIuMjljLTMuOTQtMS4yMjgtOC4yNDMsMC40MTItMTAuMjY2LDQuMDA5ICBjLTUuNDQ0LDkuNjc4LTE3LjAzNCwxOS4xNzktMzIuMjg2LDI1LjczOGw2OC43MjUsMjEuNDI4YzQwLjQ2OSwxMS45MTUsNjguMjU' +
    '0LDQ5LjA2Miw2OC4yNTQsOTEuMjQ4djU0LjE0OWgyNi40OTIgIGMxMC4zOTYsMCwxOC44MjMtOC40MjcsMTguODIzLTE4LjgyM3YtNjQuMjExQzQ2Mi4xMDUsMzcxLjc2NCw0MzQuMzE5LDMzNC42MTgsMzkzLjg1MiwzMj' +
    'IuNzAzeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZDMDg0OyIgZD0iTTMzNi41NTMsMTIxLjIxNmgtNi4zNDl2LTcuNDU2Vjk1LjkzN2MwLTI1LjE2NS0xMC4zMzEtNDkuNTUtMjkuNDAxLTY1Ljk3ICBjLTE0Ljk1MS0xMi' +
    '44NzQtMzUuOTY3LTI0LjExLTYzLjcyOC0yNC40MmMtMjcuNzYxLDAuMzEtNDguNzc3LDExLjU0Ni02My43MjgsMjQuNDJjLTE5LjA3LDE2LjQyLTI5LjQwMSw0MC44MDUtMjkuNDAxLDY1Ljk3ICB2MTcuODIzdjcuNDU2aC' +
    '02LjM0OWMtOS4zMDksMC0xNi44NTUsNy41NDYtMTYuODU1LDE2Ljg1NXYxOC42NzhjMCw5LjMwOSw3LjU0NiwxNi44NTUsMTYuODU1LDE2Ljg1NWg2LjM3NSAgYzAuNTI1LDI0LjQ2MiwxMC44MDUsNDguMDA3LDI5LjM3Niw' +
    '2My45OThjMTQuOTUxLDEyLjg3MywzNS45NjcsMjQuMTEsNjMuNzI4LDI0LjQyYzI3Ljc2Mi0wLjMxLDQ4Ljc3OC0xMS41NDYsNjMuNzI4LTI0LjQyICBjMTguNTcxLTE1Ljk5LDI4Ljg1MS0zOS41MzYsMjkuMzc2LTYzLjk5O' +
    'Gg2LjM3NWM5LjMwOSwwLDE2Ljg1NS03LjU0NiwxNi44NTUtMTYuODU1di0xOC42NzggIEMzNTMuNDA5LDEyOC43NjIsMzQ1Ljg2MiwxMjEuMjE2LDMzNi41NTMsMTIxLjIxNnoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0Y3' +
    'QjA3NjsiIGQ9Ik0zMzYuNTUzLDEyMS4yMTZoLTYuMzQ5di03LjQ1NlY5NS45MzdjMC0yNS4xNjUtMTAuMzMxLTQ5LjU1LTI5LjQwMS02NS45NyAgYy0xNC45NTEtMTIuODc0LTM1Ljk2Ny0yNC4xMS02My43MjktMjQuND' +
    'JjLTguMTE5LDAuMDkxLTE1LjY1NywxLjEyMS0yMi42MzksMi44NDljMTYuODkyLDQuMTc5LDMwLjUxMSwxMi40NjIsNDEuMDg5LDIxLjU3MSAgYzE5LjA3LDE2LjQyLDI5LjQwMSw0MC44MDUsMjkuNDAxLDY1Ljk3djE3' +
    'LjgyM2wtMC4wMjYsNTkuODQ1Yy0wLjUyNSwyNC40NjItMTAuODA1LDQ4LjAwNy0yOS4zNzYsNjMuOTk4ICBjLTEwLjU3OCw5LjEwOS0yNC4xOTcsMTcuMzkyLTQxLjA4OSwyMS41NzFjNi45ODIsMS43MjcsMTQuNTIsMi4' +
    '3NTgsMjIuNjM5LDIuODQ5YzI3Ljc2Mi0wLjMxLDQ4Ljc3OC0xMS41NDYsNjMuNzI5LTI0LjQyICBjMTguNTcxLTE1Ljk5MSwyOC44NTEtMzkuNTM2LDI5LjM3Ni02My45OThoNi4zNzVjOS4zMDksMCwxNi44NTUtNy41ND' +
    'YsMTYuODU1LTE2Ljg1NXYtMTguNjc4ICBDMzUzLjQwOSwxMjguNzYyLDM0NS44NjIsMTIxLjIxNiwzMzYuNTUzLDEyMS4yMTZ6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGOUEwNTg7IiBkPSJNMjkyLjU5NCwwaC01NS41M' +
    'TloLTU1LjUxOWMtMjguNTcxLDAtNTEuNzMyLDIzLjE2MS01MS43MzIsNTEuNzMydjcxLjM4MiAgYzAsMCwxNC4yNDUtMC4zMjIsMjMuNCw4LjczN2MxLjkwNiwxLjg4Nyw1LjE0NiwwLjUwOCw1LjE0Ni0yLjE3NFY3My43' +
    'MzJjMC0xMi42MjgsMTAuMjM3LTIyLjg2NiwyMi44NjYtMjIuODY2aDIwLjc3NyAgYzUuNDQ5LDAsMTAuNzMxLDEuODg0LDE0Ljk1LDUuMzMzTDIxOSw1Ny44NjVjNS4xMDEsNC4xNywxMS40ODYsNi40NDgsMTguMDc1LDY' +
    'uNDQ4YzYuNTg4LDAsMTIuOTc0LTIuMjc4LDE4LjA3NS02LjQ0OGwyLjAzOC0xLjY2NiAgYzQuMjE5LTMuNDQ5LDkuNTAxLTUuMzMzLDE0Ljk1LTUuMzMzaDIwLjc3N2MxMi42MjgsMCwyMi44NjYsMTAuMjM3LDIyLjg2Ni' +
    'wyMi44NjZ2NTUuOTQ2YzAsMi42ODIsMy4yNCw0LjA2MSw1LjE0NiwyLjE3NCAgYzkuMTU0LTkuMDYsMjMuNC04LjczNywyMy40LTguNzM3VjUxLjczMkMzNDQuMzI2LDIzLjE2MSwzMjEuMTY0LDAsMjkyLjU5NCwweiIvP' +
    'go8cGF0aCBzdHlsZT0iZmlsbDojRUY4RjQ4OyIgZD0iTTI5Mi41OTQsMGgtNDUuMzE1YzI4LjU1OCwwLDUxLjcxLDIzLjE0MSw1MS43MzEsNTEuNjk0YzkuNjY4LDIuNjY5LDE2Ljc3LDExLjUyMSwxNi43NywyMi4wMzggI' +
    'HY1NS45NDZjMCwyLjY4MiwzLjI0LDQuMDYxLDUuMTQ2LDIuMTc0YzkuMTU0LTkuMDYsMjMuNC04LjczNywyMy40LTguNzM3VjUxLjczMkMzNDQuMzI2LDIzLjE2MSwzMjEuMTY0LDAsMjkyLjU5NCwweiIvPgo8Zz4KCTxwY' +
    'XRoIHN0eWxlPSJmaWxsOiNFMUVGRkI7IiBkPSJNNzYuMDA5LDQ2Mi4zOTJIMTIuMDQydjE1Ljc2OWMwLDEwLjM5Niw4LjQyNywxOC44MjMsMTguODIzLDE4LjgyM2g0NS4xNDNMNzYuMDA5LDQ2Mi4zOTIgICBMNzYuMDA5L' +
    'DQ2Mi4zOTJ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRTFFRkZCOyIgZD0iTTE3Ni44NjMsNDQ4LjUzNmMwLjk3OSwwLDIuMjg0LTAuNDg5LDMuNDI3LTEuNzk1bDYuMDM4LTguOTc1djU5LjEwMmgxMy43MDd2LTc0Ljc2N' +
    'yAgIGMwLTMuMS0zLjEtNC44OTYtNi4wMzgtNC44OTZjLTEuOTU4LDAtMy4xLDAuOTc5LTQuMjQzLDIuMTIxbC0xNS4wMTIsMTcuNzg3Yy0xLjQ2OSwxLjE0Mi0yLjkzNywzLjc1My0yLjkzNyw1LjcxMSAgIEMxNzEuODA0L' +
    'DQ0NS43NjIsMTczLjkyNSw0NDguNTM2LDE3Ni44NjMsNDQ4LjUzNnoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNFMUVGRkI7IiBkPSJNMjMzLjQ4Myw0OTYuODY4di00My45MjZjMC0xNS44MjksNy45OTYtMjMuMTcyLDIxL' +
    'jM3Ny0yMy4xNzJjMTMuMzgxLDAsMjEuNTQsNy4zNDMsMjEuNTQsMjMuMTcyICAgdjQzLjkyNmgxMy43MDd2LTQzLjkyNmMwLTI1Ljk0Ni0xNS41MDItMzUuNTc0LTM1LjI0Ny0zNS41NzRzLTM1LjA4NCw5LjYyOC0zNS4wOD' +
    'QsMzUuNTc0djQzLjkyNkgyMzMuNDgzeiIvPgo8L2c+CjxwYXRoIHN0eWxlPSJmaWxsOiMwMEJFRUE7IiBkPSJNODMuNjksNDk2Ljg2OHYtNzkuMzQ1YzAtNC4yNDItMy40MzktNy42ODEtNy42ODEtNy42ODFzLTcuNjgxLDMu' +
    'NDM5LTcuNjgxLDcuNjgxdjc5LjM0NSAgYzAsMC4wNCwwLjAwNSwwLjA3OCwwLjAwNiwwLjExN2gxNS4zNTFDODMuNjg1LDQ5Ni45NDYsODMuNjksNDk2LjkwNyw4My42OSw0OTYuODY4eiIvPgo8Y2lyY2xlIHN0eWxlPSJma' +
    'WxsOiMyRUNDQTY7IiBjeD0iNDA1LjE1OCIgY3k9IjQxNy4yIiByPSI5NC44Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMyQ0E4ODg7IiBkPSJNNDA1LjE1OCwzMjIuNDFjLTcuODEsMC0xNS4zOTYsMC45NTEtMjIuNjU3LDIuNz' +
    'MyYzQxLjQxMiwxMC4xNTgsNzIuMTM4LDQ3LjUxOSw3Mi4xMzgsOTIuMDYzICBzLTMwLjcyNiw4MS45MDUtNzIuMTM4LDkyLjA2M2M3LjI2MSwxLjc4MSwxNC44NDgsMi43MzIsMjIuNjU3LDIuNzMyYzUyLjM1NCwwLDk0Ljc' +
    '5NS00Mi40NDEsOTQuNzk1LTk0Ljc5NSAgUzQ1Ny41MTIsMzIyLjQxLDQwNS4xNTgsMzIyLjQxeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTQ1OC4zNDksNDAxLjYzMmgtMzUuMTcyYy0xLjM1MSwwLTIuN' +
    'DQ3LTEuMDk1LTIuNDQ3LTIuNDQ3di0zNS4xNzJjMC0xLjM1MS0xLjA5NS0yLjQ0Ny0yLjQ0Ny0yLjQ0NyAgSDM5Mi4wM2MtMS4zNTEsMC0yLjQ0NywxLjA5NS0yLjQ0NywyLjQ0N3YzNS4xNzJjMCwxLjM1MS0xLjA5NSwyLjQ' +
    '0Ny0yLjQ0NywyLjQ0N2gtMzUuMTcyYy0xLjM1MSwwLTIuNDQ3LDEuMDk1LTIuNDQ3LDIuNDQ3djI2LjI1MyAgYzAsMS4zNTEsMS4wOTUsMi40NDcsMi40NDcsMi40NDdoMzUuMTcyYzEuMzUxLDAsMi40NDcsMS4wOTUsMi40N' +
    'DcsMi40NDd2MzUuMTcyYzAsMS4zNTEsMS4wOTUsMi40NDcsMi40NDcsMi40NDdoMjYuMjUzICBjMS4zNTEsMCwyLjQ0Ny0xLjA5NSwyLjQ0Ny0yLjQ0N3YtMzUuMTcyYzAtMS4zNTEsMS4wOTUtMi40NDcsMi40NDctMi40NDd' +
    'oMzUuMTcyYzEuMzUxLDAsMi40NDctMS4wOTUsMi40NDctMi40NDd2LTI2LjI1MyAgQzQ2MC43OTYsNDAyLjcyNyw0NTkuNjk5LDQwMS42MzIsNDU4LjM0OSw0MDEuNjMyeiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9n' +
    'Pgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />';

  public sliderOptions = {
    autoplay: true,
    dots: false,
    nav: false,
    loop: true,
    navigation: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      960: {
        items: 4
      },
      1200: {
        items: 6
      }
    }
  };

  public wtbPlayers: {
    firstName: string;
    lastName: string;
    image: string;
    age: number;
  }[] = [
      {
        firstName: 'Andreas',
        lastName: 'Wagner',
        image: '/assets/images/projekte/globus-stiftung.png',
        age: 21
      },
      {
        firstName: 'Carsten',
        lastName: 'Rauber',
        image: '/assets/images/projekte/globus-stiftung.png',
        age: 21
      },
      {
        firstName: 'Julian',
        lastName: 'Baier',
        image: '/assets/images/projekte/globus-stiftung.png',
        age: 21
      },
      {
        firstName: 'Julian',
        lastName: 'Hoffmann',
        image: '/assets/images/projekte/globus-stiftung.png',
        age: 21
      },
      {
        firstName: 'Lukas',
        lastName: 'Krämer',
        image: '/assets/images/projekte/globus-stiftung.png',
        age: 23
      },
      {
        firstName: 'Manuel',
        lastName: 'Hahn',
        image: '/assets/images/projekte/globus-stiftung.png',
        age: 23
      },
      {
        firstName: 'Max',
        lastName: 'Hoffmann',
        image: '/assets/images/projekte/globus-stiftung.png',
        age: 23
      },
      {
        firstName: 'Niklas',
        lastName: 'Hanke',
        image: '/assets/images/projekte/globus-stiftung.png',
        age: 23
      },
      {
        firstName: 'Ronny',
        lastName: 'Hassel',
        image: '/assets/images/projekte/globus-stiftung.png',
        age: 36
      },
      {
        firstName: 'Simon',
        lastName: 'Backes',
        image: '/assets/images/projekte/globus-stiftung.png',
        age: 21
      },
      {
        firstName: 'Jannik',
        lastName: 'Nüsslein',
        image: '/assets/images/projekte/globus-stiftung.png',
        age: 27
      },
      {
        firstName: '',
        lastName: '',
        image: this.placeholderImage,
        age: 0
      },
      {
        firstName: '',
        lastName: '',
        image: '',
        age: 0
      },
      {
        firstName: '',
        lastName: '',
        image: '',
        age: 0
      },
      {
        firstName: '',
        lastName: '',
        image: '',
        age: 0
      },
      {
        firstName: '',
        lastName: '',
        image: '',
        age: 0
      },
      {
        firstName: '',
        lastName: '',
        image: '',
        age: 0
      },
      {
        firstName: '',
        lastName: '',
        image: '',
        age: 0
      }
    ];

  constructor() {
  }

  ngOnInit() {
  }

}
