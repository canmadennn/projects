/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The request to print a document.
 */
export type DocumentPrintRequest =
  | {
      /**
       * Custom data in the JSON format that can be bound to a printed document, such as "$.custom_data.custom_field1".
       * The following JSON types are supported: objects, arrays, and primitives.
       * @example {
       *   "custom_field1": "custom_value1",
       *   "custom_field2": "custom_value1"
       * }
       */
      customData?: Record<string, Record<string, any>>;
      /**
       * The document to print.
       * Max Length: 128.
       * Min Length: 1.
       */
      document: string;
      /**
       * The JSON object that contains "plant", "sfc", or "order" field with a plant, SFC, or order name. Data for the document will be retrieved from this plant, SFC, or order.
       * @example {
       *   "sfc": "SFC1",
       *   "plant": "PLANT1"
       * }
       */
      parameters?: Record<string, Record<string, any>>;
      /**
       * The printer to print a document.
       * Max Length: 128.
       * Min Length: 1.
       */
      printer: string;
    }
  | Record<string, any>;
