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
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.property.emp">emp</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackage">MediaPackage</a></code> | *No description.* |

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

##### `emp`<sup>Required</sup> <a name="emp" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4.property.emp"></a>

```typescript
public readonly emp: MediaPackage;
```

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackage">MediaPackage</a>

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


### MediaPackage <a name="MediaPackage" id="awscdk-construct-live-channel-from-mp4-file.MediaPackage"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-live-channel-from-mp4-file.MediaPackage.Initializer"></a>

```typescript
import { MediaPackage } from 'awscdk-construct-live-channel-from-mp4-file'

new MediaPackage(scope: Construct, id: string, __2: MediaPakcageProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackage.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackage.Initializer.parameter.__2">__2</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageProps">MediaPakcageProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-live-channel-from-mp4-file.MediaPackage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-live-channel-from-mp4-file.MediaPackage.Initializer.parameter.id"></a>

- *Type:* string

---

##### `__2`<sup>Required</sup> <a name="__2" id="awscdk-construct-live-channel-from-mp4-file.MediaPackage.Initializer.parameter.__2"></a>

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageProps">MediaPakcageProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackage.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-live-channel-from-mp4-file.MediaPackage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-live-channel-from-mp4-file.MediaPackage.isConstruct"></a>

```typescript
import { MediaPackage } from 'awscdk-construct-live-channel-from-mp4-file'

MediaPackage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-live-channel-from-mp4-file.MediaPackage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackage.property.channel">channel</a></code> | <code>aws-cdk-lib.aws_mediapackage.CfnChannel</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackage.property.endpoints">endpoints</a></code> | <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageEndpointsTable">MediaPackageEndpointsTable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-live-channel-from-mp4-file.MediaPackage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `channel`<sup>Required</sup> <a name="channel" id="awscdk-construct-live-channel-from-mp4-file.MediaPackage.property.channel"></a>

```typescript
public readonly channel: CfnChannel;
```

- *Type:* aws-cdk-lib.aws_mediapackage.CfnChannel

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="awscdk-construct-live-channel-from-mp4-file.MediaPackage.property.endpoints"></a>

```typescript
public readonly endpoints: MediaPackageEndpointsTable;
```

- *Type:* <a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageEndpointsTable">MediaPackageEndpointsTable</a>

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
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.segmentDurationSeconds">segmentDurationSeconds</a></code> | <code>number</code> | *No description.* |
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

##### `segmentDurationSeconds`<sup>Optional</sup> <a name="segmentDurationSeconds" id="awscdk-construct-live-channel-from-mp4-file.LiveChannelFromMp4Props.property.segmentDurationSeconds"></a>

```typescript
public readonly segmentDurationSeconds: number;
```

- *Type:* number

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
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.mediaPackageChannelId">mediaPackageChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.channelClass">channelClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.gopLengthInSeconds">gopLengthInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.timecodeBurninPrefix">timecodeBurninPrefix</a></code> | <code>string</code> | *No description.* |

---

##### `mediaPackageChannelId`<sup>Required</sup> <a name="mediaPackageChannelId" id="awscdk-construct-live-channel-from-mp4-file.MediaLiveProps.property.mediaPackageChannelId"></a>

```typescript
public readonly mediaPackageChannelId: string;
```

- *Type:* string

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

### MediaPackageEndpointsTable <a name="MediaPackageEndpointsTable" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageEndpointsTable"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageEndpointsTable.Initializer"></a>

```typescript
import { MediaPackageEndpointsTable } from 'awscdk-construct-live-channel-from-mp4-file'

const mediaPackageEndpointsTable: MediaPackageEndpointsTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageEndpointsTable.property.cmaf">cmaf</a></code> | <code>aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageEndpointsTable.property.dash">dash</a></code> | <code>aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageEndpointsTable.property.hls">hls</a></code> | <code>aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPackageEndpointsTable.property.mss">mss</a></code> | <code>aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint</code> | *No description.* |

---

##### `cmaf`<sup>Required</sup> <a name="cmaf" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageEndpointsTable.property.cmaf"></a>

```typescript
public readonly cmaf: CfnOriginEndpoint;
```

- *Type:* aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint

---

##### `dash`<sup>Required</sup> <a name="dash" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageEndpointsTable.property.dash"></a>

```typescript
public readonly dash: CfnOriginEndpoint;
```

- *Type:* aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint

---

##### `hls`<sup>Required</sup> <a name="hls" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageEndpointsTable.property.hls"></a>

```typescript
public readonly hls: CfnOriginEndpoint;
```

- *Type:* aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint

---

##### `mss`<sup>Required</sup> <a name="mss" id="awscdk-construct-live-channel-from-mp4-file.MediaPackageEndpointsTable.property.mss"></a>

```typescript
public readonly mss: CfnOriginEndpoint;
```

- *Type:* aws-cdk-lib.aws_mediapackage.CfnOriginEndpoint

---

### MediaPakcageProps <a name="MediaPakcageProps" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageProps.Initializer"></a>

```typescript
import { MediaPakcageProps } from 'awscdk-construct-live-channel-from-mp4-file'

const mediaPakcageProps: MediaPakcageProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageProps.property.hlsAdMarkers">hlsAdMarkers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageProps.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageProps.property.segmentDurationSeconds">segmentDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.MediaPakcageProps.property.startoverWindowSeconds">startoverWindowSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `hlsAdMarkers`<sup>Optional</sup> <a name="hlsAdMarkers" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageProps.property.hlsAdMarkers"></a>

```typescript
public readonly hlsAdMarkers: string;
```

- *Type:* string

---

##### `manifestWindowSeconds`<sup>Optional</sup> <a name="manifestWindowSeconds" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageProps.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

---

##### `segmentDurationSeconds`<sup>Optional</sup> <a name="segmentDurationSeconds" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageProps.property.segmentDurationSeconds"></a>

```typescript
public readonly segmentDurationSeconds: number;
```

- *Type:* number

---

##### `startoverWindowSeconds`<sup>Optional</sup> <a name="startoverWindowSeconds" id="awscdk-construct-live-channel-from-mp4-file.MediaPakcageProps.property.startoverWindowSeconds"></a>

```typescript
public readonly startoverWindowSeconds: number;
```

- *Type:* number

---



## Enums <a name="Enums" id="Enums"></a>

### EndpointType <a name="EndpointType" id="awscdk-construct-live-channel-from-mp4-file.EndpointType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.EndpointType.HLS">HLS</a></code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.EndpointType.DASH">DASH</a></code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.EndpointType.CMAF">CMAF</a></code> | *No description.* |
| <code><a href="#awscdk-construct-live-channel-from-mp4-file.EndpointType.MSS">MSS</a></code> | *No description.* |

---

##### `HLS` <a name="HLS" id="awscdk-construct-live-channel-from-mp4-file.EndpointType.HLS"></a>

---


##### `DASH` <a name="DASH" id="awscdk-construct-live-channel-from-mp4-file.EndpointType.DASH"></a>

---


##### `CMAF` <a name="CMAF" id="awscdk-construct-live-channel-from-mp4-file.EndpointType.CMAF"></a>

---


##### `MSS` <a name="MSS" id="awscdk-construct-live-channel-from-mp4-file.EndpointType.MSS"></a>

---

