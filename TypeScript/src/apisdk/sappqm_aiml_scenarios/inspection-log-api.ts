/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  InspectionState,
  SaveInspectionStateResponse,
  InspectionLogView
} from './schema';
/**
 * Representation of the 'InspectionLogApi'.
 * This API is part of the 'sappqm_aiml_scenarios' service.
 */
export const InspectionLogApi = {
  /**
   * Provides all the inspection logs (images, predictions, and operator actions) for a SFC.
   * @param queryParameters - Object containing the following keys: fileID, fromDate, toDate, inspectionViewName, loggedNCCode, material, operation, plant, resource, routing, scenarioID, scenarioVersion, sfc, source.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getInspectionStateUsingGet: (queryParameters: {
    fileID?: string;
    fromDate?: string;
    toDate?: string;
    inspectionViewName?: string;
    loggedNCCode?: string;
    material?: string;
    operation?: string;
    plant: string;
    resource?: string;
    routing?: string;
    scenarioID?: string;
    scenarioVersion?: number;
    sfc?: string;
    source?: 'DME' | 'ME';
  }) =>
    new OpenApiRequestBuilder<InspectionState>('get', '/inspectionLog', {
      queryParameters
    }),
  /**
   * Logs the image of the SFC, predictions by the AI/ML model and operations( Log NCS and mark as conformant/ nonconformant ) performed by the operator.
   * @param body - Plant and SFC are mandatory fields in the request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  saveInspectionStateUsingPost: (body: InspectionState) =>
    new OpenApiRequestBuilder<SaveInspectionStateResponse>(
      'post',
      '/inspectionLog',
      {
        body
      }
    ),
  /**
   * Provides all the inspection logs (images, predictions, and operator actions) for a SFC.
   * @param queryParameters - Object containing the following keys: fileID, fromDate, toDate, inspectionViewName, loggedNCCode, material, operation, plant, resource, routing, scenarioID, scenarioVersion, sfc, skip, source, top.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getInspectionLogsForContextUsingGet: (queryParameters: {
    fileID?: string;
    fromDate?: string;
    toDate?: string;
    inspectionViewName?: string;
    loggedNCCode?: string;
    material?: string;
    operation?: string;
    plant: string;
    resource?: string;
    routing?: string;
    scenarioID?: string;
    scenarioVersion?: number;
    sfc?: string;
    skip?: number;
    source?: 'DME' | 'ME';
    top?: number;
  }) =>
    new OpenApiRequestBuilder<InspectionLogView[]>(
      'get',
      '/aiml/v1/inspectionLogsForContext',
      {
        queryParameters
      }
    )
};
