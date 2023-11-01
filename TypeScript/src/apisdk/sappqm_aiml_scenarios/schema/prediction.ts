/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of defect prediction.
 */
export type Prediction =
  | {
      /**
       * Defines if the nonconformance has been logged for the prediction class.
       */
      isLogged?: boolean;
      /**
       * Nonconformance code associated with the prediction class.
       * Max Length: 40.
       * Min Length: 1.
       */
      ncCode: string;
      /**
       * Boundary coordinates of the predicted defect.
       */
      predictionBoundingBoxCoords?: string;
      /**
       * Machine Learning model prediction class name.
       * Max Length: 100.
       * Min Length: 1.
       */
      predictionClass: string;
      /**
       * Prediction probability.
       * Format: "double".
       * Maximum: 1.
       */
      predictionScore: number;
    }
  | Record<string, any>;
