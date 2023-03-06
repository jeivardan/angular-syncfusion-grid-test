import { Component, OnInit, ViewChild } from '@angular/core';
import {
  GridComponent,
  EditSettingsModel,
  ToolbarItems,
  EditService,
  ToolbarService,
  PageService,
  IEditCell,
  PageSettingsModel,
  TextWrapSettingsModel,
  FilterSettingsModel,
  GroupSettingsModel,
  IFilter,
  SelectionSettingsModel,
} from '@syncfusion/ej2-angular-grids';
import {
  CheckBoxSelectionService,
  ComboBox,
  DropDownList,
  MultiSelect,
} from '@syncfusion/ej2-angular-dropdowns';
import { columnDef, columnDef2, hierarchyOrderdata, dataSource2 } from './data';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  @ViewChild('grid', { static: true }) public grid: GridComponent;
  public groupSettings!: GroupSettingsModel;
  public filterSettings!: FilterSettingsModel;
  public textWrapSettings!: TextWrapSettingsModel;
  public selectionOptions!: SelectionSettingsModel;
  public pageOptions!: PageSettingsModel;
  public filter!: IFilter;
  public data: object[];
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  public isReadyToSave: boolean = false;
  public ddElem: HTMLElement;
  public ddElem2: HTMLElement;
  public dropDownObj: DropDownList;
  public dropDownObj2: DropDownList;
  public dropdownDatasource = ['xxx', 'yyy', 'zzz'];
  public dropDownDatasource2 = {};
  public dropDownParams: IEditCell;
  public dropDownParams2: IEditCell;

  //#region dropdown functions

  public createDropDownFn = () => {
    this.ddElem = document.createElement('input');
    return this.ddElem;
  };
  public readDropDownFn = () => {
    console.log(this.dropDownObj.value);
    return this.dropDownObj.value;
  };
  public destroyDropDownFn = () => {
    this.dropDownObj.destroy();
  };
  public writeDropDownFn = (args) => {
    var rowIndex = this.grid.getRowInfo(args.row).rowIndex;
    let cellData = args.rowData[args.column.field];
    let dropDownSelected = cellData ? cellData : '';
    this.dropDownObj = new ComboBox({
      value: dropDownSelected,
      dataSource: this.dropdownDatasource,
    });
    this.dropDownObj.focus = () => {
      this.dropDownObj.showPopup();
    };
    this.dropDownObj.appendTo(this.ddElem);
  };

  //#endregion

  //#region Dropdown functions 2

  public createDropDownFn1 = () => {
    this.ddElem2 = document.createElement('input');
    return this.ddElem2;
  };
  public readDropDownFn1 = (args) => {
    Object.keys(this.dropDownDatasource2).map((key) => {
      if (key == this.dropDownObj2.value) {
        this.dropDownDatasource2[key] = true;
      } else {
        this.dropDownDatasource2[key] = false;
      }
    });
    return this.dropDownDatasource2;
  };
  public destroyDropDownFn1 = () => {
    this.dropDownObj2.destroy();
  };
  public writeDropDownFn1 = (args) => {
    var rowIndex = this.grid.getRowInfo(args.row).rowIndex;
    let cellData = args.rowData[args.column.field];
    let dropDownValues = Object.keys(cellData).filter((key) => {
      if (cellData[key]) return key;
    });
    let dropDownSelected = dropDownValues.length > 0 ? dropDownValues[0] : '';
    this.dropDownDatasource2 = cellData;
    this.dropDownObj2 = new ComboBox({
      value: dropDownSelected,
      dataSource: Object.keys(cellData),
      showClearButton: false,
    });
    this.dropDownObj2.focus = (args) => {
      this.dropDownObj2.showPopup();
    };
    this.dropDownObj2.appendTo(this.ddElem2);
  };

  //#endregion

  ngOnInit(): void {
    this.data = hierarchyOrderdata;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Batch',
      showConfirmDialog: false,
    };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.pageOptions = { pageSizes: true, pageSize: 50 };
    this.toolbar = ['Edit', 'Update', 'Cancel'];
    this.editSettings = {
      allowEditing: true,
      showConfirmDialog: false,
      mode: 'Batch',
    };
    this.groupSettings = {
      allowReordering: true,
      disablePageWiseAggregates: true,
    };
    this.filterSettings = {
      type: 'CheckBox',
    };
    this.toolbar = ['Update'];
    this.filter = {
      type: 'CheckBox',
    };
    this.textWrapSettings = {
      wrapMode: 'Header',
    };
    this.selectionOptions = {
      mode: 'Cell',
      cellSelectionMode: 'Box',
    };

    this.dropDownParams = {
      create: this.createDropDownFn,
      read: this.readDropDownFn,
      destroy: this.destroyDropDownFn,
      write: this.writeDropDownFn,
    };
    this.dropDownParams2 = {
      create: this.createDropDownFn1,
      read: this.readDropDownFn1,
      destroy: this.destroyDropDownFn1,
      write: this.writeDropDownFn1,
    };
  }

  actionBegin(args: any) {
    // if (
    //   args.requestType == 'filtering' ||
    //   args.requestType == 'grouping' ||
    //   args.requestType == 'ungrouping' ||
    //   args.requestType == 'sorting'
    // ) {
    //   let batchChanges: any = this.grid.editModule?.getBatchChanges();
    //   if (batchChanges?.changedRecords.length > 0) {
    //     this.grid.editModule.batchSave();
    //     this.grid.refresh();
    //   }
    // }
    if (args.requestType == 'sorting' && args.target.id == 'headerCheckBox') {
      args.cancel = true;
    }
  }

  daBound(args: any) {
    this.grid.autoFitColumns();
  }
}
