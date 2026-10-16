# AdMost Event Tracking (Android)

With the AdMost SDK you can track custom events in your app and view them in the AdMost dashboard.

## Usage

Start sending events after the SDK has been initialized (`AdMost.getInstance().init(...)`).

```java
import admost.sdk.base.AdMostEventManager;
import admost.sdk.model.AdMostEventData;

AdMostEventData event = new AdMostEventData();
event.EventName = "level_completed";                    // required
event.EventType = AdMostEventData.EventTypeValues.User;
event.Value     = 12;                                   // optional
event.Currency  = "USD";                                // optional

JSONObject props = new JSONObject();
props.put("level", 12);
props.put("difficulty", "hard");
event.Properties = props;                               // optional

AdMostEventManager.getInstance().trackEvent(event);
```

## Fields

| Field | Type | Description |
|---|---|---|
| `EventName` | String | Event name. **Required**, must not be empty. |
| `EventType` | String | Event type (see below). |
| `Value` | double | Numeric value (score, amount, etc.). Defaults to `0`. |
| `Currency` | String | Currency code (e.g. `"USD"`). |
| `Properties` | JSONObject | Additional properties (key-value). |

## Event Types

Use the constants in `AdMostEventData.EventTypeValues`:

| Constant | When to use |
|---|---|
| `User` | User actions (level completed, purchase, sign-up, etc.) |
| `ScreenView` | Screen views |
| `Design` | Custom design / game-flow events |
| `Source` | Earning virtual currency or resources (coins, lives, etc.) |
| `Sink` | Spending virtual currency or resources |

## Examples

**Screen view**
```java
AdMostEventData e = new AdMostEventData();
e.EventName = "home_screen";
e.EventType = AdMostEventData.EventTypeValues.ScreenView;
AdMostEventManager.getInstance().trackEvent(e);
```

**Spending virtual currency**
```java
AdMostEventData e = new AdMostEventData();
e.EventName = "coins_spent";
e.EventType = AdMostEventData.EventTypeValues.Sink;
e.Value = 50;
AdMostEventManager.getInstance().trackEvent(e);
```

**Event with properties**
```java
AdMostEventData e = new AdMostEventData();
e.EventName = "item_purchased";
e.EventType = AdMostEventData.EventTypeValues.User;
e.Value = 4.99;
e.Currency = "USD";
e.Properties = new JSONObject().put("item_id", "sword_01");
AdMostEventManager.getInstance().trackEvent(e);
```

## Tips

- Use consistent, meaningful event names (e.g. `snake_case`).
- Do not use the `session_index` key in `Properties`; the SDK adds it automatically.
- If events are not being sent, make sure the SDK has been initialized and `EventName` is set.
