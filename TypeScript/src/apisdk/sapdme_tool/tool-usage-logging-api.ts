/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { LogToolUsage } from './schema';
/**
 * Representation of the 'ToolUsageLoggingApi'.
 * This API is part of the 'sapdme_tool' service.
 */
export const ToolUsageLoggingApi = {
  /**
   * Enables automatic logging of tool usage for SFCs that have already been started and are not yet done. Only tools specified with automatic logging method would be logged.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  saveToolUsageLogsUsingPost2: (body: LogToolUsage) =>
    new OpenApiRequestBuilder<any>('post', '/toolUsageLogs', {
      body
    })
};
