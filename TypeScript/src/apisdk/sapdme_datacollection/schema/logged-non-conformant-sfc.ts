/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Operation } from './operation';
/**
 * Representation of the 'LoggedNonConformantSfc' schema.
 */
export type LoggedNonConformantSfc =
  | {
      /**
       * The disposition type.
       */
      dispositionType?:
        | 'COMPLETE_PENDING'
        | 'DONE'
        | 'DYNAMIC_ROUTING'
        | 'NO_DISPOSITION'
        | 'PARTIAL_COMPLETE'
        | 'QUEUE'
        | 'RETURN'
        | 'SCRAP'
        | 'TRANSFER';
      operation?: Operation;
      /**
       * The SFC.
       */
      sfc?: string;
    }
  | Record<string, any>;
