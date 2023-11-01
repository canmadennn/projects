/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { RecipeOperationGroupStep } from './recipe-operation-group-step';
/**
 * Representation of the 'RecipeOperationGroup' schema.
 */
export type RecipeOperationGroup =
  | {
      /**
       * The name of the recipe operation group.
       */
      recipeOperationGroup?: string;
      /**
       * The description of the recipe operation group.
       */
      description?: string;
      /**
       * The steps of the recipe operation group.
       */
      recipeOperationGroupSteps?: RecipeOperationGroupStep[];
    }
  | Record<string, any>;
