/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'BatchCharcValue' schema.
 */
export type BatchCharcValue =
  | {
      /**
       * Value of a characteristic. If the characteristic has character format (CHAR), this field contains a single character string.
       */
      charcValue?: string;
      /**
       * Currency key. currency unit for currency field.
       */
      currency?: string;
      /**
       * Lower boundary for currency field
       */
      currentValueFrom?: number;
      /**
       * Upper boundary for currency field
       */
      currentValueTo?: number;
      /**
       * Lower Boundary for date range in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss'Z'
       * @example "2021-07-29T03:53:33Z"
       * Format: "date-time".
       */
      dateFrom?: string;
      /**
       * Upper Boundary for date range in UTC. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss'Z'
       * @example "2021-07-29T03:53:33Z"
       * Format: "date-time".
       */
      dateTo?: string;
      /**
       * Lower boundary for numeric field. This value is displayed only when there is no decimal place.
       */
      decimalValueFrom?: number;
      /**
       * Upper boundary for numeric field. This value is displayed only when there is no decimal place.
       */
      decimalValueTo?: number;
      /**
       * Lower boundary for numeric field. This value is displayed only when there are decimal places.
       */
      fltpValueFrom?: number;
      /**
       * Upper boundary for numeric field. This value is displayed only when there are decimal places.
       */
      fltpValueTo?: number;
      /**
       * Internal, language-independent, measurement unit format for numeric field.
       */
      fromValueUom?: string;
      /**
       * Internal, language-independent, measurement unit format for numeric field.
       */
      toValueUom?: string;
      /**
       * Lower Boundary for time range. Format: HH:mm:ss.
       * @example "18:53:33"
       */
      timeFrom?: string;
      /**
       * Lower Boundary for time range. Format: HH:mm:ss.
       * @example "18:53:33"
       */
      timeTo?: string;
    }
  | Record<string, any>;
