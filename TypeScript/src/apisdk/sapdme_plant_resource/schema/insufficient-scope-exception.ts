/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Insufficient scope error response
 */
export type InsufficientScopeException =
  | {
      /**
       * Error message code
       */
      error?: string;
      /**
       * Error description
       */
      errorDescription?: string;
      /**
       * The list of required scopes
       */
      scope?: string;
    }
  | Record<string, any>;
