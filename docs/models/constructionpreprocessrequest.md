# ConstructionPreprocessRequest

ConstructionPreprocessRequest is passed to the `/construction/preprocess` endpoint so that a Rosetta implementation can determine which metadata it needs to request for construction. Metadata provided in this object should NEVER be a product of live data (i.e. the caller must follow some network-specific data fetching strategy outside of the Construction API to populate required Metadata). If live data is required for construction, it MUST be fetched in the call to `/construction/metadata`.

## Example Usage

```typescript
import { ConstructionPreprocessRequest } from "icpmcp-rosetta-api";

let value: ConstructionPreprocessRequest = {
  networkIdentifier: {
    blockchain: "bitcoin",
    network: "mainnet",
    subNetworkIdentifier: {
      network: "shard 1",
      metadata: {},
    },
  },
  operations: [
    {
      operationIdentifier: {
        index: 5,
        networkIndex: 0,
      },
      relatedOperations: [
        {
          index: 1,
        },
        {
          index: 2,
        },
      ],
      type: "Transfer",
      status: "Reverted",
      account: {
        address: "0x3a065000ab4183c6bf581dc1e55a605455fc6d61",
        subAccount: {
          address: "0x6b175474e89094c44da98b954eedeac495271d0f",
        },
      },
      amount: {
        value: "1238089899992",
        currency: {
          symbol: "BTC",
          decimals: 8,
          metadata: {},
        },
      },
      coinChange: {
        coinIdentifier: {
          identifier:
            "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f:1",
        },
        coinAction: "coin_spent",
      },
      metadata: {},
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `networkIdentifier`                                                                                | [models.NetworkIdentifier](../models/networkidentifier.md)                                         | :heavy_check_mark:                                                                                 | The network_identifier specifies which network a particular object is associated with.             |
| `operations`                                                                                       | [models.Operation](../models/operation.md)[]                                                       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `metadata`                                                                                         | [models.ConstructionPreprocessRequestMetadata](../models/constructionpreprocessrequestmetadata.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |