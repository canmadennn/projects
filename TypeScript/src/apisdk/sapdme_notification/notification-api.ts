/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { NotificationMessage } from './schema';
/**
 * Representation of the 'NotificationApi'.
 * This API is part of the 'sapdme_notification' service.
 */
export const NotificationApi = {
  /**
   * Send a custom notification to subscribing custom POD plugins. The notification will be routed to any custom plugin that has subscribed to the given event and subscription values. Note that this API cannot send notifications for SAP internal events, such as SFC Start. See the POD Plugin Developer's Guide for details.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createSend: (body: NotificationMessage) =>
    new OpenApiRequestBuilder<any>('post', '/send', {
      body
    })
};
