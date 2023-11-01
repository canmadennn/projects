/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'InventorySort' schema.
 */
export type InventorySort =
  | {
      /**
       * Specify the field name that's used to sort the retrieved stock items.
       */
      fieldName: string;
      /**
       * Specify the sort direction that's used to sort the retrieved stock items. There are 2 direction types: 'ASC' (ascending) and 'DESC' (descending). The default type is 'ASC'.
       * Default: "ASC".
       */
      order?: 'ASC' | 'DESC';
    }
  | Record<string, any>;
