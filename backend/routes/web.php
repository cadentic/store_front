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
