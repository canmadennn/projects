/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { RecipePhaseUpdate } from './recipe-phase-update';
/**
 * Representation of the 'RecipeUpdate' schema.
 */
export type RecipeUpdate =
  | {
      /**
       * Recipe phases in the recipe.
       */
      phases?: RecipePhaseUpdate[];
      /**
       * Indicates if Quantity Validation is required during production.
       */
      quantityValidation?: boolean;
      /**
       * Indicates if the recipe has a relaxed flow.
       */
      relaxedFlow?: boolean;
    }
  | Record<string, any>;
