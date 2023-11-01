/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  ValidatePrtLoadRequest,
  ValidationResultResponse
} from './schema';
/**
 * Representation of the 'ToolValidationApi'.
 * This API is part of the 'sapdme_tool' service.
 */
export const ToolValidationApi = {
  /**
   * Validate loaded tools by checking the alignment between loaded tools and PRT assignments.
   * There are 2 possible validation results: PRT_PASSED, FAILED.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  prtLoadValidationPost: (body: ValidatePrtLoadRequest) =>
    new OpenApiRequestBuilder<ValidationResultResponse>(
      'post',
      '/prtLoadValidation',
      {
        body
      }
    )
};
