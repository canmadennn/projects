/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BOMId } from './bom-id';
import type { MaterialId } from './material-id';
/**
 * The BOM component to assemble.
 */
export type BomComponentId =
  | {
      bom?: BOMId;
      material?: MaterialId;
      /**
       * The order the component is displayed in relation to other BOM components.
       * Format: "int64".
       */
      sequence?: number;
    }
  | Record<string, any>;
