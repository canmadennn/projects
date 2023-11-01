/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The request for the resource removal.
 */
export type ResourceDeleteRequest =
  | {
      /**
       * The plant where a resource is defined.
       * Max Length: 6.
       * Min Length: 1.
       */
      plant: string;
      /**
       * The resource name.
       * Max Length: 36.
       * Min Length: 1.
       */
      resource: string;
    }
  | Record<string, any>;
