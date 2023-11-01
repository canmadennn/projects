/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ResourceId } from './resource-id';
/**
 * Representation of the 'ResourceType' schema.
 */
export type ResourceType =
  | {
      /**
       * The plant containing a resource type.
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      plant?: string;
      /**
       * The resource type name.
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      resourceType?: string;
      /**
       * The resource type description.
       */
      description?: string;
      /**
       * The associated resources.
       */
      resources?: ResourceId[];
      /**
       * The date and time (in UTC) when the resource type was created.
       * @example "2021-04-08T07:00:05.000Z"
       * Format: "date-time".
       */
      createdOn?: string;
      /**
       * The date and time (in UTC) when the the resource type was updated.
       * @example "2021-04-08T07:00:05.000Z"
       * Format: "date-time".
       */
      modifiedOn?: string;
    }
  | Record<string, any>;
