/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { AiMlScenarioDeployment } from './ai-ml-scenario-deployment';
import type { Timestamp } from './timestamp';
import type { AiMlScenarioCombination } from './ai-ml-scenario-combination';
/**
 * Metadata of AI/ML scenario
 */
export type AiMlScenarioMetadata =
  | {
      deployment?: AiMlScenarioDeployment;
      scenarioChangedAt?: Timestamp;
      /**
       * List of scenario combinations
       */
      scenarioCombinations?: AiMlScenarioCombination[];
      scenarioCreatedAt?: Timestamp;
      /**
       * Scenario description
       */
      scenarioDescription?: string;
      /**
       * Scenario ID
       */
      scenarioId?: string;
      /**
       * Scenario name
       */
      scenarioName?: string;
      /**
       * Scenario objective
       */
      scenarioObjective?: 'Visual Inspection' | 'Defect Detection';
      /**
       * Current scenario status
       */
      scenarioStatus?: string;
      /**
       * Scenario version
       * Format: "int32".
       */
      scenarioVersion?: number;
    }
  | Record<string, any>;
