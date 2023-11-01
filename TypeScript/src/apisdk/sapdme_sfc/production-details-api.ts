/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  SfcBatchRequest,
  SfcBatchResponse,
  SfcDetails,
  WorkListResponse,
  SfcStepAlternatesRequest,
  SfcStepActivityResponse,
  AutomationSfcSelectRequest,
  SfcDetailResponse,
  ActiveSfcResponse
} from './schema';
/**
 * Representation of the 'ProductionDetailsApi'.
 * This API is part of the 'sapdme_sfc' service.
 */
export const ProductionDetailsApi = {
  /**
   * Update SFC default batch ID with a given batch ID. The given batch ID is checked for validity against valid batch IDs based on the SFC material.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createPodConfigurationUsingPost: (body: SfcBatchRequest) =>
    new OpenApiRequestBuilder<SfcBatchResponse>('put', '/batch', {
      body
    }),
  /**
   * Return the number of SFCs in the work list for the given plant and other optional filter criteria.
   * @param queryParameters - Object containing the following keys: allSfcSteps, filter.material, filter.materialRevision, filter.operation, filter.order, filter.orderPlannedEndDateTime, filter.orderPlannedStartDateTime, filter.sfc, filter.stepId, operation, plant, resource, user, workCenter.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getSfcWorkListCountUsingGet: (queryParameters: {
    allSfcSteps?: boolean;
    'filter.material'?: string;
    'filter.materialRevision'?: string;
    'filter.operation'?: string;
    'filter.order'?: string;
    'filter.orderPlannedEndDateTime'?: string;
    'filter.orderPlannedStartDateTime'?: string;
    'filter.sfc'?: string;
    'filter.stepId'?: string;
    operation?: string;
    plant: string;
    resource?: string;
    user?: string;
    workCenter?: string;
  }) =>
    new OpenApiRequestBuilder<string>('get', '/worklist/sfcs/$count', {
      queryParameters
    }),
  /**
   * Create a request builder for execution of get requests to the '/worklist/sfcs' endpoint.
   * @param queryParameters - Object containing the following keys: allSfcSteps, filter.material, filter.materialRevision, filter.operation, filter.order, filter.orderPlannedEndDateTime, filter.orderPlannedStartDateTime, filter.sfc, filter.stepId, operation, page.offset, page.size, plant, resource, user, workCenter.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getSfcWorkListUsingGet: (queryParameters: {
    allSfcSteps?: boolean;
    'filter.material'?: string;
    'filter.materialRevision'?: string;
    'filter.operation'?: string;
    'filter.order'?: string;
    'filter.orderPlannedEndDateTime'?: string;
    'filter.orderPlannedStartDateTime'?: string;
    'filter.sfc'?: string;
    'filter.stepId'?: string;
    operation?: string;
    'page.offset'?: number;
    'page.size'?: number;
    plant: string;
    resource?: string;
    user?: string;
    workCenter?: string;
  }) =>
    new OpenApiRequestBuilder<SfcDetails[] | SfcDetails[]>(
      'get',
      '/worklist/sfcs',
      {
        queryParameters
      }
    ),
  /**
   * Create a request builder for execution of get requests to the '/worklist/orders/$count' endpoint.
   * @param queryParameters - Object containing the following keys: allSfcSteps, filter.material, filter.materialRevision, filter.operation, filter.order, filter.orderPlannedEndDateTime, filter.orderPlannedStartDateTime, filter.sfc, filter.stepId, operation, plant, resource, user, workCenter.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getOrderWorkListCountUsingGet: (queryParameters: {
    allSfcSteps?: boolean;
    'filter.material'?: string;
    'filter.materialRevision'?: string;
    'filter.operation'?: string;
    'filter.order'?: string;
    'filter.orderPlannedEndDateTime'?: string;
    'filter.orderPlannedStartDateTime'?: string;
    'filter.sfc'?: string;
    'filter.stepId'?: string;
    operation?: string;
    plant: string;
    resource?: string;
    user?: string;
    workCenter?: string;
  }) =>
    new OpenApiRequestBuilder<string>('get', '/worklist/orders/$count', {
      queryParameters
    }),
  /**
   * Create a request builder for execution of get requests to the '/worklist/orders' endpoint.
   * @param queryParameters - Object containing the following keys: allSfcSteps, filter.material, filter.materialRevision, filter.operation, filter.order, filter.orderPlannedEndDateTime, filter.orderPlannedStartDateTime, filter.sfc, filter.stepId, operation, page.offset, page.size, plant, resource, user, workCenter.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getOrderWorkListUsingGet: (queryParameters: {
    allSfcSteps?: boolean;
    'filter.material'?: string;
    'filter.materialRevision'?: string;
    'filter.operation'?: string;
    'filter.order'?: string;
    'filter.orderPlannedEndDateTime'?: string;
    'filter.orderPlannedStartDateTime'?: string;
    'filter.sfc'?: string;
    'filter.stepId'?: string;
    operation?: string;
    'page.offset'?: number;
    'page.size'?: number;
    plant: string;
    resource?: string;
    user?: string;
    workCenter?: string;
  }) =>
    new OpenApiRequestBuilder<WorkListResponse[] | WorkListResponse[]>(
      'get',
      '/worklist/orders',
      {
        queryParameters
      }
    ),
  /**
   * Update Alternate Resource Mapping for an SFC and Operation Activity.Change to alternate resource mapping for an SFC and Phase.
   * @param body - Request object to update the alternate resource mapping for an SFC and Phase
   * @param queryParameters - Object containing the following keys: plant.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateAlternateResourceUsingPut: (
    body: SfcStepAlternatesRequest,
    queryParameters?: { plant?: string }
  ) =>
    new OpenApiRequestBuilder<any>('put', '/alternateResource', {
      body,
      queryParameters
    }),
  /**
   * Returns step details for each routing step that the SFC has been started or completed.
   * @param queryParameters - Object containing the following keys: plant, sfc.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getSfcStepActivities: (queryParameters: { plant: string; sfc: string }) =>
    new OpenApiRequestBuilder<SfcStepActivityResponse>('get', '/stepActivity', {
      queryParameters
    }),
  /**
   * Sends an SFC selection event to the message broker to be consumed and sent to the Pods subscribing to the selection event. PODs can subscribe to the selection event by enabling Notifications for the SFC Select Event in the POD Designer. The receiving POD User Interface will select the SFC.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createSfcselect: (body: AutomationSfcSelectRequest) =>
    new OpenApiRequestBuilder<any>('post', '/sfcselect', {
      body
    }),
  /**
   * SFC details includes information about the SFC, including the SFC status, material, order, routing, and routing steps. The sfcdetail API returns all operation activity/step IDs from the requested SFC, which can be any status.
   * @param queryParameters - Object containing the following keys: plant, sfc.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getSfcdetail: (queryParameters: { plant: string; sfc: string }) =>
    new OpenApiRequestBuilder<SfcDetailResponse | SfcDetailResponse>(
      'get',
      '/sfcdetail',
      {
        queryParameters
      }
    ),
  /**
   * Retrieves all the SFCs that are in work at a given resource. A resource may have the capacity of working on one or many SFCs at the same time. SFCs on a relaxed flow router are not retrieved.
   * @param queryParameters - Object containing the following keys: resource, plant, page.offset, page.size.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getSfcsInWork: (queryParameters: {
    resource: string;
    plant: string;
    'page.offset'?: number;
    'page.size'?: number;
  }) =>
    new OpenApiRequestBuilder<ActiveSfcResponse[]>('get', '/sfcsInWork', {
      queryParameters
    })
};
