/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'ErrorResponse' schema.
 */
export type ErrorResponse =
  | {
      /**
       * Contains a technical reason for the error.
       */
      causeMessage?: string;
      /**
       * Internal error message
       */
      code?: string;
      /**
       * Contains a correlation ID for the error.
       */
      correlationId?: string;
      /**
       * Contains additional information if any.
       */
      message?: string;
    }
  | Record<string, any>;
