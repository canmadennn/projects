/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { RoutingStepId } from './routing-step-id';
import type { Operation } from './operation';
/**
 * Representation of the 'RoutingReturnStep' schema.
 */
export type RoutingReturnStep =
  | {
      routingStep?: RoutingStepId;
      /**
       * The routing step return type.
       */
      returnType?:
        | 'RETURN_TO_ORIGINAL_AND_PREVIOUS'
        | 'ORIGINAL_OPERATION'
        | 'NEXT_OPERATION'
        | 'ANY_PREVIOUS_OPERATION'
        | 'ANY_OPERATION'
        | 'PREVIOUS_OPERATION';
      operation?: Operation;
    }
  | Record<string, any>;
