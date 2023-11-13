<?php

namespace App\Livewire;

use Livewire\Component;

class Order extends Component
{

    public $orders;
    public function render()
    {
        return view('livewire.order');
    }
}
