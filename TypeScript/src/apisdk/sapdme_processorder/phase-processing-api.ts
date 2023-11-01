/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  StartPhaseRequest,
  CompletePhaseRequest,
  UpdateStartPhaseTimeRequest,
  UpdateStartPhaseTimeResponse,
  UpdateCompletePhaseTimeRequest,
  UpdateCompletePhaseTimeResponse
} from './schema';
/**
 * Representation of the 'PhaseProcessingApi'.
 * This API is part of the 'sapdme_processorder' service.
 */
export const PhaseProcessingApi = {
  /**
   * Starts a phase at the default resource of a work center at user-specified time or in real time. Be aware that the API is deprecated, and will be decommissioned and retired from production in a few releases. It's recommended to use the new successor API <a href=https://api.sap.com/api/sapdme_process_manufacturing/resource>/operationActivity/start</a>.
   * @param body - Request object to start a phase.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createV1PhaseStart: (body: StartPhaseRequest) =>
    new OpenApiRequestBuilder<StartPhaseRequest>('post', '/v1/phase/start', {
      body
    }),
  /**
   * Completes a phase at the default resource of a work center at user-specified time or in real time. Be aware that the API is deprecated, and will be decommissioned and retired from production in a few releases. It's recommended to use the new successor API <a href=https://api.sap.com/api/sapdme_process_manufacturing/resource>/operationActivity/complete</a>.
   * @param body - Request object to complete a phase.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createV1PhaseComplete: (body: CompletePhaseRequest) =>
    new OpenApiRequestBuilder<CompletePhaseRequest>(
      'post',
      '/v1/phase/complete',
      {
        body
      }
    ),
  /**
   * Updates start time for a phase to user-specified time.
   * @param body - Request object to update start time of a phase.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createV1PhaseUpdateStartTime: (body: UpdateStartPhaseTimeRequest) =>
    new OpenApiRequestBuilder<UpdateStartPhaseTimeResponse>(
      'post',
      '/v1/phase/updateStartTime',
      {
        body
      }
    ),
  /**
   * Updates the complete time for a phase to user-specified time.
   * @param body - Request object to update complete time of a phase.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createV1PhaseUpdateCompleteTime: (body: UpdateCompletePhaseTimeRequest) =>
    new OpenApiRequestBuilder<UpdateCompletePhaseTimeResponse>(
      'post',
      '/v1/phase/updateCompleteTime',
      {
        body
      }
    )
};
