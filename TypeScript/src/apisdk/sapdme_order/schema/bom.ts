/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * This object represents a bom.
 */
export type Bom =
  | {
      /**
       * The name of the bom object
       */
      bom?: string;
      /**
       * The internal type of the bom object. Deprecated. Use type field instead.
       * @deprecated
       */
      bomType?: string;
      /**
       * The type of the bom object
       */
      type?: string;
      /**
       * The version of the bom object
       */
      version?: string;
    }
  | Record<string, any>;
