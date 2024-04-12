<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AttendeeResource;
use App\Http\Traits\CanLoadRelationships;
use App\Models\Attendee;
use App\Models\Event;
use Illuminate\Http\Request;

class AttendeeController extends Controller
{

    use CanLoadRelationships;

    protected $relations = ['user'];

    public function index(Event $event)
    {
        $query = $this->loadRelationships($event->attendees());
        return AttendeeResource::collection($query->latest()->paginate());
    }


    public function store(Request $request, Event $event)
    {
        $attendee = $event->attendees()->create([
            'user_id' => 1,
        ]);

        return new AttendeeResource($this->loadRelationships($attendee));
    }


    public function show(Event $event, Attendee $attendee)
    {
        return new AttendeeResource($this->loadRelationships($attendee));
    }


    public function destroy(Event $event, Attendee $attendee)
    {
        $attendee->delete();
        return response(status: 204);
    }
}
