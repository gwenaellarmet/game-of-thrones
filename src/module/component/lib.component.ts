import { Component } from '@angular/core';

@Component({
  selector: 'got-component',
  templateUrl: './lib.component.html',
  styleUrls: ['./lib.component.scss']
})
export class LibComponent {
  description = 'Angular library built with ❤ using ngx-library yeoman generator.';
}
