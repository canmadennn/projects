/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { AiMlModelFiles } from './ai-ml-model-files';
import type { AiMlModelInput } from './ai-ml-model-input';
import type { AiMlModelOutput } from './ai-ml-model-output';
/**
 * AI/ML model
 */
export type AiMlModel =
  | {
      modelDetails?: AiMlModelFiles;
      /**
       * Have the files been uploaded for a model?
       */
      modelFilesAvailable?: boolean;
      /**
       * Model ID
       */
      modelId?: string;
      /**
       * Model input definition
       */
      modelInput?: AiMlModelInput[];
      modelOutput?: AiMlModelOutput;
      /**
       * Model type
       * @example "BinaryClassification"
       */
      modelType?: string;
    }
  | Record<string, any>;
