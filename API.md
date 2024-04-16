# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LiveChannelFromMp4 <a name="LiveChannelFromMp4" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.Initializer"></a>

```typescript
import { LiveChannelFromMp4 } from 'awscdk-construct-live-channel-from-mp4-file'

new LiveChannelFromMp4(scope: Construct, id: string, __2: LiveChannelFromMp4Props)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.Initializer.parameter.__2">__2</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props">LiveChannelFromMp4Props</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.Initializer.parameter.id"></a>

- *Type:* string

---

##### `__2`<sup>Required</sup> <a name="__2" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.Initializer.parameter.__2"></a>

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props">LiveChannelFromMp4Props</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.isConstruct"></a>

```typescript
import { LiveChannelFromMp4 } from 'awscdk-construct-live-channel-from-mp4-file'

LiveChannelFromMp4.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.property.eml">eml</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLive">MediaLive</a></code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.property.empv1">empv1</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV1">MediaPackageV1</a></code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.property.empv2">empv2</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2">MediaPackageV2</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `eml`<sup>Required</sup> <a name="eml" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.property.eml"></a>

```typescript
public readonly eml: MediaLive;
```

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.MediaLive">MediaLive</a>

---

##### `empv1`<sup>Optional</sup> <a name="empv1" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.property.empv1"></a>

```typescript
public readonly empv1: MediaPackageV1;
```

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV1">MediaPackageV1</a>

---

##### `empv2`<sup>Optional</sup> <a name="empv2" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.property.empv2"></a>

```typescript
public readonly empv2: MediaPackageV2;
```

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2">MediaPackageV2</a>

---


### MediaLive <a name="MediaLive" id="awscdk-construct-live-channel-from-mp4-file.MediaLive"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-live-channel-from-mp4-file.MediaLive.Initializer"></a>

```typescript
import { MediaLive } from 'awscdk-construct-live-channel-from-mp4-file'

new MediaLive(scope: Construct, id: string, __2: MediaLiveProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLive.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLive.Initializer.parameter.__2">__2</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLiveProps">MediaLiveProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-live-channel-from-mp4-file.MediaLive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-live-channel-from-mp4-file.MediaLive.Initializer.parameter.id"></a>

- *Type:* string

---

##### `__2`<sup>Required</sup> <a name="__2" id="awscdk-construct-live-channel-from-mp4-file.MediaLive.Initializer.parameter.__2"></a>

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.MediaLiveProps">MediaLiveProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLive.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-live-channel-from-mp4-file.MediaLive.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLive.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-live-channel-from-mp4-file.MediaLive.isConstruct"></a>

```typescript
import { MediaLive } from 'awscdk-construct-live-channel-from-mp4-file'

MediaLive.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-live-channel-from-mp4-file.MediaLive.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLive.property.channel">channel</a></code> | <code>aws-cdk-lib.aws_medialive.CfnChannel</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLive.property.input">input</a></code> | <code>aws-cdk-lib.aws_medialive.CfnInput</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-live-channel-from-mp4-file.MediaLive.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `channel`<sup>Required</sup> <a name="channel" id="awscdk-construct-live-channel-from-mp4-file.MediaLive.property.channel"></a>

```typescript
public readonly channel: CfnChannel;
```

- *Type:* aws-cdk-lib.aws_medialive.CfnChannel

---

##### `input`<sup>Required</sup> <a name="input" id="awscdk-construct-live-channel-from-mp4-file.MediaLive.property.input"></a>

```typescript
public readonly input: CfnInput;
```

- *Type:* aws-cdk-lib.aws_medialive.CfnInput

---


### MediaPackageV1 <a name="MediaPackageV1" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV1"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV1.Initializer"></a>

