/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { SfcNonconformances } from './sfc-nonconformances';
/**
 * The response for the logged nonconformances.
 */
export type NonConformanceLogResponse =
  | {
      /**
       * The list of logged nonconformance incidents for SFCs.
       */
      ids?: SfcNonconformances[];
    }
  | Record<string, any>;
