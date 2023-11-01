/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Operation } from './operation';
import type { Routing } from './routing';
/**
 * Representation of the 'SfcStep' schema.
 */
export type SfcStep =
  | {
      operation?: Operation;
      stepRouting?: Routing;
      /**
       * The name of the planned work center for this step.
       */
      plannedWorkCenter?: string;
      /**
       * The quantity that has been completed but is awaiting buyoff.
       */
      quantityCompletePending?: number;
      /**
       * The SFC quantity that is done at this step.
       */
      quantityDone?: number;
      /**
       * The SFC quantity that is in queue at this step.
       */
      quantityInQueue?: number;
      /**
       * The SFC quantity that is in work at this step.
       */
      quantityInWork?: number;
      /**
       * The SFC quantity that is rejected at this step.
       */
      quantityRejected?: number;
      /**
       * The SFC quantity that is scrapped at this step.
       */
      quantityScrapped?: number;
      /**
       * Indicates if we are completely done with this step and all the SFC quantity has been processed/completed by it.
       */
      stepDone?: boolean;
      /**
       * The name of the resource being used while in work.
       */
      resource?: string;
      /**
       * The step ID of this step.
       */
      stepId?: string;
      /**
       * The step sequence of this step.
       */
      stepSequence?: number;
      /**
       * The Resource Orchestration operation scheduled completion date and time in UTC.
       * @example "2022-07-07T09:00:00Z"
       * Format: "date-time".
       */
      operationScheduledCompleteDateTime?: string;
      /**
       * The Resource Orchestration operation scheduled start date and time in UTC.
       * @example "2022-07-07T09:00:00Z"
       * Format: "date-time".
       */
      operationScheduledStartDateTime?: string;
    }
  | Record<string, any>;
