# AccountBalanceRequest

An AccountBalanceRequest is utilized to make a balance request on the /account/balance endpoint. If the block_identifier is populated, a historical balance query should be performed.

## Example Usage

```typescript
import { AccountBalanceRequest } from "icpmcp-rosetta-api";

let value: AccountBalanceRequest = {
  networkIdentifier: {
    blockchain: "bitcoin",
    network: "mainnet",
    subNetworkIdentifier: {
      network: "shard 1",
      metadata: {},
    },
  },
  accountIdentifier: {
    address: "0x3a065000ab4183c6bf581dc1e55a605455fc6d61",
    subAccount: {
      address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    },
  },
  blockIdentifier: {
    index: 1123941,
    hash: "0x1f2cc6c5027d2f201a5453ad1119574d2aed23a392654742ac3c78783c071f85",
  },
  currencies: [
    {
      symbol: "BTC",
      decimals: 8,
      metadata: {},
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                                              | Required                                                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `networkIdentifier`                                                                                                                                                                                                                                               | [models.NetworkIdentifier](../models/networkidentifier.md)                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                | The network_identifier specifies which network a particular object is associated with.                                                                                                                                                                            |
| `accountIdentifier`                                                                                                                                                                                                                                               | [models.AccountIdentifier](../models/accountidentifier.md)                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                | The account_identifier uniquely identifies an account within a network. All fields in the account_identifier are utilized to determine this uniqueness (including the metadata field, if populated).                                                              |
| `blockIdentifier`                                                                                                                                                                                                                                                 | [models.PartialBlockIdentifier](../models/partialblockidentifier.md)                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                | When fetching data by BlockIdentifier, it may be possible to only specify the index or hash. If neither property is specified, it is assumed that the client is making a request at the current block.                                                            |
| `currencies`                                                                                                                                                                                                                                                      | [models.Currency](../models/currency.md)[]                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                | In some cases, the caller may not want to retrieve all available balances for an AccountIdentifier. If the currencies field is populated, only balances for the specified currencies will be returned. If not populated, all available balances will be returned. |