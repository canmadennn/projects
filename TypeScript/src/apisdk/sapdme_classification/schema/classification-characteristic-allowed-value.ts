/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Response object for classification characteristic allowed values
 */
export type ClassificationCharacteristicAllowedValue =
  | {
      /**
       * Position number (of type int)
       */
      positionNumber?: number;
      /**
       * Dependency (of type int)
       */
      dependency?: number;
      /**
       * Value
       */
      value?: string;
      /**
       * Default value
       */
      defaultValue?: boolean;
      /**
       * From value (of type decimal)
       */
      numericFromValue?: number;
      /**
       * From value unit
       */
      numericFromValueUnit?: string;
      /**
       * To value (of type decimal)
       */
      numericToValue?: number;
      /**
       * To value unit
       */
      numericToValueUnit?: string;
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
       * Validity start date
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      validityStartDate?: string;
      /**
       * Validity end date
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      validityEndDate?: string;
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
    }
  | Record<string, any>;
