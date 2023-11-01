/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { AiMlScenarioMetadata, InputStreamResource } from './schema';
/**
 * Representation of the 'AIMLScenarioApi'.
 * This API is part of the 'sappqm_aiml_scenarios' service.
 */
export const AIMLScenarioApi = {
  /**
   * Retrieves the active AI/ML scenarios for provided input.
   * @param queryParameters - Object containing the following keys: deploymentType, material, operation, plant, resource, routing, sfc.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getActiveAiMlScenariosUsingGet: (queryParameters?: {
    deploymentType?: string;
    material?: string;
    operation?: string;
    plant?: string;
    resource?: string;
    routing?: string;
    sfc?: string;
  }) =>
    new OpenApiRequestBuilder<AiMlScenarioMetadata[]>(
      'get',
      '/active-scenarios',
      {
        queryParameters
      }
    ),
  /**
   * Download a file uploaded for an AI/ML scenario for a given scenario id and version.
   * @param fileName - File Name
   * @param id - Scenario ID
   * @param version - Scenario Version
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  downloadAiMlScenarioFileUsingGet: (
    fileName: string,
    id: string,
    version: string
  ) =>
    new OpenApiRequestBuilder<InputStreamResource>(
      'get',
      '/scenario/{id}/version/{version}/file/{fileName}',
      {
        pathParameters: { fileName, id, version }
      }
    )
};
