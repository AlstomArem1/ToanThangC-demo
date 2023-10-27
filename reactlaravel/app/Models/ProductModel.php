<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductModel extends Model
{
    protected $table = 'products';

    public function product_category(){
        return $this->belongsTo(CategoryModel::class, 'product_category_id');//dau
    }
}
