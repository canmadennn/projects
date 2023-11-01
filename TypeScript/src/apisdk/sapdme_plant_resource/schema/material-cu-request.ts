/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The material object in the create or update resource request.
 */
export type MaterialCuRequest =
  | {
      /**
       * The material name
       * Max Length: 128.
       * Min Length: 1.
       */
      material: string;
      /**
       * The material version
       * Max Length: 20.
       * Min Length: 1.
       */
      version: string;
    }
  | Record<string, any>;
