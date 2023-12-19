<?php

namespace App\Http\Controllers\Online;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Jobs\ProcessCSVData;
use Illuminate\Support\Facades\Bus;
use Illuminate\Database\Eloquent\Builder;





class searchController extends Controller
{
    public function index()
    {
        return view('category.test');
    }
    public function search(Request $request)
{
    $query = $request->input('q');

    if (!empty($query)) {
        // You can implement the search logic here, e.g., querying a database.
        // For simplicity, let's just redirect the user to a Google search with the provided query.
        return redirect()->away('https://www.google.com/search?q=' . urlencode($query));
    }

    $users = User::where('name', 'LIKE', '%' . $query . '%')
    ->simplePaginate(10);
return view('welcome', compact('users'));
    return redirect()->route('search');
}
}
