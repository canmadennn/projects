/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { RecipeOperationPhaseUpdate } from './recipe-operation-phase-update';
/**
 * Representation of the 'RecipePhaseUpdate' schema.
 */
export type RecipePhaseUpdate =
  | {
      /**
       * The step ID of the recipe phase.
       */
      phaseId?: string;
      /**
       * The ID of the production process.
       */
      productionProcessId?: string;
      /**
       * The Production Process Definition Key.
       */
      productionProcessDefKey?: string;
      recipeOperation?: RecipeOperationPhaseUpdate;
    }
  | Record<string, any>;
