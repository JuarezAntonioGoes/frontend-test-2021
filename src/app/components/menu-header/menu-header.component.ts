import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

export interface User {
  name: string;
  role: string;
}

@Component({
  selector: 'ft-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuHeaderComponent {
  @Input() minimize = false;
  @Input() user: User | undefined;
  @Output() toggle = new EventEmitter();

  handleClick() {
    this.toggle.emit();
  }

  abreviationName(name: string):string {
    const arrayName = name.split(' ') || [];
    let abreviation = '';

    if(arrayName.length >= 2){
      abreviation = arrayName[0][0] +  arrayName[1][0];
    }else{
      abreviation = arrayName[0][0];
    }

    return abreviation;
  }
}
