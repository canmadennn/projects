/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The object representing a data field.
 */
export type AssemblyDataField =
  | {
      /**
       * The data field name.
       * Max Length: 60.
       * Min Length: 1.
       */
      field: string;
      /**
       * Indicates if this data field is required.
       */
      required?: boolean;
      /**
       * The data field assembly value.
       * Max Length: 1024.
       * Min Length: 1.
       */
      value?: string;
    }
  | Record<string, any>;
