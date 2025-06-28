# Construction
(*construction*)

## Overview

### Available Operations

* [constructionDerive](#constructionderive) - Derive an AccountIdentifier from a PublicKey
* [constructionPreprocess](#constructionpreprocess) - Create a Request to Fetch Metadata
* [constructionMetadata](#constructionmetadata) - Get Metadata for Transaction Construction
* [constructionPayloads](#constructionpayloads) - Generate an Unsigned Transaction and Signing Payloads
* [constructionCombine](#constructioncombine) - Create Network Transaction from Signatures
* [constructionParse](#constructionparse) - Parse a Transaction
* [constructionHash](#constructionhash) - Get the Hash of a Signed Transaction
* [constructionSubmit](#constructionsubmit) - Submit a Signed Transaction

## constructionDerive

Derive returns the AccountIdentifier associated with a public key. Blockchains that require an on-chain action to create an account should not implement this method.

### Example Usage

```typescript
import { Icpmcp } from "icpmcp-rosetta-api";

const icpmcp = new Icpmcp({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await icpmcp.construction.constructionDerive({
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
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IcpmcpCore } from "icpmcp/core.js";
import { constructionConstructionDerive } from "icpmcp/funcs/constructionConstructionDerive.js";

// Use `IcpmcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const icpmcp = new IcpmcpCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await constructionConstructionDerive(icpmcp, {
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
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("constructionConstructionDerive failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ConstructionDeriveRequest](../../models/constructionderiverequest.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ConstructionDeriveResponse](../../models/constructionderiveresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorT             | 500                       | application/json          |
| errors.IcpmcpDefaultError | 4XX, 5XX                  | \*/\*                     |

## constructionPreprocess

Preprocess is called prior to `/construction/payloads` to construct a request for any metadata that is needed for transaction construction given (i.e. account nonce). The `options` object returned from this endpoint will be sent to the `/construction/metadata` endpoint UNMODIFIED by the caller (in an offline execution environment). If your Construction API implementation has configuration options, they MUST be specified in the `/construction/preprocess` request (in the `metadata` field).

### Example Usage

```typescript
import { Icpmcp } from "icpmcp-rosetta-api";

const icpmcp = new Icpmcp({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await icpmcp.construction.constructionPreprocess({
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
            identifier: "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f:1",
          },
          coinAction: "coin_created",
        },
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
import { constructionConstructionPreprocess } from "icpmcp/funcs/constructionConstructionPreprocess.js";

// Use `IcpmcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const icpmcp = new IcpmcpCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await constructionConstructionPreprocess(icpmcp, {
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
            identifier: "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f:1",
          },
          coinAction: "coin_created",
        },
        metadata: {},
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("constructionConstructionPreprocess failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ConstructionPreprocessRequest](../../models/constructionpreprocessrequest.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ConstructionPreprocessResponse](../../models/constructionpreprocessresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorT             | 500                       | application/json          |
| errors.IcpmcpDefaultError | 4XX, 5XX                  | \*/\*                     |

## constructionMetadata

Get any information required to construct a transaction for a specific network. Metadata returned here could be a recent hash to use, an account sequence number, or even arbitrary chain state. The request used when calling this endpoint is created by calling `/construction/preprocess` in an offline environment. You should NEVER assume that the request sent to this endpoint will be created by the caller or populated with any custom parameters. This must occur in `/construction/preprocess`. It is important to clarify that this endpoint should not pre-construct any transactions for the client (this should happen in `/construction/payloads`). This endpoint is left purposely unstructured because of the wide scope of metadata that could be required.

### Example Usage

```typescript
import { Icpmcp } from "icpmcp-rosetta-api";

const icpmcp = new Icpmcp({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await icpmcp.construction.constructionMetadata({
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
import { constructionConstructionMetadata } from "icpmcp/funcs/constructionConstructionMetadata.js";

// Use `IcpmcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const icpmcp = new IcpmcpCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await constructionConstructionMetadata(icpmcp, {
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
    console.log("constructionConstructionMetadata failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ConstructionMetadataRequest](../../models/constructionmetadatarequest.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ConstructionMetadataResponse](../../models/constructionmetadataresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorT             | 500                       | application/json          |
| errors.IcpmcpDefaultError | 4XX, 5XX                  | \*/\*                     |

## constructionPayloads

Payloads is called with an array of operations and the response from `/construction/metadata`. It returns an unsigned transaction blob and a collection of payloads that must be signed by particular AccountIdentifiers using a certain SignatureType. The array of operations provided in transaction construction often times can not specify all "effects" of a transaction (consider invoked transactions in Ethereum). However, they can deterministically specify the "intent" of the transaction, which is sufficient for construction. For this reason, parsing the corresponding transaction in the Data API (when it lands on chain) will contain a superset of whatever operations were provided during construction.

### Example Usage

```typescript
import { Icpmcp } from "icpmcp-rosetta-api";

const icpmcp = new Icpmcp({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await icpmcp.construction.constructionPayloads({
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
            identifier: "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f:1",
          },
          coinAction: "coin_spent",
        },
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
import { constructionConstructionPayloads } from "icpmcp/funcs/constructionConstructionPayloads.js";

// Use `IcpmcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const icpmcp = new IcpmcpCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await constructionConstructionPayloads(icpmcp, {
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
            identifier: "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f:1",
          },
          coinAction: "coin_spent",
        },
        metadata: {},
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("constructionConstructionPayloads failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ConstructionPayloadsRequest](../../models/constructionpayloadsrequest.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ConstructionPayloadsResponse](../../models/constructionpayloadsresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorT             | 500                       | application/json          |
| errors.IcpmcpDefaultError | 4XX, 5XX                  | \*/\*                     |

## constructionCombine

Combine creates a network-specific transaction from an unsigned transaction and an array of provided signatures. The signed transaction returned from this method will be sent to the `/construction/submit` endpoint by the caller.

### Example Usage

```typescript
import { Icpmcp } from "icpmcp-rosetta-api";

const icpmcp = new Icpmcp({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await icpmcp.construction.constructionCombine({
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    unsignedTransaction: "<value>",
    signatures: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IcpmcpCore } from "icpmcp/core.js";
import { constructionConstructionCombine } from "icpmcp/funcs/constructionConstructionCombine.js";

// Use `IcpmcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const icpmcp = new IcpmcpCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await constructionConstructionCombine(icpmcp, {
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    unsignedTransaction: "<value>",
    signatures: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("constructionConstructionCombine failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ConstructionCombineRequest](../../models/constructioncombinerequest.md)                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ConstructionCombineResponse](../../models/constructioncombineresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorT             | 500                       | application/json          |
| errors.IcpmcpDefaultError | 4XX, 5XX                  | \*/\*                     |

## constructionParse

Parse is called on both unsigned and signed transactions to understand the intent of the formulated transaction. This is run as a sanity check before signing (after `/construction/payloads`) and before broadcast (after `/construction/combine`). 

### Example Usage

```typescript
import { Icpmcp } from "icpmcp-rosetta-api";

const icpmcp = new Icpmcp({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await icpmcp.construction.constructionParse({
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
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IcpmcpCore } from "icpmcp/core.js";
import { constructionConstructionParse } from "icpmcp/funcs/constructionConstructionParse.js";

// Use `IcpmcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const icpmcp = new IcpmcpCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await constructionConstructionParse(icpmcp, {
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
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("constructionConstructionParse failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ConstructionParseRequest](../../models/constructionparserequest.md)                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ConstructionParseResponse](../../models/constructionparseresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorT             | 500                       | application/json          |
| errors.IcpmcpDefaultError | 4XX, 5XX                  | \*/\*                     |

## constructionHash

TransactionHash returns the network-specific transaction hash for a signed transaction.

### Example Usage

```typescript
import { Icpmcp } from "icpmcp-rosetta-api";

const icpmcp = new Icpmcp({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await icpmcp.construction.constructionHash({
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    signedTransaction: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IcpmcpCore } from "icpmcp/core.js";
import { constructionConstructionHash } from "icpmcp/funcs/constructionConstructionHash.js";

// Use `IcpmcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const icpmcp = new IcpmcpCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await constructionConstructionHash(icpmcp, {
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    signedTransaction: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("constructionConstructionHash failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ConstructionHashRequest](../../models/constructionhashrequest.md)                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TransactionIdentifierResponse](../../models/transactionidentifierresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorT             | 500                       | application/json          |
| errors.IcpmcpDefaultError | 4XX, 5XX                  | \*/\*                     |

## constructionSubmit

Submit a pre-signed transaction to the node. This call should not block on the transaction being included in a block. Rather, it should return immediately with an indication of whether or not the transaction was included in the mempool. The transaction submission response should only return a 200 status if the submitted transaction could be included in the mempool. Otherwise, it should return an error.

### Example Usage

```typescript
import { Icpmcp } from "icpmcp-rosetta-api";

const icpmcp = new Icpmcp({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await icpmcp.construction.constructionSubmit({
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    signedTransaction: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IcpmcpCore } from "icpmcp/core.js";
import { constructionConstructionSubmit } from "icpmcp/funcs/constructionConstructionSubmit.js";

// Use `IcpmcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const icpmcp = new IcpmcpCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await constructionConstructionSubmit(icpmcp, {
    networkIdentifier: {
      blockchain: "bitcoin",
      network: "mainnet",
      subNetworkIdentifier: {
        network: "shard 1",
        metadata: {},
      },
    },
    signedTransaction: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("constructionConstructionSubmit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ConstructionSubmitRequest](../../models/constructionsubmitrequest.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TransactionIdentifierResponse](../../models/transactionidentifierresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorT             | 500                       | application/json          |
| errors.IcpmcpDefaultError | 4XX, 5XX                  | \*/\*                     |