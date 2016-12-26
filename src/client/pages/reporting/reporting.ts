import { Component } from '@angular/core';

type ReportRoute =
  'base/inventory/current'
| 'base/inventory/old'
| 'base/inventory/reorder'
| 'base/sales/completed'
| 'base/sales/voided'
| 'base/sales/tax';

const stockItemColumns = [
  { name: 'Name',           key: 'name' },
  { name: 'SKU',            key: 'sku' },
  { name: 'OU',             key: 'organizationalunit.name' },
  { name: 'Taxable',        key: 'taxable' },
  { name: 'Cost',           key: 'cost' },
  { name: 'Quantity',       key: 'quantity' },
  { name: 'Vendor Name',    key: 'vendors[0].name' },
  { name: 'Vendor SKU',     key: 'vendors[0].stockId' },
  { name: 'Vendor Cost',    key: 'vendors[0].cost' }
];

const invoiceColumns = [
  { name: 'Purchase Method',  key: 'purchaseMethod' },
  { name: 'Purchase Time',    key: 'purchaseTime' },
  { name: 'Purchase Price',   key: 'purchasePrice' },
  { name: 'Tax Collected',    key: 'taxCollected' },
  { name: 'Cash Given',       key: 'cashGiven' },
  { name: 'Subtotal',         key: 'subtotal' },
  { name: '# Items',          key: 'stockitems.length' },
  { name: '# Promos',         key: 'promotions.length' }
];

class ReportConfiguration {
  name: string;
  reportRoute: ReportRoute;
  columnOrder?: string[];
  columnChecked?: string[];
  columns: any[];
}

@Component({
  selector: 'my-page-reporting',
  templateUrl: 'reporting.html'
})
export class ReportingPageComponent {

  baseReports: ReportConfiguration[] = [
    { name: 'Inventory (Current)', reportRoute: 'base/inventory/current', columns: stockItemColumns,
      columnChecked: ['Name', 'SKU', 'OU', 'Cost', 'Quantity' ] },
    { name: 'Inventory (Old)',     reportRoute: 'base/inventory/old',     columns: stockItemColumns,
      columnChecked: ['Name', 'SKU', 'OU', 'Cost', 'Quantity' ] },
    { name: 'Inventory (Reorder)', reportRoute: 'base/inventory/reorder', columns: stockItemColumns,
      columnChecked: ['Name', 'Quantity', 'Vendor Name', 'Vendor SKU', 'Vendor Cost'] },
    { name: 'Sales (Completed)',   reportRoute: 'base/sales/completed',   columns: invoiceColumns,
      columnChecked: ['Purchase Time', 'Purchase Method', 'Purchase Price', 'Tax Collected', 'Subtotal', '# Items'] },
    { name: 'Sales (Voided)',      reportRoute: 'base/sales/voided',      columns: invoiceColumns,
      columnChecked: ['Purchase Time', 'Purchase Method', '# Items']  },
    { name: 'Sales (Tax)',         reportRoute: 'base/sales/tax',         columns: invoiceColumns,
      columnChecked: ['Purchase Time', 'Tax Collected'] }
  ];

  selectNewReport(reportConfig: ReportConfiguration) {

  }

  constructor() {

  }

}
