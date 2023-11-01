/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Name/value pair to be collected as part of logging a Non Conformance.
 */
export type DataField =
  | {
      /**
       * The name the data field.
       * Max Length: 60.
       * Min Length: 1.
       */
      key?: string;
      /**
       * The value of the data field.
       * Max Length: 1024.
       * Min Length: 1.
       */
      value?: string;
    }
  | Record<string, any>;
