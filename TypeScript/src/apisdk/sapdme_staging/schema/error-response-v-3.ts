/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Error response.
 */
export type ErrorResponseV3 =
  | {
      /**
       * The technical reason for the error
       */
      causeMessage?: string;
      /**
       * Contains a technical code for the error.
       */
      code?: string;
      /**
       * Contains a correlation ID for the error.
       */
      correlationId?: string;
      /**
       * Error message details.
       */
      message?: string;
      /**
       * HTTP status code
       * Format: "int32".
       */
      status?: number;
    }
  | Record<string, any>;
