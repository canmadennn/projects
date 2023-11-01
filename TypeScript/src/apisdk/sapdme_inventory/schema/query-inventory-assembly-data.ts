/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'QueryInventoryAssemblyData' schema.
 */
export type QueryInventoryAssemblyData =
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
      /**
       * Indicates whether the retrieved stock data type is still up-to-date and consistent with the data type information of the relevant material. 'True' indicates that the data is consistent while 'False' means the opposite. The property only appears when the 'assemblyDataFilter' is specified in the request payload.
       */
      obsolete?: boolean;
    }
  | Record<string, any>;
