/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { SfcDispositionRequest, SfcDispositionResponse } from './schema';
/**
 * Representation of the 'SFCsDispositionApi'.
 * This API is part of the 'sapdme_nonconformance' service.
 */
export const SFCsDispositionApi = {
  /**
   * Performs the disposition of nonconformant SFCs at a given resource. A nonconformance incident has a nonconformance code with associated disposition routings. If there are several options for the disposition like several disposition routings in the NC code, a service returns DispositionOption objects for the selection. To select an option for the disposition of the SFC this API must be called again with the selected options.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  dispositionUsingPost: (body: SfcDispositionRequest) =>
    new OpenApiRequestBuilder<SfcDispositionResponse>(
      'post',
      '/sfcs/disposition',
      {
        body
      }
    )
};
