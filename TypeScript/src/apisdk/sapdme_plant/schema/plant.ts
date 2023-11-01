/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Plant
 */
export type Plant =
  | {
      /**
       * The client for the integration with SAP Digital Manufacturing for insights.
       */
      client?: string;
      /**
       * The date and time (in UTC) when the plant was created.
       * @example "2021-04-08T07:00:05.000Z"
       * Format: "date-time".
       */
      createdOn?: string;
      /**
       * The plant description.
       */
      description?: string;
      /**
       * The ECC Logical System for EWM Integration.
       */
      eccLogicalSystem?: string;
      /**
       * The ERP destination.
       */
      erpDestination?: string;
      /**
       * The ERP plant language.
       */
      erpLanguage?: string;
      /**
       * The plant time zone for ERP system.
       */
      erpTimeZone?: string;
      /**
       * The EWM destination.
       */
      ewmDestination?: string;
      /**
       * The EWM program ID.
       */
      ewmProgramId?: string;
      /**
       * Indicates if the FSM scenario zero is enabled.
       */
      fsmScenarioZero?: boolean;
      /**
       * Discrete or process industry terminology is applied to this plant.
       */
      industryType?: 'DISCRETE' | 'PROCESS';
      /**
       * The integration is enabled with SAP S/4HANA or SAP S/4HANA Cloud.
       */
      integrationMode?: 'S4HANA_CLOUD' | 'S4HANA_OP_W_CPI';
      /**
       * Indicates that the plant is local or remote.
       */
      isLocal?: boolean;
      /**
       * Indicates that the material version update logic is enabled for this plant.
       */
      materialUpversion?: boolean;
      /**
       * The ME system for the integration with SAP Digital Manufacturing for insights.
       */
      meSystem?: string;
      /**
       * The MII system for the integration with SAP Digital Manufacturing for insights.
       */
      miiSystem?: string;
      /**
       * The date and time (in UTC) when the the plant was updated.
       * @example "2021-04-08T07:00:05.000Z"
       * Format: "date-time".
       */
      modifiedOn?: string;
      /**
       * The plant name.
       */
      plant?: string;
      /**
       * The time zone for the plant.
       */
      timeZone?: string;
    }
  | Record<string, any>;
