<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class eventController extends Controller
{
    /**
     * Fetch all songs from the database.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $songs = DB::table('events')->get();
        return response()->json($songs);
    }

    /**
     * Store a new song record with associated album picture.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function event(Request $request)
    {
        // // Validate request
        $validatedData = $request->validate([
            'artistType' => 'required|string|max:255',
            'eventType' => 'required|string|max:255',
            'location' => 'required',
            'eventDate' => 'required',
            'budget' => 'required',
            'user_id' => 'required'
        ]);



        if ($validatedData) {
            $id = DB::table('events')->insertGetId([
                'user_id' => $validatedData['user_id'],
                'artistType' => $validatedData['artistType'],
                'eventType' => $validatedData['eventType'],
                'location' => $validatedData['location'],
                'eventDate' => $validatedData['eventDate'],
                'budget' => $validatedData['budget'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            if ($id) {
                return response()->json([
                    'user_id' => $validatedData['user_id'],
                    'artistType' => $validatedData['artistType'],
                    'eventType' => $validatedData['eventType'],
                    'location' => $validatedData['location'],
                    'eventDate' => $validatedData['eventDate'],
                    'budget' => $validatedData['budget'],
                ], 201);
            } else {
                return response()->json(['error' => ''], 400);
            }


        } else {
            return response()->json(['error' => 'Validation Issue'], 422);
        }
    }
}
