/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'URL' schema.
 */
export type URL =
  | {
      authority?: string;
      content?: Record<string, any>;
      /**
       * Format: "int32".
       */
      defaultPort?: number;
      file?: string;
      host?: string;
      path?: string;
      /**
       * Format: "int32".
       */
      port?: number;
      protocol?: string;
      query?: string;
      ref?: string;
      userInfo?: string;
    }
  | Record<string, any>;
