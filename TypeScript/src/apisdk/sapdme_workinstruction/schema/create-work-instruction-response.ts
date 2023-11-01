/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { CreateWorkInstructionAttachedPoint } from './create-work-instruction-attached-point';
import type { CustomValue } from './custom-value';
import type { WorkInstructionElement } from './work-instruction-element';
/**
 * Response object for the work instruction.
 */
export type CreateWorkInstructionResponse =
  | {
      /**
       * Plant where the work instruction has to be performed.
       */
      plant?: string;
      /**
       * The name of the work instruction.
       */
      workInstruction?: string;
      /**
       * The version of the work instruction.
       */
      version?: string;
      /**
       * The description of the work instruction.
       */
      description?: string;
      /**
       * Current version of the work instruction.
       */
      currentVersion?: boolean;
      /**
       * Status type of the work instruction.
       */
      status?: 'NEW' | 'RELEASABLE' | 'OBSOLETE' | 'HOLD';
      /**
       * List of attached points of the work instruction.
       */
      attachedPoints?: CreateWorkInstructionAttachedPoint[];
      /**
       * Track viewing where the work instruction has to be performed.
       */
      trackViewing?: boolean;
      /**
       * Custom values of the work instruction.
       */
      customValues?: CustomValue[];
      /**
       * List of work instruction elements of the work instruction.
       */
      workInstructionElements?: WorkInstructionElement[];
    }
  | Record<string, any>;
