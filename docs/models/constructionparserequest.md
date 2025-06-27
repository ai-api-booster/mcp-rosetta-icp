# ConstructionParseRequest

ConstructionParseRequest is the input to the `/construction/parse` endpoint. It allows the caller to parse either an unsigned or signed transaction.

## Example Usage

```typescript
import { ConstructionParseRequest } from "icpmcp";

let value: ConstructionParseRequest = {
  networkIdentifier: {
    blockchain: "bitcoin",
    network: "mainnet",
    subNetworkIdentifier: {
      network: "shard 1",
      metadata: {},
    },
  },
  signed: false,
  transaction: "<value>",
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `networkIdentifier`                                                                                                                                        | [models.NetworkIdentifier](../models/networkidentifier.md)                                                                                                 | :heavy_check_mark:                                                                                                                                         | The network_identifier specifies which network a particular object is associated with.                                                                     |
| `signed`                                                                                                                                                   | *boolean*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                         | Signed is a boolean indicating whether the transaction is signed.                                                                                          |
| `transaction`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | This must be either the unsigned transaction blob returned by `/construction/payloads` or the signed transaction blob returned by `/construction/combine`. |