/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'ValidatePrtLoadRequest' schema.
 */
export type ValidatePrtLoadRequest =
  | {
      /**
       * The plant where the loaded tools are validated
       */
      plant: string;
      /**
       * The SFCs of the loaded tools
       */
      sfcs?: string[];
      /**
       * The operation of the loaded tools
       */
      operation: string;
      /**
       * The resource of the loaded tools
       */
      resource: string;
    }
  | Record<string, any>;
