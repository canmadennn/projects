/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { DispositionOption } from './disposition-option';
/**
 * SFC disposition options.
 */
export type DispositionOptions =
  | {
      /**
       * The list of SFC disposition options.
       */
      options?: DispositionOption[];
      /**
       * The type of the SFC disposition: GROUP_MEMBER - Member of disposition group, ROUTING - Routing where an SFC could be dispositioned, ROUTING_STEP - Routing Step where an SFC could be placed, NEXT_STEP - possible next steps for an SFC, RETURN_STEP - possible return steps for an SFC, FUTURE_STEP - possible future steps an for SFC, SCRAP - SFC scrap.
       */
      type?:
        | 'GROUP_MEMBER'
        | 'ROUTING'
        | 'ROUTING_STEP'
        | 'NEXT_STEP'
        | 'RETURN_STEP'
        | 'FUTURE_STEP'
        | 'SCRAP';
    }
  | Record<string, any>;
