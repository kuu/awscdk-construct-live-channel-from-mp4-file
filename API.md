# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HarvestJobLambda <a name="HarvestJobLambda" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobLambda"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobLambda.Initializer"></a>

```typescript
import { HarvestJobLambda } from 'awscdk-construct-live-channel-from-mp4-file'

new HarvestJobLambda(scope: Construct, id: string, props: HarvestJobLambdaProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobLambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobLambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobLambda.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobLambdaProps">HarvestJobLambdaProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobLambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobLambda.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobLambda.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobLambdaProps">HarvestJobLambdaProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobLambda.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobLambda.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobLambda.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobLambda.isConstruct"></a>

```typescript
import { HarvestJobLambda } from 'awscdk-construct-live-channel-from-mp4-file'

HarvestJobLambda.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobLambda.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobLambda.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobLambda.property.func">func</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunction</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobLambda.property.s3Url">s3Url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobLambda.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `func`<sup>Required</sup> <a name="func" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobLambda.property.func"></a>

```typescript
public readonly func: NodejsFunction;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunction

---

##### `s3Url`<sup>Required</sup> <a name="s3Url" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobLambda.property.s3Url"></a>

```typescript
public readonly s3Url: string;
```

- *Type:* string

---


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
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.createHarvestJob">createHarvestJob</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `createHarvestJob` <a name="createHarvestJob" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.createHarvestJob"></a>

```typescript
public createHarvestJob(props: HarvestJobProps): HarvestJobLambda
```

###### `props`<sup>Required</sup> <a name="props" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.createHarvestJob.parameter.props"></a>

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobProps">HarvestJobProps</a>

---

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
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.property.channelStartTime">channelStartTime</a></code> | <code>Date</code> | *No description.* |
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

##### `channelStartTime`<sup>Optional</sup> <a name="channelStartTime" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.property.channelStartTime"></a>

```typescript
public readonly channelStartTime: Date;
```

- *Type:* Date

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

new MediaLive(scope: Construct, id: string, props: MediaLiveProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLive.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLive.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLiveProps">MediaLiveProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-live-channel-from-mp4-file.MediaLive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-live-channel-from-mp4-file.MediaLive.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-construct-live-channel-from-mp4-file.MediaLive.Initializer.parameter.props"></a>

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
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLive.property.inputs">inputs</a></code> | <code>aws-cdk-lib.aws_medialive.CfnInput[]</code> | *No description.* |

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

##### `inputs`<sup>Required</sup> <a name="inputs" id="awscdk-construct-live-channel-from-mp4-file.MediaLive.property.inputs"></a>

```typescript
public readonly inputs: CfnInput[];
```

- *Type:* aws-cdk-lib.aws_medialive.CfnInput[]

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

### EncoderMidSettings <a name="EncoderMidSettings" id="awscdk-construct-live-channel-from-mp4-file.EncoderMidSettings"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-live-channel-from-mp4-file.EncoderMidSettings.Initializer"></a>

```typescript
import { EncoderMidSettings } from 'awscdk-construct-live-channel-from-mp4-file'

const encoderMidSettings: EncoderMidSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.EncoderMidSettings.property.gopLengthInSeconds">gopLengthInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.EncoderMidSettings.property.outputGroupSettingsList">outputGroupSettingsList</a></code> | <code>aws-cdk-lib.aws_medialive.CfnChannel.OutputGroupSettingsProperty[]</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.EncoderMidSettings.property.outputSettingsList">outputSettingsList</a></code> | <code>aws-cdk-lib.aws_medialive.CfnChannel.OutputSettingsProperty[]</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.EncoderMidSettings.property.timecodeBurninPrefix">timecodeBurninPrefix</a></code> | <code>string</code> | *No description.* |

---

##### `gopLengthInSeconds`<sup>Required</sup> <a name="gopLengthInSeconds" id="awscdk-construct-live-channel-from-mp4-file.EncoderMidSettings.property.gopLengthInSeconds"></a>