```typescript
import { MediaPackageV1 } from 'awscdk-construct-live-channel-from-mp4-file'

new MediaPackageV1(scope: Construct, id: string, __2: MediaPakcageV1Props)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV1.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV1.Initializer.parameter.__2">__2</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1Props">MediaPakcageV1Props</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV1.Initializer.parameter.id"></a>

- *Type:* string

---

##### `__2`<sup>Required</sup> <a name="__2" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV1.Initializer.parameter.__2"></a>

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1Props">MediaPakcageV1Props</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV1.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV1.isConstruct"></a>

```typescript
import { MediaPackageV1 } from 'awscdk-construct-live-channel-from-mp4-file'

MediaPackageV1.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV1.property.channel">channel</a></code> | <code>aws-cdk-lib.aws_mediapackage.CfnChannel</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV1.property.endpoints">endpoints</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV1EndpointsTable">MediaPackageV1EndpointsTable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `channel`<sup>Required</sup> <a name="channel" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV1.property.channel"></a>

```typescript
public readonly channel: CfnChannel;
```

- *Type:* aws-cdk-lib.aws_mediapackage.CfnChannel

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV1.property.endpoints"></a>

```typescript
public readonly endpoints: MediaPackageV1EndpointsTable;
```

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV1EndpointsTable">MediaPackageV1EndpointsTable</a>

---


### MediaPackageV2 <a name="MediaPackageV2" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.Initializer"></a>

```typescript
import { MediaPackageV2 } from 'awscdk-construct-live-channel-from-mp4-file'

new MediaPackageV2(scope: Construct, id: string, __2: MediaPakcageV2Props)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.Initializer.parameter.__2">__2</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props">MediaPakcageV2Props</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.Initializer.parameter.id"></a>

- *Type:* string

---

##### `__2`<sup>Required</sup> <a name="__2" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.Initializer.parameter.__2"></a>

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props">MediaPakcageV2Props</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.isConstruct"></a>

```typescript
import { MediaPackageV2 } from 'awscdk-construct-live-channel-from-mp4-file'

MediaPackageV2.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.property.channel">channel</a></code> | <code>aws-cdk-lib.aws_mediapackagev2.CfnChannel</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.property.endpoints">endpoints</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointsTable">MediaPackageV2EndpointsTable</a></code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.property.endpointUrls">endpointUrls</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointUrlsTable">MediaPackageV2EndpointUrlsTable</a></code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.property.ingestEndpoints">ingestEndpoints</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.IMediaPackageV2IngestEndpoint">IMediaPackageV2IngestEndpoint</a>[]</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.property.channelGroup">channelGroup</a></code> | <code>aws-cdk-lib.aws_mediapackagev2.CfnChannelGroup</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `channel`<sup>Required</sup> <a name="channel" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.property.channel"></a>

```typescript
public readonly channel: CfnChannel;
```

- *Type:* aws-cdk-lib.aws_mediapackagev2.CfnChannel

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.property.endpoints"></a>

```typescript
public readonly endpoints: MediaPackageV2EndpointsTable;
```

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointsTable">MediaPackageV2EndpointsTable</a>

---

##### `endpointUrls`<sup>Required</sup> <a name="endpointUrls" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.property.endpointUrls"></a>

```typescript
public readonly endpointUrls: MediaPackageV2EndpointUrlsTable;
```

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointUrlsTable">MediaPackageV2EndpointUrlsTable</a>

---

##### `ingestEndpoints`<sup>Required</sup> <a name="ingestEndpoints" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.property.ingestEndpoints"></a>

```typescript
public readonly ingestEndpoints: IMediaPackageV2IngestEndpoint[];
```

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.IMediaPackageV2IngestEndpoint">IMediaPackageV2IngestEndpoint</a>[]

---

##### `channelGroup`<sup>Optional</sup> <a name="channelGroup" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2.property.channelGroup"></a>

```typescript
public readonly channelGroup: CfnChannelGroup;
```

- *Type:* aws-cdk-lib.aws_mediapackagev2.CfnChannelGroup

---


## Structs <a name="Structs" id="Structs"></a>

