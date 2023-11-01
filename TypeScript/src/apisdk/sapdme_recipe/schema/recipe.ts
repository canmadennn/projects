/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { CustomValue } from './custom-value';
import type { RecipeOperationGroup } from './recipe-operation-group';
import type { RecipePhase } from './recipe-phase';
/**
 * Representation of the 'Recipe' schema.
 */
export type Recipe =
  | {
      /**
       * The plant this recipe is assigned to.
       */
      plant?: string;
      /**
       * The name of the recipe.
       */
      recipe?: string;
      /**
       * The recipe version.
       */
      version?: string;
      /**
       * Indicates the type of the recipe.
       */
      type?: 'PRODUCTION_RECIPE' | 'SHOPORDER_SPECIFIC_RECIPE';
      /**
       * The status of the recipe.
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
       * If true, the version of the recipe is current.
       */
      currentVersion?: boolean;
      /**
       * The description of the recipe.
       */
      description?: string;
      /**
       * Indicates if Quantity Validation is required during production.
       */
      quantityValidation?: boolean;
      /**
       * Indicates if the recipe has a relaxed flow.
       */
      relaxedFlow?: boolean;
      /**
       * Indicates if the recipe is configured for an automatic goods receipt.
       */
      automaticGoodsReceipt?: boolean;
      /**
       * The entry recipe phase for the recipe.
       */
      entryPhaseId?: string;
      /**
       * The recipe custom data.
       */
      customValues?: CustomValue[];
      /**
       * The operation groups of the recipe.
       */
      operationGroups?: RecipeOperationGroup[];
      /**
       * Recipe phases in the recipe.
       */
      phases?: RecipePhase[];
      /**
       * The time when the recipe has most recently changed.
       * @example "2018-06-22T04:24:00Z"
       * Format: "date-time".
       */
      modifiedDateTime?: string;
      /**
       * The time when the recipe was created.
       * @example "2018-06-22T04:24:00Z"
       * Format: "date-time".
       */
      createdDateTime?: string;
    }
  | Record<string, any>;
