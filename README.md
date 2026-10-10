# No52 sunum sitesi

No52 için dijital büyüme önerisini anlatan tek sayfalık, statik bir sitedir. Derleme veya sunucu gerekmez.

## Dosyalar

- `index.html`: sayfanın tamamı
- `style.css`: görünüm
- `script.js`: kaydırdıkça dolan şişe göstergesi

Sürüm 2: "Rakip analizi" bölümü ve zeytinyağı pazarı ilk bulguları eklendi.

## GitHub Pages ile yayınlama

1. GitHub'da yeni bir depo oluşturun, örneğin `no52-sunum`.
2. Bu klasördeki dört dosyayı depoya yükleyin.
3. Depoda **Settings > Pages** bölümüne girin.
4. **Source** olarak **Deploy from a branch**, branch olarak **main** ve klasör olarak **/ (root)** seçin.
5. Birkaç dakika sonra adres `https://<kullanıcı-adı>.github.io/no52-sunum/` olur.

## Güncelleme notları

- Ürün fiyatları 10 Ekim 2026 tarihli Trendyol sayfalarından alındı; sunumdan önce kontrol edin.
- Ürün görselleri Trendyol sunucusundan çağrılıyor. Kalıcı olması için görselleri indirip depoya ekleyin ve `index.html` içindeki `img` adreslerini değiştirin.
- Sayfa arama motorlarına kapalıdır (`noindex`). Herkese açık yayınlanacaksa bu satırı `index.html` içinden kaldırın.
- Zeytinyağı satışı başladığında ürünler bölümüne yeni satırlar ekleyin.