### LiveChannelFromMp4Props <a name="LiveChannelFromMp4Props" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.Initializer"></a>

```typescript
import { LiveChannelFromMp4Props } from 'awscdk-construct-live-channel-from-mp4-file'

const liveChannelFromMp4Props: LiveChannelFromMp4Props = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.autoStart">autoStart</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.channelClass">channelClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.gopLengthInSeconds">gopLengthInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.hlsAdMarkers">hlsAdMarkers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.mediaPackageV2Settings">mediaPackageV2Settings</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2Settings">MediaPackageV2Settings</a></code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.mediaPackageVersionSpec">mediaPackageVersionSpec</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageVersionSpecType">MediaPackageVersionSpecType</a></code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.segmentDurationSeconds">segmentDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.separateAudioRendition">separateAudioRendition</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.startoverWindowSeconds">startoverWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.timecodeBurninPrefix">timecodeBurninPrefix</a></code> | <code>string</code> | *No description.* |

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

---

##### `autoStart`<sup>Optional</sup> <a name="autoStart" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.autoStart"></a>

```typescript
public readonly autoStart: boolean;
```

- *Type:* boolean

---

##### `channelClass`<sup>Optional</sup> <a name="channelClass" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.channelClass"></a>

```typescript
public readonly channelClass: string;
```

- *Type:* string

---

##### `gopLengthInSeconds`<sup>Optional</sup> <a name="gopLengthInSeconds" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.gopLengthInSeconds"></a>

```typescript
public readonly gopLengthInSeconds: number;
```

- *Type:* number

---

##### `hlsAdMarkers`<sup>Optional</sup> <a name="hlsAdMarkers" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.hlsAdMarkers"></a>

```typescript
public readonly hlsAdMarkers: string;
```

- *Type:* string

---

##### `manifestWindowSeconds`<sup>Optional</sup> <a name="manifestWindowSeconds" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

---

##### `mediaPackageV2Settings`<sup>Optional</sup> <a name="mediaPackageV2Settings" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.mediaPackageV2Settings"></a>

```typescript
public readonly mediaPackageV2Settings: MediaPackageV2Settings;
```

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2Settings">MediaPackageV2Settings</a>

---

##### `mediaPackageVersionSpec`<sup>Optional</sup> <a name="mediaPackageVersionSpec" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.mediaPackageVersionSpec"></a>

```typescript
public readonly mediaPackageVersionSpec: MediaPackageVersionSpecType;
```

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageVersionSpecType">MediaPackageVersionSpecType</a>

---

##### `segmentDurationSeconds`<sup>Optional</sup> <a name="segmentDurationSeconds" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.segmentDurationSeconds"></a>

```typescript
public readonly segmentDurationSeconds: number;
```

- *Type:* number

---

##### `separateAudioRendition`<sup>Optional</sup> <a name="separateAudioRendition" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.separateAudioRendition"></a>

```typescript
public readonly separateAudioRendition: boolean;
```

- *Type:* boolean

---

##### `startoverWindowSeconds`<sup>Optional</sup> <a name="startoverWindowSeconds" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.startoverWindowSeconds"></a>

```typescript
public readonly startoverWindowSeconds: number;
```

- *Type:* number

---

##### `timecodeBurninPrefix`<sup>Optional</sup> <a name="timecodeBurninPrefix" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.timecodeBurninPrefix"></a>

```typescript
public readonly timecodeBurninPrefix: string;
```

- *Type:* string

---

### MediaLiveProps <a name="MediaLiveProps" id="awscdk-construct-live-channel-from-mp4-file.MediaLiveProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.Initializer"></a>

```typescript
import { MediaLiveProps } from 'awscdk-construct-live-channel-from-mp4-file'

