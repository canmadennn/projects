/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { CustomValue } from './custom-value';
import type { NonConformanceGroupId } from './non-conformance-group-id';
/**
 * Nonconformance code.
 */
export type NonConformanceCodeV2 =
  | {
      /**
       * The nonconformance code category.
       */
      category?: 'DEFECT' | 'FAILURE' | 'REPAIR';
      /**
       * The nonconformance code value.
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      code: string;
      /**
       * The date and time when the nonconformance code was created.
       */
      createdDateTime?: string;
      /**
       * The nonconformance code custom values.
       */
      customData?: CustomValue[];
      /**
       * The nonconformance code description.
       */
      description?: string;
      /**
       * The nonconformance groups to be assigned.
       */
      groups?: NonConformanceGroupId[];
      /**
       * The date and time when the nonconformance code was updated.
       */
      modifiedDateTime?: string;
      /**
       * The plant where a nonconformance code is defined.
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      plant: string;
      /**
       * The nonconformance code status.
       */
      status?: 'DISABLED' | 'ENABLED';
    }
  | Record<string, any>;