```typescript
public readonly gopLengthInSeconds: number;
```

- *Type:* number

---

##### `outputGroupSettingsList`<sup>Required</sup> <a name="outputGroupSettingsList" id="awscdk-construct-live-channel-from-mp4-file.EncoderMidSettings.property.outputGroupSettingsList"></a>

```typescript
public readonly outputGroupSettingsList: OutputGroupSettingsProperty[];
```

- *Type:* aws-cdk-lib.aws_medialive.CfnChannel.OutputGroupSettingsProperty[]

---

##### `outputSettingsList`<sup>Required</sup> <a name="outputSettingsList" id="awscdk-construct-live-channel-from-mp4-file.EncoderMidSettings.property.outputSettingsList"></a>

```typescript
public readonly outputSettingsList: OutputSettingsProperty[];
```

- *Type:* aws-cdk-lib.aws_medialive.CfnChannel.OutputSettingsProperty[]

---

##### `timecodeBurninPrefix`<sup>Optional</sup> <a name="timecodeBurninPrefix" id="awscdk-construct-live-channel-from-mp4-file.EncoderMidSettings.property.timecodeBurninPrefix"></a>

```typescript
public readonly timecodeBurninPrefix: string;
```

- *Type:* string

---

### EncoderSpec <a name="EncoderSpec" id="awscdk-construct-live-channel-from-mp4-file.EncoderSpec"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-live-channel-from-mp4-file.EncoderSpec.Initializer"></a>

```typescript
import { EncoderSpec } from 'awscdk-construct-live-channel-from-mp4-file'

const encoderSpec: EncoderSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.EncoderSpec.property.gopLengthInSeconds">gopLengthInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.EncoderSpec.property.timecodeBurninPrefix">timecodeBurninPrefix</a></code> | <code>string</code> | *No description.* |

---

##### `gopLengthInSeconds`<sup>Optional</sup> <a name="gopLengthInSeconds" id="awscdk-construct-live-channel-from-mp4-file.EncoderSpec.property.gopLengthInSeconds"></a>

```typescript
public readonly gopLengthInSeconds: number;
```

- *Type:* number

---

##### `timecodeBurninPrefix`<sup>Optional</sup> <a name="timecodeBurninPrefix" id="awscdk-construct-live-channel-from-mp4-file.EncoderSpec.property.timecodeBurninPrefix"></a>

```typescript
public readonly timecodeBurninPrefix: string;
```

- *Type:* string

---

### HarvestJobDestinationProps <a name="HarvestJobDestinationProps" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobDestinationProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobDestinationProps.Initializer"></a>

```typescript
import { HarvestJobDestinationProps } from 'awscdk-construct-live-channel-from-mp4-file'

const harvestJobDestinationProps: HarvestJobDestinationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobDestinationProps.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobDestinationProps.property.manifestKey">manifestKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobDestinationProps.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobDestinationProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `manifestKey`<sup>Required</sup> <a name="manifestKey" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobDestinationProps.property.manifestKey"></a>

```typescript
public readonly manifestKey: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobDestinationProps.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

### HarvestJobLambdaProps <a name="HarvestJobLambdaProps" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobLambdaProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobLambdaProps.Initializer"></a>

```typescript
import { HarvestJobLambdaProps } from 'awscdk-construct-live-channel-from-mp4-file'

const harvestJobLambdaProps: HarvestJobLambdaProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobLambdaProps.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobLambdaProps.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobLambdaProps.property.startTime">startTime</a></code> | <code>Date</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobLambdaProps.property.destination">destination</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobDestinationProps">HarvestJobDestinationProps</a></code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobLambdaProps.property.endTime">endTime</a></code> | <code>Date</code> | *No description.* |

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobLambdaProps.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobLambdaProps.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobLambdaProps.property.startTime"></a>

```typescript
public readonly startTime: Date;
```

- *Type:* Date

---

