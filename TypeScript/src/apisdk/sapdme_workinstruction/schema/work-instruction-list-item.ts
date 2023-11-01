/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { WorkInstructionElement } from './work-instruction-element';
/**
 * This business object defines the basic work instruction object.
 */
export type WorkInstructionListItem =
  | {
      /**
       * If true, then this is the current revision of the work instruction.
       */
      currentVersion?: boolean;
      /**
       * The description of the work instruction.
       */
      description?: string;
      /**
       * The actual instruction (plain text or HTML).
       */
      instructionData?: string;
      /**
       * The name of the operation activity to which the work instruction is attached.
       */
      operationActivity?: string;
      /**
       * The sequence of the attachment point.
       * Format: "int64".
       */
      sequence?: number;
      /**
       * The status of the work instruction.
       */
      status?: 'NEW' | 'RELEASABLE' | 'OBSOLETE' | 'HOLD';
      /**
       * The step ID to which the work instruction is attached.
       */
      stepId?: string;
      /**
       * List of work instruction element types.
       */
      types?: 'TEXT' | 'FILE' | 'URL' | 'HEADER_TEXT' | 'LOCAL_FILE'[];
      /**
       * The URL that defines where the work instruction data is found.
       */
      url?: string;
      /**
       * The version of the work instruction.
       */
      version?: string;
      /**
       * The name of the work instruction.
       */
      workInstruction?: string;
      /**
       * List of work instruction elements.
       */
      workInstructionElements?: WorkInstructionElement[];
    }
  | Record<string, any>;
