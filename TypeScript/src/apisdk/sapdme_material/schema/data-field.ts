/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { DataFieldOption } from './data-field-option';
/**
 * Representation of the 'DataField' schema.
 */
export type DataField =
  | {
      /**
       * The options of the data field.
       */
      dataFieldOptions?: DataFieldOption[];
      /**
       * The description of the data field.
       */
      description?: string;
      /**
       * The label of the data field.
       */
      fieldLabel?: string;
      /**
       * The name of the data field.
       */
      fieldName?: string;
      /**
       * The status of the data field.
       */
      status?: string;
      /**
       * The type of the data field.
       */
      type?:
        | 'TEXT'
        | 'TEXT_AREA'
        | 'DATE'
        | 'NUMBER'
        | 'CHECKBOX'
        | 'LIST'
        | 'FORMULA';
    }
  | Record<string, any>;
