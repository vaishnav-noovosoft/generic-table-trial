import {
  Component,
  input, OnInit,
} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {IProduct} from '../../types';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-fd-table',
  standalone: false,

  templateUrl: './fd-table.component.html',
  styleUrl: './fd-table.component.scss'
})
export class FdTableComponent implements OnInit {
  items = input();
  _items: any[] = [];

  columns = input<{title: string, key: string}[]>([]);

  triggerColumnUpdate = input<BehaviorSubject<{title: string, key: string}[]>>(new BehaviorSubject([] as any[]));

  columnTitles: string[] = [];
  columnKeys: string[] = [];

  ngOnInit(): void {
    if (this.items() === undefined) {
      new Error('No items provided');
    }

    this._items = this.items() as any[];

    this.triggerColumnUpdate().subscribe(() => {
      this.columnTitles = this.columns().map((col => col.title));
      this.columnKeys = this.columns().map((col) => col.key);
    });
  }

  protected drop(event: CdkDragDrop<IProduct[]>) {
    moveItemInArray(this._items, event.previousIndex, event.currentIndex);
  }
}
