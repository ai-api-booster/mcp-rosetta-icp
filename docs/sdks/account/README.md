# Account
(*account*)

## Overview

### Available Operations

* [accountBalance](#accountbalance) - Get an Account's Balance
* [accountCoins](#accountcoins) - Get an Account's Unspent Coins

## accountBalance

Get an array of all AccountBalances for an AccountIdentifier and the BlockIdentifier at which the balance lookup was performed. The BlockIdentifier must always be returned because some consumers of account balance data need to know specifically at which block the balance was calculated to compare balances they compute from operations with the balance returned by the node. It is important to note that making a balance request for an account without populating the SubAccountIdentifier should not result in the balance of all possible SubAccountIdentifiers being returned. Rather, it should result in the balance pertaining to no SubAccountIdentifiers being returned (sometimes called the liquid balance). To get all balances associated with an account, it may be necessary to perform multiple balance requests with unique AccountIdentifiers. It is also possible to perform a historical balance lookup (if the server supports it) by passing in an optional BlockIdentifier.

### Example Usage

```typescript
import { Icpmcp } from "icpmcp";

const icpmcp = new Icpmcp({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await icpmcp.account.accountBalance({
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
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IcpmcpCore } from "icpmcp/core.js";
import { accountAccountBalance } from "icpmcp/funcs/accountAccountBalance.js";

// Use `IcpmcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const icpmcp = new IcpmcpCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await accountAccountBalance(icpmcp, {
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
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountAccountBalance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AccountBalanceRequest](../../models/accountbalancerequest.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AccountBalanceResponse](../../models/accountbalanceresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorT             | 500                       | application/json          |
| errors.IcpmcpDefaultError | 4XX, 5XX                  | \*/\*                     |

## accountCoins

Get an array of all unspent coins for an AccountIdentifier and the BlockIdentifier at which the lookup was performed. If your implementation does not support coins (i.e. it is for an account-based blockchain), you do not need to implement this endpoint. If you implementation does support coins (i.e. it is fro a UTXO-based blockchain), you MUST also complete the `/account/balance` endpoint. It is important to note that making a coins request for an account without populating the SubAccountIdentifier should not result in the coins of all possible SubAccountIdentifiers being returned. Rather, it should result in the coins pertaining to no SubAccountIdentifiers being returned. To get all coins associated with an account, it may be necessary to perform multiple coin requests with unique AccountIdentifiers. Optionally, an implementation may choose to support updating an AccountIdentifier's unspent coins based on the contents of the mempool. Note, using this functionality breaks any guarantee of idempotency.

### Example Usage

```typescript
import { Icpmcp } from "icpmcp";

const icpmcp = new Icpmcp({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await icpmcp.account.accountCoins({
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
    includeMempool: false,
    currencies: [
      {
        symbol: "BTC",
        decimals: 8,
        metadata: {},
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IcpmcpCore } from "icpmcp/core.js";
import { accountAccountCoins } from "icpmcp/funcs/accountAccountCoins.js";

// Use `IcpmcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const icpmcp = new IcpmcpCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await accountAccountCoins(icpmcp, {
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
    includeMempool: false,
    currencies: [
      {
        symbol: "BTC",
        decimals: 8,
        metadata: {},
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountAccountCoins failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AccountCoinsRequest](../../models/accountcoinsrequest.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AccountCoinsResponse](../../models/accountcoinsresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorT             | 500                       | application/json          |
| errors.IcpmcpDefaultError | 4XX, 5XX                  | \*/\*                     |