<?php
namespace App\Http\Controllers\API;

use App\Models\Project;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProjectController extends Controller
{
    public function index()
    {
        return Project::with(['user', 'properties', 'materials'])
            ->where('user_id', auth()->id())
            ->paginate();
    }

    public function store(ProjectRequest $request)
    {
        $project = Project::create($request->validated() + ['user_id' => auth()->id()]);
        return response()->json($project, 201);
    }

    public function show(Project $project)
    {
        $this->authorize('view', $project);
        return $project->load(['properties', 'materials']);
    }

    public function update(ProjectRequest $request, Project $project)
    {
        $this->authorize('update', $project);
        $project->update($request->validated());
        return $project;
    }

    public function destroy(Project $project)
    {
        $this->authorize('delete', $project);
        $project->delete();
        return response()->noContent();
    }
}
