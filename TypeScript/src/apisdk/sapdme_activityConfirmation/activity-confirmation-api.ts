/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  ActivityConfirmationPublicAPIRequest,
  ActivityConfirmationPublicAPIResponse,
  AutoActivityConfirmationRequest,
  AutoActivityConfirmationResponse,
  ActivityConfirmationSummaryPublicAPIRequest
} from './schema';
/**
 * Representation of the 'ActivityConfirmationApi'.
 * This API is part of the 'sapdme_activityConfirmation' service.
 */
export const ActivityConfirmationApi = {
  /**
   * Post activity confirmations for an operation activity, Sfc, order executed at a given workcenter and plant.
   * @param body - Request object to perform activity confirmations.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createConfirm: (body: ActivityConfirmationPublicAPIRequest) =>
    new OpenApiRequestBuilder<ActivityConfirmationPublicAPIResponse>(
      'post',
      '/confirm',
      {
        body
      }
    ),
  /**
   * Confirms activities for the parameters provided as input by automatically calculating the standard values. The standard values are calculated based on the elapsed operation time, on a simple prorated basis.
   * @param body - Request object to confirm activities.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createAutoconfirm: (body: AutoActivityConfirmationRequest) =>
    new OpenApiRequestBuilder<AutoActivityConfirmationResponse>(
      'post',
      '/autoconfirm',
      {
        body
      }
    ),
  /**
   * Retreives the activity confirmation posting summary for the specified operation activity.
   * @param body - Request object to retrieve posting.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getPostingsSummary: (body: ActivityConfirmationSummaryPublicAPIRequest) =>
    new OpenApiRequestBuilder<any>('get', '/postings/summary', {
      body
    })
};
