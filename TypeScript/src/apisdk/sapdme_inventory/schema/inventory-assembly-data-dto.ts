/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'InventoryAssemblyDataDto' schema.
 */
export type InventoryAssemblyDataDto =
  | {
      /**
       * The field value of the stock data type
       * Max Length: 1000.
       */
      dataAttribute?: string;
      /**
       * The field name of the stock data type
       * Max Length: 60.
       */
      dataField?: string;
      /**
       * The technical sequence of the stock data fields. You can refer to it to display the data fields in UI.
       */
      sequence?: number;
    }
  | Record<string, any>;
