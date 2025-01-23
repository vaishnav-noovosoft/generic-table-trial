import {
  AfterContentInit,
  Component, ContentChildren, Input,
  input, OnInit, QueryList, TemplateRef,
} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {IFdColumn, IProduct} from '../../types';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-fd-table',
  standalone: false,

  templateUrl: './fd-table.component.html',
  styleUrl: './fd-table.component.scss'
})
export class FdTableComponent implements OnInit, AfterContentInit {
  itemsBehaviourSubject = input<BehaviorSubject<any[]>>();
  _items: any[] = [];

  @Input() m: "edit" | "read" = "edit";

  mode = input<"read" | "edit">("edit");

  columns = input<IFdColumn[]>([]);

  @ContentChildren(TemplateRef) customTemplates!: QueryList<TemplateRef<any>>;
  customTemplateMap: { [key: string]: TemplateRef<any> } = {};

  ngOnInit(): void {
    this.itemsBehaviourSubject()?.subscribe((items) => {
      this._items = items;
    })
  }

  ngAfterContentInit() {
    const templateKeys = this.customTemplates.toArray();

    this.columns().forEach((col) => {
      const tmp = templateKeys.find((i) => (i as any)._declarationTContainer.localNames.includes(col.key));
      if (col.custom) {
        this.customTemplateMap[col.key] = tmp!;
      }
    });
  }

  protected drop(event: CdkDragDrop<IProduct[]>) {
    moveItemInArray(this._items, event.previousIndex, event.currentIndex);
  }
}
