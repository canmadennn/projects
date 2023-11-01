/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { SfcStepRouting } from './sfc-step-routing';
import type { BasicOperation } from './basic-operation';
/**
 * Representation of the 'SfcStepDetails' schema.
 */
export type SfcStepDetails =
  | {
      /**
       * The step on the routing where the activity took place.
       */
      stepId?: string;
      routing?: SfcStepRouting;
      operation?: BasicOperation;
      /**
       * The resource in use.
       */
      resource?: string;
      /**
       * The work center where the activity took place.
       */
      workCenter?: string;
      /**
       * The reporting step used for ERP messages.
       */
      reportingStep?: string;
      /**
       * The number of times the SFC was processed at the step due to non-conformance.
       */
      timesProcessed?: number;
      /**
       * If true, then the entire SFC quantity has completed this operation.
       */
      done?: boolean;
      /**
       * If true, then the SFC has been started at the step.
       */
      previousStarted?: boolean;
      /**
       * The SFC quantity in queue at the step.
       */
      quantityInQueue?: number;
      /**
       * The SFC quantity in work at the step.
       */
      quantityInWork?: number;
      /**
       * The SFC quantity completed at the step.
       */
      quantityCompleted?: number;
      /**
       * The SFC quantity pending buyoff at the step.
       */
      quantityCompletePending?: number;
      /**
       * The UTC time that SFC quantity was queued at the step.
       * @example "2022-04-23T09:53:31Z"
       * Format: "date-time".
       */
      dateQueued?: string;
      /**
       * The first UTC time that SFC quantity was started at the step.
       * @example "2022-04-23T09:53:31Z"
       * Format: "date-time".
       */
      firstStartTime?: string;
      /**
       * The last UTC time that SFC quantity was started at the step.
       * @example "2022-04-23T09:53:31Z"
       * Format: "date-time".
       */
      lastStartTime?: string;
      /**
       * The first UTC time that SFC quantity was completed at the step.
       * @example "2022-04-23T09:53:31Z"
       * Format: "date-time".
       */
      firstCompleteTime?: string;
      /**
       * The last UTC time that SFC quantity was completed at the step.
       * @example "2022-04-23T09:53:31Z"
       */
      lastCompleteTime?: string;
    }
  | Record<string, any>;
