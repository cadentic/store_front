<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MainSiteController extends Controller
{
    public function addToCart($id)
    {
        $id = (int)$id;
        $current = json_decode(Storage::disk('json')->get('cart.json'));
        if (is_array($current) && !in_array($id, $current)) {
            $current[] = $id;
            Storage::disk('json')->put('cart.json', json_encode($current));
        }
    }
}
