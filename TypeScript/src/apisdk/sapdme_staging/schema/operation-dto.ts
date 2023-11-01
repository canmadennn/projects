/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ComponentDto } from './component-dto';
/**
 * Representation of the 'OperationDto' schema.
 */
export type OperationDto =
  | {
      /**
       * The components for which the staging request is performed in this operation
       */
      components?: ComponentDto[];
      /**
       * The operation name
       */
      operation: string;
    }
  | Record<string, any>;
