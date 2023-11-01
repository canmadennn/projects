/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Response object of production change.
 */
export type ChangeProductionResponse =
  | {
      /**
       * The Shop Floor Controls to change successfully.
       */
      success?: string[];
      /**
       * The Shop Floor Controls to change failed.
       */
      failed?: string[];
    }
  | Record<string, any>;
