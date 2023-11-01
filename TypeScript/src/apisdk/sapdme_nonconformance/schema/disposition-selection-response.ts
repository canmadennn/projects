/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { DispositionOptions } from './disposition-options';
/**
 * The response containing SFC disposition options.
 */
export type DispositionSelectionResponse =
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
       * Contains correlationId for the error.
       */
      correlationId?: string;
      dispositionOptions?: DispositionOptions;
      /**
       * Contains additional information, if any
       */
      message?: string;
    }
  | Record<string, any>;
