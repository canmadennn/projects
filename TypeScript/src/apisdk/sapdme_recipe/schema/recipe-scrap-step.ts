/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The recipe scrap phase.
 */
export type RecipeScrapStep =
  | {
      /**
       * The status applied to a scrapped SFC (when the entire SFC quantity is scrapped).
       */
      sfcStatus?:
        | 'ALL'
        | 'NEW'
        | 'ACTIVE'
        | 'HOLD'
        | 'INQUEUE'
        | 'DONE_HOLD'
        | 'RETURNED'
        | 'GOLDEN_UNIT'
        | 'NOTDONE'
        | 'DONE'
        | 'SCRAPPED'
        | 'INVALID'
        | 'DELETED';
      /**
       * Determines whether the option to scrap the parent while leaving the components intact is available.
       */
      scrapParent?: boolean;
    }
  | Record<string, any>;
