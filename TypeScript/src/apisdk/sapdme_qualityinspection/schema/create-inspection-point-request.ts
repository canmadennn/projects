/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { InspectionPointUserField } from './inspection-point-user-field';
/**
 * This object represents a request to create an inspection point.
 */
export type CreateInspectionPointRequest =
  | {
      inspectionPointUserField?: InspectionPointUserField;
      /**
       * The plant for which the inspection point is created
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      plant: string;
      /**
       * The SFC for which the inspection point is created
       */
      sfc: string;
    }
  | Record<string, any>;
