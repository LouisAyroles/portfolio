// toast.component.ts
import {Component, TemplateRef} from '@angular/core';
import {ToastService} from './toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl:'./toast.component.html' ,
  styleUrls: ['./toast.component.scss'],
  host: {'[class.ngb-toasts]': 'true'}
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}

  isTemplate(toast: { textOrTpl: any; }) { return toast.textOrTpl instanceof TemplateRef; }
}
