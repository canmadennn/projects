/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { ResourceReasonCodeResponse } from './schema';
/**
 * Representation of the 'ResourceReasonCodeApi'.
 * This API is part of the 'sapdme_oee_resourcereasoncode' service.
 */
export const ResourceReasonCodeApi = {
  /**
   * Retrieves resource reason code for the provided machine code and resource.
   * @param queryParameters - Object containing the following keys: plant, resource, machineCode.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getV1ResourceReasonCodes: (queryParameters: {
    plant: string;
    resource: string;
    machineCode: string;
  }) =>
    new OpenApiRequestBuilder<ResourceReasonCodeResponse[]>(
      'get',
      '/v1/resourceReasonCodes',
      {
        queryParameters
      }
    )
};
