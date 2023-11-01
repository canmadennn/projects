/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { RoutingStepId } from './routing-step-id';
import type { RoutingStepGroupStep } from './routing-step-group-step';
/**
 * The routing step group.
 */
export type RoutingStepGroup =
  | {
      routingStep?: RoutingStepId;
      /**
       * The type of router step group.
       */
      routingStepGroupType?: 'ANY_ORDER_GROUP' | 'SIMULTANEOUS_ORDER_GROUP';
      /**
       * The list of routing step groups.
       */
      routingStepGroupStepList?: RoutingStepGroupStep[];
    }
  | Record<string, any>;
