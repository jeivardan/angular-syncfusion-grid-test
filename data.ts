import { DataUtil } from '@syncfusion/ej2-data';

/**
 * Hierarchy Order data source
 */

export let columnDef = [
  {
    Name: 'client_id',
    DisplayName: 'Primary key',
    Type: 'Integer',
    IsReadOnly: true,
  },
  {
    Name: 'CustomerID',
    DisplayName: 'Customer ID',
    Type: 'String',
    IsReadOnly: true,
  },
  {
    Name: 'EmployeeID',
    DisplayName: 'Employee ID',
    Type: 'String',
    IsReadOnly: true,
  },
  {
    Name: 'ShipCountry',
    DisplayName: 'Ship Country',
    Type: 'String',
    IsReadOnly: true,
  },
  {
    Name: 'Freight',
    DisplayName: 'Freight',
    Type: 'NUMBER',
    IsReadOnly: false,
  },
];

export let hierarchyOrderdata: Object[] = [
  {
    client_id: 10248,
    CustomerID: 'VINET',
    EmployeeID: 5,
    ShipCountry: 'France',
    Freight: 32.38,
  },
  {
    client_id: 10249,
    CustomerID: 'TOMSP',
    EmployeeID: 6,
    ShipCountry: 'Germany',
    Freight: 11.61,
  },
  {
    client_id: 10250,
    CustomerID: 'HANAR',
    EmployeeID: 2,
    ShipCountry: 'Brazil',
    Freight: 65.83,
  },
  {
    client_id: 10251,
    CustomerID: 'VICTE',
    EmployeeID: 3,
    ShipCountry: 'France',
    Freight: 41.34,
  },
  {
    client_id: 10252,
    CustomerID: 'SUPRD',
    EmployeeID: 4,
    ShipCountry: 'Belgium',
    Freight: 51.3,
  },
  {
    client_id: 10253,
    CustomerID: 'HANAR',
    EmployeeID: 3,
    ShipCountry: 'Brazil',
    Freight: 58.17,
  },
  {
    client_id: 10254,
    CustomerID: 'CHOPS',
    EmployeeID: 5,
    ShipCountry: 'Switzerland',
    Freight: 22.98,
  },
];

export let columnDef2 = [
  {
    Name: 'AAA',
    DisplayName: 'AAA A',
    Type: 'String',
    IsReadOnly: true,
  },
  {
    Name: 'BBB',
    DisplayName: 'BBB B',
    Type: 'String',
    IsReadOnly: true,
  },
  {
    Name: 'CCC',
    DisplayName: 'CCC C',
    Type: 'SELECTION_CHECKBOX',
    IsReadOnly: false,
  },
  {
    Name: 'DDD',
    DisplayName: 'DDD D',
    Type: 'SELECTION_RADIO',
    IsReadOnly: false,
  },
  {
    Name: 'EEE',
    DisplayName: 'EEE E',
    Type: 'SELECTION_RADIO',
    IsReadOnly: false,
  },
];

export let dataSource2 = [
  {
    AAA: 'aaa1',
    BBB: 'bbb1',
    CCC: {
      ccc1: true,
      ccc2: true,
    },
    DDD: {
      ddd1: false,
      ddd2: true,
    },
    EEE: {
      eee1: true,
    },
    validate: [],
  },
  {
    AAA: 'aaa2',
    BBB: 'bbb2',
    CCC: {
      ccc1: true,
      ccc2: true,
      ccc3: false,
    },
    DDD: {
      ddd1: true,
      ddd2: false,
    },
    EEE: {
      eee1: true,
    },
    validate: [],
  },
  {
    AAA: 'aaa3',
    BBB: 'bbb3',
    CCC: {
      ccc2: true,
    },
    DDD: {
      ddd1: false,
      ddd2: true,
    },
    EEE: {
      eee1: true,
      eee2: false,
    },
    validate: [],
  },
];