##### `destination`<sup>Optional</sup> <a name="destination" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobLambdaProps.property.destination"></a>

```typescript
public readonly destination: HarvestJobDestinationProps;
```

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobDestinationProps">HarvestJobDestinationProps</a>

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobLambdaProps.property.endTime"></a>

```typescript
public readonly endTime: Date;
```

- *Type:* Date

---

### HarvestJobProps <a name="HarvestJobProps" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobProps.Initializer"></a>

```typescript
import { HarvestJobProps } from 'awscdk-construct-live-channel-from-mp4-file'

const harvestJobProps: HarvestJobProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobProps.property.endpoint">endpoint</a></code> | <code>aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobProps.property.destination">destination</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobDestinationProps">HarvestJobDestinationProps</a></code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobProps.property.endTime">endTime</a></code> | <code>Date</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobProps.property.startTime">startTime</a></code> | <code>Date</code> | *No description.* |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobProps.property.endpoint"></a>

```typescript
public readonly endpoint: CfnOriginEndpoint;
```

- *Type:* aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint

---

##### `destination`<sup>Optional</sup> <a name="destination" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobProps.property.destination"></a>

```typescript
public readonly destination: HarvestJobDestinationProps;
```

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.HarvestJobDestinationProps">HarvestJobDestinationProps</a>

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobProps.property.endTime"></a>

```typescript
public readonly endTime: Date;
```

- *Type:* Date

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="awscdk-construct-live-channel-from-mp4-file.HarvestJobProps.property.startTime"></a>

```typescript
public readonly startTime: Date;
```

- *Type:* Date

---

### LiveChannelFromMp4Props <a name="LiveChannelFromMp4Props" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.Initializer"></a>

```typescript
import { LiveChannelFromMp4Props } from 'awscdk-construct-live-channel-from-mp4-file'

const liveChannelFromMp4Props: LiveChannelFromMp4Props = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.source">source</a></code> | <code>string \| string[] \| <a href="#awscdk-construct-live-channel-from-mp4-file.SourceSpec">SourceSpec</a>[]</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.autoStart">autoStart</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.channelClass">channelClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.encoderSpec">encoderSpec</a></code> | <code>aws-cdk-lib.aws_medialive.CfnChannel.EncoderSettingsProperty \| <a href="#awscdk-construct-live-channel-from-mp4-file.EncoderSpec">EncoderSpec</a></code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.mediaPackageVersionSpec">mediaPackageVersionSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.packagerSpec">packagerSpec</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1Props">MediaPakcageV1Props</a> \| <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props">MediaPakcageV2Props</a> \| <a href="#awscdk-construct-live-channel-from-mp4-file.PackagerSpec">PackagerSpec</a> \| <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1Props">MediaPakcageV1Props</a> \| <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props">MediaPakcageV2Props</a>[]</code> | *No description.* |

---

##### `source`<sup>Required</sup> <a name="source" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.source"></a>

```typescript
public readonly source: string | string[] | SourceSpec[];
```

- *Type:* string | string[] | <a href="#awscdk-construct-live-channel-from-mp4-file.SourceSpec">SourceSpec</a>[]

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

##### `encoderSpec`<sup>Optional</sup> <a name="encoderSpec" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.encoderSpec"></a>

```typescript
public readonly encoderSpec: EncoderSettingsProperty | EncoderSpec;
```

- *Type:* aws-cdk-lib.aws_medialive.CfnChannel.EncoderSettingsProperty | <a href="#awscdk-construct-live-channel-from-mp4-file.EncoderSpec">EncoderSpec</a>

---

##### `mediaPackageVersionSpec`<sup>Optional</sup> <a name="mediaPackageVersionSpec" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.mediaPackageVersionSpec"></a>

```typescript
public readonly mediaPackageVersionSpec: string;
```

- *Type:* string

---

##### `packagerSpec`<sup>Optional</sup> <a name="packagerSpec" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.packagerSpec"></a>

