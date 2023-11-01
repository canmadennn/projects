/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Material } from './material';
/**
 * Representation of the 'AlternateComponent' schema.
 */
export type AlternateComponent =
  | {
      /**
       * If true, then this component is a valid substitute for the BOM component.
       */
      enabled?: boolean;
      material?: Material;
      /**
       * If true, then this component must be substituted for the BOM component.
       */
      required?: boolean;
      /**
       * The priority of the Alternate component.
       * Format: "int32".
       */
      priority?: number;
    }
  | Record<string, any>;
