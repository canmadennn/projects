/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { RoutingDoneStep } from './routing-done-step';
import type { RoutingHoldStep } from './routing-hold-step';
import type { RoutingLink } from './routing-link';
import type { RoutingOperationStep } from './routing-operation-step';
import type { RoutingStepGroup } from './routing-step-group';
import type { RoutingReturnStep } from './routing-return-step';
import type { RoutingScrapStep } from './routing-scrap-step';
import type { WorkCenterId } from './work-center-id';
import type { ControlKeyId } from './control-key-id';
import type { RoutingStepComponent } from './routing-step-component';
/**
 * Representation of the 'RoutingStep' schema.
 */
export type RoutingStep =
  | {
      /**
       * The description of the routing step.
       */
      description?: string;
      /**
       * If true, this is an entry routing step.
       */
      entry?: boolean;
      /**
       * The list of next possible routing steps.
       */
      nextStepList?: string[];
      /**
       * The ID of the production process.
       */
      productionProcessId?: string;
      /**
       * The Production Process Definition Key.
       */
      productionProcessDefKey?: string;
      routingDoneStep?: RoutingDoneStep;
      routingHoldStep?: RoutingHoldStep;
      routingLink?: RoutingLink;
      routingOperation?: RoutingOperationStep;
      routingStepGroup?: RoutingStepGroup;
      routingReturnStep?: RoutingReturnStep;
      routingScrapStep?: RoutingScrapStep;
      /**
       * The step ID of the routing step.
       */
      stepId?: string;
      /**
       * The sequence of the routing step.
       */
      sequence?: number;
      workCenter?: WorkCenterId;
      /**
       * Indicates how this step is known in the external system.
       */
      reportingStep?: string;
      /**
       * The routing step sequence in ERP external system.
       */
      erpSequence?: string;
      controlKey?: ControlKeyId;
      /**
       * Indicates if it is last reporting step.
       */
      lastReportingStep?: boolean;
      /**
       * Indicates if this step is considered as rework.
       */
      rework?: boolean;
      /**
       * This determines who decides where an SFC should be placed in queue when completing this step.
       */
      queueDecisionType?: 'COMPLETING_OPERATOR' | 'NEXT_OPERATOR';
      /**
       * The list of components to be assembled at this step.
       */
      routingStepComponentList?: RoutingStepComponent[];
    }
  | Record<string, any>;
