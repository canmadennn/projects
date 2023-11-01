/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { DataTypeField } from './data-type-field';
/**
 * Representation of the 'DataType' schema.
 */
export type DataType =
  | {
      /**
       * The category of the data type.
       */
      category?:
        | 'ASSEMBLY'
        | 'NC'
        | 'PACKING_CONTAINER'
        | 'PACKING_SFC'
        | 'RMA_SFC'
        | 'RMA_SHOP_ORDER'
        | 'SFC';
      /**
       * The list of data type fields.
       */
      dataFieldList?: DataTypeField[];
      /**
       * The name of the data type.
       */
      dataType?: string;
      /**
       * The description of the data type.
       */
      description?: string;
    }
  | Record<string, any>;
