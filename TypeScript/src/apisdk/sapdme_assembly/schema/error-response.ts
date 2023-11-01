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
       * Contains additional information, if any
       */
      displayMessage?: string;
      /**
       * Internal error message
       */
      errorMessageKey?: string;
      /**
       * Contains technical reason for the error
       */
      technicalMessage?: string;
      /**
       * Internal error code used for troubleshooting
       */
      errorCode?: number;
      timestamp?: number;
      /**
       * HTTP status code
       */
      status?: number;
    }
  | Record<string, any>;
