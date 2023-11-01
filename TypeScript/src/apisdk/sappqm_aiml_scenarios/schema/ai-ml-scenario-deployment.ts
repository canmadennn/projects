/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { AiMlInspectionPoint } from './ai-ml-inspection-point';
/**
 * Deployment details of scenario
 */
export type AiMlScenarioDeployment =
  | {
      /**
       * Additional deployment options available for a scenario
       */
      deploymentOptions?: Record<string, any>;
      /**
       * The consuming application where AI/ML models need to be deployed.
       * @example "visualinsppod"
       */
      deploymentType?: string;
      /**
       * List of inspection points defined for a scenario
       */
      inspectionPoints?: AiMlInspectionPoint[];
    }
  | Record<string, any>;
