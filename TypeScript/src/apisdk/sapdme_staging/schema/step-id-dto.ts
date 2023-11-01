/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ComponentDto } from './component-dto';
/**
 * Representation of the 'StepIdDto' schema.
 */
export type StepIdDto =
  | {
      /**
       * The components for which the staging request is performed in this operation activity step
       */
      components?: ComponentDto[];
      /**
       * The operation activity step ID
       */
      stepId: string;
    }
  | Record<string, any>;