```typescript
public readonly packagerSpec: MediaPakcageV1Props | MediaPakcageV2Props | PackagerSpec | MediaPakcageV1Props | MediaPakcageV2Props[];
```

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1Props">MediaPakcageV1Props</a> | <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props">MediaPakcageV2Props</a> | <a href="#awscdk-construct-live-channel-from-mp4-file.PackagerSpec">PackagerSpec</a> | <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1Props">MediaPakcageV1Props</a> | <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props">MediaPakcageV2Props</a>[]

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
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.encoderSpec">encoderSpec</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.EncoderMidSettings">EncoderMidSettings</a> \| aws-cdk-lib.aws_medialive.CfnChannel.EncoderSettingsProperty</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.sources">sources</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.SourceSpec">SourceSpec</a>[]</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.channelClass">channelClass</a></code> | <code>string</code> | *No description.* |

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.destinations"></a>

```typescript
public readonly destinations: OutputDestinationProperty[];
```

- *Type:* aws-cdk-lib.aws_medialive.CfnChannel.OutputDestinationProperty[]

---

##### `encoderSpec`<sup>Required</sup> <a name="encoderSpec" id="awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.encoderSpec"></a>

```typescript
public readonly encoderSpec: EncoderMidSettings | EncoderSettingsProperty;
```

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.EncoderMidSettings">EncoderMidSettings</a> | aws-cdk-lib.aws_medialive.CfnChannel.EncoderSettingsProperty

---

##### `sources`<sup>Required</sup> <a name="sources" id="awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.sources"></a>

```typescript
public readonly sources: SourceSpec[];
```

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.SourceSpec">SourceSpec</a>[]

---

##### `channelClass`<sup>Optional</sup> <a name="channelClass" id="awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.channelClass"></a>

```typescript
public readonly channelClass: string;
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

##### `cmaf`<sup>Optional</sup> <a name="cmaf" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV1EndpointsTable.property.cmaf"></a>

```typescript
public readonly cmaf: CfnOriginEndpoint;
```

- *Type:* aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint

---

##### `dash`<sup>Optional</sup> <a name="dash" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV1EndpointsTable.property.dash"></a>

```typescript
public readonly dash: CfnOriginEndpoint;
```

- *Type:* aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint

---

##### `hls`<sup>Optional</sup> <a name="hls" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV1EndpointsTable.property.hls"></a>

```typescript
public readonly hls: CfnOriginEndpoint;
```

- *Type:* aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint

---

##### `mss`<sup>Optional</sup> <a name="mss" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV1EndpointsTable.property.mss"></a>

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
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointsTable.property.dash">dash</a></code> | <code>aws-cdk-lib.aws_mediapackagev2.CfnOriginEndpoint</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointsTable.property.hls">hls</a></code> | <code>aws-cdk-lib.aws_mediapackagev2.CfnOriginEndpoint</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointsTable.property.llHls">llHls</a></code> | <code>aws-cdk-lib.aws_mediapackagev2.CfnOriginEndpoint</code> | *No description.* |

---

##### `dash`<sup>Optional</sup> <a name="dash" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointsTable.property.dash"></a>

```typescript
public readonly dash: CfnOriginEndpoint;
```

- *Type:* aws-cdk-lib.aws_mediapackagev2.CfnOriginEndpoint

---

##### `hls`<sup>Optional</sup> <a name="hls" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointsTable.property.hls"></a>

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
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointUrlsTable.property.dash">dash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointUrlsTable.property.hls">hls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointUrlsTable.property.llHls">llHls</a></code> | <code>string</code> | *No description.* |

---

##### `dash`<sup>Optional</sup> <a name="dash" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointUrlsTable.property.dash"></a>

```typescript
public readonly dash: string;
```

- *Type:* string

---

##### `hls`<sup>Optional</sup> <a name="hls" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2EndpointUrlsTable.property.hls"></a>

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

### MediaPackageV2FullSpec <a name="MediaPackageV2FullSpec" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2FullSpec"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2FullSpec.Initializer"></a>

```typescript
import { MediaPackageV2FullSpec } from 'awscdk-construct-live-channel-from-mp4-file'

