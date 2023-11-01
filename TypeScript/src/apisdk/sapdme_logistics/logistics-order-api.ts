/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  UpdateLogisticsOrderStatusApiRequest,
  ConfirmLogisticsOrderApiRequest,
  CreateLogisticsOrderCommand,
  LogisticsOrderResponse,
  ReadLogisticsOrderResponse,
  HoldLogisticsOrderApiRequest,
  CancelLogisticsOrderApiRequest,
  SfcCompleteRequest,
  UpdateLogisticsOrderApiRequest,
  UpdateLogisticsOrderResponse
} from './schema';
/**
 * Representation of the 'LogisticsOrderApi'.
 * This API is part of the 'sapdme_logistics' service.
 */
export const LogisticsOrderApi = {
  /**
   * With this endpoint call, a logistics order is updated to Accepted status or Ready for Pick status by specific processor or an integrated third-party transport system. Only this processor or relative third-party transport system can further execute the logistics order. Depending on the reference type of the logistics order, the status is updated as follows: If the reference type is packing unit, the status is updated to Accepted when the packing unit is still open, and to Ready for Pick when the packing unit is already closed. If the reference type is shop floor control (SFC), the status is updated to Ready for Pick when the operation is completed on the source location, and to Accepted status in all the other cases. If the reference type is carrier, the status is updated to Ready for Pick.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  acceptLogisticsOrderUsingPost1: (
    body: UpdateLogisticsOrderStatusApiRequest
  ) =>
    new OpenApiRequestBuilder<any>('post', '/execution/acceptLogisticsOrder', {
      body
    }),
  /**
   * With this endpoint call, a logistics order is updated to Confirmed status by specific processor or integrated third-party transport systems.Confirmed status means the order has finished the transportation from the source location to the destination location, and thus it's done.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  confirmLogisticsOrderUsingPost1: (body: ConfirmLogisticsOrderApiRequest) =>
    new OpenApiRequestBuilder<any>('post', '/execution/confirmLogisticsOrder', {
      body
    }),
  /**
   * With this endpoint call, a logistics order is updated to Picked status by specific processor or integrated third-party transport systems. Picked status means the processor has already picked items for the logistics order. Only this processor can further execute the logistics order.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  pickLogisticsOrderUsingPost1: (body: UpdateLogisticsOrderStatusApiRequest) =>
    new OpenApiRequestBuilder<any>('post', '/execution/pickLogisticsOrder', {
      body
    }),
  /**
   * Creates a logistics order for a given shop floor control (SFC), packing unit or carrier.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createLogisticsOrderUsingPost1: (body: CreateLogisticsOrderCommand) =>
    new OpenApiRequestBuilder<LogisticsOrderResponse>(
      'post',
      '/createLogisticsOrder',
      {
        body
      }
    ),
  /**
   * Retrieves logistics orders by order number, reference number or carrier ID.
   * @param queryParameters - Object containing the following keys: plant, id, keyType, referenceType, status.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  readLogisticsOrderUsingPost1: (queryParameters: {
    plant: string;
    id: string;
    keyType: 'ORDER_NUMBER' | 'REFERENCE_NUMBER' | 'CARRIER_ID';
    referenceType?: 'SFC' | 'PACKING_UNIT' | 'CARRIER';
    status?:
      | 'NEW'
      | 'OPEN'
      | 'ACCEPTED'
      | 'READY_FOR_PICK'
      | 'REJECTED'
      | 'PICKED'
      | 'CONFIRMED'
      | 'CANCELLED'
      | 'HOLD';
  }) =>
    new OpenApiRequestBuilder<ReadLogisticsOrderResponse>(
      'get',
      '/readLogisticsOrder',
      {
        queryParameters
      }
    ),
  /**
   * With this endpoint call, a logistics order is updated to Hold status by a specific supervisor. Hold status means the logistics order is no longer active.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  holdLogisticsOrderUsingPost1: (body: HoldLogisticsOrderApiRequest) =>
    new OpenApiRequestBuilder<any>('post', '/holdLogisticsOrder', {
      body
    }),
  /**
   * With this endpoint call, a logistics order is updated to Canceled status by a specific supervisor. Canceled status means the logistics order is no longer active.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  cancelLogisticsOrderUsingPost1: (body: CancelLogisticsOrderApiRequest) =>
    new OpenApiRequestBuilder<any>('post', '/cancelLogisticsOrder', {
      body
    }),
  /**
   * With this endpoint call, a logistics order is updated to Rejected status by a specific processor or an integrated third-party transport system. If it’s rejected by a specific processor, it is now available to be accepted again by another operator. If it’s rejected by a third-party transport system, it can be accepted again only after the supervisor has done some necessary adjustments to the logistics order.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  rejectLogisticsOrderUsingPost1: (
    body: UpdateLogisticsOrderStatusApiRequest
  ) =>
    new OpenApiRequestBuilder<any>('post', '/execution/rejectLogisticsOrder', {
      body
    }),
  /**
   * Sends a Kafka message when a given operation is completed for the shop floor control (SFC) at a specified resource or work center.This API endpoint triggers Kafka message to announce SFC complete event. Respective consumer service catches this event and updates logistics order with New status to Open status, or Accepted status to Ready for Pick status.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  sfcCompletePost1: (body: SfcCompleteRequest) =>
    new OpenApiRequestBuilder<any>(
      'post',
      '/sfcComplete/sendLogisticsOrderEvent',
      {
        body
      }
    ),
  /**
   * Updates the destination and the delivery due date time of a logistics order. You can only update the logistics order that has NEW, OPEN, HOLD or REJECTED status.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateLogisticsOrderUsingPatch1: (body: UpdateLogisticsOrderApiRequest) =>
    new OpenApiRequestBuilder<UpdateLogisticsOrderResponse>(
      'patch',
      '/execution/updateLogisticsOrder',
      {
        body
      }
    )
};
