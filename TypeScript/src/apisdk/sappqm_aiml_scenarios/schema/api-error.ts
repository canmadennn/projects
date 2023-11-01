/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ApiErrorTrace } from './api-error-trace';
/**
 * Api error.
 */
export type ApiError =
  | {
      /**
       * Internal error message
       */
      code?: string;
      /**
       * Contains additional information, if any
       */
      message?: string;
      /**
       * Contains correlationId for the error.
       */
      correlationId?: string;
      traces?: ApiErrorTrace[];
    }
  | Record<string, any>;
