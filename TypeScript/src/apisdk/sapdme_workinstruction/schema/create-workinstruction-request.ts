/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { CustomValue } from './custom-value';
import type { CreateWorkInstructionAttachedPoint } from './create-work-instruction-attached-point';
import type { CreateWorkInstructionElement } from './create-work-instruction-element';
/**
 * Request object to create work instruction.
 */
export type CreateWorkinstructionRequest =
  | {
      /**
       * Plant where the work instruction has to be performed.
       */
      plant: string;
      /**
       * The name of the work instruction.
       */
      workInstruction: string;
      /**
       * The version of the work instruction.
       */
      version: string;
      /**
       * If true, then this is the current revision of the work instruction.
       */
      currentVersion?: boolean;
      /**
       * The description of the work instruction.
       */
      description?: string;
      /**
       * Status type of the work instruction.
       */
      status?: 'NEW' | 'RELEASABLE' | 'OBSOLETE' | 'HOLD';
      /**
       * Track viewing where the work instruction has to be performed.
       */
      trackViewing?: boolean;
      /**
       * Custom values for the work instruction.
       */
      customValues?: CustomValue[];
      /**
       * List of attached points of the work instruction.
       */
      attachedPoints?: CreateWorkInstructionAttachedPoint[];
      /**
       * List of work instruction elements of the work instruction.
       */
      workInstructionElements?: CreateWorkInstructionElement[];
    }
  | Record<string, any>;
