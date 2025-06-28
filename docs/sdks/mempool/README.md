# Mempool
(*mempool*)

## Overview

### Available Operations

* [mempool](#mempool) - Get All Mempool Transactions
* [mempoolTransaction](#mempooltransaction) - Get a Mempool Transaction

## mempool

Get all Transaction Identifiers in the mempool

### Example Usage

```typescript
import { Icpmcp } from "icpmcp-rosetta-api";

const icpmcp = new Icpmcp({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await icpmcp.mempool.mempool({
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IcpmcpCore } from "icpmcp/core.js";
import { mempoolMempool } from "icpmcp/funcs/mempoolMempool.js";

// Use `IcpmcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const icpmcp = new IcpmcpCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await mempoolMempool(icpmcp, {
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mempoolMempool failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.NetworkRequest](../../models/networkrequest.md)                                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MempoolResponse](../../models/mempoolresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorT             | 500                       | application/json          |
| errors.IcpmcpDefaultError | 4XX, 5XX                  | \*/\*                     |

## mempoolTransaction

Get a transaction in the mempool by its Transaction Identifier. This is a separate request than fetching a block transaction (/block/transaction) because some blockchain nodes need to know that a transaction query is for something in the mempool instead of a transaction in a block. Transactions may not be fully parsable until they are in a block (ex: may not be possible to determine the fee to pay before a transaction is executed). On this endpoint, it is ok that returned transactions are only estimates of what may actually be included in a block.

### Example Usage

```typescript
import { Icpmcp } from "icpmcp-rosetta-api";

const icpmcp = new Icpmcp({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await icpmcp.mempool.mempoolTransaction({
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    transactionIdentifier: {
      hash: "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IcpmcpCore } from "icpmcp/core.js";
import { mempoolMempoolTransaction } from "icpmcp/funcs/mempoolMempoolTransaction.js";

// Use `IcpmcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const icpmcp = new IcpmcpCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await mempoolMempoolTransaction(icpmcp, {
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    transactionIdentifier: {
      hash: "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mempoolMempoolTransaction failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.MempoolTransactionRequest](../../models/mempooltransactionrequest.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MempoolTransactionResponse](../../models/mempooltransactionresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorT             | 500                       | application/json          |
| errors.IcpmcpDefaultError | 4XX, 5XX                  | \*/\*                     |