<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Facades\Storage;

class CartController extends Controller
{
    public function add($id, Request $request)
    {
        $current = json_decode(Storage::disk('json')->get('cart.json'), true);
        $current[] = $id;
        Storage::disk('json')->put('cart.json', json_encode($current));
    }
}
