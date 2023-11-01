/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * For a specific characteristic, fill only one of the value fields (integerValueFrom, dateFrom, fltpValueFrom, timeFrom, charcValue).
 */
export type ClassificationAssignmentCharacteristicValue =
  | {
      /**
       * The batch characteristic name maintained in SAP Digital Manufacturing
       */
      characteristicName: string;
      /**
       * Specify the value for the CHAR type of batch characteristics
       */
      charcValue?: string;
      /**
       * Specify the value for DATE type of batch characteristics. Format (ISO-8601): yyyy-MM-dd
       * @example "2022-06-22"
       * Format: "date".
       */
      dateFrom?: string;
      /**
       * Specify the value for NUM type of batch characteristics. The value must be an integer.
       * Format: "int64".
       */
      integerValueFrom?: number;
      /**
       * Specify the value for NUM type of batch characteristics. The value must be a number with decimal places.
       * Format: "double".
       */
      fltpValueFrom?: number;
      /**
       * Specify the value for TIME type of batch characteristics. The format is HH:mm:ss.
       */
      timeFrom?: string;
    }
  | Record<string, any>;
