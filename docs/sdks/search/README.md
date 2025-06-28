# Search
(*search*)

## Overview

### Available Operations

* [searchTransactions](#searchtransactions) - [INDEXER] Search for Transactions

## searchTransactions

`/search/transactions` allows the caller to search for transactions that meet certain conditions. Some conditions include matching a transaction hash, containing an operation with a certain status, or containing an operation that affects a certain account. `/search/transactions` is considered an "indexer" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta "indexer" MUST support this endpoint.

### Example Usage

```typescript
import { Icpmcp } from "icpmcp-rosetta-api";

const icpmcp = new Icpmcp({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await icpmcp.search.searchTransactions({
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    maxBlock: 5,
    offset: 5,
    limit: 5,
    transactionIdentifier: {
      hash: "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f",
    },
    accountIdentifier: {
      address: "0x3a065000ab4183c6bf581dc1e55a605455fc6d61",
      subAccount: {
        address: "0x6b175474e89094c44da98b954eedeac495271d0f",
      },
    },
    coinIdentifier: {
      identifier: "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f:1",
    },
    currency: {
      symbol: "BTC",
      decimals: 8,
      metadata: {},
    },
    status: "reverted",
    type: "transfer",
    address: "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IcpmcpCore } from "icpmcp/core.js";
import { searchSearchTransactions } from "icpmcp/funcs/searchSearchTransactions.js";

// Use `IcpmcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const icpmcp = new IcpmcpCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await searchSearchTransactions(icpmcp, {
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    maxBlock: 5,
    offset: 5,
    limit: 5,
    transactionIdentifier: {
      hash: "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f",
    },
    accountIdentifier: {
      address: "0x3a065000ab4183c6bf581dc1e55a605455fc6d61",
      subAccount: {
        address: "0x6b175474e89094c44da98b954eedeac495271d0f",
      },
    },
    coinIdentifier: {
      identifier: "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f:1",
    },
    currency: {
      symbol: "BTC",
      decimals: 8,
      metadata: {},
    },
    status: "reverted",
    type: "transfer",
    address: "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchSearchTransactions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.SearchTransactionsRequest](../../models/searchtransactionsrequest.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SearchTransactionsResponse](../../models/searchtransactionsresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorT             | 500                       | application/json          |
| errors.IcpmcpDefaultError | 4XX, 5XX                  | \*/\*                     |