# AdMost Event Tracking (Android)

AdMost SDK ile uygulamanızdaki özel olayları (event) takip edebilir ve AdMost dashboard'unda görüntüleyebilirsiniz.

## Kullanım

SDK'yı başlattıktan sonra (`AdMost.getInstance().init(...)`) event göndermeye başlayabilirsiniz.

```java
import admost.sdk.base.AdMostEventManager;
import admost.sdk.model.AdMostEventData;

AdMostEventData event = new AdMostEventData();
event.EventName = "level_completed";                    // zorunlu
event.EventType = AdMostEventData.EventTypeValues.User;
event.Value     = 12;                                   // opsiyonel
event.Currency  = "USD";                                // opsiyonel

JSONObject props = new JSONObject();
props.put("level", 12);
props.put("difficulty", "hard");
event.Properties = props;                               // opsiyonel

AdMostEventManager.getInstance().trackEvent(event);
```

## Alanlar

| Alan | Tip | Açıklama |
|---|---|---|
| `EventName` | String | Event adı. **Zorunlu**, boş olamaz. |
| `EventType` | String | Event tipi (aşağıya bakın). |
| `Value` | double | Sayısal değer (skor, tutar vb.). Varsayılan `0`. |
| `Currency` | String | Para birimi (örn. `"USD"`). |
| `Properties` | JSONObject | Ek özellikler (anahtar-değer). |

## Event Tipleri

`AdMostEventData.EventTypeValues` içindeki sabitleri kullanın:

| Sabit | Ne zaman kullanılır? |
|---|---|
| `User` | Kullanıcı aksiyonları (seviye bitirme, satın alma, kayıt vb.) |
| `ScreenView` | Ekran görüntüleme |
| `Design` | Tasarım/oyun akışı ile ilgili özel event'ler |
| `Source` | Sanal para veya kaynak kazanımı (coin, can vb.) |
| `Sink` | Sanal para veya kaynak harcaması |

## Örnekler

**Ekran görüntüleme**
```java
AdMostEventData e = new AdMostEventData();
e.EventName = "home_screen";
e.EventType = AdMostEventData.EventTypeValues.ScreenView;
AdMostEventManager.getInstance().trackEvent(e);
```

**Sanal para harcama**
```java
AdMostEventData e = new AdMostEventData();
e.EventName = "coins_spent";
e.EventType = AdMostEventData.EventTypeValues.Sink;
e.Value = 50;
AdMostEventManager.getInstance().trackEvent(e);
```

**Özellikli event**
```java
AdMostEventData e = new AdMostEventData();
e.EventName = "item_purchased";
e.EventType = AdMostEventData.EventTypeValues.User;
e.Value = 4.99;
e.Currency = "USD";
e.Properties = new JSONObject().put("item_id", "sword_01");
AdMostEventManager.getInstance().trackEvent(e);
```

## İpuçları

- Event adlarında tutarlı ve anlamlı isimler kullanın (örn. `snake_case`).
- `Properties` içinde `session_index` anahtarını kullanmayın, SDK bu anahtarı kendisi ekler.
- Event gönderilmiyorsa SDK'nın başlatıldığından ve `EventName`'in dolu olduğundan emin olun.
