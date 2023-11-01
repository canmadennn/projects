/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { DispositionSelection } from './disposition-selection';
/**
 * The request for dispositioning nonconformant SFCs.
 */
export type SfcDispositionRequest =
  | {
      /**
       * The date and time for the SFC disposition.
       * @example "2021-02-11T16:07:35.256Z"
       */
      dateTime: string;
      dispositionSelection?: DispositionSelection;
      /**
       * The plant where the nonconformant SFCs are dispositioned.
       */
      plant: string;
      /**
       * The resource where the nonconformant SFCs are dispositioned.
       */
      resource?: string;
      /**
       * The list of SFCs that are nonconformant and need dispositioning.
       */
      sfcs: string[];
      /**
       * The work center where the nonconformant SFCs are dispositioned.
       */
      workCenter?: string;
      /**
       * Indicates whether auto split must be performed when disposition is done for part of the SFC.
       */
      performAutoSplit?: boolean;
    }
  | Record<string, any>;
