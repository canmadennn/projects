/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Quantity } from './quantity';
import type { Operation } from './operation';
import type { CustomValue } from './custom-value';
/**
 * Representation of the 'RoutingOperationStep' schema.
 */
export type RoutingOperationStep =
  | {
      baseQuantity?: Quantity;
      /**
       * Limits how many times an SFC may be restarted. If 0, then there is no limit.
       */
      maxLoop?: number;
      operationActivity?: Operation;
      /**
       * The type of routing operation step.
       */
      stepType?: string;
      /**
       * Indicates if the operation is weight relevant.
       */
      weighRelevant?: boolean;
      /**
       * Indicates if the operation is configured for an automatic goods receipt.
       */
      automaticGoodsReceipt?: boolean;
      /**
       * Custom data for the routing operation step.
       */
      customValues?: CustomValue[];
    }
  | Record<string, any>;
