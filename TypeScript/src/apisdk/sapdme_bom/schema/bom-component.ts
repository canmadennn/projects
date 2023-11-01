/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { AlternateComponent } from './alternate-component';
import type { DataType } from './data-type';
import type { Operation } from './operation';
import type { CustomValue } from './custom-value';
import type { Material } from './material';
import type { BomRefDes } from './bom-ref-des';
/**
 * Representation of the 'BomComponent' schema.
 */
export type BomComponent =
  | {
      /**
       * The alternative BOM components.
       */
      alternates?: AlternateComponent[];
      assemblyDataType?: DataType;
      assemblyOperationActivity?: Operation;
      /**
       * If true, the material consumption will be automatically posted.
       */
      backflushEnabled?: boolean;
      /**
       * Percentage of scrap of the BOM component that occurs during production.
       */
      componentScrap?: number;
      /**
       * BOM component type.
       */
      componentType?:
        | 'NORMAL'
        | 'TEST'
        | 'PHANTOM'
        | 'CO_PRODUCT'
        | 'BY_PRODUCT';
      /**
       * BOM component custom data.
       */
      customValues?: CustomValue[];
      material?: Material;
      /**
       * The number of pieces in the BOM.
       */
      quantity?: number;
      /**
       * The order the component is displayed in relation to other BOM components.
       * Format: "int64".
       */
      sequence?: number;
      /**
       * The order the component as displayed in ERP.
       * Format: "int64".
       */
      erpSequence?: number;
      /**
       * BOM component storage location.
       */
      storageLocation?: string;
      /**
       * BOM component alternative item group.
       */
      alternativeItemGroup?: string;
      /**
       * The lower bound tolerance value.
       */
      toleranceOver?: number;
      /**
       * The upper bound tolerance value.
       */
      toleranceUnder?: number;
      /**
       * BOM component unit of measure.
       */
      unitOfMeasure?: string;
      /**
       * BOM component batch number.
       */
      batchNumber?: string;
      /**
       * BOM component reservation item.
       */
      reservationItemNumber?: string;
      /**
       * BOM component reservation number.
       */
      reservationOrderNumber?: string;
      /**
       * Total quantity of the BOM component.
       */
      totalQuantity?: number;
      /**
       * Warehouse number of the BOM component.
       */
      warehouseNumber?: string;
      refDes?: BomRefDes;
      /**
       * If true, the quantity of this component is not tracked.
       */
      assemblyQuantityAsRequired?: boolean;
      /**
       * If true, then BOM component alternates are used for this component instead of material alternates.
       */
      alternatesEnabled?: boolean;
    }
  | Record<string, any>;
