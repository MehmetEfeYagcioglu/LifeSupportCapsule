# Firebase Realtime Database Kurulumu

Bu proje veriyi `lifeSupport` yolu altindan okur.

## Beklenen veri yapisi

```json
{
  "lifeSupport": {
    "gas": { "value": 67 },
    "soil": { "moisture": 58 },
    "temperature": { "value": 24.3 },
    "humidity": { "value": 51 },
    "rain": { "level": 36 },
    "light": { "level": 69 },
    "systemStatus": "ONLINE",
    "updatedAt": 1750000000000
  }
}
```

## Realtime Database kurallari

Gelistirme asamasinda test icin:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

Daha guvenli kullanim icin ileride kurallari daraltin.

## Onemli not

- Uygulama `lifeSupport` yolunda veri bulamazsa otomatik olarak ornek veriye doner.
- Firebase ayarlari `.env.local` dosyasindan okunur.
- Arduino tarafinin JSON veriyi `.../lifeSupport.json` adresine yazmasi gerekir.
