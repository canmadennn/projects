/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { AlternateUnitOfMeasure } from './alternate-unit-of-measure';
import type { DataType } from './data-type';
import type { BOM } from './bom';
import type { CustomValue } from './custom-value';
import type { LocalizedDescriptionApiModel } from './localized-description-api-model';
import type { MaterialGroupMemberApiModel } from './material-group-member-api-model';
import type { Routing } from './routing';
/**
 * Representation of the 'MaterialResponse' schema.
 */
export type MaterialResponse =
  | {
      /**
       * Alternate Unit of Measures of the material.
       */
      alternateUnitsOfMeasure?: AlternateUnitOfMeasure[];
      assemblyDataType?: DataType;
      bom?: BOM;
      /**
       * Custom values of the material.
       */
      customValues?: CustomValue[];
      /**
       * The localized description of the material.
       */
      description?: string;
      /**
       * Localized descriptions
       */
      descriptions?: LocalizedDescriptionApiModel[];
      /**
       * If enabled, the autocomplete of operation activity is done.
       */
      isAutocompleteAndConfirmed?: boolean;
      /**
       * If true, the version of the material is current.
       */
      isCurrentVersion?: boolean;
      /**
       * The lot size of the material.
       */
      lotSize?: number;
      /**
       * The name of the material.
       */
      material?: string;
      /**
       * Assigned Material Groups.
       */
      materialGroups?: MaterialGroupMemberApiModel[];
      /**
       * The type of the material.
       */
      materialType?:
        | 'CONFIGURABLE'
        | 'FINISHED'
        | 'GENERAL'
        | 'NONSTOCK'
        | 'NONVALUATED'
        | 'OPERATING_SUPPLIES'
        | 'PACKAGING'
        | 'RETURNABLE_PACKAGING'
        | 'SEMIFINISHED_PRODUCT'
        | 'SERVICE'
        | 'SERVICES'
        | 'SOFTWARE_NONVALUATED'
        | 'SPARE_PARTS'
        | 'TRADING_GOODS'
        | 'RAW'
        | 'CUSTOM'
        | 'PIPELINE'
        | 'PRT';
      /**
       * This is the amount of time the material can be stored before it must be used.
       */
      maxShelfLife?: number;
      /**
       * The unit of measure used for the maxShelfLife property.
       */
      maxShelfLifeUnits?: 'DAYS' | 'HOURS' | 'MONTHS' | 'WEEKS' | 'YEARS';
      /**
       * Person or a team responsible for ensuring the availability of materials.
       */
      mrpController?: string;
      /**
       * System from where the material was created.
       */
      origin?: 'ERP' | 'ME';
      /**
       * Data represented by a four-character abbreviation. This data determines the conditions and business activities needed for the assignment of serial numbers to single product units.
       */
      serialNumberProfile?: string;
      /**
       * The plant the material belongs to.
       */
      plant?: string;
      /**
       * The procurement type of the material.
       */
      procurementType?: 'MANUFACTURED' | 'PURCHASED' | 'MANUFACTURED_PURCHASED';
      /**
       * Production storage location.
       */
      productionStorageLocation?: string;
      /**
       * Putaway storage location.
       */
      putawayStorageLocation?: string;
      removalComponentDataType?: DataType;
      routing?: Routing;
      /**
       * The status of the material.
       */
      status?:
        | 'NEW'
        | 'RELEASABLE'
        | 'FROZEN'
        | 'OBSOLETE'
        | 'HOLD'
        | 'HOLD_YIELD_RATE'
        | 'HOLD_CONSEC_NC'
        | 'HOLD_SPC_VIOL'
        | 'HOLD_SPC_WARN';
      /**
       * The unit of measure of the material.
       */
      unitOfMeasure?: string;
      /**
       * The version of the material.
       */
      version?: string;
      /**
       * The time when the material was created.
       * @example "2018-06-22T04:24:00Z"
       * Format: "date-time".
       */
      createdDateTime?: string;
      /**
       * The time when the material has most recently changed.
       * @example "2018-06-22T04:24:00Z"
       * Format: "date-time".
       */
      modifiedDateTime?: string;
    }
  | Record<string, any>;
