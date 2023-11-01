/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { SetPointGroupDelegator, SetPointGroup } from './schema';
/**
 * Representation of the 'SetpointGroupMaintenanceAPIEndpointsApi'.
 * This API is part of the 'sapdme_setpoint_v2' service.
 */
export const SetpointGroupMaintenanceAPIEndpointsApi = {
  /**
   * This operation is a query that accepts group names and matches them starting with the specified string. The version, group names, and status must match exactly.
   * @param queryParameters - Object containing the following keys: $top, plant, setpointgroup, $skip, status, version.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  geSetPointGroupsUsingGet: (queryParameters: {
    $top?: number;
    plant: string;
    setpointgroup?: string;
    $skip?: number;
    status?: 'NEW' | 'RELEASABLE' | 'HOLD' | 'OBSOLETE';
    version?: string;
  }) =>
    new OpenApiRequestBuilder<SetPointGroupDelegator>('get', '/groups', {
      queryParameters
    }),
  /**
   * This operation creates a Setpoint Group with its parameters/indicators, contexts, and custom values.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createSetPointGroupUsingPost: (body: SetPointGroup) =>
    new OpenApiRequestBuilder<SetPointGroup>('post', '/groups', {
      body
    }),
  /**
   * If the Setpoint Group is marked as used in production, it cannot be edited. Any optional values that are not specified in the request will be retained. If any child collections are modified, they will be replaced entirely.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  modifySetPointGroupUsingPatch: (body: SetPointGroup) =>
    new OpenApiRequestBuilder<SetPointGroup>('patch', '/groups', {
      body
    }),
  /**
   * If the Setpoint Group is marked as used in production, it cannot be deleted.
   * @param queryParameters - Object containing the following keys: plant, setpointgroup, version.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteSetPointGroupUsingDelete: (queryParameters: {
    plant: string;
    setpointgroup: string;
    version: string;
  }) =>
    new OpenApiRequestBuilder<any>('delete', '/groups', {
      queryParameters
    })
};
