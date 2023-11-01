/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { AiMlModelInputTransformation } from './ai-ml-model-input-transformation';
/**
 * Model input
 */
export type AiMlModelInput =
  | {
      /**
       * Reference file for model input
       */
      refFile?: string;
      /**
       * Source details of model input
       */
      source?: Record<string, any>;
      /**
       * List of transformations to be performed on model input
       */
      transformations?: AiMlModelInputTransformation[];
      /**
       * Type of model input
       * @example "image"
       */
      type?: string;
    }
  | Record<string, any>;
