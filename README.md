# Installation

```bash
$ cd backend
$ composer install
$ cp .env.example .env
$ php artisan key:generate
```

Run the server:

```bash
$ php artisan serve
```

# Build frontend code for production

In the root directory, you do:

```bash
$ npm run clean
$ npm run build
```

# URLs list

* / (main-site)
* /cart (main-site)
* /addProduct/{type} (main-site)
* /product/{id} (main-site)
* /adminpanel (main-site)
* /payment (main-site)
* /courses (courses-site)
* /courses/page-two (couses-site)
* /courses/page-Five (couses-site)
* /teacher-panel (teacher-panel)
* /teacher-panel/sales (teacher-panel)
* /admin/react/dashboard (react-dashboard)
* /admin/react/user (react-dashboard)
* /admin/react/table (react-dashboard)
* /admin/react/typography (react-dashboard)
* /admin/react/icons (react-dashboard)
* /admin/react/maps (react-dashboard)
* /admin/react/notifications (react-dashboard)
* /admin/react/upgrade-to-pro (react-dashboard)
* /admin/vue/dashboards/default (vue-dashboard)
* /admin/vue/dashboards/analytics (vue-dashboard)
* /admin/vue/dashboards/content (vue-dashboard)
* /admin/vue/dashboards/ecommerce (vue-dashboard)
* /whole/course/{id} (whole)
* /whole/course/details/{id} (whole)
* /whole/blof/{id} (whole)
* /forms (forms)
* /forms/FormTwo (forms)
* /forms/FormThree (forms)
