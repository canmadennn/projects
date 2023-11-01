/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Transformation to be performed on model input
 */
export type AiMlModelInputTransformation =
  | {
      /**
       * Transformation method
       */
      method?: string;
      /**
       * Parameters required for transformation method
       */
      methodParameters?: Record<string, any>;
      /**
       * Sequence of transformation
       * Format: "int32".
       */
      sequenceId?: number;
    }
  | Record<string, any>;
