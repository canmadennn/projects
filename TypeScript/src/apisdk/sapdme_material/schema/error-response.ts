/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Error response.
 */
export type ErrorResponse =
  | {
      /**
       * Contains additional information, if any
       */
      displayMessage?: string;
      /**
       * Internal error message
       */
      errorMessageKey?: string;
      /**
       * HTTP status code
       * Format: "int32".
       */
      status?: number;
      /**
       * Contains technical reason for the error.
       */
      technicalMessage?: string;
      /**
       * The time when the error message is created.
       * @example "2018-06-22T04:24:00Z"
       * Format: "date-time".
       */
      timestamp?: string;
    }
  | Record<string, any>;
