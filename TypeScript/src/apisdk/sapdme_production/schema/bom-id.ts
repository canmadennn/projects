/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'BomId' schema.
 */
export type BomId =
  | {
      /**
       * The name of the new Bill of Materials.
       */
      bom: string;
      /**
       * The type of the new Bill of Materials.
       */
      bomType: 'USERBOM' | 'SHOPORDERBOM' | 'SFCBOM';
      /**
       * The version of the new Bill of Materials.
       */
      version: string;
    }
  | Record<string, any>;
