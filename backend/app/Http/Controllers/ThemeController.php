<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ThemeController extends Controller
{
    /**
     * Store json in a file.
     */
    private function storeJson($fieldname, $content)
    {
        // avoid deleting theme datas
        if (!empty($content)) {
            Storage::disk('json')->put('theme-'.$fieldname.'.json', json_encode($content));
        }
    }

    public function exportTheme(Request $request)
    {
        $this->storeJson('sections', $request->input('sections'));
        $this->storeJson('colors', $request->input('colors'));
    }
}
