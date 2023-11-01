/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { RoutingOperationGroupStep } from './routing-operation-group-step';
/**
 * Representation of the 'RoutingOperationGroup' schema.
 */
export type RoutingOperationGroup =
  | {
      /**
       * The name of the routing operation group.
       */
      routingOperationGroup?: string;
      /**
       * The description of the routing operation group.
       */
      description?: string;
      /**
       * The steps of the routing operation group.
       */
      routingOperationGroupSteps?: RoutingOperationGroupStep[];
    }
  | Record<string, any>;
