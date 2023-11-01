/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'InspectionPointUserField' schema.
 */
export type InspectionPointUserField =
  | {
      /**
       * The inspection point field combination user field for numeric type of values that's up to 10 digits. The field value can only be positive values that don't have decimals.
       */
      inspSubsetLongNumericKey?: string;
      /**
       * The inspection point field combination user field for numeric type of values that's up to 3 digits. The field value can only be positive values that don't have decimals.
       */
      inspSubsetShortNumericKey?: string;
      /**
       * The inspection point field combination user field for date type of values. The format is 'yyyy-MM-dd'.
       */
      inspectionSubsetDate?: string;
      /**
       * The inspection point field combination user field for alphanumeric type of values that's up to 18 characters.
       */
      inspectionSubsetLongCharKey?: string;
      /**
       * The inspection point field combination user field for alphanumeric type of values that's up to 10 characters.
       */
      inspectionSubsetShortCharKey?: string;
      /**
       * The inspection point field combination user field for time type of values. The format is 'h:mm:ss a'.
       */
      inspectionSubsetTime?: string;
    }
  | Record<string, any>;
