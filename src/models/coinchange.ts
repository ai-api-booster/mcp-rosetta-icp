/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import {
  CoinAction,
  CoinAction$inboundSchema,
  CoinAction$outboundSchema,
} from "./coinaction.js";
import {
  CoinIdentifier,
  CoinIdentifier$inboundSchema,
  CoinIdentifier$Outbound,
  CoinIdentifier$outboundSchema,
} from "./coinidentifier.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

/**
 * CoinChange is used to represent a change in state of a some coin identified by a coin_identifier. This object is part of the Operation model and must be populated for UTXO-based blockchains. Coincidentally, this abstraction of UTXOs allows for supporting both account-based transfers and UTXO-based transfers on the same blockchain (when a transfer is account-based, don't populate this model).
 */
export type CoinChange = {
  /**
   * CoinIdentifier uniquely identifies a Coin.
   */
  coinIdentifier: CoinIdentifier;
  /**
   * CoinActions are different state changes that a Coin can undergo. When a Coin is created, it is coin_created. When a Coin is spent, it is coin_spent. It is assumed that a single Coin cannot be created or spent more than once.
   */
  coinAction: CoinAction;
};

/** @internal */
export const CoinChange$inboundSchema: z.ZodType<
  CoinChange,
  z.ZodTypeDef,
  unknown
> = z.object({
  coin_identifier: CoinIdentifier$inboundSchema,
  coin_action: CoinAction$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "coin_identifier": "coinIdentifier",
    "coin_action": "coinAction",
  });
});

/** @internal */
export type CoinChange$Outbound = {
  coin_identifier: CoinIdentifier$Outbound;
  coin_action: string;
};

/** @internal */
export const CoinChange$outboundSchema: z.ZodType<
  CoinChange$Outbound,
  z.ZodTypeDef,
  CoinChange
> = z.object({
  coinIdentifier: CoinIdentifier$outboundSchema,
  coinAction: CoinAction$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    coinIdentifier: "coin_identifier",
    coinAction: "coin_action",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CoinChange$ {
  /** @deprecated use `CoinChange$inboundSchema` instead. */
  export const inboundSchema = CoinChange$inboundSchema;
  /** @deprecated use `CoinChange$outboundSchema` instead. */
  export const outboundSchema = CoinChange$outboundSchema;
  /** @deprecated use `CoinChange$Outbound` instead. */
  export type Outbound = CoinChange$Outbound;
}

export function coinChangeToJSON(coinChange: CoinChange): string {
  return JSON.stringify(CoinChange$outboundSchema.parse(coinChange));
}

export function coinChangeFromJSON(
  jsonString: string,
): SafeParseResult<CoinChange, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CoinChange$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CoinChange' from JSON`,
  );
}
