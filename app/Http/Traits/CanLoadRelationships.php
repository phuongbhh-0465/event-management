<?php

namespace App\Http\Traits;

use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Database\Query\Builder as QueryBuilder;

trait CanLoadRelationships
{
    protected function loadRelationships(
        Model|QueryBuilder|EloquentBuilder|Relation $query,
        array $relations = null
    ): Model|QueryBuilder|EloquentBuilder|Relation {
        $relations = $relations ?? $this->relations ?? [];
        foreach ($relations as $relation) {
            $query->when($this->shouldLoadRelationships($relation), fn($q) => $query instanceof Model ? $query->load($relation) : $q->with($relation));
        }
        return $query;
    }

    protected function shouldLoadRelationships(string $relation): bool
    {
        $include = request()->query('include');

        $relations = array_map('trim', explode(',', $include));

        return in_array($relation, $relations);
    }
}