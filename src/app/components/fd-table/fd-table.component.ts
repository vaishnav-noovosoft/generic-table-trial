import {
  AfterViewInit,
  Component,
  contentChild,
  input,
  InputSignal,
  OnInit, Signal,
  TemplateRef,
  viewChild
} from '@angular/core';

@Component({
  selector: 'app-fd-table',
  standalone: false,

  templateUrl: './fd-table.component.html',
  styleUrl: './fd-table.component.scss'
})
export class FdTableComponent<T> implements OnInit {
  items: InputSignal<T[] | undefined> = input<T[]>();

  _bodyRowTemplate: Signal<TemplateRef<any> | undefined> = contentChild<TemplateRef<any>>('body', { descendants: false });
  bodyRowTemplate: TemplateRef<any> | null = null;

  ngOnInit(): void {
    if (this.items() === undefined) {
      new Error('No items provided');
    }
  }

  ngAfterContentInit(): void {
    if (this._bodyRowTemplate() !== undefined) {
      this.bodyRowTemplate = this._bodyRowTemplate() as TemplateRef<any>;
    }
  }
}
