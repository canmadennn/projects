/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { DataField } from './data-field';
/**
 * Representation of the 'DataTypeField' schema.
 */
export type DataTypeField =
  | {
      dataField?: DataField;
      /**
       * If true, then this field is required.
       */
      required?: boolean;
      /**
       * The sequence number of this data type field.
       * Format: "int64".
       */
      sequence?: number;
    }
  | Record<string, any>;