const mediaPackageV2FullSpec: MediaPackageV2FullSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2FullSpec.property.containerType">containerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2FullSpec.property.manifests">manifests</a></code> | <code>aws-cdk-lib.aws_mediapackagev2.CfnOriginEndpoint.HlsManifestConfigurationProperty \| aws-cdk-lib.aws_mediapackagev2.CfnOriginEndpoint.LowLatencyHlsManifestConfigurationProperty \| aws-cdk-lib.aws_mediapackagev2.CfnOriginEndpoint.DashManifestConfigurationProperty[]</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2FullSpec.property.segment">segment</a></code> | <code>aws-cdk-lib.aws_mediapackagev2.CfnOriginEndpoint.SegmentProperty</code> | *No description.* |

---

##### `containerType`<sup>Required</sup> <a name="containerType" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2FullSpec.property.containerType"></a>

```typescript
public readonly containerType: string;
```

- *Type:* string

---

##### `manifests`<sup>Required</sup> <a name="manifests" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2FullSpec.property.manifests"></a>

```typescript
public readonly manifests: HlsManifestConfigurationProperty | LowLatencyHlsManifestConfigurationProperty | DashManifestConfigurationProperty[];
```

- *Type:* aws-cdk-lib.aws_mediapackagev2.CfnOriginEndpoint.HlsManifestConfigurationProperty | aws-cdk-lib.aws_mediapackagev2.CfnOriginEndpoint.LowLatencyHlsManifestConfigurationProperty | aws-cdk-lib.aws_mediapackagev2.CfnOriginEndpoint.DashManifestConfigurationProperty[]

---

##### `segment`<sup>Required</sup> <a name="segment" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageV2FullSpec.property.segment"></a>

```typescript
public readonly segment: SegmentProperty;
```

- *Type:* aws-cdk-lib.aws_mediapackagev2.CfnOriginEndpoint.SegmentProperty

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

### MediaPakcageV1MidEndpointSpec <a name="MediaPakcageV1MidEndpointSpec" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1MidEndpointSpec"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1MidEndpointSpec.Initializer"></a>

```typescript
import { MediaPakcageV1MidEndpointSpec } from 'awscdk-construct-live-channel-from-mp4-file'

const mediaPakcageV1MidEndpointSpec: MediaPakcageV1MidEndpointSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1MidEndpointSpec.property.hlsAdMarkers">hlsAdMarkers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1MidEndpointSpec.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1MidEndpointSpec.property.segmentDurationSeconds">segmentDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1MidEndpointSpec.property.separateAudioRendition">separateAudioRendition</a></code> | <code>boolean</code> | *No description.* |

---

##### `hlsAdMarkers`<sup>Optional</sup> <a name="hlsAdMarkers" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1MidEndpointSpec.property.hlsAdMarkers"></a>

```typescript
public readonly hlsAdMarkers: string;
```

- *Type:* string

---

##### `manifestWindowSeconds`<sup>Optional</sup> <a name="manifestWindowSeconds" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1MidEndpointSpec.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

---

##### `segmentDurationSeconds`<sup>Optional</sup> <a name="segmentDurationSeconds" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1MidEndpointSpec.property.segmentDurationSeconds"></a>

```typescript
public readonly segmentDurationSeconds: number;
```

- *Type:* number

---

##### `separateAudioRendition`<sup>Optional</sup> <a name="separateAudioRendition" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1MidEndpointSpec.property.separateAudioRendition"></a>

```typescript
public readonly separateAudioRendition: boolean;
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
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1Props.property.endpointSpec">endpointSpec</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1MidEndpointSpec">MediaPakcageV1MidEndpointSpec</a> \| aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint.HlsPackageProperty \| aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint.DashPackageProperty \| aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint.CmafPackageProperty \| aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint.MssPackageProperty[]</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1Props.property.startoverWindowSeconds">startoverWindowSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `endpointSpec`<sup>Optional</sup> <a name="endpointSpec" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1Props.property.endpointSpec"></a>

