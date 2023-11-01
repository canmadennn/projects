/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'URI' schema.
 */
export type URI =
  | {
      absolute?: boolean;
      authority?: string;
      fragment?: string;
      host?: string;
      opaque?: boolean;
      path?: string;
      /**
       * Format: "int32".
       */
      port?: number;
      query?: string;
      rawAuthority?: string;
      rawFragment?: string;
      rawPath?: string;
      rawQuery?: string;
      rawSchemeSpecificPart?: string;
      rawUserInfo?: string;
      scheme?: string;
      schemeSpecificPart?: string;
      userInfo?: string;
    }
  | Record<string, any>;
