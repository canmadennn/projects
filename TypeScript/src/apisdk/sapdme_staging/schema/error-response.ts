/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ErrorDetail } from './error-detail';
/**
 * Error response.
 */
export type ErrorResponse =
  | {
      /**
       * Contains a technical code for the error.
       */
      code?: string;
      /**
       * Contains a correlation ID for the error.
       */
      correlationId?: string;
      /**
       * Error message.
       */
      message?: string;
      /**
       * Error message details.
       */
      details?: ErrorDetail[];
    }
  | Record<string, any>;
