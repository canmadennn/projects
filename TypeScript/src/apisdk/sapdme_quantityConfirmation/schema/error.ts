/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'Error' schema.
 */
export type Error =
  | {
      /**
       * Internal error message
       */
      code: string;
      /**
       * Contains additional information, if any
       */
      message: string;
      /**
       * Contains correlationId for the error.
       */
      correlationId?: string;
      /**
       * Contains technical reason for the error.
       */
      causeMessage?: string;
    }
  | Record<string, any>;
