/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'PublicApiErrorResponse' schema.
 */
export type PublicApiErrorResponse =
  | {
      /**
       * Contains error message and additional information, if any
       */
      message?: string;
      /**
       * Internal error code
       */
      code?: string;
      /**
       * Contains technical reason for the error
       */
      causeMessage?: string;
      /**
       * Contains a correlation ID for the error
       */
      correlationId?: string;
    }
  | Record<string, any>;
