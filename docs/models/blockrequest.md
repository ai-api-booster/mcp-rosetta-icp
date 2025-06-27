# BlockRequest

A BlockRequest is utilized to make a block request on the /block endpoint.

## Example Usage

```typescript
import { BlockRequest } from "icpmcp";

let value: BlockRequest = {
  networkIdentifier: {
    blockchain: "bitcoin",
    network: "mainnet",
    subNetworkIdentifier: {
      network: "shard 1",
      metadata: {},
    },
  },
  blockIdentifier: {
    index: 1123941,
    hash: "0x1f2cc6c5027d2f201a5453ad1119574d2aed23a392654742ac3c78783c071f85",
  },
};
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `networkIdentifier`                                                                                                                                                                                    | [models.NetworkIdentifier](../models/networkidentifier.md)                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                     | The network_identifier specifies which network a particular object is associated with.                                                                                                                 |
| `blockIdentifier`                                                                                                                                                                                      | [models.PartialBlockIdentifier](../models/partialblockidentifier.md)                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                     | When fetching data by BlockIdentifier, it may be possible to only specify the index or hash. If neither property is specified, it is assumed that the client is making a request at the current block. |