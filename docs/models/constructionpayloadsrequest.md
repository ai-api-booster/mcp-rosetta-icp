# ConstructionPayloadsRequest

ConstructionPayloadsRequest is the request to `/construction/payloads`. It contains the network, a slice of operations, and arbitrary metadata that was returned by the call to `/construction/metadata`. Optionally, the request can also include an array of PublicKeys associated with the AccountIdentifiers returned in ConstructionPreprocessResponse.

## Example Usage

```typescript
import { ConstructionPayloadsRequest } from "icpmcp-rosetta-api";

let value: ConstructionPayloadsRequest = {
  networkIdentifier: {
    blockchain: "bitcoin",
    network: "mainnet",
    subNetworkIdentifier: {
      network: "shard 1",
      metadata: {},
    },
  },
  operations: [],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `networkIdentifier`                                                                            | [models.NetworkIdentifier](../models/networkidentifier.md)                                     | :heavy_check_mark:                                                                             | The network_identifier specifies which network a particular object is associated with.         |
| `operations`                                                                                   | [models.Operation](../models/operation.md)[]                                                   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | [models.ConstructionPayloadsRequestMetadata](../models/constructionpayloadsrequestmetadata.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `publicKeys`                                                                                   | [models.PublicKey](../models/publickey.md)[]                                                   | :heavy_minus_sign:                                                                             | N/A                                                                                            |