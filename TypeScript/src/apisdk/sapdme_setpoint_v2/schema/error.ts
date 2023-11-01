/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Error response
 */
export type Error =
  | {
      /**
       * This field contains a technical reason for the error.
       */
      causeMessage?: string;
      /**
       * This field contains the internal error message.
       */
      code?: string;
      /**
       * This field contains a correlation ID for the error.
       */
      correlationId?: string;
      /**
       * This field contains additional information about the error, if any.
       */
      message?: string;
    }
  | Record<string, any>;
