<?php

Route::post("add-to-cart/{id}", "CartController@add");

// main-site routes
Route::view("/", "main-site");
Route::view("/product/{id}", "main-site");
Route::view("/cart", "main-site");
Route::view("/addProduct/{type}", "main-site");
Route::view("/adminpanel", "main-site");
Route::view("/payment", "main-site");
Route::post("/add-to-cart/{id}", "MainSiteController@addToCart");

// email-builder routes
Route::view("/email-builder", "email-builder");

// courses-site routes
Route::view("/courses", "courses-site");
Route::view("/courses/page-two", "courses-site");
Route::view("/courses/page-Five", "courses-site");

// teacher-panel routes
Route::view("/teacher-panel", "teacher-panel");
Route::view("/teacher-panel/sales", "teacher-panel");

// react-dashboard routes
Route::view("/admin/react/dashboard", "react-dashboard");
Route::view("/admin/react/user", "react-dashboard");
Route::view("/admin/react/table", "react-dashboard");
Route::view("/admin/react/typography", "react-dashboard");
Route::view("/admin/react/icons", "react-dashboard");
Route::view("/admin/react/maps", "react-dashboard");
Route::view("/admin/react/notifications", "react-dashboard");
Route::view("/admin/react/upgrade-to-pro", "react-dashboard");
