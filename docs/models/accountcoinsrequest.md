# AccountCoinsRequest

AccountCoinsRequest is utilized to make a request on the /account/coins endpoint.

## Example Usage

```typescript
import { AccountCoinsRequest } from "icpmcp";

let value: AccountCoinsRequest = {
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
  includeMempool: true,
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

| Field                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `networkIdentifier`                                                                                                                                                                                                                                         | [models.NetworkIdentifier](../models/networkidentifier.md)                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                          | The network_identifier specifies which network a particular object is associated with.                                                                                                                                                                      |
| `accountIdentifier`                                                                                                                                                                                                                                         | [models.AccountIdentifier](../models/accountidentifier.md)                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                          | The account_identifier uniquely identifies an account within a network. All fields in the account_identifier are utilized to determine this uniqueness (including the metadata field, if populated).                                                        |
| `includeMempool`                                                                                                                                                                                                                                            | *boolean*                                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                          | Include state from the mempool when looking up an account's unspent coins. Note, using this functionality breaks any guarantee of idempotency.                                                                                                              |
| `currencies`                                                                                                                                                                                                                                                | [models.Currency](../models/currency.md)[]                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                          | In some cases, the caller may not want to retrieve coins for all currencies for an AccountIdentifier. If the currencies field is populated, only coins for the specified currencies will be returned. If not populated, all unspent coins will be returned. |