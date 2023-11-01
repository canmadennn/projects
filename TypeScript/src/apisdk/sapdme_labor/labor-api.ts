/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { LaborReportRequest, LaborReport } from './schema';
/**
 * Representation of the 'LaborApi'.
 * This API is part of the 'sapdme_labor' service.
 */
export const LaborApi = {
  /**
   * Retrieves the shift assignments including non-availability of assigned labors to shop floor supervisors of a plant  for a date range. An additional user filter is provided to retrieve shift plans specific to a supervisor.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getLaborShiftPlansUsingPost: (body: LaborReportRequest) =>
    new OpenApiRequestBuilder<LaborReport[]>('post', '/laborshiftplans', {
      body
    })
};