const mediaLiveProps: MediaLiveProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.destinations">destinations</a></code> | <code>aws-cdk-lib.aws_medialive.CfnChannel.OutputDestinationProperty[]</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.outputGroupSettingsList">outputGroupSettingsList</a></code> | <code>aws-cdk-lib.aws_medialive.CfnChannel.OutputGroupSettingsProperty[]</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.outputSettingsList">outputSettingsList</a></code> | <code>aws-cdk-lib.aws_medialive.CfnChannel.OutputSettingsProperty[]</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.channelClass">channelClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.gopLengthInSeconds">gopLengthInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.timecodeBurninPrefix">timecodeBurninPrefix</a></code> | <code>string</code> | *No description.* |

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.destinations"></a>

```typescript
public readonly destinations: OutputDestinationProperty[];
```

- *Type:* aws-cdk-lib.aws_medialive.CfnChannel.OutputDestinationProperty[]

---

##### `outputGroupSettingsList`<sup>Required</sup> <a name="outputGroupSettingsList" id="awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.outputGroupSettingsList"></a>

```typescript
public readonly outputGroupSettingsList: OutputGroupSettingsProperty[];
```

- *Type:* aws-cdk-lib.aws_medialive.CfnChannel.OutputGroupSettingsProperty[]

---

##### `outputSettingsList`<sup>Required</sup> <a name="outputSettingsList" id="awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.outputSettingsList"></a>

```typescript
public readonly outputSettingsList: OutputSettingsProperty[];
```

- *Type:* aws-cdk-lib.aws_medialive.CfnChannel.OutputSettingsProperty[]

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

---

##### `channelClass`<sup>Optional</sup> <a name="channelClass" id="awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.channelClass"></a>

```typescript
public readonly channelClass: string;
```

- *Type:* string

---

##### `gopLengthInSeconds`<sup>Optional</sup> <a name="gopLengthInSeconds" id="awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.gopLengthInSeconds"></a>

```typescript
public readonly gopLengthInSeconds: number;
```

- *Type:* number

---

##### `timecodeBurninPrefix`<sup>Optional</sup> <a name="timecodeBurninPrefix" id="awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.timecodeBurninPrefix"></a>

```typescript
public readonly timecodeBurninPrefix: string;
```

- *Type:* string

---

### MediaPackageV1EndpointsTable <a name="MediaPackageV1EndpointsTable" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV1EndpointsTable"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV1EndpointsTable.Initializer"></a>

```typescript
import { MediaPackageV1EndpointsTable } from 'awscdk-construct-live-channel-from-mp4-file'

const mediaPackageV1EndpointsTable: MediaPackageV1EndpointsTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV1EndpointsTable.property.cmaf">cmaf</a></code> | <code>aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV1EndpointsTable.property.dash">dash</a></code> | <code>aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV1EndpointsTable.property.hls">hls</a></code> | <code>aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV1EndpointsTable.property.mss">mss</a></code> | <code>aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint</code> | *No description.* |

---

##### `cmaf`<sup>Required</sup> <a name="cmaf" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV1EndpointsTable.property.cmaf"></a>

```typescript
public readonly cmaf: CfnOriginEndpoint;
```

- *Type:* aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint

---

##### `dash`<sup>Required</sup> <a name="dash" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV1EndpointsTable.property.dash"></a>

```typescript
public readonly dash: CfnOriginEndpoint;
```

- *Type:* aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint

---

##### `hls`<sup>Required</sup> <a name="hls" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV1EndpointsTable.property.hls"></a>

```typescript
public readonly hls: CfnOriginEndpoint;
```

- *Type:* aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint

---

##### `mss`<sup>Required</sup> <a name="mss" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV1EndpointsTable.property.mss"></a>

```typescript
public readonly mss: CfnOriginEndpoint;
```

- *Type:* aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint

---

### MediaPackageV2EndpointsTable <a name="MediaPackageV2EndpointsTable" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointsTable"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointsTable.Initializer"></a>

```typescript
import { MediaPackageV2EndpointsTable } from 'awscdk-construct-live-channel-from-mp4-file'

