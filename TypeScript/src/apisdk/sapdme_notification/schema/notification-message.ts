/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { NotificationParameter } from './notification-parameter';
import type { NotificationSubscription } from './notification-subscription';
/**
 * Contains the notification event name, subscription values, and payload. Any POD plugin that subscribes to the given event and subscription values will receive the notification payload.
 */
export type NotificationMessage =
  | {
      /**
       * The custom notification event name.
       */
      eventName: string;
      /**
       * The notification message payload.
       */
      parameters?: NotificationParameter[];
      subscription: NotificationSubscription;
    }
  | Record<string, any>;
