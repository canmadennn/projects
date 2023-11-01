/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Response object for classification assignment characteristic value.
 */
export type ClassificationAssignmentCharacteristicValue =
  | {
      /**
       * Assignment ID
       */
      assignmentId?: string;
      /**
       * Local Characteristic internal ID
       */
      charcInternalId?: string;
      /**
       * Value counter
       */
      valueCounter?: string;
      /**
       * Class type
       */
      classType?: string;
      /**
       * Characteristic value
       */
      charcValue?: string;
      /**
       * From value (of type float)
       * Format: "float".
       */
      fltpValueFrom?: number;
      /**
       * To value (of type float)
       * Format: "float".
       */
      fltpValueTo?: number;
      /**
       * From value (of type decimal)
       */
      decimalValueFrom?: number;
      /**
       * From value (of type decimal)
       */
      decimalValueTo?: number;
      /**
       * Current value from (of type decimal)
       */
      currentValueFrom?: number;
      /**
       * Current value to (of type decimal)
       */
      currentValueTo?: number;
      /**
       * From value UOM
       */
      fromValueUom?: string;
      /**
       * To value UOM
       */
      toValueUom?: string;
      /**
       * Currency
       */
      currency?: string;
      /**
       * Date from
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      dateFrom?: string;
      /**
       * Date to
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      dateTo?: string;
      /**
       * Time from
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      timeFrom?: string;
      /**
       * Time to
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      timeTo?: string;
      /**
       * Valid From
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      validFrom?: string;
      /**
       * Valid to
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      validTo?: string;
      /**
       * Deletion indicator
       */
      deletionIndicator?: string;
    }
  | Record<string, any>;