```typescript
public readonly endpointSpec: MediaPakcageV1MidEndpointSpec | HlsPackageProperty | DashPackageProperty | CmafPackageProperty | MssPackageProperty[];
```

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1MidEndpointSpec">MediaPakcageV1MidEndpointSpec</a> | aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint.HlsPackageProperty | aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint.DashPackageProperty | aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint.CmafPackageProperty | aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint.MssPackageProperty[]

---

##### `startoverWindowSeconds`<sup>Optional</sup> <a name="startoverWindowSeconds" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV1Props.property.startoverWindowSeconds"></a>

```typescript
public readonly startoverWindowSeconds: number;
```

- *Type:* number

---

### MediaPakcageV2EndpointSpec <a name="MediaPakcageV2EndpointSpec" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2EndpointSpec"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2EndpointSpec.Initializer"></a>

```typescript
import { MediaPakcageV2EndpointSpec } from 'awscdk-construct-live-channel-from-mp4-file'

const mediaPakcageV2EndpointSpec: MediaPakcageV2EndpointSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2EndpointSpec.property.hlsAdMarkers">hlsAdMarkers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2EndpointSpec.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2EndpointSpec.property.omitLlHls">omitLlHls</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2EndpointSpec.property.segmentDurationSeconds">segmentDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2EndpointSpec.property.separateAudioRendition">separateAudioRendition</a></code> | <code>boolean</code> | *No description.* |

---

##### `hlsAdMarkers`<sup>Optional</sup> <a name="hlsAdMarkers" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2EndpointSpec.property.hlsAdMarkers"></a>

```typescript
public readonly hlsAdMarkers: string;
```

- *Type:* string

---

##### `manifestWindowSeconds`<sup>Optional</sup> <a name="manifestWindowSeconds" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2EndpointSpec.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

---

##### `omitLlHls`<sup>Optional</sup> <a name="omitLlHls" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2EndpointSpec.property.omitLlHls"></a>

```typescript
public readonly omitLlHls: boolean;
```

- *Type:* boolean

---

##### `segmentDurationSeconds`<sup>Optional</sup> <a name="segmentDurationSeconds" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2EndpointSpec.property.segmentDurationSeconds"></a>

```typescript
public readonly segmentDurationSeconds: number;
```

- *Type:* number

---

##### `separateAudioRendition`<sup>Optional</sup> <a name="separateAudioRendition" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2EndpointSpec.property.separateAudioRendition"></a>

```typescript
public readonly separateAudioRendition: boolean;
```

- *Type:* boolean

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
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props.property.endpointSpec">endpointSpec</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2EndpointSpec">MediaPakcageV2EndpointSpec</a> \| <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2FullSpec">MediaPackageV2FullSpec</a>[]</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props.property.startoverWindowSeconds">startoverWindowSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `channelGroupName`<sup>Optional</sup> <a name="channelGroupName" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props.property.channelGroupName"></a>

```typescript
public readonly channelGroupName: string;
```

- *Type:* string

---

##### `endpointSpec`<sup>Optional</sup> <a name="endpointSpec" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props.property.endpointSpec"></a>

```typescript
public readonly endpointSpec: MediaPakcageV2EndpointSpec | MediaPackageV2FullSpec[];
```

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2EndpointSpec">MediaPakcageV2EndpointSpec</a> | <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2FullSpec">MediaPackageV2FullSpec</a>[]

---

##### `startoverWindowSeconds`<sup>Optional</sup> <a name="startoverWindowSeconds" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageV2Props.property.startoverWindowSeconds"></a>

```typescript
public readonly startoverWindowSeconds: number;
```

- *Type:* number

---

### PackagerSpec <a name="PackagerSpec" id="awscdk-construct-live-channel-from-mp4-file.PackagerSpec"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-live-channel-from-mp4-file.PackagerSpec.Initializer"></a>

```typescript
import { PackagerSpec } from 'awscdk-construct-live-channel-from-mp4-file'

