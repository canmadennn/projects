/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  GetAllAssignedObjectsRequest,
  ClassificationResponse
} from './schema';
/**
 * Representation of the 'ClassificationApi'.
 * This API is part of the 'sapdme_classification' service.
 */
export const ClassificationApi = {
  /**
   * Retrieve a list of classes and characteristics by multiple material, class type and classes.
   * @param body - Object represents the request for getAllAssignedObjects.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createRead: (body: GetAllAssignedObjectsRequest) =>
    new OpenApiRequestBuilder<ClassificationResponse>('post', '/read', {
      body
    })
};
