/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of operator logged defect.
 */
export type LoggedNC =
  | {
      /**
       * Boundary coordinates of the logged defect.
       */
      defectBoundingBoxCoords?: string;
      /**
       * Nonconformance code logged by the operator
       * Max Length: 40.
       * Min Length: 1.
       */
      ncCode: string;
    }
  | Record<string, any>;