const packagerSpec: PackagerSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.PackagerSpec.property.hlsAdMarkers">hlsAdMarkers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.PackagerSpec.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.PackagerSpec.property.mediaPackageV2Settings">mediaPackageV2Settings</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2Settings">MediaPackageV2Settings</a></code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.PackagerSpec.property.segmentDurationSeconds">segmentDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.PackagerSpec.property.separateAudioRendition">separateAudioRendition</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.PackagerSpec.property.startoverWindowSeconds">startoverWindowSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `hlsAdMarkers`<sup>Optional</sup> <a name="hlsAdMarkers" id="awscdk-construct-live-channel-from-mp4-file.PackagerSpec.property.hlsAdMarkers"></a>

```typescript
public readonly hlsAdMarkers: string;
```

- *Type:* string

---

##### `manifestWindowSeconds`<sup>Optional</sup> <a name="manifestWindowSeconds" id="awscdk-construct-live-channel-from-mp4-file.PackagerSpec.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

---

##### `mediaPackageV2Settings`<sup>Optional</sup> <a name="mediaPackageV2Settings" id="awscdk-construct-live-channel-from-mp4-file.PackagerSpec.property.mediaPackageV2Settings"></a>

```typescript
public readonly mediaPackageV2Settings: MediaPackageV2Settings;
```

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageV2Settings">MediaPackageV2Settings</a>

---

##### `segmentDurationSeconds`<sup>Optional</sup> <a name="segmentDurationSeconds" id="awscdk-construct-live-channel-from-mp4-file.PackagerSpec.property.segmentDurationSeconds"></a>

```typescript
public readonly segmentDurationSeconds: number;
```

- *Type:* number

---

##### `separateAudioRendition`<sup>Optional</sup> <a name="separateAudioRendition" id="awscdk-construct-live-channel-from-mp4-file.PackagerSpec.property.separateAudioRendition"></a>

```typescript
public readonly separateAudioRendition: boolean;
```

- *Type:* boolean

---

##### `startoverWindowSeconds`<sup>Optional</sup> <a name="startoverWindowSeconds" id="awscdk-construct-live-channel-from-mp4-file.PackagerSpec.property.startoverWindowSeconds"></a>

```typescript
public readonly startoverWindowSeconds: number;
```

- *Type:* number

---

### SourceSpec <a name="SourceSpec" id="awscdk-construct-live-channel-from-mp4-file.SourceSpec"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-live-channel-from-mp4-file.SourceSpec.Initializer"></a>

```typescript
import { SourceSpec } from 'awscdk-construct-live-channel-from-mp4-file'

const sourceSpec: SourceSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.SourceSpec.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.SourceSpec.property.conversionSpec">conversionSpec</a></code> | <code>aws-cdk-lib.aws_medialive.CfnChannel.EncoderSettingsProperty</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.SourceSpec.property.conversionType">conversionType</a></code> | <code>string</code> | *No description.* |

---

##### `url`<sup>Required</sup> <a name="url" id="awscdk-construct-live-channel-from-mp4-file.SourceSpec.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `conversionSpec`<sup>Optional</sup> <a name="conversionSpec" id="awscdk-construct-live-channel-from-mp4-file.SourceSpec.property.conversionSpec"></a>

```typescript
public readonly conversionSpec: EncoderSettingsProperty;
```

- *Type:* aws-cdk-lib.aws_medialive.CfnChannel.EncoderSettingsProperty

---

##### `conversionType`<sup>Optional</sup> <a name="conversionType" id="awscdk-construct-live-channel-from-mp4-file.SourceSpec.property.conversionType"></a>

```typescript
public readonly conversionType: string;
```

- *Type:* string

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

