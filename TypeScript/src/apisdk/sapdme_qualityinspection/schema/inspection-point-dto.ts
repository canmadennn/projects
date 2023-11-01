/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * This object represents a created inspection point.
 */
export type InspectionPointDTO =
  | {
      /**
       * The inspection point sample number
       */
      inspectionSubsetInternalId?: string;
      /**
       * The inspection point field combination user field for alphanumeric type of values that's up to 18 characters
       */
      inspectionSubsetLongCharKey?: string;
      /**
       * The inspection point field combination user field for numeric type of values that's up to 10 digits
       */
      inspSubsetLongNumericKey?: string;
      /**
       * TThe inspection point field combination user field for numeric type of values that's up to 3 digits
       */
      inspSubsetShortNumericKey?: string;
      /**
       * The inspection point field combination user field for alphanumeric type of values that's up to 10 characters
       */
      inspectionSubsetShortCharKey?: string;
      /**
       * The inspection point field combination user field for date type of values. Format (ISO-8601): yyyy-MM-dd
       * @example "2023-01-18"
       * Format: "date".
       */
      inspectionSubsetDate?: string;
      /**
       * The inspection point field combination user field for time type of values
       * @example "11:54:28 AM"
       * Format: "time".
       */
      inspectionSubsetTime?: string;
      /**
       * The valuation code of the inspection point
       */
      inspectionPointValuationCode?: string;
      /**
       * The valuation text of the inspection point in a specific language
       */
      inspectionPointValuationText?: string;
    }
  | Record<string, any>;
