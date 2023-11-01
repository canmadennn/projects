/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { AiMlModel } from './ai-ml-model';
/**
 * Inspection point defined for a scenario
 */
export type AiMlInspectionPoint =
  | {
      /**
       * Inspection point
       */
      inspectionPoint?: string;
      /**
       * List of AI/ML models available for an inspection point
       */
      models?: AiMlModel[];
    }
  | Record<string, any>;
