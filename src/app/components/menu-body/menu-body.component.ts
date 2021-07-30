import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

export interface MenuLink {
  id: number;
  icon: string | null;
  isActive: boolean; // indica se o link está ativo no momento.
  isEnabled: boolean; // indica se o link está disponível - alguns planos de contrato não têm todos os links.
  isVisible: boolean; // indica se o link deve ser mostrado - algumas funcionalidades são habilitadas no futuro.
  parentId: number | null; // id
  text: string;
  children: MenuLink[] | null;
}

@Component({
  selector: 'ft-menu-body',
  templateUrl: './menu-body.component.html',
  styleUrls: ['./menu-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBodyComponent implements OnInit {
  @Input() minimize = false;
  @Input() links: MenuLink[] = [];

  showParentsId: Number[] = [];

  constructor() {}

  ngOnInit(): void {}

  verifyParents(id: number): boolean {
    const foundParent = this.links.find(({ parentId }) => id === parentId);

    if (foundParent) {
      return true;
    }

    return false;
  }

  showDropOurNext(id: number) {
    const foundParent = this.verifyParents(id);

    if (!foundParent) {
      return;
    }

    const isShow = this.showParentsId.includes(id);

    if (!isShow) {
      this.showParentsId.push(id);
    } else {
      this.showParentsId = this.showParentsId.filter((parent) => parent !== id);
    }
  }
}
