/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'InventoryAssemblyData' schema.
 */
export type InventoryAssemblyData =
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
    }
  | Record<string, any>;
