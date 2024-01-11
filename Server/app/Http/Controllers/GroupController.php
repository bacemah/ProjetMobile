<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Illuminate\Http\Request;
use App\Http\Requests\StoreGroupRequest;
use App\Http\Requests\UpdateGroupRequest;

class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $groups = Group::All();
        return response()->json($groups);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        try {
            $request->validate([
                'creator_id'    => 'required',
                'name'          => 'required',
                'description'     => '',
                'type'     => '',
                'hobby'     => '',
            ]);
            $group = Group::create([
                'creator_id'      => $request->creator_id,
                'name'      => $request->name,
                'description'      => $request->description ?? '',
                'type'      => $request->type ?? "freindly",
                'hobby'      => $request->hobby ?? "nothing",
            ]);
            $group->save();
            return response()->json($group);
        } catch (\Exception $e) {
            return response()->json($e);
        }
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGroupRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Group $group)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Group $group)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGroupRequest $request, Group $group)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Group $group)
    {
        //
    }
}
