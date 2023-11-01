/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ResourceBinComponent } from './resource-bin-component';
/**
 * Representation of the 'ResourceBin' schema.
 */
export type ResourceBin =
  | {
      bin?: string;
      description?: string;
      loadedComponents?: ResourceBinComponent[];
      maxQuantity?: number;
    }
  | Record<string, any>;
