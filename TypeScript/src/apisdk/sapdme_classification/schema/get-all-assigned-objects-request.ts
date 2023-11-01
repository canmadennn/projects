/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Object represents the request for getAllAssignedObjects.
 */
export type GetAllAssignedObjectsRequest =
  | {
      /**
       * Plant
       */
      plant: string;
      /**
       * The object keys.
       *  Example:
       *  Name of the material
       */
      objectKeys: string[];
      /**
       * The object type.
       *  Allowed values are:
       *  MATERIAL
       */
      objectType: string;
      /**
       * The classification class type.
       *  Allowed values are:
       *  023(Batch), 001(Material) and 300(Variants).
       */
      classType: string;
      /**
       * The classification class names.
       */
      classes?: string[];
    }
  | Record<string, any>;
