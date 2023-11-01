/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'GetStorageLocationResponse' schema.
 */
export type GetStorageLocationResponse =
  | {
      /**
       * Description of storage location.
       */
      description?: string;
      /**
       * Indicates whether it is a central storage location or not
       */
      isCentralStorageLocation?: boolean;
      /**
       * Indicates whether it is a storage location managed by Extended Warehouse Management or not
       */
      isEWMManagedStorageLocation?: boolean;
      /**
       * Indicates whether it is a production storage location or not
       */
      isProductionStorageLocation?: boolean;
      /**
       * The storage location name
       */
      storageLocation?: string;
    }
  | Record<string, any>;