const mediaPackageV2EndpointsTable: MediaPackageV2EndpointsTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointsTable.property.hls">hls</a></code> | <code>aws-cdk-lib.aws_mediapackagev2.CfnOriginEndpoint</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointsTable.property.llHls">llHls</a></code> | <code>aws-cdk-lib.aws_mediapackagev2.CfnOriginEndpoint</code> | *No description.* |

---

##### `hls`<sup>Required</sup> <a name="hls" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointsTable.property.hls"></a>

```typescript
public readonly hls: CfnOriginEndpoint;
```

- *Type:* aws-cdk-lib.aws_mediapackagev2.CfnOriginEndpoint

---

##### `llHls`<sup>Optional</sup> <a name="llHls" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointsTable.property.llHls"></a>

```typescript
public readonly llHls: CfnOriginEndpoint;
```

- *Type:* aws-cdk-lib.aws_mediapackagev2.CfnOriginEndpoint

---

### MediaPackageV2EndpointUrlsTable <a name="MediaPackageV2EndpointUrlsTable" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointUrlsTable"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointUrlsTable.Initializer"></a>

```typescript
import { MediaPackageV2EndpointUrlsTable } from 'awscdk-construct-live-channel-from-mp4-file'

const mediaPackageV2EndpointUrlsTable: MediaPackageV2EndpointUrlsTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointUrlsTable.property.hls">hls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointUrlsTable.property.llHls">llHls</a></code> | <code>string</code> | *No description.* |

---

##### `hls`<sup>Required</sup> <a name="hls" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointUrlsTable.property.hls"></a>

```typescript
public readonly hls: string;
```

- *Type:* string

---

##### `llHls`<sup>Optional</sup> <a name="llHls" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointUrlsTable.property.llHls"></a>

```typescript
public readonly llHls: string;
```

- *Type:* string

---

### MediaPackageV2Settings <a name="MediaPackageV2Settings" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2Settings"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2Settings.Initializer"></a>

```typescript
import { MediaPackageV2Settings } from 'awscdk-construct-live-channel-from-mp4-file'

const mediaPackageV2Settings: MediaPackageV2Settings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2Settings.property.channelGroupName">channelGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2Settings.property.omitLlHls">omitLlHls</a></code> | <code>boolean</code> | *No description.* |

---

##### `channelGroupName`<sup>Optional</sup> <a name="channelGroupName" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2Settings.property.channelGroupName"></a>

```typescript
public readonly channelGroupName: string;
```

- *Type:* string

---

##### `omitLlHls`<sup>Optional</sup> <a name="omitLlHls" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2Settings.property.omitLlHls"></a>

```typescript
public readonly omitLlHls: boolean;
```

- *Type:* boolean

---

### MediaPakcageV1Props <a name="MediaPakcageV1Props" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1Props"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1Props.Initializer"></a>

```typescript
import { MediaPakcageV1Props } from 'awscdk-construct-live-channel-from-mp4-file'

const mediaPakcageV1Props: MediaPakcageV1Props = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1Props.property.hlsAdMarkers">hlsAdMarkers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1Props.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1Props.property.segmentDurationSeconds">segmentDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1Props.property.separateAudioRendition">separateAudioRendition</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1Props.property.startoverWindowSeconds">startoverWindowSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `hlsAdMarkers`<sup>Optional</sup> <a name="hlsAdMarkers" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1Props.property.hlsAdMarkers"></a>

```typescript
public readonly hlsAdMarkers: string;
```

- *Type:* string

---

##### `manifestWindowSeconds`<sup>Optional</sup> <a name="manifestWindowSeconds" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1Props.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

---

##### `segmentDurationSeconds`<sup>Optional</sup> <a name="segmentDurationSeconds" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1Props.property.segmentDurationSeconds"></a>

```typescript
public readonly segmentDurationSeconds: number;
```

- *Type:* number

---

##### `separateAudioRendition`<sup>Optional</sup> <a name="separateAudioRendition" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1Props.property.separateAudioRendition"></a>

```typescript
public readonly separateAudioRendition: boolean;
```

- *Type:* boolean

---

##### `startoverWindowSeconds`<sup>Optional</sup> <a name="startoverWindowSeconds" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1Props.property.startoverWindowSeconds"></a>

```typescript
public readonly startoverWindowSeconds: number;
```

- *Type:* number

---

### MediaPakcageV2Props <a name="MediaPakcageV2Props" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props.Initializer"></a>

```typescript
import { MediaPakcageV2Props } from 'awscdk-construct-live-channel-from-mp4-file'

