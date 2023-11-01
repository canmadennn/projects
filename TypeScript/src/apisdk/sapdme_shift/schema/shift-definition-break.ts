/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BreakTypeId } from './break-type-id';
/**
 * The shift definition break.
 */
export type ShiftDefinitionBreak =
  | {
      /**
       * The start time when the break begins.
       * Pattern: "^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$|^(?:2[0-3]|[01][0-9]):[0-5][0-9]$".
       */
      beginTime: string;
      breakType: BreakTypeId;
      /**
       * The start time when the break ends.
       * Pattern: "^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$|^(?:2[0-3]|[01][0-9]):[0-5][0-9]$".
       */
      endTime: string;
    }
  | Record<string, any>;
