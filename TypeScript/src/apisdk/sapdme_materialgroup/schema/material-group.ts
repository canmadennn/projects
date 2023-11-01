/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { CustomValue } from './custom-value';
/**
 * Representation of the 'MaterialGroup' schema.
 */
export type MaterialGroup =
  | {
      /**
       * The plant of the material group.
       */
      plant: string;
      /**
       * The name of the material group.
       */
      materialGroup: string;
      /**
       * The description of the material group.
       */
      description?: string;
      /**
       * Material group custom data.
       */
      customValues?: CustomValue[];
      /**
       * The time when the material group was created.
       * @example "2018-06-22T04:24:00Z"
       * Format: "date-time".
       */
      createdDateTime?: string;
      /**
       * The time when the material group was updated.
       * @example "2018-06-22T04:24:00Z"
       * Format: "date-time".
       */
      modifiedDateTime?: string;
    }
  | Record<string, any>;
