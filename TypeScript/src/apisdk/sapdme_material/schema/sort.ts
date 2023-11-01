/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'Sort' schema.
 */
export type Sort =
  | {
      /**
       * If the value is 'true', it indicates that no material is retrieved. If the value is 'false', it indicates that there are materials retrieved.
       */
      empty?: boolean;
      /**
       * If the value is 'true', it indicates that the materials retrieved are sorted accordingly. If the value is 'false', it indicates that no materials are retrieved.
       */
      sorted?: boolean;
      /**
       * If the value is 'false', it indicates that the materials retrieved are sorted accordingly. If the value is 'true', it indicates that no materials are retrieved.
       */
      unsorted?: boolean;
    }
  | Record<string, any>;
