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
      message?: string;
      /**
       * Contains technical reason for the error.
       */
      causeMessage?: string;
      /**
       * Internal error message
       */
      code?: string;
      /**
       * Contains correlationId for the error.
       */
      correlationId?: string;
    }
  | Record<string, any>;
