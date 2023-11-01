/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { CustomValue } from './custom-value';
import type { RoutingOperationGroup } from './routing-operation-group';
import type { RoutingStep } from './routing-step';
/**
 * Representation of the 'Routing' schema.
 */
export type Routing =
  | {
      /**
       * The plant this routing is assigned to.
       */
      plant?: string;
      /**
       * The name of the routing.
       */
      routing?: string;
      /**
       * Indicates the type of routing.
       */
      routingType?:
        | 'PRODUCTION'
        | 'NC'
        | 'SPECIAL'
        | 'DISPOSITION'
        | 'SFC'
        | 'SHOP_ORDER'
        | 'CONFIGURABLE'
        | 'PRODUCTION_RECIPE'
        | 'SHOPORDER_SPECIFIC_RECIPE';
      /**
       * The status of the routing.
       */
      status?:
        | 'NEW'
        | 'RELEASABLE'
        | 'FROZEN'
        | 'OBSOLETE'
        | 'HOLD'
        | 'HOLD_YIELD_RATE'
        | 'HOLD_CONSEC_NC'
        | 'HOLD_SPC_VIOLATION'
        | 'HOLD_SPC_WARNING';
      /**
       * The routing version.
       */
      version?: string;
      /**
       * The description of the routing.
       */
      description?: string;
      /**
       * If true, the version of the routing is current.
       */
      currentVersion?: boolean;
      /**
       * Routing custom data.
       */
      customValues?: CustomValue[];
      /**
       * The entry routing step for the routing.
       */
      entryRoutingStepId?: string;
      /**
       * Indicates if Quantity Validation is required during production
       */
      quantityValidation?: boolean;
      /**
       * Indicates if the Routing is configured for an automatic goods receipt.
       */
      automaticGoodsReceipt?: boolean;
      /**
       * The operation groups of the routing.
       */
      routingOperationGroups?: RoutingOperationGroup[];
      /**
       * Routing steps in the routing.
       */
      routingSteps?: RoutingStep[];
      /**
       * The time when the routing was created.
       * @example "2018-06-22T04:24:00Z"
       * Format: "date-time".
       */
      createdDateTime?: string;
      /**
       * The time when the routing has most recently changed.
       * @example "2018-06-22T04:24:00Z"
       * Format: "date-time".
       */
      modifiedDateTime?: string;
    }
  | Record<string, any>;
