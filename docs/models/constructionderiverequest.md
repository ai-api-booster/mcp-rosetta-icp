# ConstructionDeriveRequest

ConstructionDeriveRequest is passed to the `/construction/derive` endpoint. Network is provided in the request because some blockchains have different address formats for different networks. Metadata is provided in the request because some blockchains allow for multiple address types (i.e. different address for validators vs normal accounts).

## Example Usage

```typescript
import { ConstructionDeriveRequest } from "icpmcp-rosetta-api";

let value: ConstructionDeriveRequest = {
  networkIdentifier: {
    blockchain: "bitcoin",
    network: "mainnet",
    subNetworkIdentifier: {
      network: "shard 1",
      metadata: {},
    },
  },
  publicKey: {
    hexBytes: "<value>",
    curveType: "pallas",
  },
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `networkIdentifier`                                                                                                                                                              | [models.NetworkIdentifier](../models/networkidentifier.md)                                                                                                                       | :heavy_check_mark:                                                                                                                                                               | The network_identifier specifies which network a particular object is associated with.                                                                                           |
| `publicKey`                                                                                                                                                                      | [models.PublicKey](../models/publickey.md)                                                                                                                                       | :heavy_check_mark:                                                                                                                                                               | PublicKey contains a public key byte array for a particular CurveType encoded in hex. Note that there is no PrivateKey struct as this is NEVER the concern of an implementation. |
| `metadata`                                                                                                                                                                       | [models.ConstructionDeriveRequestMetadata](../models/constructionderiverequestmetadata.md)                                                                                       | :heavy_minus_sign:                                                                                                                                                               | N/A                                                                                                                                                                              |