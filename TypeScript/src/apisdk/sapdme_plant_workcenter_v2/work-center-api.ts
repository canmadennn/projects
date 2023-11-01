/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { WorkCenterV2, WorkCenterDeleteRequest } from './schema';
/**
 * Representation of the 'WorkCenterApi'.
 * This API is part of the 'sapdme_plant_workcenter_v2' service.
 */
export const WorkCenterApi = {
  /**
   * Searches for a work center for a given plant and returns the details for the same.
   * @param queryParameters - Object containing the following keys: plant, workCenter, assignedUser, resourceMembers.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  readUsingGet: (queryParameters: {
    plant: string;
    workCenter?: string;
    assignedUser?: string;
    resourceMembers?: string;
  }) =>
    new OpenApiRequestBuilder<WorkCenterV2[]>('get', '/workcenters', {
      queryParameters
    }),
  /**
   * Creates a work center for a given plant.
   * @param body - The work center to create
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createUsingPost: (body: WorkCenterV2) =>
    new OpenApiRequestBuilder<WorkCenterV2>('post', '/workcenters', {
      body
    }),
  /**
   * Updates a work center for a given plant.
   * @param body - The work center to update
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateUsingPatch: (body: WorkCenterV2) =>
    new OpenApiRequestBuilder<WorkCenterV2>('patch', '/workcenters', {
      body
    }),
  /**
   * Removes a work center for a given plant
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteUsingDelete: (body: WorkCenterDeleteRequest) =>
    new OpenApiRequestBuilder<any>('delete', '/workcenters', {
      body
    })
};
