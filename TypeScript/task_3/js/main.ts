// task_3/js/main.ts

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Use CRUD functions
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};
// Create a new line
CRUD.insertRow(row); // Insert row {firstName: "Guillaume", lastName: "Salva"}

const newRowID: RowID = 125;
const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };

// Calling updateRow and deleteRow functions
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
