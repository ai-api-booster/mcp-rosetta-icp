# icpmcp

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *icpmcp* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=icpmcp&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/rarible/protocol). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

Rosetta: Build Once. Integrate Your Blockchain Everywhere.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [icpmcp](#icpmcp)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "icpmcp-rosetta-api": {
      "command": "npx",
      "args": [
        "-y", "--package", "icpmcp-rosetta-api",
        "--",
        "mcp", "start",
        "--server-url", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "icpmcp-rosetta-api": {
      "command": "npx",
      "args": [
        "-y", "--package", "icpmcp-rosetta-api",
        "--",
        "mcp", "start",
        "--server-url", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package icpmcp -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Icpmcp } from "icpmcp-rosetta-api";

const icpmcp = new Icpmcp({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await icpmcp.network.networkList({});

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [account](docs/sdks/account/README.md)

* [accountBalance](docs/sdks/account/README.md#accountbalance) - Get an Account's Balance
* [accountCoins](docs/sdks/account/README.md#accountcoins) - Get an Account's Unspent Coins

### [block](docs/sdks/block/README.md)

* [block](docs/sdks/block/README.md#block) - Get a Block
* [blockTransaction](docs/sdks/block/README.md#blocktransaction) - Get a Block Transaction

### [call](docs/sdks/call/README.md)

* [call](docs/sdks/call/README.md#call) - Make a Network-Specific Procedure Call

### [construction](docs/sdks/construction/README.md)

* [constructionDerive](docs/sdks/construction/README.md#constructionderive) - Derive an AccountIdentifier from a PublicKey
* [constructionPreprocess](docs/sdks/construction/README.md#constructionpreprocess) - Create a Request to Fetch Metadata
* [constructionMetadata](docs/sdks/construction/README.md#constructionmetadata) - Get Metadata for Transaction Construction
* [constructionPayloads](docs/sdks/construction/README.md#constructionpayloads) - Generate an Unsigned Transaction and Signing Payloads
* [constructionCombine](docs/sdks/construction/README.md#constructioncombine) - Create Network Transaction from Signatures
* [constructionParse](docs/sdks/construction/README.md#constructionparse) - Parse a Transaction
* [constructionHash](docs/sdks/construction/README.md#constructionhash) - Get the Hash of a Signed Transaction
* [constructionSubmit](docs/sdks/construction/README.md#constructionsubmit) - Submit a Signed Transaction

### [events](docs/sdks/events/README.md)

* [eventsBlocks](docs/sdks/events/README.md#eventsblocks) - [INDEXER] Get a range of BlockEvents


### [mempool](docs/sdks/mempool/README.md)

* [mempool](docs/sdks/mempool/README.md#mempool) - Get All Mempool Transactions
* [mempoolTransaction](docs/sdks/mempool/README.md#mempooltransaction) - Get a Mempool Transaction

### [network](docs/sdks/network/README.md)

* [networkList](docs/sdks/network/README.md#networklist) - Get List of Available Networks
* [networkStatus](docs/sdks/network/README.md#networkstatus) - Get Network Status
* [networkOptions](docs/sdks/network/README.md#networkoptions) - Get Network Options

### [search](docs/sdks/search/README.md)

* [searchTransactions](docs/sdks/search/README.md#searchtransactions) - [INDEXER] Search for Transactions

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`accountAccountBalance`](docs/sdks/account/README.md#accountbalance) - Get an Account's Balance
- [`accountAccountCoins`](docs/sdks/account/README.md#accountcoins) - Get an Account's Unspent Coins
- [`blockBlock`](docs/sdks/block/README.md#block) - Get a Block
- [`blockBlockTransaction`](docs/sdks/block/README.md#blocktransaction) - Get a Block Transaction
- [`callCall`](docs/sdks/call/README.md#call) - Make a Network-Specific Procedure Call
- [`constructionConstructionCombine`](docs/sdks/construction/README.md#constructioncombine) - Create Network Transaction from Signatures
- [`constructionConstructionDerive`](docs/sdks/construction/README.md#constructionderive) - Derive an AccountIdentifier from a PublicKey
- [`constructionConstructionHash`](docs/sdks/construction/README.md#constructionhash) - Get the Hash of a Signed Transaction
- [`constructionConstructionMetadata`](docs/sdks/construction/README.md#constructionmetadata) - Get Metadata for Transaction Construction
- [`constructionConstructionParse`](docs/sdks/construction/README.md#constructionparse) - Parse a Transaction
- [`constructionConstructionPayloads`](docs/sdks/construction/README.md#constructionpayloads) - Generate an Unsigned Transaction and Signing Payloads
- [`constructionConstructionPreprocess`](docs/sdks/construction/README.md#constructionpreprocess) - Create a Request to Fetch Metadata
- [`constructionConstructionSubmit`](docs/sdks/construction/README.md#constructionsubmit) - Submit a Signed Transaction
- [`eventsEventsBlocks`](docs/sdks/events/README.md#eventsblocks) - [INDEXER] Get a range of BlockEvents
- [`mempoolMempool`](docs/sdks/mempool/README.md#mempool) - Get All Mempool Transactions
- [`mempoolMempoolTransaction`](docs/sdks/mempool/README.md#mempooltransaction) - Get a Mempool Transaction
- [`networkNetworkList`](docs/sdks/network/README.md#networklist) - Get List of Available Networks
- [`networkNetworkOptions`](docs/sdks/network/README.md#networkoptions) - Get Network Options
- [`networkNetworkStatus`](docs/sdks/network/README.md#networkstatus) - Get Network Status
- [`searchSearchTransactions`](docs/sdks/search/README.md#searchtransactions) - [INDEXER] Search for Transactions

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Icpmcp } from "icpmcp-rosetta-api";

const icpmcp = new Icpmcp({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await icpmcp.network.networkList({}, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Icpmcp } from "icpmcp-rosetta-api";

const icpmcp = new Icpmcp({
  serverURL: "https://api.example.com",
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
});

async function run() {
  const result = await icpmcp.network.networkList({});

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`IcpmcpError`](./src/models/errors/icpmcperror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Icpmcp } from "icpmcp-rosetta-api";
import * as errors from "icpmcp/models/errors";

const icpmcp = new Icpmcp({
  serverURL: "https://api.example.com",
});

async function run() {
  try {
    const result = await icpmcp.network.networkList({});

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.IcpmcpError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorT) {
        console.log(error.data$.code); // number
        console.log(error.data$.message); // string
        console.log(error.data$.description); // string
        console.log(error.data$.retriable); // boolean
        console.log(error.data$.details); // models.Details
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`IcpmcpError`](./src/models/errors/icpmcperror.ts): The base class for HTTP error responses.
  * [`ErrorT`](docs/models/errors/errort.md): Instead of utilizing HTTP status codes to describe node errors (which often do not have a good analog), rich errors are returned using this object. Both the code and message fields can be individually used to correctly identify an error. Implementations MUST use unique values for both fields. Status code `500`.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`IcpmcpError`](./src/models/errors/icpmcperror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Icpmcp } from "icpmcp-rosetta-api";
import { HTTPClient } from "icpmcp/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Icpmcp({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Icpmcp } from "icpmcp-rosetta-api";

const sdk = new Icpmcp({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `ICPMCP_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=icpmcp&utm_campaign=typescript)
