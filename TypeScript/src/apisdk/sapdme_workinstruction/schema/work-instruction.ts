/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { WorkInstructionAttachedPoint } from './work-instruction-attached-point';
import type { CustomValue } from './custom-value';
import type { WorkInstructionElement } from './work-instruction-element';
/**
 * This business object defines the basic work instruction object. It controls which work instruction is displayed and how it is displayed.
 */
export type WorkInstruction =
  | {
      /**
       * The plant the work instruction belongs to.
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
       * The actual instruction (plain text or HTML).
       */
      instructionData?: string;
      /**
       * If true, then the work instruction will be displayed automatically in the POD.
       */
      required?: boolean;
      /**
       * The status of the work instruction.
       */
      status?: 'NEW' | 'RELEASABLE' | 'OBSOLETE' | 'HOLD';
      /**
       * If true, the version of the work instruction is current.
       */
      currentVersion?: boolean;
      /**
       * Track viewing where the work instruction has to be performed.
       */
      trackViewing?: boolean;
      /**
       * A list of attached points of the work instruction.
       */
      attachedPoints?: WorkInstructionAttachedPoint[];
      /**
       * Custom values of the work instruction.
       */
      customValues?: CustomValue[];
      /**
       * List of work instruction elements of the work instruction.
       */
      workInstructionElements?: WorkInstructionElement[];
      /**
       * The time when the work instruction was created.
       * @example "2018-06-22T04:24:00Z"
       * Format: "date-time".
       */
      createdDateTime?: string;
      /**
       * The time when the work instruction has most recently changed.
       * @example "2018-06-22T04:24:00Z"
       * Format: "date-time".
       */
      modifiedDateTime?: string;
    }
  | Record<string, any>;
