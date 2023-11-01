/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * BOM
 */
export type BOMId =
  | {
      /**
       * The name of the BOM.
       */
      bom?: string;
      /**
       * The version of the BOM.
       */
      version?: string;
      /**
       * The type of the BOM.
       */
      bomType?: 'USERBOM' | 'SHOPORDERBOM' | 'SFCBOM' | 'CONFIGURABLEBOM';
      /**
       * The plant for which the BOM is defined.
       */
      plant?: string;
    }
  | Record<string, any>;