const mediaPakcageV2Props: MediaPakcageV2Props = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props.property.channelGroupName">channelGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props.property.hlsAdMarkers">hlsAdMarkers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props.property.omitLlHls">omitLlHls</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props.property.segmentDurationSeconds">segmentDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props.property.separateAudioRendition">separateAudioRendition</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props.property.startoverWindowSeconds">startoverWindowSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `channelGroupName`<sup>Optional</sup> <a name="channelGroupName" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props.property.channelGroupName"></a>

```typescript
public readonly channelGroupName: string;
```

- *Type:* string

---

##### `hlsAdMarkers`<sup>Optional</sup> <a name="hlsAdMarkers" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props.property.hlsAdMarkers"></a>

```typescript
public readonly hlsAdMarkers: string;
```

- *Type:* string

---

##### `manifestWindowSeconds`<sup>Optional</sup> <a name="manifestWindowSeconds" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

---

##### `omitLlHls`<sup>Optional</sup> <a name="omitLlHls" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props.property.omitLlHls"></a>

```typescript
public readonly omitLlHls: boolean;
```

- *Type:* boolean

---

##### `segmentDurationSeconds`<sup>Optional</sup> <a name="segmentDurationSeconds" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props.property.segmentDurationSeconds"></a>

```typescript
public readonly segmentDurationSeconds: number;
```

- *Type:* number

---

##### `separateAudioRendition`<sup>Optional</sup> <a name="separateAudioRendition" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props.property.separateAudioRendition"></a>

```typescript
public readonly separateAudioRendition: boolean;
```

- *Type:* boolean

---

##### `startoverWindowSeconds`<sup>Optional</sup> <a name="startoverWindowSeconds" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props.property.startoverWindowSeconds"></a>

```typescript
public readonly startoverWindowSeconds: number;
```

- *Type:* number

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IMediaPackageV2IngestEndpoint <a name="IMediaPackageV2IngestEndpoint" id="awscdk-construct-live-channel-from-mp4-file.IMediaPackageV2IngestEndpoint"></a>

- *Implemented By:* <a href="#awscdk-construct-live-channel-from-mp4-file.IMediaPackageV2IngestEndpoint">IMediaPackageV2IngestEndpoint</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.IMediaPackageV2IngestEndpoint.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `url`<sup>Required</sup> <a name="url" id="awscdk-construct-live-channel-from-mp4-file.IMediaPackageV2IngestEndpoint.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

## Enums <a name="Enums" id="Enums"></a>

### MediaPackageVersionSpecType <a name="MediaPackageVersionSpecType" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageVersionSpecType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageVersionSpecType.V1_ONLY">V1_ONLY</a></code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageVersionSpecType.V2_ONLY">V2_ONLY</a></code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageVersionSpecType.V1_AND_V2">V1_AND_V2</a></code> | *No description.* |

---

##### `V1_ONLY` <a name="V1_ONLY" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageVersionSpecType.V1_ONLY"></a>

---


##### `V2_ONLY` <a name="V2_ONLY" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageVersionSpecType.V2_ONLY"></a>

---


##### `V1_AND_V2` <a name="V1_AND_V2" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageVersionSpecType.V1_AND_V2"></a>

---

