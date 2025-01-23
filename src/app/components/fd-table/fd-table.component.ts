import {
  AfterContentInit,
  Component, ContentChildren, Input,
  input, OnInit, QueryList, TemplateRef,
} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {IFdColumn, IProduct} from '../../types';

@Component({
  selector: 'app-fd-table',
  standalone: false,

  templateUrl: './fd-table.component.html',
  styleUrl: './fd-table.component.scss'
})
export class FdTableComponent implements OnInit, AfterContentInit {
  items = input();
  _items: any[] = [];

  @Input() m: "edit" | "read" = "edit";

  mode = input<"read" | "edit">("edit");

  columns = input<IFdColumn[]>([]);

  @ContentChildren(TemplateRef) customTemplates!: QueryList<TemplateRef<any>>;
  customTemplateMap: { [key: string]: TemplateRef<any> } = {};

  ngOnInit(): void {
    if (this.items() === undefined) {
      new Error('No items provided');
    }

    this._items = this.items() as any[];
  }

  ngAfterContentInit() {
    const templateKeys = this.customTemplates.toArray();

    console.log(templateKeys[0]);

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
