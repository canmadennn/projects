/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Quantity } from './quantity';
import type { Operation } from './operation';
import type { CustomValue } from './custom-value';
/**
 * Representation of the 'RecipeOperationPhase' schema.
 */
export type RecipeOperationPhase =
  | {
      baseQuantity?: Quantity;
      /**
       * Limits how many times an SFC may be restarted. If 0, then there is no limit.
       */
      maxLoop?: number;
      operationActivity?: Operation;
      /**
       * The type of recipe operation phase.
       */
      phaseType?: string;
      /**
       * Indicates if the phase is weight relevant.
       */
      weighRelevant?: boolean;
      /**
       * Indicates if the phase is configured for an automatic goods receipt.
       */
      automaticGoodsReceipt?: boolean;
      /**
       * Custom data for the recipe operation phase.
       */
      customValues?: CustomValue[];
    }
  | Record<string, any>;
