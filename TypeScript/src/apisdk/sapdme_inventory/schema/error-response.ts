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
       * The technical code of the error.
       */
      code?: string;
      /**
       * The correlation ID used for debugging and tracing corresponding request.
       */
      correlationId?: string;
      /**
       * Internal error message key, if any
       */
      errorMessageKey?: string;
      /**
       * Error message detail
       */
      message?: string;
      /**
       * Contains technical reason for the error.
       */
      technicalMessage?: string;
      /**
       * Timestamp
       * Format: "int64".
       */
      timestamp?: number;
    }
  | Record<string, any>;
