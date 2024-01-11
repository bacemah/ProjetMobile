<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use App\Mail\EmailVerification;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Cache;
use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function register(Request $request)
    {
        $ad = 0;
        if ($request->isAdmin == 'Admin') {
            $ad = 1;
        } else {
            $ad = 0;
        }

        // $request->validate([
        //     'first_name'     => 'required',
        //     'last_name'     => 'required',
        //     'email'     => 'required|email',
        //     'email'     => 'required',
        // ]);
        // $user = User::create([
        //     'first_name'      => $request->first_name,
        //     'last_name'     => $request->last_name,
        //     'email'     => $request->email,
        //     'isAdmin' => $ad,
        //     'password'  => bcrypt($request->password),
        // ]);


        $user = new Client;
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->email = $request->email;
        $user->isAdmin = $ad;
        $user->password = bcrypt($request->password);
        $user->save();


        $verificationNumber = $this->generateVerificationNumber();
        Cache::put('verification_number_' . $user->id, $verificationNumber, 30 * 60);
        Mail::to($user)->send(new EmailVerification($user, $verificationNumber));

        return response()->json(['message' => 'Veuiller valider par mail la création de votre profil.', 'status' => '201', 'user' => $user], 201);
    }
    public function generateVerificationNumber()
    {
        return (rand(100000, 999999));
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreClientRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Client $client)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClientRequest $request, Client $client)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {
        //
    }
}
