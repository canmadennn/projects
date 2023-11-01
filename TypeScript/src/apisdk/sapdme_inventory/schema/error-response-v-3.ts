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
       * The internal error message
       */
      code?: string;
      /**
       * The correlationId of the error
       */
      correlationId?: string;
      /**
       * Any additional information of the error
       */
      message?: string;
      /**
       * HTTP status code
       * Format: "int32".
       */
      status?: number;
    }
  | Record<string, any>;
