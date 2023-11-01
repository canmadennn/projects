/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { MultiLanguageDescription } from './multi-language-description';
import type { TimeElementId } from './time-element-id';
/**
 * Representation of the 'ResourceReasonCodeResponse' schema.
 */
export type ResourceReasonCodeResponse =
  | {
      /**
       * List of resource reason code translations.
       */
      resourceReasonCodeTranslationList?: MultiLanguageDescription[];
      /**
       * The description of resource reason code.
       */
      description?: string;
      /**
       * Sequence of resource reason code.
       */
      sequence?: number;
      /**
       * Reason Code For Variance.
       */
      reasonForVariance?: string;
      /**
       * The status of this resource reason code.
       */
      status?: 'ENABLED' | 'DISABLED';
      timeElement?: TimeElementId;
      /**
       * Level 1 name of resource reason code hierarchy.
       */
      reasonCode1?: string;
      /**
       * Level 2 name of resource reason code hierarchy.
       */
      reasonCode2?: string;
      /**
       * Level 3 name of resource reason code hierarchy.
       */
      reasonCode3?: string;
      /**
       * Level 4 name of resource reason code hierarchy.
       */
      reasonCode4?: string;
      /**
       * Level 5 name of resource reason code hierarchy.
       */
      reasonCode5?: string;
      /**
       * Level 6 name of resource reason code hierarchy.
       */
      reasonCode6?: string;
      /**
       * Level 7 name of resource reason code hierarchy.
       */
      reasonCode7?: string;
      /**
       * Level 8 name of resource reason code hierarchy.
       */
      reasonCode8?: string;
      /**
       * Level 9 name of resource reason code hierarchy.
       */
      reasonCode9?: string;
      /**
       * Level 10 name of resource reason code hierarchy.
       */
      reasonCode10?: string;
    }
  | Record<string, any>;
