@extends('category.navbar')

@section('content')

<div class="continer-fluid">
    <div class="col-lg-12">
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    @livewire('order')
                   <div class="card-header">
                    <h4 style="float: left">Opder Products</h4>
                    <a href="{{ url('order.create') }}" style="float: right" class="btn btn-">
                      <i class="fa fa-plus"></i>
                      Add New Products
                    </div>
                    <form action="{{ route('orders.store') }}" method="POST"></form>
                    @csrf
                    <div class="card-body">
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card"></div>
                @livewire('order-forme')
                <div class="card-header">
                    <h4>Total <b class="total"> 0.00 </b></h4>
                </div>
                <div class="card-body">
                    <div class="btn-group">
                        
                    </div>
            </div>
        </div>
    </div>
</div>
