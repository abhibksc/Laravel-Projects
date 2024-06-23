<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth; // Import Auth facade

class SongsController extends Controller
{
    /**
     * Fetch all songs from the database.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $songs = DB::table('songs')->get();
        return response()->json($songs);
    }

    /**
     * Store a new song record with associated album picture.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // // Validate request
        $validatedData = $request->validate([
            'albumName' => 'required|string|max:255',
            'albumDescription' => 'required|string',
            'price' => 'required|numeric',
            'albumPic' => 'required|image', // Ensure albumPic is an image
            'type' => 'required|string|max:255',
            'albumSong' => 'required|file', // Ensure albumSong is a file
            'user_id' => 'required'

        ]);

        if ($validatedData) {


            $logoPath = $request->file('albumPic')->store('album_pics', 'public');
            $albumsongPath = $request->file('albumSong')->store('songs', 'public');




            $id = DB::table('songs')->insertGetId([
                'user_id' => $validatedData['user_id'],
                'albumName' => $validatedData['albumName'],
                'albumDescription' => $validatedData['albumDescription'],
                'price' => $validatedData['price'],
                'albumPic' => $logoPath,
                'albumSong' => $albumsongPath,
                'type' => $validatedData['type'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);

          



            if ($id) {
                // Return a JSON response with the file path (or URL if using a storage service like AWS S3)
                return response()->json([
                    'id' => $id,
                    'albumName' => $validatedData['albumName'],
                    'albumDescription' => $validatedData['albumDescription'],
                    'price' => $validatedData['price'],
                    'albumPic' => Storage::url($logoPath), // Return the URL to access the file
                    'albumSong' => Storage::url($albumsongPath),
                    'type' => $validatedData['type'],
                    'user_id' => $validatedData['user_id'],
                ], 201);
            } else {
                return response()->json(['error' => 'Files not uploaded properly'], 400);
            }


            // return response()->json(['file_path' => $filePath]);
        } else {
              return response()->json(['error' => 'Validation Issue'], 422);
        }













    }
}
