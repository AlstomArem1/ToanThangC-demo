<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryModel extends Model
{
    use HasFactory;
    protected $table = 'categories';

    public function products(){
        return $this->hasMany(ProductModel::class, 'product_category_id');//cuoi
    }
}
