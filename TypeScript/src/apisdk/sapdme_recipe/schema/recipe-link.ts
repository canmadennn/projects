/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { RecipeId } from './recipe-id';
/**
 * Representation of the 'RecipeLink' schema.
 */
export type RecipeLink =
  | {
      /**
       * The recipe phase the link refers to.
       */
      phaseId?: string;
      recipe?: RecipeId;
    }
  | Record<string, any>;
