@extends('category.navbar')

@section('content')

 <!-- DataTales Example -->
 <section class="section-5 pt-3 pb-3 mb-3 bg-white">
    <div class="container">
        <div class="light-font">
            <ol class="breadcrumb primary-color mb-0">
                <li class="breadcrumb-item"><a class="white-text" href="{{ route('profile') }}">Account</a></li>
                <li class="breadcrumb-item">Orders</li>
            </ol>
        </div>
    </div>
 </section>
 <section class="section-11">
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-3">
                @include()
            </div>
            <div class="col-md-9">
                <div class="card">
                    <div class="card-header">
                      <h2 class="h5 mb-0 pt-2 pb-2">Orders</h2>
                    </div>
                    <div class="card-body p-4">
                       <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Age</th>
                              </tr>
                            </thead>
                            <tbody>
                                @if ($orders->isNotEmpty())
                                @foreach ($orders as $order )

                           <tr>
                                <td><a href="order.php">{{ $order->id }}</a></td>
                                <td>{{ \Carbon\Carbon::parse($order->created_at)->format('d M, Y') }}</td>
                                <td><span class="badge bg-success">Deliverd</span></td>
                                <td>€{{ number_format($order->sub_total,2)  }}</td>
                              </tr>
                              @endforeach

                              @else
                              <tr>
                                <td colspan="3">Orders not found</td>
                              </tr>
                              @endif
                            </tbody>
                          </table>
                        </div>
                      </div>
                       </div>
                            </div>
                            <div class="mb-3">
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="Ente">
                            </div>
                               <div class="d.flex">
                                <button class="btn btn-dark">Update</button>
                               </div>
                            </div>
                          </div>
                       </div>
                    </div>
                 </div>
             </div>
        </div>
    </div>
 </section>

@push('styles')
 <link href="{{asset('backend/vendor/datatables/dataTables.bootstrap4.min.css')}}" rel="stylesheet">
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css" />
@endpush

@push('scripts')

 <!-- Page level plugins -->
 <script src="{{asset('backend/vendor/datatables/jquery.dataTables.min.js')}}"></script>
 <script src="{{asset('backend/vendor/datatables/dataTables.bootstrap4.min.js')}}"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>

 <!-- Page level custom scripts -->
 <script src="{{asset('backend/js/demo/datatables-demo.js')}}"></script>
 <script>

     $('#order-dataTable').DataTable( {
           "columnDefs":[
               {
                   "orderable":false,
                   "targets":[8]
               }
           ]
       } );

       // Sweet alert

       function deleteData(id){

       }
 </script>
 <script>
     $(document).ready(function(){
       $.ajaxSetup({
           headers: {
               'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
           }
       });
         $('.dltBtn').click(function(e){
           var form=$(this).closest('form');
             var dataID=$(this).data('id');
             // alert(dataID);
             e.preventDefault();
             swal({
                   title: "Are you sure?",
                   text: "Once deleted, you will not be able to recover this data!",
                   icon: "warning",
                   buttons: true,
                   dangerMode: true,
               })
               .then((willDelete) => {
                   if (willDelete) {
                      form.submit();
                   } else {
                       swal("Your data is safe!");
                   }
               });
         })
     })
 </script>
@endpush
