/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { RecipeUpdate, Recipe } from './schema';
/**
 * Representation of the 'RecipeAndPhasesApi'.
 * This API is part of the 'sapdme_recipe' service.
 */
export const RecipeAndPhasesApi = {
  /**
   * Update the recipe header details and phases details. Finds needed phases by phaseId and updates specified fields. Every unspecified field will remain unchanged.
   * @param recipe - The recipe name.
   * @param version - The version of the recipe.
   * @param recipeType - The type of the recipe.
   * @param body - The recipe details with phases details to update.
   * @param queryParameters - Object containing the following keys: plant.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateRecipeDetailsAndPhasesPatch1: (
    recipe: string,
    version: string,
    recipeType: string,
    body: RecipeUpdate,
    queryParameters: { plant: string }
  ) =>
    new OpenApiRequestBuilder<Recipe[]>(
      'patch',
      '/recipes/{recipe}/{version}/{recipeType}/recipeDetailsAndPhases',
      {
        pathParameters: { recipe, version, recipeType },
        body,
        queryParameters
      }
    )
};
