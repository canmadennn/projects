/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { DataAttributeEntity } from './data-attribute-entity';
/**
 * Representation of the 'AssemblyDataItem' schema.
 */
export type AssemblyDataItem =
  | {
      /**
       * The field values of the stock data type. You can specify a maximum of 2 values for each data field.
       * Max Items: 2.
       */
      dataAttributes: DataAttributeEntity[];
      /**
       * The field name of the stock data type. You can specify a maximum of 3 data fields at one time.
       * Max Length: 60.
       */
      dataField: string;
    }
  | Record<string, any>;
