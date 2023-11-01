/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Request to unload material from a resource bin.
 */
export type UnloadResourceBinRequest =
  | {
      /**
       * The name of a resource bin to be unloaded.
       * Max Length: 36.
       * Min Length: 1.
       */
      bin: string;
      /**
       * The plant containing a resource.
       * Max Length: 6.
       * Min Length: 1.
       */
      plant: string;
      /**
       * The name of a resource.
       * Max Length: 36.
       * Min Length: 1.
       */
      resource: string;
    }
  | Record<string, any>;
