/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { Recipe } from './schema';
/**
 * Representation of the 'RecipeApi'.
 * This API is part of the 'sapdme_recipe' service.
 */
export const RecipeApi = {
  /**
   * Create a request builder for execution of get requests to the '/recipes' endpoint.
   * @param queryParameters - Object containing the following keys: plant, recipe, recipeType, version.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  findRecipeByPlantAndNameUsingGet1: (queryParameters: {
    plant: string;
    recipe: string;
    recipeType?: 'PRODUCTION' | 'SHOP_ORDER';
    version?: string;
  }) =>
    new OpenApiRequestBuilder<Recipe[]>('get', '/recipes', {
      queryParameters
    }),
  /**
   * Updates a list of recipes for the given plant.
   * @param body - The list of recipes to update.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateRecipesPut1: (body: Recipe[]) =>
    new OpenApiRequestBuilder<Recipe[]>('put', '/recipes', {
      body
    }),
  /**
   * Create a request builder for execution of post requests to the '/recipes' endpoint.
   * @param body - The list of recipes to create.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createRecipePost1: (body: Recipe[]) =>
    new OpenApiRequestBuilder<Recipe[]>('post', '/recipes', {
      body
    }),
  /**
   * Create a request builder for execution of delete requests to the '/recipes' endpoint.
   * @param queryParameters - Object containing the following keys: plant, recipe, version, recipeType.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteRecipeDelete1: (queryParameters: {
    plant: string;
    recipe: string;
    version: string;
    recipeType: 'PRODUCTION' | 'SHOP_ORDER';
  }) =>
    new OpenApiRequestBuilder<any>('delete', '/recipes', {
      queryParameters
    })
};
