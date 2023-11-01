/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { AiMlModelOutputClass } from './ai-ml-model-output-class';
/**
 * Model output
 */
export type AiMlModelOutput =
  | {
      /**
       * List of output classes defined for model
       */
      outputClasses?: AiMlModelOutputClass[];
      /**
       * Details where model output will be stored
       */
      predictionResult?: Record<string, any>;
    }
  | Record<string, any>;
