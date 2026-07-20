# Troublio v1.4.0 Güncelleme

1. Güncelleme paketini mevcut Troublio proje klasörüne çıkarın ve dosyaların üzerine yazın.
2. `BUILD_KONTROL.bat` ile içerik doğrulama, TypeScript kontrolü ve production build çalıştırın.
3. `GITLABA-YUKLE.bat` dosyasını çalıştırın.
4. GitLab `main` dalına push tamamlanınca Vercel otomatik deploy başlatır.
5. Vercel deploy başarılı olduktan sonra aşağıdaki adresleri kontrol edin:

```text
https://www.troublio.com/
https://www.troublio.com/search?q=ERR_CONNECTION_RESET
https://www.troublio.com/devices/web-browsers
https://www.troublio.com/devices/streaming-tv
https://www.troublio.com/issues/website-errors
https://www.troublio.com/error-codes/browser-web
https://www.troublio.com/recent
https://www.troublio.com/feed.xml
https://www.troublio.com/sitemap.xml
https://www.troublio.com/51e8da7fe9810cd2b61ee0247de7e9c73444a1f6.txt
```

6. Son olarak `INDEXNOW_GONDER.bat` çalıştırın. Bu işlem canlı sitemap içindeki URL'leri IndexNow destekleyen arama motorlarına bildirir.

## Sabit ayarlar

```text
Repo: https://gitlab.com/oguzdurak16/troublio.git
Git kullanıcı adı: oguzdurak16
Git e-posta: oguzdurak16@gmail.com
Node.js: 22.x
Paket yöneticisi: pnpm 10.13.1
GA4: G-VGX2TJ3J31
Canlı adres: https://www.troublio.com
```

## Vercel

Install Command:

```text
pnpm install --frozen-lockfile
```

Build Command:

```text
pnpm build
```

Output Directory boş/default kalmalıdır.
