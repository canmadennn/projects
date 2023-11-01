/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Error response.
 */
export type ErrorResponseV2 =
  | {
      /**
       * Contains a Technical code for the error.
       */
      code?: string;
      /**
       * Contains a correlation ID for the error.
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
