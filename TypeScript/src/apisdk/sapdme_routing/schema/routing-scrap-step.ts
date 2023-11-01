/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { RoutingStepId } from './routing-step-id';
/**
 * Representation of the 'RoutingScrapStep' schema.
 */
export type RoutingScrapStep =
  | {
      routingStep?: RoutingStepId;
      /**
       * The status applied to a scrapped SFC (when the entire SFC quantity is scrapped).
       */
      sfcStatus?:
        | 'ALL'
        | 'NEW'
        | 'ACTIVE'
        | 'HOLD'
        | 'INQUEUE'
        | 'DONE_HOLD'
        | 'RETURNED'
        | 'GOLDEN_UNIT'
        | 'NOTDONE'
        | 'DONE'
        | 'SCRAPPED'
        | 'INVALID'
        | 'DELETED';
      /**
       * Determines whether the option to scrap the parent and the child SFC components is available.
       */
      scrapAll?: boolean;
      /**
       * Determines whether the option to scrap the parent while leaving the components intact is available.
       */
      scrapParent?: boolean;
      /**
       * Determines whether the option to scrap the parent and remove and return the child SFC components to inventory is available.
       */
      scrapAndReturnComp?: boolean;
    }
  | Record<string, any>;
