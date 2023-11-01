/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'Pageable' schema.
 */
export type Pageable =
  | {
      /**
       * Format: "int32".
       */
      page?: number;
      /**
       * Format: "int32".
       */
      size?: number;
      sort?: string;
    }
  | Record<string, any>;
