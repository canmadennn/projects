/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * A subscription is a set of plant specific objects that define the context for the business event.  Events that happen within this context will be routed to subscribing plugins. Note that the notification will be sent only if all subscription values match (logical AND).
 */
export type NotificationSubscription =
  | {
      /**
       * Plant for which notifications should be received.
       */
      plant: string;
      /**
       * Operation for which notifications should be received.
       */
      operation?: string;
      /**
       * Resource for which notifications should be received.
       */
      resource?: string;
      /**
       * Work center for which notifications should be received.
       */
      workCenter?: string;
    }
  | Record<string, any>;
